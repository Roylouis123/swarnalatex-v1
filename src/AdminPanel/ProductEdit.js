import { Box, Grid, TextField, Chip,Divider, Checkbox , Typography,} from "@mui/material";
import { Tab, Tabs } from '@mui/material';
import  ProductTabs from  './ProductTabs'
import { useState } from "react";
import { renderMatches } from "react-router-dom";
import img from './hero.png'
export default function ProductEdit () {
//     // const finalColor = {
//     //     orange: '',
//     //     yellow: '',
//     //     blue: '',
//     //     red: renderMatches,
//     //     pink: '',
//     //     green: '',
//     //     white: '',
//     //};

    const [productId ,setproductId] = useState()  
    // const [color,setColor] = useState([{
    //   red: ''
    // }])
  
    const [houseHold,setHouseHold] = useState();
    const [industrial,setIndustrial] = useState();

    const [orange,setOrange] = useState()
    const [yellow,setYellow] = useState()
    const [blue,setBlue] = useState();
    const [red,setRed] = useState()
    console.log(red)
    const [pink,setPink] = useState();
    const [green,setgreen] = useState();
    const [black,setBlack] = useState();
    const [white,setWhite] = useState();
   
    const [unLined,setUnLined] = useState();
    const [flockLined,setFlockLined] = useState();
    const [whiteLined,setWhiteLined] = useState();
    const [blueLined,setBlueLined] = useState();

    const [powerd,setPowerd] = useState();
    const [powderFull,setPowerFull] = useState();
 
    const [length,setLength] = useState()
    const [width,setWidth] = useState()
    const [weight,setWeight] = useState()  
    const [description, setDescription]  = useState()
    const [uses,setUses] = useState()
    const [features,setFeatures] = useState()
    console.log("count")

    return (
        <Box 
         sx={{display: 'flex',
         justifyContent: 'space-between'}}>
           <Grid container  xs={4}>

             <Grid item xs={12} spacing={1} py={4} 
                sx={{boxShadow: 'rgba (50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
                     display: 'flex', flexDirection: 'column' }}>

               <TextField label="Product Id" type="text" value={productId} onChange={(e)=>{setproductId(e.target.value)}}/>              
               
               <Box m={4} textAlign="left">
                <Typography variant="h5">Use Type</Typography>              
                <Checkbox checked={industrial} onChange={() => {setIndustrial(!industrial)}}/> <label>Industrial</label>   
                <Checkbox checked={houseHold} onChange={() => {setHouseHold(!houseHold)}}/> <label>House Hold</label><br/>             
              </Box>

              <Box m={4} textAlign="left">
                <Typography variant="h5">Linning</Typography>           
                <Checkbox checked={unLined} onChange={() => {setUnLined(!unLined)}}/> <label>UnLined</label>   
                <Checkbox checked={whiteLined} onChange={() => {setWhiteLined(!whiteLined)}}/> <label>White Lined</label>
                <Checkbox checked={blueLined} onChange={() => {setBlueLined(!blueLined)}}/> <label>Blue Lined</label>              
                <Checkbox checked={flockLined} onChange={() => {setFlockLined(!flockLined)}}/> <label>Flock Lined</label>           
              </Box>

              <Box m={4} textAlign="left">
                <Typography variant="h5">Stroke</Typography>         
                <Checkbox checked={powerd} onChange={() => {setPowerd(!powerd)}}/> <label>Powderd</label>   
                <Checkbox checked={powderFull} onChange={() => {setPowerFull(!powderFull)}}/> <label>powder full</label>
              </Box>
              
              <Box m={4} textAlign="left">
                <Typography variant="h5">Colors</Typography>              
                <Checkbox checked={red} onChange={()=>{setRed(!red)}}/> <label>Red</label>   
                
                <Checkbox checked={yellow} onChange={()=>{setYellow(!yellow) }}/> <label>Yellow</label>
                <Checkbox checked={blue} onChange={()=>{setBlue(!blue) }}/> <label>Blue</label>   <br/>
                <Checkbox checked={orange} onChange={()=>{setOrange(!orange) }}/> <label>Orange</label> 
                <Checkbox checked={pink} onChange={()=>{setPink(!pink) }}/> <label>Pink</label> 
                <Checkbox checked={green} onChange={()=>{setgreen(!green) }}/> <label>Green</label> <br/>   
                <Checkbox checked={black} onChange={()=>{setBlack(!black) }}/> <label>Black</label> 
                <Checkbox checked={white} onChange={()=>{setWhite(!white) }}/> <label>White</label> 
              </Box>
              <TextField label="Length" type="text" value={length} onChange={(e)=>{setLength(e.target.value)}}/>  
                <br/>
                <TextField label="Width" type="text" value={width} onChange={(e)=>{setWidth(e.target.value)}}/>  
                <br/>
                <TextField label="weight" multiline type="text" value={weight} onChange={(e)=>{setWeight(e.target.value)}}/>  
                <br/>
                <TextField label="Description" type="text" value={description}  multiline rows={4} onChange={(e)=>{setDescription(e.target.value)}}/> 
                <br/>
                <TextField label="Uses " type="text" value={uses}  multiline rows={4} onChange={(e)=>{setUses(e.target.value)}}/>  
                <br/>
                <TextField label="Features" type="text" value={features}  multiline rows={4} onChange={(e)=>{setFeatures(e.target.value)}}/>  
              </Grid>
            </Grid>
            
            <Grid container  md={10} xs={8} >                                
              <Grid item md={7} p={2}>               
                <Box sx={{ width: '100%', typography: 'body1' }}>   
                 <Typography variant="h2">Bestow</Typography>
                 <Box>
                        <Typography sx={{textAlign: 'left'}} variant="p">Use : </Typography>
                         <Divider/>
                        <Typography variant="p">Linning :</Typography>
                        <Divider/>
                        <Typography variant="p">Stroke : </Typography>
                        <Divider/>
                        <Typography variant="p">Linning : </Typography>
                        <Divider/>
                        <Typography variant="p">Colors : </Typography>
                        <Divider/>
                        <Typography variant="p">Size : </Typography>
                        <Divider/>
                        <Typography variant="p">Length : </Typography>
                        <Divider/>
                        <Typography variant="p">Width :</Typography>
                        <Divider/>
                        <Typography variant="p">weight : </Typography>
                        <Divider/>
                        <Typography variant="p">Description</Typography>
                        <Divider/>
                        <Typography variant="p">Features</Typography>
                        <Divider/>
                        <Typography variant="p">Uses</Typography>
                        <Divider/>
                    </Box>
                </Box>     
             </Grid>       
             <Grid item md={7} p={2}> 
              <Box sx={{heigth:'10rem'}}>
               <img  sx={{heigth: '100%'}} src={{img}} />
              </Box>  
             </Grid>       
         </Grid>            
        </Box>
    )
} 