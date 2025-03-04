import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import { Container, Grid, Typography, TextField, Button, Box } from "@mui/material";
import { LocationOn, Phone, Email } from "@mui/icons-material";

const ContactForm = () => {
  
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rilvuap', 'template_a9q68z9', form.current, {
    publicKey: '_URsOx801d0bdmcHB',})
    e.target.reset()
  };

  return (
    <Container maxWidth="lg" id="contact" sx={{ mt: 14, mb: 8 }}>
      <Typography 
        variant="h4" 
        align="center" 
        gutterBottom
        sx={{
          color: 'rgb(68, 68, 68)',
          fontFamily: 'Poppins, sans-serif',
          fontSize: '40px',
          lineHeight: '38.4px',
          fontWeight: 700,
          textTransform: 'uppercase',
          textAlign: 'center',
          textDecoration: 'none',
        }}
      >
        ABOUT
      </Typography>

      <Grid container spacing={4} sx={{ mt: 2, p: 3, borderRadius: 2 }}>
        {/* Left Side */}
        <Grid item xs={12} md={6}>
          <Typography 
            variant="h5" 
            fontWeight="bold"
            sx={{
              color: 'rgb(68, 68, 68)',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '25px',
              lineHeight: '38.4px',
              fontWeight: 700,
              textTransform: 'uppercase',
              textAlign: 'justify',
              textDecoration: 'none',
            }}
          >
            Let's talk about the future
          </Typography>

          <Typography 
            variant="body1" 
            color="textSecondary" 
            sx={{
              mb: 2,
              textDecoration: 'none',
              color: 'rgb(85, 85, 85)',
              fontFamily: 'Poppins, sans-serif',
              fontSize: { xs: '10px', sm: '14px', md: '19px' },
              lineHeight: { xs: '24px', sm: '28px', md: '35px' },
              fontWeight: '500',
              textTransform: 'none',
              cursor: 'pointer',
              textAlign: 'justify',
            }}
          >
            We're here to answer your questions and discuss the decentralized future of the internet.
          </Typography>
          
          <Box display="flex" alignItems="center" mb={2}>
            <LocationOn color="primary" sx={{ mr: 1 }} />
            <Typography variant="body2">Pune, Maharashtra, India.</Typography>
          </Box>

          <Box display="flex" alignItems="center" mb={2}>
            <Phone color="primary" sx={{ mr: 1 }} />
            <Typography variant="body2">80******41</Typography>
          </Box>

          <Box display="flex" alignItems="center">
            <Email color="primary" sx={{ mr: 1 }} />
            <Typography variant="body2">klkraghavendra@gmail.com</Typography>
          </Box>
        </Grid>

        {/* Right Side - Form */}
        
        <Grid item xs={12} md={6}>
          <form ref={form} onSubmit={sendEmail}>
          <TextField
            className="form-control"
            type="email" 
            name="email"
            fullWidth
            label="Email address"
            variant="outlined"
            required
            margin="normal"
          />
          <TextField
            className="form-control"
            name="message"
            fullWidth
            label="Message"
            variant="outlined"
            required
            multiline
            rows={4}
            margin="normal"
          />
          <Button fullWidth variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
            SUBMIT
          </Button>
          </form>
        </Grid>
        
        
      </Grid>
    </Container>
  );
};

export default ContactForm;
