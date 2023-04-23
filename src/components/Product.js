import { Box, Grid, Typography, Chip, Stack, IconButton } from "@mui/material";
import NavBar from "../AdminPanel/NavBar";
import { useEffect, useState } from "react";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../Containers/Firebase";
import { map, filter } from "lodash";

const UseType = [
   { value: "Industrial", label: "Industrial" },
   { value: "Household", label: "Household" },
   { value: "Industrial/Household", label: "Industrial/Household" },
];

export default function Product(props) {
   const [product, setProduct] = useState([]);
   const [usetypes, setusetypes] = useState("");
   const [selecteddata, setselecteddata] = useState([]);
   const [selectedSizes, setSelectedSizes] = useState([]);
   const [selectedColors, setSelectedColors] = useState([]);
   const [selectedstroke, setSelectedstroke] = useState([]);
   const [selectedLinnings, setSelectedLinnings] = useState([]);
   const [Alldata, setAlldata] = useState()
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
      })
   }, [selectedProductName, usetypes, selectedSizes, selectedColors, selectedstroke, selectedLinnings])



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


      })
   };

   useEffect(() => {
      fetchData();
   }, []);

   const handleClick = (data) => {
      setusetypes(data.value);

      const filteredProducts = filter(product, (p) => p.usetypes === data.value);
      setSelectedProductName(filteredProducts);
      setselecteddata([]);
   };



   const handleClick1 = (data) => {
      setSelectedProductID(data);
      const filteredProductID = filter(selectedProductName, (p) => p.ProductID === data);
      setselecteddata(filteredProductID);

   };



   function handleSizeClick(size) {
      if (!selectedSizes.includes(size)) {
         setSelectedSizes([...selectedSizes, size]);
      } else {
         setSelectedSizes(selectedSizes.filter((s) => s !== size));
      }
   }

   function handleLinningClick(Linning) {
      if (!selectedLinnings.includes(Linning)) {
         setSelectedLinnings([...selectedLinnings, Linning]);
      } else {
         setSelectedLinnings(selectedLinnings.filter((s) => s !== Linning));
      }
   }

   function handleColorsClick(Colors) {
      if (!selectedColors.includes(Colors)) {
         setSelectedColors([...selectedColors, Colors]);
      } else {
         setSelectedColors(selectedColors.filter((s) => s !== Colors));
      }
   }

   function handlestrokeClick(Stroke) {
      if (!selectedstroke.includes(Stroke)) {
         setSelectedstroke([...selectedstroke, Stroke]);
      } else {
         setSelectedstroke(selectedstroke.filter((s) => s !== Stroke));
      }
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
                     <IconButton key={i} onClick={() => handleClick(u)}>
                        <Chip label={u.value} variant="outlined" />
                     </IconButton>
                  ))}
               </Stack>

               <Stack direction="row" spacing={1} my={2} alignItems="center">
                  <Typography variant="h5">Available Models : </Typography>
                  {map(selectedProductName, (u, i) => (
                     <IconButton key={i} onClick={() => handleClick1(u.ProductID)}>
                        <Chip label={u.ProductID} variant="outlined" />
                     </IconButton>
                  ))}
               </Stack>

               <Stack direction="row" spacing={1} my={2} alignItems="center">
                  <Typography variant="h5">Available Sizes : </Typography>
                  {map(selecteddata, (o, i) =>
                     map(o.selectedSizes, (u) => (
                        <IconButton
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
                              }}
                           />
                        </IconButton>
                     ))
                  )}
               </Stack>

               <Stack direction="row" spacing={1} my={2} alignItems="center">
                  <Typography variant="h5">Available Linning : </Typography>
                  {map(selecteddata, (o, i) => (
                     map(o.selectedLinning, (u) => (
                        <IconButton item xs="auto" onClick={() => handleLinningClick(u.Linning)}>
                           <Chip
                              key={i}
                              label={u.Linning}
                              variant="outlined"
                              selected={selectedLinnings.includes(u.Linning)}
                              sx={{
                                 backgroundColor: selectedLinnings.includes(u.Linning) ? "orange" : "white",
                                 borderColor: "rgb(0,0,0,0.87)",
                              }}
                           />
                        </IconButton>
                     ))
                  ))}
               </Stack>

               <Stack direction="row" spacing={1} my={2} alignItems="center">
                  <Typography variant="h5">Available Colors : </Typography>
                  {map(selecteddata, (o, i) => (
                     map(o.selectedColors, (u) => (
                        <IconButton item xs="auto" onClick={() => handleColorsClick(u.Colors)}>
                           <Chip
                              key={i}
                              label={u.Colors}
                              variant="outlined"
                              selected={selectedColors.includes(u.Colors)}
                              sx={{
                                 backgroundColor: selectedColors.includes(u.Colors) ? "orange" : "white",
                                 borderColor: "rgb(0,0,0,0.87)",
                              }}
                           />
                        </IconButton>
                     ))
                  ))}
               </Stack>

               <Stack direction="row" spacing={1} my={2} alignItems="center">
                  <Typography variant="h5">Available Stroke : </Typography>
                  {map(selecteddata, (o, i) => (
                     map(o.selectedstroke, (u) => (
                        <IconButton item xs="auto" onClick={() => handlestrokeClick(u.Stroke)}>
                           <Chip
                              key={i}
                              label={u.Stroke}
                              variant="outlined"
                              selected={selectedstroke.includes(u.Stroke)}
                              sx={{
                                 backgroundColor: selectedstroke.includes(u.Stroke) ? "orange" : "white",
                                 borderColor: "rgb(0,0,0,0.87)",
                              }}
                           />
                        </IconButton>
                     ))
                  ))}
               </Stack>


            </Grid>
         </Grid>
      </Box>
   );
}