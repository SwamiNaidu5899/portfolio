import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // Import arrow icon from react-icons
import { Box, IconButton } from '@mui/material';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  // Show the button after scrolling down 100px from the top
  const toggleVisibility = () => {
    if (window.scrollY > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  // Scroll smoothly to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Add event listener to handle scroll events
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: '20px',
        left: '20px',
        zIndex: 1000,
        display: visible ? 'inline' : 'none',
      }}
    >
      <IconButton
        onClick={scrollToTop}
        sx={{
          backgroundColor: '#1976d2', // Button background color (Blue)
          color: 'white', // Icon color (White)
          borderRadius: '50%',
          padding: '10px',
          '&:hover': {
            backgroundColor: '#1565c0', // Darker blue on hover
          },
          boxShadow: 2,
        }}
      >
        <FaArrowUp size={24} />
      </IconButton>
    </Box>
  );
};

export default ScrollToTopButton;
