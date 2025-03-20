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

  return (
    <AppBar
      position="sticky"
      sx={{
        background: darkMode ? 'rgb(17, 24, 39)' : '#000',
        color: '#fff',
        zIndex: (theme) => theme.zIndex.drawer + 1,
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

        {/* For small screens, show hamburger menu */}
        <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: drawerOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{
                transform: drawerOpen ? 'rotate(90deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease',
              }}
            >
              <MenuIcon />
            </IconButton>
          </motion.div>
        </Box>

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

        {/* Drawer for small screen navigation */}
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
        >
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <List>
                {['Home', 'Experience', 'Projects', 'Contact'].map((text, index) => (
                  <ListItem button key={text}>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
            </motion.div>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
