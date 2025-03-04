import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, Drawer, List, ListItem, ListItemButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Link } from 'react-scroll';

const Navbar = ({ toggleDarkMode, darkMode }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 250, paddingTop: 2 }}>
      <List>
        {['Projects', 'About', 'Skills', 'Contact'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={handleDrawerToggle}>
              <Link
                to={text.toLowerCase()}
                smooth={true}
                duration={500}
                style={{
                  textDecoration: 'none',
                  color: 'rgb(85, 85, 85)',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '16px',
                  lineHeight: '24px',
                  fontWeight: '400',
                  textTransform: 'none',
                  cursor: 'pointer',
                }}
              >
                {text}
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="fixed" color="default" sx={{ boxShadow: 'none' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Navbar Brand */}
        <Typography
          variant="h6"
          component="div"
          sx={{
            color: 'rgb(41, 120, 181)',
            fontFamily: 'Poppins, sans-serif',
            fontSize: '24px',
            lineHeight: '28.8px',
            fontWeight: '900',
            textDecoration: 'none',
          }}
        >
          <a href="/">RK.</a>
        </Typography>

        {/* Desktop Links */}
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            gap: 2,
          }}
        >
          {['Projects', 'About', 'Skills', 'Contact'].map((text) => (
            <Link
              key={text}
              to={text.toLowerCase()}
              smooth={true}
              duration={500}
              style={{
                paddingTop: '8px',
                textDecoration: 'none',
                color: 'rgb(85, 85, 85)',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '16px',
                lineHeight: '24px',
                fontWeight: '700',
                textTransform: 'none',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => (e.target.style.color = darkMode ? '#ffa726' : '#1e88e5')}
              onMouseLeave={(e) => (e.target.style.color = 'rgb(85, 85, 85)')}
            >
              {text}
            </Link>
          ))}
          {/* Dark/Light Mode Button */}
          <IconButton onClick={toggleDarkMode} sx={{ color: 'rgb(41, 120, 181)' }}>
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Box>

        {/* Mobile View: Dark/Light Button + Hamburger Icon */}
        <Box
          sx={{
            display: { xs: 'flex', sm: 'none' },
            alignItems: 'center',
          }}
        >
          {/* Dark/Light Mode Button */}
          <IconButton onClick={toggleDarkMode} sx={{ color: 'rgb(41, 120, 181)', marginRight: 1 }}>
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          {/* Hamburger Icon */}
          <IconButton
            color="inherit"
            edge="end"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>

      {/* Drawer for Mobile */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
