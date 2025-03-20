import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion'; // Import motion from Framer Motion

import banner_img from '../assets/Banner-img.jpg';

const Banner = ({ darkMode }) => {
  return (
    <Box
      sx={{
        background: darkMode ? 'rgb(17, 24, 39)' : '#f4f4f4',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: darkMode ? 'white' : 'black',
        flexDirection: 'column',
        position: 'relative',
        padding: { xs: '20px', sm: '40px' },
        minHeight: '80vh', // Set minimum height to ensure content fits
        textAlign: 'center', // Center text and elements
      }}
    >
      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        style={{
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          overflow: 'hidden',
          border: `5px solid ${darkMode ? 'white' : 'black'}`,
          position: 'absolute',
          top: '40px', // Position the image at the top
        }}
      >
        <img
          src={banner_img}
          alt="Profile"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </motion.div>

      {/* Text and Social Media Icons */}
      <Box sx={{ width: '100%', marginTop: '160px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              color: darkMode ? '#fff' : '#000',
              lineHeight: 1.2,
              fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
            }}
          >
            <span style={{ color: '#1976d2' }}>Hi, I'm</span>{' '}
            <span style={{ color: darkMode ? '#fff' : '#000' }}>Swami Naidu</span>
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              color: darkMode ? '#90caf9' : '#1e88e5',
              marginTop: 1,
              lineHeight: 1.4,
              fontSize: { xs: '1.5rem', sm: '2rem' },
            }}
          >
            Frontend Developer
          </Typography>
        </motion.div>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 3,
            marginTop: 3,
          }}
        >
          {/* Social Media Icons */}
          {['facebook', 'twitter', 'linkedin', 'github'].map((social, index) => (
            <motion.div
              key={social}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 1 }}
            >
              <IconButton
                href={`https://www.${social}.com`}
                target="_blank"
                sx={{
                  color: darkMode ? '#fff' : '#000', // Text color based on theme
                  background: darkMode
                    ? 'transparent'
                    : '#f1f1f1', // Background color for light mode
                  fontSize: '2rem',
                  transition: 'transform 0.3s ease, color 0.3s ease, background-color 0.3s ease',
                  padding: '12px',
                  borderRadius: '50%',
                  '&:hover': {
                    transform: 'scale(1.2)',
                    backgroundColor: darkMode
                      ? 'rgba(255, 255, 255, 0.1)'
                      : '#e0e0e0', // Hover background color for both themes
                    color:
                      social === 'facebook'
                        ? '#3b5998'
                        : social === 'twitter'
                        ? '#00acee'
                        : social === 'linkedin'
                        ? '#0a66c2'
                        : '#171515', // Change color on hover
                  },
                }}
              >
                {social === 'facebook' && <FaFacebook />}
                {social === 'twitter' && <FaTwitter />}
                {social === 'linkedin' && <FaLinkedin />}
                {social === 'github' && <FaGithub />}
              </IconButton>
            </motion.div>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
