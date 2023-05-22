import {
  Box,
  Grid,
  Typography,
  Chip,
  Stack,
  Button,
  Modal,
  Divider,
} from "@mui/material";
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../Containers/Firebase";
import { map, filter } from "lodash";
import Checkout from "../CheckoutForm/Checkout";
import heroImg from "../../assets/hero.png";

export default function Diamond() {
  const [product, setProduct] = useState([]);
  const [usetypes, setusetypes] = useState("");
  const [selectedSizes, setSelectedSizes] = useState("");
  const [selectedColors, setSelectedColors] = useState("");
  const [selectedstroke, setSelectedstroke] = useState([]);
  const [selectedLinnings, setSelectedLinnings] = useState("");
  const [Alldata, setAlldata] = useState({});
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

      const filterboy = filter(caall, (u) => u.type === "Diamond");

      const formattedData = map(filterboy, (item) => {
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
    setSelectedProductID(data);

    const filteredProducts = filter(product, (p) => p.Id === data);
    setSelectedProductName(filteredProducts);
    setSelectedColors("");
    setSelectedLinnings("");
    setSelectedSizes([]);
    setSelectedstroke("");
    setusetypes("");
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
      <Grid
        container
        md={12}
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
          xs={12}
          md={6}
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
            mb={4}
            sx={{ backgroundColor: "orange", color: "white" }}
          >
            Diamond
          </Typography>
          <Stack direction="row" spacing={1} my={1} alignItems="center">
            <Typography variant="p"
              sx={{ color: "grey", width: '4rem' }}> Types : </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
              {map(product, (u, i) => (
                <Box
                  key={i}
                  onClick={() => {
                    handleClick(u.Id);
                    setSelectedProductID(u.ProductID);
                  }}
                >
                  <Chip
                    sx={{ cursor: "pointer", borderColor: "rgb(0,0,0,0.87)", }}
                    label={u.ProductID}
                    variant="outlined"
                  />
                </Box>
              ))}
            </Box>
          </Stack>
          <Divider />

          <Stack direction="row" spacing={1} my={1} alignItems="center">
            <Typography variant="p"
              sx={{ color: "grey", width: '4rem' }}>  Models : </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
              {map(selectedProductName, (u, i) => (
                <Box key={i}>
                  <Chip
                    sx={{
                      borderColor: "rgb(0,0,0,0.87)",
                      cursor: "pointer",
                      backgroundColor: "orange",
                    }}
                    label={u.usetypes}
                    variant="outlined"
                  />
                </Box>
              ))}
            </Box>
          </Stack>
          <Divider />

          <Stack direction="row" spacing={1} my={1} alignItems="center">
            <Typography variant="p"
              sx={{ color: "grey", width: '4rem' }}>  Sizes : </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
              {map(selectedProductName, (o, i) =>
                map(o.selectedSizes, (u) => (
                  <Box
                    key={i}
                    item
                    xs="auto"
                    onClick={() => {
                      handleSizeClick(u.Size);
                      setusetypes(o.usetypes);
                    }}
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
            </Box>
          </Stack>
          <Divider />

          <Stack direction="row" spacing={1} my={1} alignItems="center">
            <Typography variant="p"
              sx={{ color: "grey", width: '4rem' }}>  Linning : </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
              {map(selectedProductName, (o, i) =>
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
            </Box>
          </Stack>
          <Divider />

          <Stack direction="row" spacing={1} my={1} alignItems="center">
            <Typography variant="p"
              sx={{ color: "grey", width: '4rem' }}>  Colors : </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
              {map(selectedProductName, (o, i) =>
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
            </Box>
          </Stack>
          <Divider />

          <Stack direction="row" spacing={1} my={1} alignItems="center">
            <Typography variant="p"
              sx={{ color: "grey", width: '4rem' }}>  Stroke : </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
              {map(selectedProductName, (o, i) =>
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
            </Box>
          </Stack>
          <Divider />

          <MyComponent Alldata={Alldata} />
        </Grid>
        <Grid
          item
          md={2}
          py={4}
          pr={1}
          sx={{
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <img style={{ width: "100%" }} src={heroImg} alt="Hero" />
        </Grid>
      </Grid>
    </Box>
  );
}

const MyComponent = ({ Alldata }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {Alldata?.Color &&
        Alldata.Linning &&
        Alldata.ProductID &&
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
      ) : (
        <></>
      )}
    </>
  );
};
