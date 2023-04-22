import { Button, Box, Grid, Typography} from '@mui/material'
import logo from './images/recycle.jpg'
import styled from '@mui/material'
import { Link } from 'react-router-dom'


export default function NavBar () {
    return (
        <Box sx={{boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'}}>
            <Grid container px={2} py={3} sm={10} 
            sx={{  
                margin: 'auto',
                display: 'flex',
                justifyContent: 'space-between'
            }} >
                <Grid item 
                sx={{height: '3rem'}}>
                    <Typography variant="h3"><span style={{color: 'blue'}}>Swarna</span><span style={{color: 'yellow'}}>latex</span></Typography>
                </Grid>
                <Grid item
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                                     
                }}>
                    <Button my={2}><Link to="/Home" >Home</Link></Button>
                    <Button my={2}><Link to="/ProductCatalog" >Product Catalog</Link></Button>
                    
                    <Button><Link to="/Admin" >Admin</Link></Button>
            
                </Grid>                
            </Grid>
        </Box>
    )
}  