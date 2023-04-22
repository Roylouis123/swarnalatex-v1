import { Box, Button, Grid, Typography } from "@mui/material"
import Logo from '../logo.svg'
import heroImg from '../assets/hero.png'
import Product from "./Product"
import ProductCatalog from "./ProductCatalog"
import NavBar from "../AdminPanel/NavBar"

export default function Hero () {
    return (
        <Box>
            <NavBar/>
            <Grid container py={3} px={2} md={10} sm={12} 
             sx={{ display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                margin: 'auto' }}>                    
                <Grid item md={6} xs={12} 
                 sx={{ textAlign: 'left',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    }}>
                      <Box>
                         <Typography variant="h2" mb={2}><span style={{color: 'blue'}}> Swarna</span> <span style={{color: 'yellow'}}>latex</span></Typography>
                         <Typography variant="h3" mb={2}>India's Leading Industrial and Household Gloves Manufacturer</Typography>
                         <Button variant="outlined" mb={2}>View Products</Button>
                      </Box>                 
                </Grid>
                <Grid item md={6} xs={12}>
                    <img style={{width: '100%'}} src={heroImg}  alt="Hero" />
                </Grid>    
            </Grid>           
            <ProductCatalog/>
        </Box>
    )
}