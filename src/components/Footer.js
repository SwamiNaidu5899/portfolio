import React from 'react';
import { Grid, Typography, Link } from '@mui/material';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Only the required icons

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
          {/* GitHub */}
          <Link
            href="https://github.com/SwamiNaidu5899"
            target="_blank"
            style={{
              color: darkMode ? 'white' : 'black', // Icon color based on theme
              marginRight: '20px',
              transition: 'color 0.3s ease',
            }}
          >
            <FaGithub size={30} />
          </Link>

          {/* LinkedIn */}
          <Link
            href="https://www.linkedin.com/in/swami-naidu-datti-6916a329b/"
            target="_blank"
            style={{
              color: darkMode ? 'white' : 'black',
              marginRight: '20px',
              transition: 'color 0.3s ease',
            }}
          >
            <FaLinkedin size={30} />
          </Link>

          {/* Gmail */}
          <Link
            href="mailto:swaminaidu874@gmail.com"
            target="_blank"
            style={{
              color: darkMode ? 'white' : 'black',
              marginRight: '20px',
              transition: 'color 0.3s ease',
            }}
          >
            <FaEnvelope size={30} /> {/* Gmail icon */}
          </Link>
        </Grid>
        
      </Grid>
    </div>
  );
};

export default Footer;
