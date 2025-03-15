import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Button, Switch, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

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
        background: 'rgb(17, 24, 39)',
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
          <Button
            color="inherit"
            href="#home"
            sx={{
              fontWeight: '500',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.1)',
                color: '#1976d2',
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
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.1)',
                color: '#1976d2',
              },
            }}
          >
            Experience
          </Button>
          <Button
            color="inherit"
            href="#projects"
            sx={{
              fontWeight: '500',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.1)',
                color: '#1976d2',
              },
            }}
          >
            Projects
          </Button>
          <Button
            color="inherit"
            href="#contact"
            sx={{
              fontWeight: '500',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.1)',
                color: '#1976d2',
              },
            }}
          >
            Contact
          </Button>
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
            <List>
              <ListItem button>
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Experience" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Projects" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Contact" />
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
