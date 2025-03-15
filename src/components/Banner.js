import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

import banner_img from '../assets/Banner-img.jpg';

const Banner = () => {
  return (
    <Box
      sx={{
        background: 'rgb(17, 24, 39)',
        height: '90vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        flexDirection: 'column',
        position: 'relative',
        padding: { xs: '20px', sm: '40px' },
      }}
    >
      <Box
        sx={{
          width: { xs: 100, sm: 150 },
          height: { xs: 100, sm: 150 },
          borderRadius: '50%',
          overflow: 'hidden',
          border: '5px solid white',
          position: 'absolute',
          top: { xs: '55px', sm: '75px' },
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
      </Box>

      <Box textAlign="center" sx={{ marginTop: { xs: '80px', sm: '90px' }, width: '100%' }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            color: '#fff',
            lineHeight: 1.2,
            fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
          }}
        >
          <span style={{ color: '#1976d2' }}>Hi, I'm</span>{' '}
          <span style={{ color: '#fff' }}>Swami Naidu</span>
        </Typography>

        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            color: '#90caf9',
            marginTop: 1,
            lineHeight: 1.4,
            fontSize: { xs: '1.5rem', sm: '2rem' },
          }}
        >
          Frontend Developer
        </Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 3,
            marginTop: 3,
          }}
        >
          <IconButton
            href="https://www.facebook.com"
            target="_blank"
            sx={{
              color: 'white',
              background : "black",
              fontSize: '2rem',
              transition: 'transform 0.3s ease, color 0.3s ease',
              '&:hover': {
                transform: 'scale(1.2)',
                color: '#3b5998',
              },
            }}
          >
            <FaFacebook />
          </IconButton>

          <IconButton
            href="https://twitter.com"
            target="_blank"
            sx={{
              color: 'white',
              background : "black",
              fontSize: '2rem',
              transition: 'transform 0.3s ease, color 0.3s ease',
              '&:hover': {
                transform: 'scale(1.2)',
                color: '#00acee',
              },
            }}
          >
            <FaTwitter />
          </IconButton>

          <IconButton
            href="https://www.linkedin.com"
            target="_blank"
            sx={{
              color: 'white',
              background : "black",
              fontSize: '2rem',
              transition: 'transform 0.3s ease, color 0.3s ease',
              '&:hover': {
                transform: 'scale(1.2)',
                color: '#0a66c2',
              },
            }}
          >
            <FaLinkedin />
          </IconButton>

          <IconButton
            href="https://github.com"
            target="_blank"
            sx={{
              color: 'white',
              background : "black",
              fontSize: '2rem',
              transition: 'transform 0.3s ease, color 0.3s ease',
              '&:hover': {
                transform: 'scale(1.2)',
                color: '#171515',
              },
            }}
          >
            <FaGithub />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
