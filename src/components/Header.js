import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button, Switch } from '@mui/material';

const Header = ({ darkMode, toggleTheme }) => {
  return (
    <AppBar
      position="sticky"
      sx={{
        background: 'rgb(17, 24, 39)',
        color: '#fff',
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          width: '100%',
          flexWrap: 'wrap',
          padding: { xs: '8px 16px', sm: '12px 24px' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: 3,
            justifyContent: 'center',
            width: '100%',
            marginBottom: { xs: 2, sm: 0 },
            flexWrap: 'wrap',
            padding: '8px',
            width: '40%',
            background: 'transparent',
            borderRadius: '28px',
            border : '1px solid white'
          }}
        >
          <Button
            color="inherit"
            href=""
            sx={{
              fontWeight: '500',
              transition: 'transform 1s ease',
              '&:hover': {
                transform: 'scale(1.1)',
                color : '#1976d2'
              },
            }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            href="#experience"
            sx={{
              fontWeight: '500',
              transition: 'transform 1s ease',
              '&:hover': {
                transform: 'scale(1.1)',
                color : '#1976d2'
              },
            }}
          >
            Experience
          </Button>
          <Button
            color="inherit"
            href="#contact"
            sx={{
              fontWeight: '500',
              transition: 'transform 1s ease',
              '&:hover': {
                transform: 'scale(1.1)',
                color : '#1976d2'
              },
            }}
          >
            Contact
          </Button>
          <Button
            color="inherit"
            href="#projects"
            sx={{
              fontWeight: '500',
              transition: 'transform 1s ease',
              '&:hover': {
                transform: 'scale(1.1)',
                color : '#1976d2'
              },
            }}
          >
            Projects
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
