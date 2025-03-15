// src/App.js
import React, { useState } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Header from './components/Header';
import Banner from './components/Banner';
import TechStack from './components/TechStack';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#1976d2',
      },
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#90caf9',
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
      <Banner/>
      <TechStack/>
    </MuiThemeProvider>
  );
};

export default App;
