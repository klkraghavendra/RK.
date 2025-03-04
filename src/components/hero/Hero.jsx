import React from 'react';
import { Button, Container, Typography, Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Hero = () => (
  <Container
    id="hero"
    maxWidth="lg"
    sx={{
      textAlign: 'center',
      mt: { xs: 8, sm: 10, md: 14 }, // Adjust top margin for different screen sizes
      pt: { xs: 6, sm: 8, md: 12 },
    }}
  >
    <Typography
      variant="h3"
      gutterBottom
      sx={{
        textDecoration: 'none',
        color: 'rgb(68, 68, 68)',
        fontFamily: 'Poppins, sans-serif',
        fontSize: { xs: '36px', sm: '50px', md: '70px' }, // Responsive font size
        lineHeight: { xs: '42px', sm: '60px', md: '76.8px' },
        fontWeight: '700',
        textTransform: 'none',
        cursor: 'pointer',
      }}
    >
      Hi, I am <span style={{ color: '#1976d2' }}>Raghavendra Kulkarni.</span>
    </Typography>

    <Typography
      variant="h5"
      color="textSecondary"
      paragraph
      sx={{
        textDecoration: 'none',
        color: 'rgb(68, 68, 68)',
        fontFamily: 'Poppins, sans-serif',
        fontSize: { xs: '18px', sm: '24px', md: '32px' },
        lineHeight: { xs: '28px', sm: '32px', md: '40px' },
        fontWeight: '700',
        textTransform: 'none',
        cursor: 'pointer',
      }}
    >
      A MERN STACK DEVELOPER.
    </Typography>

    <Typography
      variant="h6"
      color="textSecondary"
      paragraph
      sx={{
        textDecoration: 'none',
        color: 'rgb(85, 85, 85)',
        fontFamily: 'Poppins, sans-serif',
        fontSize: { xs: '14px', sm: '18px', md: '21px' },
        lineHeight: { xs: '24px', sm: '28px', md: '35px' },
        fontWeight: '500',
        textTransform: 'none',
        cursor: 'pointer',
        textAlign: 'justify',
      }}
    >
      Results-oriented MERN stack developer skilled in building responsive web applications and enhancing user experiences with
      modern technologies like React.js. Experienced in integrating RESTful APIs and delivering high-quality interfaces in dynamic
      environments.
    </Typography>

    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        mt: { xs: 2, sm: 3, md: 4 }, // Adjust spacing for different screen sizes
        gap: { xs: 1, sm: 1.5, md: 2 }, // Adjust gap between buttons
      }}
    >
      <Button
        variant="contained"
        size="large"
        href="https://surl.li/brfsxc"
        sx={{
          fontSize: { xs: '12px', sm: '14px', md: '16px' }, // Responsive font size for button text
          padding: { xs: '6px 12px', sm: '8px 16px', md: '10px 20px' }, // Responsive padding
          '&:hover': { backgroundColor: '#1565c0' },
        }}
      >
        Resume
      </Button>
      <Button
        href="https://surl.li/ijwqjt"
        target="_blank"
        sx={{
          color: '#333',
          '&:hover': { color: '#1976d2' },
        }}
      >
        <GitHubIcon fontSize="large" />
      </Button>
      <Button
        href="https://surl.li/dnpsux"
        target="_blank"
        sx={{
          color: '#333',
          '&:hover': { color: '#1976d2' },
        }}
      >
        <LinkedInIcon fontSize="large" />
      </Button>
    </Box>
  </Container>
);

export default Hero;
