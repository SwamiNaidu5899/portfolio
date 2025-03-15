import React from 'react';
import { Grid, Typography, Link } from '@mui/material';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div style={{ backgroundColor: 'rgb(17, 24, 39)', padding: '20px' }}>


      <Grid container spacing={4} justifyContent="space-between" alignItems="center">

        
         {/* Copyright Section */}
         <Grid item xs={12} sm={6} style={{ textAlign: 'left' }}>
          <Typography variant="body2" style={{ color: 'white' }}>
            &copy; {new Date().getFullYear()} 2025 Swami Naidu. All rights reserved.
          </Typography>
        </Grid>
        {/* Social Media Links */}
        <Grid item xs={12} sm={6} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <Link href="https://github.com" target="_blank" style={{ color: 'white', marginRight: '20px' }}>
            <FaGithub size={30} />
          </Link>
          <Link href="https://www.linkedin.com" target="_blank" style={{ color: 'white', marginRight: '20px' }}>
            <FaLinkedin size={30} />
          </Link>
          <Link href="https://twitter.com" target="_blank" style={{ color: 'white', marginRight: '20px' }}>
            <FaTwitter size={30} />
          </Link>
          <Link href="https://www.instagram.com" target="_blank" style={{ color: 'white', marginRight: '20px' }}>
            <FaInstagram size={30} />
          </Link>
        </Grid>

       
      </Grid>
    </div>
  );
};

export default Footer;
