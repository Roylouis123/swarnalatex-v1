import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { storage, db } from "./Firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { deleteDoc } from "firebase/firestore";
import { deleteObject, getStorage } from "firebase/storage";
import DeleteIcon from "@mui/icons-material/Delete";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import { v4 as uuidv4 } from "uuid";

import {
  Card,
  CardMedia,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  IconButton,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { Linning, Colors, Sizes, UseType, stroke } from "./JsonForm";
import EditBestow from "./EditBestow";
import { map } from "lodash";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  input: {
    display: "none",
  },
  imageBox: {
    width: "180px",
    height: "150px",
    border: "1px solid black",
    borderRadius: "5px",
    margin: "20px 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  uploadedImage: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

function Form() {
  const classes = useStyles();
  const [ProductID, setProductID] = useState("");
  const [usetypes, setusetypes] = useState("");
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedLinning, setSelectedLinning] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedstroke, setSelectedstroke] = useState([]);
  const [onEdit, setonEdit] = useState(false);
  const [selecteddata, setselecteddata] = useState({});
  const [image, setImage] = useState(null);

  const handleNameChange = (event) => {
    setProductID(event.target.value);
  };

  const handletypeChange = (event) => {
    setusetypes(event.target.value);
  };

  const handleSizes = (event) => {
    const { value, checked } = event.target;
    setSelectedSizes((prevSelectedColors) =>
      checked
        ? [...prevSelectedColors, value]
        : prevSelectedColors.filter((color) => color !== value)
    );
  };

  const handleLinning = (event) => {
    const { value, checked } = event.target;
    setSelectedLinning((prevSelectedColors) =>
      checked
        ? [...prevSelectedColors, value]
        : prevSelectedColors.filter((color) => color !== value)
    );
  };

  const handleColors = (event) => {
    const { value, checked } = event.target;
    setSelectedColors((prevSelectedColors) =>
      checked
        ? [...prevSelectedColors, value]
        : prevSelectedColors.filter((color) => color !== value)
    );
  };

  const handlestroke = (event) => {
    const { value, checked } = event.target;
    setSelectedstroke((prevSelectedColors) =>
      checked
        ? [...prevSelectedColors, value]
        : prevSelectedColors.filter((color) => color !== value)
    );
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const Id = uuidv4();
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      !ProductID ||
      !Id ||
      !selecteddata ||
      !usetypes ||
      !selectedLinning ||
      !selectedstroke ||
      !selectedColors ||
      !selectedSizes
    )
      return;

    const cityRef = doc(db, "users", Id);
    await setDoc(cityRef, {
      Id,
      ProductID,
      ...selecteddata,
      usetypes,
      selectedSizes,
      selectedLinning,
      selectedColors,
      selectedstroke,
    });

    if (image) {
      const imageRef = ref(storage, `images/${ProductID}`);
      await uploadBytes(imageRef, image);
      const imageUrl = await getDownloadURL(imageRef);
      await setDoc(cityRef, { imageUrl }, { merge: true });
    } else {
      console.log(";;;;;;");
      await setDoc(cityRef, { imageUrl: "" }, { merge: true });
    }

    setProductID("");
    setselecteddata({});
    setSelectedLinning("");
    setSelectedstroke("");
    setSelectedColors("");
    setusetypes("");
    setSelectedSizes("");
    setImage(null);
    window.location.reload();
  };

  const [data, setData] = useState([]);

  const [editData, seteditData] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const querys = collection(db, "users");
    const querySnapshot = await getDocs(querys);
    const caall = [];
    querySnapshot.forEach((doc) => {
      caall.push(doc.data());
    });
    setData(caall);
    console.log(caall);
  };

  const storage = getStorage();
  const handleEdit = (data) => {
    seteditData(data);
    setonEdit(true);
  };

  const handleDelete = async (product) => {
    const cityRef = doc(db, "users", product.Id);
    await deleteDoc(cityRef);
    const imageRef = ref(storage, `images/${product.ProductID}`);
    await deleteObject(imageRef);
    window.location.reload();
  };

  return (
    <Grid container>
      <Grid xs={1}></Grid>
      <Grid item xs={6} p={4} border="1px solid grey" mt={1}>
        {onEdit === true ? (
          <>
            <EditBestow editData={editData} />
          </>
        ) : (
          <>
            <form className={classes.form} onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid
                  item
                  alignItems="center"
                  display="flex"
                  justifyContent="space-between"
                  gap={2}
                  xs={12}
                >
                  <Grid item xs={7}>
                    <Grid item>
                      <TextField
                        label="Product Id"
                        value={ProductID}
                        onChange={handleNameChange}
                        required
                      />
                    </Grid>
                    <Grid item mt={3}>
                      <FormControl component="fieldset">
                        <FormLabel component="legend">Sizes</FormLabel>
                        <FormGroup row>
                          {Sizes.map(({ label, value }) => (
                            <FormControlLabel
                              key={value}
                              control={
                                <Checkbox
                                  name="Sizes"
                                  value={value}
                                  checked={selectedSizes.includes(value)}
                                  onChange={handleSizes}
                                />
                              }
                              label={label}
                            />
                          ))}
                        </FormGroup>
                      </FormControl>
                    </Grid>
                  </Grid>

                  <Grid item xs={4}>
                    <input
                      accept="image/*"
                      className={classes.input}
                      id="upload-image"
                      type="file"
                      onChange={handleImageChange}
                    />
                    <label htmlFor="upload-image">
                      <Box className={classes.imageBox}>
                        {image ? (
                          <img
                            src={URL.createObjectURL(image)}
                            alt="Uploaded"
                            className={classes.uploadedImage}
                          />
                        ) : (
                          "Upload Image"
                        )}
                      </Box>
                    </label>
                  </Grid>
                </Grid>

                <Grid item xs={12}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Type</FormLabel>
                    <RadioGroup
                      value={usetypes}
                      onChange={handletypeChange}
                      row
                    >
                      {UseType.map(({ value, label }) => (
                        <FormControlLabel
                          key={value}
                          value={value}
                          control={<Radio />}
                          label={label}
                        />
                      ))}
                    </RadioGroup>
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Linning</FormLabel>
                    <FormGroup row>
                      {Linning.map(({ label, value }) => (
                        <FormControlLabel
                          key={value}
                          control={
                            <Checkbox
                              name="Linning"
                              value={label}
                              checked={selectedLinning.includes(label)}
                              onChange={handleLinning}
                            />
                          }
                          label={label}
                        />
                      ))}
                    </FormGroup>
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Colors</FormLabel>
                    <FormGroup row>
                      {Colors.map(({ label, value }) => (
                        <FormControlLabel
                          key={value}
                          control={
                            <Checkbox
                              name="Colors"
                              value={value}
                              checked={selectedColors.includes(value)}
                              onChange={handleColors}
                              style={{ backgroundColor: { label } }}
                            />
                          }
                          label={label}
                        />
                      ))}
                    </FormGroup>
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">stroke</FormLabel>
                    <FormGroup row>
                      {stroke.map(({ label, value }) => (
                        <FormControlLabel
                          key={value}
                          control={
                            <Checkbox
                              name="stroke"
                              value={value}
                              checked={selectedstroke.includes(value)}
                              onChange={handlestroke}
                            />
                          }
                          label={label}
                        />
                      ))}
                    </FormGroup>
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    label="features"
                    variant="outlined"
                    value={selecteddata.features || ""}
                    onChange={(e) =>
                      setselecteddata({
                        ...selecteddata,
                        features: e.target.value,
                      })
                    }
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    id="outlined-multiline-static"
                    multiline
                    rows={4}
                    label="description"
                    variant="outlined"
                    value={selecteddata.description || ""}
                    onChange={(e) =>
                      setselecteddata({
                        ...selecteddata,
                        description: e.target.value,
                      })
                    }
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    id="outlined-multiline-static"
                    multiline
                    rows={4}
                    label="uses"
                    variant="outlined"
                    value={selecteddata.uses || ""}
                    onChange={(e) =>
                      setselecteddata({
                        ...selecteddata,
                        uses: e.target.value,
                      })
                    }
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button variant="contained" color="primary" type="submit">
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </>
        )}
      </Grid>

      <Grid item xs={4.5}>
        <Box>
          {data.map((u, i) => (
            <Card
              sx={{
                display: "flex",
                margin: "10px",
                height: 180,
                marginBottom: 15,
              }}
              key={i}
            >
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={u.imageUrl}
                alt={`image`}
              />

              <Box
                ml={1}
                sx={{ display: "flex", flexDirection: "column" }}
                width="100%"
              >
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography fontSize={15} fontWeight={600}>
                    Product ID:{u.ProductID}
                  </Typography>

                  <Grid
                    display="flex"
                    alignItems="center"
                    justifyContent="end"
                    gap={2}
                  >
                    <IconButton onClick={() => handleEdit(u)}>
                      <DriveFileRenameOutlineIcon
                        sx={{ height: 34, width: 34 }}
                      />
                    </IconButton>

                    <IconButton onClick={() => handleDelete(u)}>
                      <DeleteIcon sx={{ height: 34, width: 34 }} />
                    </IconButton>
                  </Grid>
                </Box>

                <Grid item xs={12}>
                  <Box>
                    <Grid container spacing={0.5} alignItems="center">
                      <Typography mt fontWeight={600}>
                        Colors
                      </Typography>
                      {map(u.selectedColors, (o, i) => (
                        <Grid item xs="auto" key={i}>
                          <Typography
                            bgcolor={o}
                            borderRadius={5}
                            mt={0.5}
                            fontSize={10}
                            p={0.7}
                            mr={0.7}
                            color="white"
                          >
                            {o}
                          </Typography>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box>
                    <Grid container spacing={0.5} alignItems="center">
                      <Typography mt fontWeight={600}>
                        Usetypes
                      </Typography>

                      <Grid item xs="auto">
                        <Typography>{u.usetypes}</Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>

                <Grid item>
                  <Typography display="inline">Description</Typography>:
                  <Typography display="inline">{u.description}</Typography>
                </Grid>
              </Box>
            </Card>
          ))}
        </Box>
      </Grid>
      <Grid xs={0.5}></Grid>
    </Grid>
  );
}

export default Form;
