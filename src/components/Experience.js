import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion'; // For animations

const Experience = ({ darkMode }) => {
  return (
    <Box sx={{ padding: '50px 20px', maxWidth: '900px', margin: 'auto' }}>
      {/* Heading */}
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          marginBottom: '40px',
          color: darkMode ? '#FFEB3B' : '#1976d2',
          fontWeight: 'bold',
        }}
      >
        My Professional Experience
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Box className={`timeline-container ${darkMode ? 'dark' : ''}`}>
            <Box className="timeline">
              <TimelineItem
                icon="🎓"
                title="Bachelor of Science"
                date="2020 - 2023"
                description="Adikavi Nannayya University"
                delay="0.3"
                darkMode={darkMode}
              />
              <TimelineItem
                icon="💼"
                title="Web Developer"
                date="2023"
                description="Anurag IT Solutions"
                delay="0.6"
                darkMode={darkMode}
              />
              <TimelineItem
                icon="⚙️"
                title="React JS Developer"
                date="Present"
                description="React, Node.js, Express.js, MongoDB"
                delay="0.9"
                darkMode={darkMode}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

const TimelineItem = ({ icon, title, date, description, delay, darkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      id="experience"
    >
      <Grid container spacing={2} alignItems="center" sx={{ marginBottom: '30px' }}>
        {/* Timeline Icon */}
        <Grid item>
          <Box
            sx={{
              width: '20px',
              height: '20px',
              backgroundColor: darkMode ? '#FFC107' : '#1976d2', // Adjusted icon color for dark mode
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: darkMode ? '#333' : 'white',
              transition: 'transform 0.3s ease', // Add transition for icon on hover
            }}
          >
            <Typography variant="body1" sx={{ fontSize: '16px' }}>
              {icon}
            </Typography>
          </Box>
        </Grid>

        {/* Timeline Content */}
        <Grid item xs>
          <Paper
            sx={{
              padding: '20px',
              background: darkMode ? 'rgb(17, 24, 39)' : '#f4f4f4',
              borderRadius: '8px',
              boxShadow: 2,
              position: 'relative',
              color: darkMode ? '#ddd' : '#000', // Text color adjustment
              transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth hover transition for paper
              '&:hover': {
                transform: 'scale(1.05)', // Slightly scale the paper up on hover
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)', // Add box shadow on hover
              },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                color: darkMode ? '#FFEB3B' : '#1976d2',
                transition: 'color 0.3s ease', // Transition for color change
                '&:hover': {
                  color: darkMode ? '#FFEB3B' : '#1976d2', // Hover color change for title
                },
              }}
            >
              {title}
            </Typography>
            <Typography variant="body2" sx={{ color: darkMode ? '#bbb' : 'gray' }}>
              {date}
            </Typography>
            <Typography variant="body1" sx={{ marginTop: '10px' }}>
              {description}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default Experience;
