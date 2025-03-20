import React, { useState } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Header from './components/Header';
import Banner from './components/Banner';
import TechStack from './components/TechStack';
import Footer from './components/Footer';
import MyProjects from './components/MyProjects';
import Contact from './components/Contact';
import Experience from './components/Experience';
// import Experience from './components/Experience';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#1976d2',
      },
      background: {
        default: '#f5f5f5', // Light theme background
        paper: '#fff', // Card background in light theme
      },
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#90caf9',
      },
      background: {
        default: '#121212', // Dark theme background
        paper: '#1d1d1d', // Card background in dark theme
      },
    },
  });

  // Toggle dark and light mode
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <MuiThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Header darkMode={darkMode} toggleTheme={toggleTheme} />
      <Banner darkMode={darkMode} id="home"/>
      <TechStack darkMode={darkMode} id="experience"/>
      <MyProjects darkMode={darkMode} id="projects"/>
      <Contact darkMode={darkMode} id='contact'/>
      <Experience/>
      <Footer darkMode={darkMode} />
    </MuiThemeProvider>
  );
};

export default App;
