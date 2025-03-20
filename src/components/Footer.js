import React from 'react';
import { Grid, Typography, Link } from '@mui/material';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = ({ darkMode }) => {
  return (
    <div
      style={{
        backgroundColor: darkMode ? 'rgb(17, 24, 39)' : '#f4f4f4', // Dark mode background or light mode background
        padding: '20px',
      }}
    >
      <Grid container spacing={4} justifyContent="space-between" alignItems="center">
        
        {/* Copyright Section */}
        <Grid item xs={12} sm={6} style={{ textAlign: 'left' }}>
          <Typography
            variant="body2"
            style={{
              color: darkMode ? 'white' : 'black', // Text color based on theme
            }}
          >
            &copy; {new Date().getFullYear()} Swami Naidu. All rights reserved.
          </Typography>
        </Grid>

        {/* Social Media Links */}
        <Grid item xs={12} sm={6} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <Link
            href="https://github.com"
            target="_blank"
            style={{
              color: darkMode ? 'white' : 'black', // Icon color based on theme
              marginRight: '20px',
              transition: 'color 0.3s ease',
            }}
          >
            <FaGithub size={30} />
          </Link>
          <Link
            href="https://www.linkedin.com"
            target="_blank"
            style={{
              color: darkMode ? 'white' : 'black',
              marginRight: '20px',
              transition: 'color 0.3s ease',
            }}
          >
            <FaLinkedin size={30} />
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            style={{
              color: darkMode ? 'white' : 'black',
              marginRight: '20px',
              transition: 'color 0.3s ease',
            }}
          >
            <FaTwitter size={30} />
          </Link>
          <Link
            href="https://www.instagram.com"
            target="_blank"
            style={{
              color: darkMode ? 'white' : 'black',
              marginRight: '20px',
              transition: 'color 0.3s ease',
            }}
          >
            <FaInstagram size={30} />
          </Link>
        </Grid>
        
      </Grid>
    </div>
  );
};

export default Footer;
