import { Box, Card, Typography, CardContent, TextField, Button } from "@mui/material";

export default function AdminLogin () {
    return (
        <Box>
            <Card variant="outlined" sx={{ maxWidth: 375, margin: '10% auto' }}>
                 <CardContent>
                 <Typography variant="h5" my={2}>Admin Login</Typography>
                 <TextField sx={{ margin: '0.5rem'}} type="text" label="User id" variant="outlined" />
                 <TextField sx={{ margin: '0.5rem'}} type="password" label="Password" variant="outlined" /><br/>
                 <Button sx={{ margin: '0.5rem'}} variant="outlined">Verify</Button>
                 </CardContent>
            </Card>     
        </Box>
    )
}