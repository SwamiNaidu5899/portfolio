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
  BottomNavigation,
  BottomNavigationAction,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';

const Header = ({ darkMode, toggleTheme }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
    // Scroll to the corresponding section
    const sections = ['home', 'experience', 'projects', 'contact'];
    const section = document.getElementById(sections[newValue]);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Toggle Drawer (Hamburger menu)
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <>
      {/* AppBar (Top Navbar) for larger screens */}
      <AppBar
        position="sticky"
        sx={{
          display: { xs: 'none', sm: 'block' }, // Hide for mobile screens
          background: darkMode ? 'rgb(17, 24, 39)' : 'black', // Black background for both dark and light theme
          color: '#fff',
          zIndex: 1000, // Increase zIndex to avoid overlap
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
            My Portfolio
          </Typography>

          {/* For larger screens, show navigation buttons */}
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              gap: 3,
              justifyContent: 'center',
              width: 'auto',
              flexWrap: 'wrap',
              padding: '8px',
              background: 'transparent',
              borderRadius: '28px',
              border: '1px solid white',
            }}
          >
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

            {/* Theme Toggle Switch */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
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
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for small screen navigation */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <List>
              {['Home', 'Experience', 'Projects', 'Contact'].map((text, index) => (
                <ListItem button key={text} onClick={() => handleTabChange(null, index)}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </motion.div>

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
        </Box>
      </Drawer>

      {/* Bottom navigation for mobile screens */}
      <Box sx={{ display: { xs: 'flex', sm: 'none' }, position: 'fixed', bottom: 0, width: '100%' }}>
        <BottomNavigation
          value={selectedTab}
          onChange={handleTabChange}
          sx={{
            backgroundColor: darkMode ? '#000' : '#000', // Keep black for both themes
            color: '#fff',
            width: '100%',
            boxShadow: 3,
            zIndex: 1100, // Ensures it doesn't overlap with other content
          }}
        >
          <BottomNavigationAction
            label="Home"
            sx={{
              '&:hover': {
                transform: 'scale(1.1)',
                color: '#1976d2',
              },
              transition: 'transform 0.3s ease, color 0.3s ease',
            }}
          />
          <BottomNavigationAction
            label="Experience"
            sx={{
              '&:hover': {
                transform: 'scale(1.1)',
                color: '#1976d2',
              },
              transition: 'transform 0.3s ease, color 0.3s ease',
            }}
          />
          <BottomNavigationAction
            label="Projects"
            sx={{
              '&:hover': {
                transform: 'scale(1.1)',
                color: '#1976d2',
              },
              transition: 'transform 0.3s ease, color 0.3s ease',
            }}
          />
          <BottomNavigationAction
            label="Contact"
            sx={{
              '&:hover': {
                transform: 'scale(1.1)',
                color: '#1976d2',
              },
              transition: 'transform 0.3s ease, color 0.3s ease',
            }}
          />
          
          {/* Theme Toggle Switch in Bottom Navigation */}
          <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
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
        </BottomNavigation>
      </Box>
    </>
  );
};

export default Header;
