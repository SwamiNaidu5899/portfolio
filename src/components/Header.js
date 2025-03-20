import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Switch,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';

const Header = ({ darkMode, toggleTheme }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Toggle Drawer (Hamburger menu)
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleTabChange = (event, newValue) => {
    const sections = ['home', 'experience', 'projects', 'contact'];
    const section = document.getElementById(sections[newValue]);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* AppBar (Top Navbar) for larger screens */}
      <AppBar
        position="sticky"
        sx={{
          background: darkMode ? 'rgb(17, 24, 39)' : 'black', // Black background for both dark and light theme
          color: '#fff',
          zIndex: 1000, // Ensure it doesn't overlap with other elements
          display: { xs: 'none', sm: 'block' }, // Show only for larger screens
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            flexWrap: 'wrap',
            padding: { xs: '8px 16px', sm: '12px 24px' },
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            
          </Typography>

          {/* For larger screens, show navigation buttons */}
          <Box sx={{ display: 'flex', gap: 3 }}>
            {['Home', 'Experience', 'Projects', 'Contact'].map((text, index) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <Button
                  color="inherit"
                  href={`#${text.toLowerCase()}`} // Updated to use anchors for smooth scrolling
                  sx={{
                    fontWeight: '500',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.1)',
                      color: '#1976d2',
                    },
                  }}
                >
                  {text}
                </Button>
              </motion.div>
            ))}
            
            {/* Theme Toggle Switch for Larger Screens */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Switch
                checked={darkMode}
                onChange={toggleTheme}
                sx={{
                  '& .MuiSwitch-thumb': {
                    backgroundColor: darkMode ? '#fff' : '#white',
                  },
                  '& .Mui-checked': {
                    color: darkMode ? '#1976d2' : '#fff',
                  },
                }}
              />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Hamburger Menu for small screens */}
      <IconButton
      edge="end"
      // color="inherit"
      aria-label="menu"
      sx={{
        display: { xs: 'block', sm: 'none' },
        position: 'fixed',
        top: 10,
        right : 20,
        zIndex: 1000000,
        background: 'black', // Beautiful gradient
        color: 'white',
        borderRadius: '50%', // Circular button
        padding: '15px',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)', // Shadow for depth
        transition: 'all 0.3s ease', // Smooth transition for hover effects
      }}
      onClick={toggleDrawer(true)}
    >
        <MenuIcon />
      </IconButton>

      {/* Drawer for small screen navigation */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            {/* Close Icon */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: 2 }}>
              <IconButton onClick={toggleDrawer(false)}>
                <CloseIcon />
              </IconButton>
            </Box>

            {/* Navigation Links in Drawer */}
            <List>
              {['Home', 'Experience', 'Projects', 'Contact'].map((text, index) => (
                <ListItem button key={text} onClick={() => handleTabChange(null, index)}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>

            {/* Theme Toggle in Drawer */}
            <Box sx={{ display: 'flex', alignItems: 'center', padding: 2 }}>
              <Typography variant="body2" sx={{ mr: 1 }}>
                Dark Mode
              </Typography>
              <Switch
                checked={darkMode}
                onChange={toggleTheme}
                sx={{
                  '& .MuiSwitch-thumb': {
                    backgroundColor: darkMode ? '#fff' : '#1976d2',
                  },
                  '& .Mui-checked': {
                    color: darkMode ? '#1976d2' : '#fff',
                  },
                }}
              />
            </Box>
          </motion.div>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
