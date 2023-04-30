import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';


const theme = createTheme();

export default function Checkout() {
    const [activeStep, setActiveStep] = useState(false);
    const [formData, setFormData] = useState({})

    const [formValid, setFormValid] = useState(false);




    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        validateForm();
    };
    const handleSubmit = () => {
        setActiveStep(!activeStep);
        const formArray = Object.keys(formData).map((key) => {
            return { [key]: formData[key] };
        });
        console.log(formArray);
    };

    const validateForm = () => {
        const requiredFields = ["Name", "address1", "city", "zip", "country"];
        const isFormValid = requiredFields.every((field) => formData[field] && formData[field].trim() !== "");
        setFormValid(isFormValid);
    };


    const handleCancelClick = () => {
        window.location.reload();
    };


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography component="h1" variant="h4" align="center">
                        Checkout
                    </Typography>
                    {activeStep ? (
                        <React.Fragment>
                            <Typography variant="h5" gutterBottom marginTop={7}>
                                Thank You For Your Interest In SwarnaLatex.
                            </Typography>
                            <Typography variant="subtitle1">
                                We will Contact You Shortly...
                            </Typography>
                            <Button
                                variant="outlined"
                                onClick={handleCancelClick}
                                sx={{ mt: 3, ml: 1 }}
                            >
                                Cancel
                            </Button>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <React.Fragment>
                                <Typography variant="h6" gutterBottom>
                                    Contact Info
                                </Typography>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} >
                                        <TextField
                                            onChange={handleChange}
                                            required
                                            id="Name"
                                            name="Name"
                                            label="name"
                                            fullWidth
                                            autoComplete="given-name"
                                            variant="standard"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            onChange={handleChange}
                                            required
                                            id="address1"
                                            name="address1"
                                            label="Address line 1"
                                            fullWidth
                                            autoComplete="shipping address-line1"
                                            variant="standard"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            onChange={handleChange}
                                            id="address2"
                                            name="address2"
                                            label="Address line 2"
                                            fullWidth
                                            autoComplete="shipping address-line2"
                                            variant="standard"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            onChange={handleChange}
                                            required
                                            id="city"
                                            name="city"
                                            label="City"
                                            fullWidth
                                            autoComplete="shipping address-level2"
                                            variant="standard"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            onChange={handleChange}
                                            id="state"
                                            name="state"
                                            label="State/Province/Region"
                                            fullWidth
                                            variant="standard"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            onChange={handleChange}
                                            required
                                            id="zip"
                                            name="zip"
                                            label="Zip / Postal code"
                                            fullWidth
                                            autoComplete="shipping postal-code"
                                            variant="standard"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            onChange={handleChange}
                                            required
                                            id="country"
                                            name="country"
                                            label="Country"
                                            fullWidth
                                            autoComplete="shipping country"
                                            variant="standard"
                                        />
                                    </Grid>
                                </Grid>
                            </React.Fragment>
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <Button
                                    variant="contained"
                                    onClick={handleSubmit}
                                    sx={{ mt: 3, ml: 1 }}
                                    disabled={!formValid}
                                >
                                    Place order
                                </Button>
                            </Box>
                        </React.Fragment>
                    )}
                </Paper>
            </Container>
        </ThemeProvider>
    );
}