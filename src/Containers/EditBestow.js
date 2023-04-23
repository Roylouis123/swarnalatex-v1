import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { storage, db } from "./Firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Linning, Colors, Sizes, UseType, stroke } from "./JsonForm";
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

function EditBestow(props) {
  const EditData = props.editData;

  const classes = useStyles();
  const [ProductID, setProductID] = useState(EditData.ProductID);

  const [usetypes, setusetypes] = useState(EditData.usetypes);
  const [selectedSizes, setSelectedSizes] = useState(
    map(EditData.selectedSizes)
  );
  const [selectedLinning, setSelectedLinning] = useState(
    map(EditData.selectedLinning)
  );
  const [selectedColors, setSelectedColors] = useState(
    map(EditData.selectedColors)
  );
  const [selectedstroke, setSelectedstroke] = useState(
    map(EditData.selectedstroke)
  );
  const [selecteddata, setselecteddata] = useState(EditData);
  const [image, setImage] = useState(null);
  const [tempimage, settempimage] = useState(EditData.imageUrl);

  const Id = EditData.Id;

  const handleNameChange = (event) => {
    setProductID(event.target.value);
  };

  const handleGenderChange = (event) => {
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
    settempimage(URL.createObjectURL(event.target.files[0]));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const cityRef = doc(db, "users", Id);
    await setDoc(
      cityRef,
      {
        ...selecteddata,
        Id,
        ProductID,
        usetypes,
        selectedSizes,
        selectedLinning,
        selectedColors,
        selectedstroke,
      },
      { merge: true }
    );

    if (image) {
      const imageRef = ref(storage, `images/${ProductID}`);
      await uploadBytes(imageRef, image);
      const imageUrl = await getDownloadURL(imageRef);
      await setDoc(cityRef, { imageUrl }, { merge: true });
    }
    setProductID("");
    setselecteddata({});
    setSelectedLinning([]);
    setSelectedstroke([]);
    setSelectedColors([]);
    setusetypes("");
    setSelectedSizes([]);
    setImage(null);
    settempimage(null);

    window.location.reload();
  };

  return (
    <form className={classes.form}>
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
                {tempimage ? (
                  <img
                    src={tempimage}
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
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup value={usetypes} onChange={handleGenderChange} row>
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
                      value={value}
                      checked={selectedLinning.includes(value)}
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
            value={selecteddata.description}
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
            value={selecteddata.uses}
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
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Update
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default EditBestow;
