import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => (
  <Box
    component="footer"
    sx={{
      textAlign: 'center',
      py: 4,
      mt: 4,
      backgroundColor: (theme) => theme.palette.background.default,
    }}
  >
    <Typography variant="body2" color="textSecondary">
      Created by{' '}
      <Link
        href="https://github.com/your-github-username"
        target="_blank"
        rel="noopener noreferrer"
        underline="hover"
        sx={{

          fontSize: "18.4px",
          fontWeight: 600,
          fontFamily: "Poppins, sans-serif",
          lineHeight: "21.6px",
          verticalAlign: "baseline",
          letterSpacing: "normal",
          wordSpacing: "0px",
          fontStyle: "normal",
          fontVariant: "normal",
          textTransform: "none",
          textDecoration: "none solid rgb(41, 120, 181)",
          textAlign: "left",
          textIndent: "0px",
          color: "rgb(41, 120, 181)",
        }}
      >
        Raghavendra Kulkarni
      </Link>
    </Typography>
  </Box>
);

export default Footer;
