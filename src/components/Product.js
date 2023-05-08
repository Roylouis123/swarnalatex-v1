import {
  Box,
  Grid,
  Typography,
  Chip,
  Stack,
  Button,
  Modal,
} from "@mui/material";
import NavBar from "../AdminPanel/NavBar";
import { useEffect, useState } from "react";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../Containers/Firebase";
import { map, filter } from "lodash";
import Checkout from "./CheckoutForm/Checkout";
import { UseType } from "../Containers/JsonForm";

export default function Product(props) {
  const [product, setProduct] = useState([]);
  const [usetypes, setusetypes] = useState("");
  const [selecteddata, setselecteddata] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedstroke, setSelectedstroke] = useState([]);
  const [selectedLinnings, setSelectedLinnings] = useState([]);
  const [Alldata, setAlldata] = useState();
  const [selectedProductID, setSelectedProductID] = useState("");
  const [selectedProductName, setSelectedProductName] = useState([]);

  useEffect(() => {
    setAlldata({
      ProductID: selectedProductID,
      usetypes: usetypes,
      Size: selectedSizes,
      Color: selectedColors,
      Stroke: selectedstroke,
      Linning: selectedLinnings,
    });
  }, [
    selectedProductName,
    usetypes,
    selectedSizes,
    selectedColors,
    selectedstroke,
    selectedLinnings,
  ]);

  const fetchData = () => {
    const querys = collection(db, "users");
    onSnapshot(querys, (querySnapshot) => {
      const caall = [];
      querySnapshot.forEach((doc) => {
        caall.push(doc.data());
      });
      const formattedData = map(caall, (item) => {
        const formattedLinning = map(item.selectedLinning, (Linning) => ({
          Linning: Linning,
        }));
        const formattedSizes = map(item.selectedSizes, (Size) => ({
          Size: Size,
        }));
        const formattedColors = map(item.selectedColors, (Colors) => ({
          Colors: Colors,
        }));
        const formattedstroke = map(item.selectedstroke, (Stroke) => ({
          Stroke: Stroke,
        }));
        return {
          ...item,
          selectedLinning: formattedLinning,
          selectedSizes: formattedSizes,
          selectedColors: formattedColors,
          selectedstroke: formattedstroke,
        };
      });

      setProduct(formattedData);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = (data) => {
    setusetypes(data.value);

    const filteredProducts = filter(product, (p) => p.usetypes === data.value);
    setSelectedProductName(filteredProducts);
    setselecteddata([]);
    setSelectedSizes("");
    setSelectedColors("");
    setSelectedstroke("");
    setSelectedLinnings("");
  };

  const handleClick1 = (data) => {
    setSelectedProductID(data);
    const filteredProductID = filter(
      selectedProductName,
      (p) => p.ProductID === data
    );
    setselecteddata(filteredProductID);
    setSelectedSizes("");
    setSelectedColors("");
    setSelectedstroke("");
    setSelectedLinnings("");
  };

  function handleSizeClick(size) {
    // Check if the clicked size is already selected
    if (selectedSizes.includes(size)) {
      // If it is, remove it from the list of selected sizes
      setSelectedSizes(selectedSizes.filter((s) => s !== size));
    } else {
      // If it is not, update the list of selected sizes with the clicked size
      setSelectedSizes([size]);
    }
  }

  function handleLinningClick(Linning) {
    setSelectedLinnings(Linning);
  }

  function handleColorsClick(Colors) {
    setSelectedColors(Colors);
  }

  function handlestrokeClick(Stroke) {
    setSelectedstroke(Stroke);
  }

  return (
    <Box>
      <NavBar />
      <Grid
        container
        md={10}
        px={2}
        py={4}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          margin: "auto",
        }}
      >
        <Grid
          item
          md={8}
          py={4}
          pr={1}
          sx={{
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h3"
            mb={2}
            sx={{ backgroundColor: "orange", color: "white" }}
          >
            Bistow
          </Typography>
          <Stack direction="row" spacing={1} my={2} alignItems="center">
            <Typography variant="h5">Types : </Typography>
            {map(UseType, (u, i) => (
              <Box key={i} onClick={() => handleClick(u)}>
                <Chip
                  sx={{ cursor: "pointer" }}
                  label={u.value}
                  variant="outlined"
                />
              </Box>
            ))}
          </Stack>

          <Stack direction="row" spacing={1} my={2} alignItems="center">
            <Typography variant="h5">Available Models : </Typography>
            {map(selectedProductName, (u, i) => (
              <Box key={i} onClick={() => handleClick1(u.ProductID)}>
                <Chip
                  sx={{ cursor: "pointer" }}
                  label={u.ProductID}
                  variant="outlined"
                />
              </Box>
            ))}
          </Stack>

          <Stack direction="row" spacing={1} my={2} alignItems="center">
            <Typography variant="h5">Available Sizes : </Typography>
            {map(selecteddata, (o, i) =>
              map(o.selectedSizes, (u) => (
                <Box
                  key={i}
                  item
                  xs="auto"
                  onClick={() => handleSizeClick(u.Size)}
                >
                  <Chip
                    label={u.Size}
                    variant="outlined"
                    selected={selectedSizes.includes(u.Size)}
                    sx={{
                      backgroundColor: selectedSizes.includes(u.Size)
                        ? "orange"
                        : "white",
                      borderColor: "rgb(0,0,0,0.87)",
                      cursor: "pointer",
                    }}
                  />
                </Box>
              ))
            )}
          </Stack>

          <Stack direction="row" spacing={1} my={2} alignItems="center">
            <Typography variant="h5">Available Linning : </Typography>
            {map(selecteddata, (o, i) =>
              map(o.selectedLinning, (u) => (
                <Box
                  item
                  xs="auto"
                  onClick={() => handleLinningClick(u.Linning)}
                >
                  <Chip
                    key={i}
                    label={u.Linning}
                    variant="outlined"
                    selected={selectedLinnings.includes(u.Linning)}
                    sx={{
                      backgroundColor: selectedLinnings.includes(u.Linning)
                        ? "orange"
                        : "white",
                      borderColor: "rgb(0,0,0,0.87)",
                      cursor: "pointer",
                    }}
                  />
                </Box>
              ))
            )}
          </Stack>

          <Stack direction="row" spacing={1} my={2} alignItems="center">
            <Typography variant="h5">Available Colors : </Typography>
            {map(selecteddata, (o, i) =>
              map(o.selectedColors, (u) => (
                <Box item xs="auto" onClick={() => handleColorsClick(u.Colors)}>
                  <Chip
                    key={i}
                    label={u.Colors}
                    variant="outlined"
                    selected={selectedColors.includes(u.Colors)}
                    sx={{
                      backgroundColor: selectedColors.includes(u.Colors)
                        ? "orange"
                        : "white",
                      borderColor: "rgb(0,0,0,0.87)",
                      cursor: "pointer",
                    }}
                  />
                </Box>
              ))
            )}
          </Stack>

          <Stack direction="row" spacing={1} my={2} alignItems="center">
            <Typography variant="h5">Available Stroke : </Typography>
            {map(selecteddata, (o, i) =>
              map(o.selectedstroke, (u) => (
                <Box item xs="auto" onClick={() => handlestrokeClick(u.Stroke)}>
                  <Chip
                    key={i}
                    label={u.Stroke}
                    variant="outlined"
                    selected={selectedstroke.includes(u.Stroke)}
                    sx={{
                      backgroundColor: selectedstroke.includes(u.Stroke)
                        ? "orange"
                        : "white",
                      borderColor: "rgb(0,0,0,0.87)",
                      cursor: "pointer",
                    }}
                  />
                </Box>
              ))
            )}
          </Stack>

          <MyComponent Alldata={Alldata} />
        </Grid>
      </Grid>
    </Box>
  );
}

const MyComponent = ({ Alldata }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.log(Alldata, "///////");

  return (
    <>
      {Alldata?.Color &&
      Alldata.Linning &&
      Alldata.ProductID &&
      Alldata.Size &&
      Alldata.Stroke &&
      Alldata.usetypes ? (
        <Box>
          <Button
            variant="contained"
            sx={{ width: "40%" }}
            onClick={handleOpen}
          >
            Checkout
          </Button>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Checkout />
          </Modal>
        </Box>
      ) : null}
    </>
  );
};
