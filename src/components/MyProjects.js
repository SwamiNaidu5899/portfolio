import React from 'react';
import { Grid, Card, CardContent, Typography, CardMedia, Button, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { OpenInNew } from '@mui/icons-material'; // Importing view link icon
import floral from '../assets/floral.png';
import moksto from '../assets/moksto.png';
import travel from '../assets/travel1.png';

// Custom Styled Components using MUI's styled function
const MyCard = styled(Card)(({ theme, darkMode }) => ({
  maxWidth: 400,  // Increased card size
  margin: theme.spacing(3),
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  backgroundColor: theme.palette.background.paper, // Dynamically set background
  borderRadius: '12px', // Add rounded corners to cards
  transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth transition for scaling and shadow
  '&:hover': {
    transform: 'scale(1.05)', // Slight zoom effect on hover
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', // Enhance shadow on hover
  },
}));

const MyCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 200,  // Increased height for the image
  backgroundColor: theme.palette.divider, // Dynamically set background for image area
  borderTopLeftRadius: '12px', // Match the card's rounded corners
  borderTopRightRadius: '12px', // Match the card's rounded corners
}));

const MyButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  backgroundColor: 'transparent', // Transparent background
  color:' rgb(17, 24, 39)', // Button text color based on theme
  border: `1px solid rgb(17, 24, 39)`, // Border color to match the text
  padding: '8px 16px', // Add padding for a nice button size
  '&:hover': {
    backgroundColor: 'transparent', // Transparent background
    color:  'black' ,
    border: `1px solid black`, // Border color to match the text

  },
}));

const TechStackChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  backgroundColor: theme.palette.info.main,  // Light blue for tech stack chips
  color: theme.palette.getContrastText(theme.palette.info.main),  // White text on blue background
}));

// Data for projects
const projects = [
  {
    title: 'Floral Designs',
    description: 'A web-based GPT interface powered by Llama model, featuring real-time chat and response streaming.',
    imageUrl: floral,
    techStack: ['React', 'Material UI', 'Node', 'Mongo DB'],
    link: 'https://floral-client-six.vercel.app/',
  },
  {
    title: 'Moksto IT Solutions',
    description: 'Modern URL shortening service with analytics and custom alias support.',
    imageUrl: moksto,
    techStack: ['React JS', 'MongoDB', 'API'],
    link: 'https://mokstosolutions.tech',
  },
  {
    title: 'Travel Agency',
    description: 'A modern portfolio website showcasing my projects and skills.',
    imageUrl: travel,
    techStack: ['React', 'Material UI', 'Node JS'],
    link: 'https://travel-client-gamma.vercel.app/',
  }
];

const MyProjects = ({ darkMode }) => {
  return (
    <div
      id="projects"
      style={{
        padding: '40px 20px',
        background: darkMode ? 'rgb(17, 24, 39)' : '#f4f4f4',
        transition: 'background 0.3s ease',
        borderRadius: '8px',
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        style={{
          color: darkMode ? 'white' : 'black',
          opacity: 1,
          transition: 'opacity 0.6s ease',
          fontWeight: 'bold',
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
                <MyCard>
                  <MyCardMedia image={project.imageUrl} title={project.title} />
                  <CardContent style={{ padding: '20px' }}>
                    <Typography
                      variant="h6"
                      gutterBottom
                      style={{
                        color: darkMode ? 'white' : 'black',
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      paragraph
                      style={{
                        color: darkMode ? 'lightgray' : 'black',
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
