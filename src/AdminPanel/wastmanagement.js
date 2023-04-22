import { Box, Button, Grid, Stack, Paper, Typography} from "@mui/material";
import { height } from "@mui/system";
import circle from './circle.jpg'
import organic from './images/organic.png'
import apartment from './images/apartment.jpg'
import resident from './images/resident.jpg'
import comunity from './images/comunity.jpg'
import recycle from'./images/recycle.jpg'
import NavBar from './NavBar'
export default function WastManagemant () {
    
    return (
        <>        
        <Box 
         sx={{backgroundColor: '#33b137'}}>
            <NavBar/>
            <Box p={2}>
                <Grid container md={11} xs={12}
                 sx={{margin: 'auto'}}>
                    <Grid item md={12} py={4}> 
                         <Typography variant="h2"  sx={{color: 'white'}}>Swap wast to NFT</Typography>
                    </Grid>
                    <Grid item md={12}>
                        <Box sx={{width:'100%', height: '30rem'}}>
                            <img style={{width: "100%", height: '100%'}} src={circle} alt="People circle" />   
                        </Box>
                    </Grid>                    
                </Grid>

                <Grid container my={3}>                   
                    <Grid item sm={12} md={6} sx={{textAlign:'left', margin: ' auto auto'}}>
                        <Typography variant="h4" mb={3}>Vision </Typography>
                        <Typography py={1} varient="p"> Engaging sustainable socity with fun</Typography>
                        <Typography py={1} varient="p"> Truly circular economy by community initative</Typography>
                        <Typography py={1} varient="p"> Not involved on 3rd party intervention</Typography>       
                    </Grid>
                    <Grid item sm={12} md={6}> 
                        <Box sx={{width: '100%', height: '25rem'}}>                
                          <img style={{width: "100%",height: '100%'}} src={circle} alt="People circle" />   
                        </Box>                 
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid item xs={12}>
                        <Typography variant="h3" p={2}> Why we focus on</Typography>
                    </Grid>                   

                     <Grid item  md={3} sm={6} xs={12} p={3}>
                        <Box pb={2} sx={{ height:'10rem'}}>
                             <img style={{height:'100%'}} src={organic}/>
                        </Box>
                        <Typography py={1} variant="h4">Why orgaic wast ?</Typography>
                        <Typography py={1} varient="p"> Lorem Ipsum placeholder text. Select the number</Typography>
                        <Button py={2}>Read More</Button>
                    </Grid>                    

                    <Grid item md={3} sm={6} xs={12} p={3}>
                        <Box pb={2} sx={{height:'10rem'}}>
                            <img style={{height:'100%'}} src={recycle}/>
                        </Box>
                        <Typography py={1} variant="h4">Why compost than incenuration?</Typography>
                        <Typography py={1} varient="p"> Lorem Ipsum placeholder text. Select the number</Typography>
                        <Button py={2}>Read More</Button>
                    </Grid>    

                    <Grid item md={3} sm={6} xs={12} p={3}>
                        <Box mb={2} sx={{height:'10rem'}}>
                            <img style={{height:'100%'}} src={comunity}/>
                        </Box>
                        <Typography py={1} variant="h4">Why community rather than government ?</Typography>
                        <Typography py={3} varient="p"> Lorem Ipsum placeholder text. Select the number</Typography>
                        <Button py={2}>Read More</Button>
                    </Grid>   

                    <Grid item md={3} sm={6} xs={12} p={3}>
                        <Box pb={2} sx={{height:'10rem'}}>
                            <img style={{height:'100%'}} src={comunity}/>
                        </Box>
                        <Typography py={1} variant="h4">Entertainment rather than obligation ?</Typography>
                        <Typography py={1} varient="p"> Lorem Ipsum placeholder text. Select the number</Typography>
                        <Button py={2}>Read More</Button>
                    </Grid>    
                </Grid>

                <Grid container >
                    <Grid item xs={12}>
                        <Typography variant="h3" >Solution</Typography>
                    </Grid>
                    <Grid item md={6} sm={6} xs={12} p={3}>
                    <Typography variant="h4">Residents</Typography>
                        <Box pb={2} sx={{ height:'20rem'}}>
                             <img style={{height:'100%'}} src={resident}/>
                        </Box>
                        <Typography py={1} variant="h4">text Explanation</Typography>
                        <Typography py={1} varient="p"> Lorem Ipsum placeholder text. Select the number</Typography>
                        <Button py={2}>Read More</Button>
                    </Grid>
                    <Grid item md={6} sm={6} xs={12} p={3}>
                    <Typography variant="h4">Socity</Typography>
                        <Box pb={2} sx={{ height:'20rem'}}>
                           <img style={{height:'100%',width:'100%'}} src={apartment}/>
                        </Box>
                        <Typography py={1} variant="h4">text Explanation</Typography>
                        <Typography py={1} varient="p"> Lorem Ipsum placeholder text. Select the number</Typography>
                        <Button py={2}>Read More</Button>
                     </Grid>                      
                </Grid>

                <Grid container spacing={2}>
                    <Grid item xs={2}></Grid>
                </Grid>
            </Box>
        </Box>
        </>
    )
}