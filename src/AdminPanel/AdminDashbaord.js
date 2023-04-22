import { Box, Button, Grid, Typography, Paper } from "@mui/material"
import ProductEdit from './ProductEdit'
import './App.css'
export default function AdminDashbaord () {
    
    return (
      <div className="App">
        <Box>
          <Paper>
           <Grid container  p={2}>
            <Grid item xs={9} >      
                <Typography sx={{textAlign: 'left'}} variant="h4"> Swara Latex</Typography> 
            </Grid>
            <Grid item xs={3} >       
                 <Button>Log Out</Button>
            </Grid>
           </Grid>
         </Paper>    

         <Grid container mb={2} p={1}>
            <Grid item xs={12} sx={{boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'}}>      
                 <Button sx={{textAlign: 'left'}}>Bestove</Button>
                 <Button  sx={{textAlign: 'left'}}>SOft Touch</Button>
                 <Button  sx={{textAlign: 'left'}}>Dimond</Button>
            </Grid>
            <Grid item xs={12} sx={{boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'}}>  
                <ProductEdit/>
            </Grid>
           </Grid> 
        </Box>
        </div>
    )
}