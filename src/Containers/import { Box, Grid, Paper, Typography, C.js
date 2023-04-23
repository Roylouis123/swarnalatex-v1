import { Box, Grid, Paper, Typography, Chip, Stack, IconButton } from "@mui/material";
import img from '../assets/hero.png'
import NavBar from "../AdminPanel/NavBar";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Containers/Firebase";
import { filter, map } from "lodash";
import {UseType } from "../Containers/JsonForm";


export default function Product(props) {


   const [product, setProduct] = useState({});

   const fetchData = async () => {
      const querys = collection(db, "users");
      const querySnapshot = await getDocs(querys);
      const caall = [];
      querySnapshot.forEach((doc) => {
        caall.push(doc.data());
      });
      setProduct(caall);
      console.log(caall)
    };


    useEffect(()=>{
      fetchData()
    },[])


    const filtereddata = (data)=>{
      let datas = filter(product,(u)=> {
         return product.usetypes === data.value ;
      })
      return console.log(map(product,(u)=>u.usetypes));

      
    }


    



   return (
      <Box>
         <NavBar />
         <Grid container md={10} px={2} py={4}
            sx={{
               display: 'flex',
               flexDirection: 'row',
               justifyContent: 'center',
               margin: 'auto'
            }}>
            <Grid item md={8} py={4} pr={1}
               sx={{
                  textAlign: 'left',
                  display: 'flex',
                  flexDirection: 'column'
               }}>

               <Typography variant="h3" mb={2} sx={{ backgroundColor: 'orange', color: 'white' }}>Bistow</Typography>
               <Stack direction="row" spacing={1} my={2}>
                  <Typography variant="h5">Types : </Typography>
                                    {map(UseType,(u,i)=>(
                     <IconButton key={i}   onClick={()=>filtereddata(u)}>
                     <Chip label={u.value} variant="outlined"   />
                     </IconButton>
                  ))}
               </Stack>

               <Stack direction="row" spacing={1} my={2}>
                  <Typography variant="h5">Avalable Models : </Typography>
                  {/* <Chip label="SL-40" variant="outlined" />
                  <Chip label="SL-50" variant="outlined" /> */}
               </Stack>
               <Stack direction="row" spacing={1} my={2}>
                  <Typography variant="h5">Avalable Length : </Typography>
                  {/* <Chip label="SL-40" variant="outlined" />
                  <Chip label="SL-50" variant="outlined" /> */}
               </Stack>
               <Stack direction="row" spacing={1} my={2}>
                  <Typography variant="h5">Avalable Colors : </Typography>
                  {/* <Chip label="Blue" variant="outlined" />
                  <Chip label="Green" variant="outlined" /> */}
               </Stack>

               <Typography variant="h5">Size  </Typography><br />
               <Typography variant="p">Length : 200mm</Typography><br />
               <Typography variant="p">Width : 60mm</Typography><br />
               <Typography variant="p">Weight : 64g</Typography>


            </Grid>
            <Grid item md={4} py={4} pl={1}>
               <img style={{ width: '100%' }} src={img} alt="Hero" />
               <Box my={2}>
                  <Paper variant="outlined" >
                     <Typography variant="h5" p={1} sx={{ textAlign: 'left' }}>Description : </Typography>
                     <Typography varient="p" my={2} p={1} sx={{ textAlign: 'justify' }}>Paragraphs are medium-sized units of writing, longer than sentences, but shorter than sections, chapters, or entire works. Because they connect the “small” ideas of individual sentences to a “bigger” idea, paragraph structure is essential to any writing for organization, flow, and comprehension. </Typography>
                  </Paper>
               </Box>
            </Grid>
         </Grid>
      </Box>
   )

}