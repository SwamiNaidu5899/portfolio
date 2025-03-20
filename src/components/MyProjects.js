import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography, CardMedia, Button, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { OpenInNew } from '@mui/icons-material'; // Importing view link icon
import floral from '../assets/floral.png';
import moksto from '../assets/moksto.png';
import travel from '../assets/travel1.png';

// Custom Styled Components using MUI's styled function
const MyCard = styled(Card)(({ theme }) => ({
  position: 'relative', // To position content on top of the image
  maxWidth: 400,  // Increased card size
  margin: theme.spacing(3),
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.47)',
  backgroundColor: 'black', // Dynamically set background
  borderRadius: '12px', // Add rounded corners to cards
  transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth transition for scaling and shadow
  overflow: 'hidden', // Ensure content stays within the card boundaries
  '&:hover': {
    transform: 'translateY(-10px)', // Slight zoom effect on hover
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.7)', // Enhance shadow on hover
  },
}));

const MyCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 200,  // Default image height
  backgroundColor: 'transparent', // Set to transparent
  borderTopLeftRadius: '12px', // Match the card's rounded corners
  borderTopRightRadius: '12px', // Match the card's rounded corners
  transition: 'height 0.3s ease', // Smooth transition for height change on hover
}));

const MyButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  backgroundColor: 'transparent', // Transparent background
  color: 'white', // Button text color based on theme
  border: 'none', // Border color to match the text
  padding: '8px 16px', // Add padding for a nice button size
  '&:hover': {
    backgroundColor: 'transparent', // Transparent background
    color: 'white',
  },
}));

const TechStackChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  backgroundColor: theme.palette.primary.main, // Change this to a custom color for skills
  color: theme.palette.getContrastText(theme.palette.primary.main),  // White text on blue background
}));

// Data for projects
const projects = [
  {
    title: 'Floral Designs',
    description: 'Floral Designs is a website dedicated to showcasing beautiful and creative floral design ideas, offering inspiration and solutions for various floral arrangements and events.',
    imageUrl: floral,
    techStack: ['React', 'Material UI', 'Node', 'TawkTo'],
    link: 'https://floral-client-six.vercel.app/',
  },
  {
    title: 'Moksto IT Solutions',
    description: 'Moksto IT Solutions is a software company specializing in providing innovative and reliable IT solutions for businesses, helping them optimize processes and enhance digital experiences.',
    imageUrl: moksto,
    techStack: ['React JS', 'MongoDB', 'API', 'Nodemailer'],
    link: 'https://mokstosolutions.tech',
  },
  {
    title: 'Travel Agency',
    description: 'The Travel Agency website represents a travel-related company, offering a seamless booking experience for travelers and showcasing a variety of destinations, packages, and travel services.',
    imageUrl: travel,
    techStack: ['React', 'Material UI', 'Node JS', 'Mongo DB'],
    link: 'https://travel-client-gamma.vercel.app/',
  }
];

const MyProjects = ({ darkMode }) => {
  const [hovered, setHovered] = useState(null);

  return (
    <div
      id="projects"
      style={{
        padding: '40px 20px',
        background: darkMode ? 'rgb(17, 24, 39)' : '#f4f4f4',
        transition: 'background 0.3s ease',
        borderRadius: '8px',
        width: '100%',  // Ensure it takes full width
        maxWidth: darkMode ? '100%' : '1200px', // Full width in dark mode, max width in light mode
        margin: '0 auto', // Center the container
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        style={{
          color: darkMode ? 'white' : 'black',
          fontWeight: 700, // Using bold font weight for standardization
          opacity: 1,
          transition: 'opacity 0.6s ease',
        }}
      >
        My Projects
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: 'easeOut',
                delay: index * 0.2,
              }}
            >
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <MyCard
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {!hovered === index && (
                    <MyCardMedia image={project.imageUrl} title={project.title} />
                  )}
                  <CardContent
                    style={{
                      padding: '20px',
                      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark transparent background
                      zIndex: 1, // Ensure content is above the image
                      borderRadius: '12px',
                    }}
                  >
                    <Typography
                      variant="h6"
                      gutterBottom
                      style={{
                        color: 'white', // Text color white for visibility on the image
                        fontWeight: 600, // Standard font weight for the title
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      paragraph
                      style={{
                        color: 'lightgray', // Light gray text for description
                        fontWeight: 400, // Regular font weight for the description
                      }}
                    >
                      {project.description}
                    </Typography>
                    <div>
                      {project.techStack.map((tech, index) => (
                        <TechStackChip key={index} label={tech} />
                      ))}
                    </div>
                    <MyButton
                      variant="outlined"
                      href={project.link}
                      target="_blank"
                      endIcon={<OpenInNew />} // Adding view link icon after text
                    >
                      Visit Project
                    </MyButton>
                  </CardContent>
                </MyCard>
              </motion.div>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default MyProjects;
