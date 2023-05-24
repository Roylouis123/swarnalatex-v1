import React from 'react';
import { makeStyles } from '@mui/styles';
import { Container, Grid, TextField, Button } from '@mui/material';

const useStyles = makeStyles({
  footer: {
    backgroundColor: '#f5f5f5',
    padding: '16px',
    marginTop: 'auto',
  },
  location: {
    marginBottom: '8px',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  mapContainer: {
    width: '100%',
    height: '300px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: '16px',
  },
  formField: {
    marginBottom: '16px', // Add margin bottom to create space between text fields
  },
});

const Footer = () => {
  const classes = useStyles();


  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
  };

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} className={classes.location}>
            <iframe
              className={classes.mapContainer}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.1629014596364!2d77.59368091411618!3d12.971598590882146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1678774124b3%3A0xbb2f1fbb27a43e99!2sBangalore%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1624513124453!5m2!1sen!2sin"
              allowFullScreen
              title="Bangalore Map"
            ></iframe>
          </Grid>
          <Grid item xs={12} sm={6}>
          <form className={classes.form} onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField label="Name" variant="outlined" required fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Email" variant="outlined" type="email" required fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              className={classes.submitButton}
              variant="contained"
              color="primary"
              type="submit"
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
