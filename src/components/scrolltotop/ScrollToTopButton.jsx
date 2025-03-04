import React, { useState, useEffect } from 'react';
import { Fab } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    visible && (
      <Fab
        color="primary"
        size="small"
        onClick={scrollToTop}
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    )
  );
};

export default ScrollToTopButton;
