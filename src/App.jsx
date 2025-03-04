import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import ScrollToTopButton from './components/scrolltotop/ScrollToTopButton';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Footer from './components/footer/Footer';
import About from './components/about/About';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createTheme({ palette: { mode: darkMode ? 'dark' : 'light' } });

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Contact />
      <Footer />
      <ScrollToTopButton />
    </ThemeProvider>
  );
};

export default App;
