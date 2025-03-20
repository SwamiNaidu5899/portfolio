import React, { useState } from 'react';
import { Grid, Typography, Paper } from '@mui/material';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaDocker, FaGithub, FaDatabase, FaAws } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'; // Import Intersection Observer

const TechStack = ({ darkMode }) => {
  const [enterCount, setEnterCount] = useState(0); // Track number of times section is entered

  const iconStyle = {
    backgroundColor: darkMode ? 'rgb(17, 24, 39)' : '#f1f1f1',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
    marginBottom: '10px',
    height: '120px',
    width: '120px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth transition
    boxShadow: darkMode ? '0 4px 6px rgba(0, 0, 0, 0.1)' : '0 4px 6px rgba(0, 0, 0, 0.2)', // Box shadow based on dark mode
  };

  const handleHover = (e) => {
    e.target.style.transform = 'translateY(-10px)'; // Shift vertically on hover
    e.target.style.boxShadow = darkMode
      ? '0 4px 8px rgba(0, 0, 0, 0.3)' // More shadow for dark mode
      : '0 4px 8px rgba(0, 0, 0, 0.4)'; // More shadow for light mode
  };

  const handleMouseLeave = (e) => {
    e.target.style.transform = 'translateY(0)'; // Reset to original position
    e.target.style.boxShadow = darkMode
      ? '0 4px 6px rgba(0, 0, 0, 0.1)' // Reset shadow for dark mode
      : '0 4px 6px rgba(0, 0, 0, 0.2)'; // Reset shadow for light mode
  };

  // Intersection Observer hook for detecting when the section is in view
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger every time the section enters the viewport
    threshold: 0.2, // Trigger when 20% of the section is visible
    onChange: (inViewStatus) => {
      if (inViewStatus) {
        setEnterCount((prevCount) => prevCount + 1); // Increase count on entering the section
      }
      else{
        setEnterCount(0)
      }
    },
  });

  return (
    <div
      id="home" // Section ID for scrolling navigation
      ref={ref}
      style={{
        padding: '20px',
        background: darkMode ? 'rgb(17, 24, 39)' : '#f4f4f4',
        color: darkMode ? 'white' : 'black',
        transition: 'background 0.3s ease',
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        sx={{
          fontWeight: 700,
          fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
          marginBottom: '30px',
          opacity: inView ? 1 : 0, // Only show the title when the section is in view
          transition: 'opacity 0.6s ease',
        }}
      >
        My Tech Stack
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {/* Frontend Section */}
        <Grid item xs={12} sm={6} md={3}>
          <motion.div
            initial={{ opacity: 0, y: 20 }} // Start slightly offscreen
            animate={{
              opacity: 1,
              y: 0, // Move to the original position
              scale: 1 + (enterCount * 0.05), // Increase scale on each visit (or you can use other properties for multiple visits)
            }}
            transition={{
              duration: 0.8,
              ease: 'easeOut',
              delay: 0.2,
            }}
          >
            <Paper
              elevation={3}
              sx={{
                background: darkMode ? 'rgb(31, 41, 55)' : '#f1f1f1',
                padding: '20px',
                textAlign: 'center',
                height: '55vh',
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: darkMode ? 'white' : 'black',
                  fontWeight: 600,
                  fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
                }}
              >
                Frontend
              </Typography>
              <Grid container spacing={2} justifyContent="space-around" style={{ marginTop: '10px' }}>
                {['html5', 'css3', 'js', 'react'].map((tech, index) => (
                  <Grid item key={tech}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1 + (enterCount * 0.05), // Increase scale as the section is visited more
                      }}
                      transition={{
                        delay: 0.3 + index * 0.2,
                        duration: 0.6,
                      }}
                    >
                      <div
                        style={iconStyle}
                        onMouseEnter={handleHover}
                        onMouseLeave={handleMouseLeave}
                      >
                        {tech === 'html5' && <FaHtml5 size={40} color="#f44336" />}
                        {tech === 'css3' && <FaCss3Alt size={40} color="#1976d2" />}
                        {tech === 'js' && <FaJs size={40} color="#ffeb3b" />}
                        {tech === 'react' && <FaReact size={40} color="#61dafb" />}
                        <Typography variant="body2" style={{ color: darkMode ? '#fff' : '#000' }}>
                          {tech === 'html5' && 'HTML5'}
                          {tech === 'css3' && 'CSS3'}
                          {tech === 'js' && 'JavaScript'}
                          {tech === 'react' && 'React'}
                        </Typography>
                      </div>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </motion.div>
        </Grid>

        {/* Backend Section */}
        <Grid item xs={12} sm={6} md={3}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1 + (enterCount * 0.05),
            }}
            transition={{
              duration: 0.8,
              ease: 'easeOut',
              delay: 0.4,
            }}
          >
            <Paper
              elevation={3}
              sx={{
                background: darkMode ? 'rgb(31, 41, 55)' : '#f1f1f1',
                padding: '20px',
                textAlign: 'center',
                height: '55vh',
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: darkMode ? 'white' : 'black',
                  fontWeight: 600,
                  fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
                }}
              >
                Backend
              </Typography>
              <Grid container spacing={2} justifyContent="space-around" style={{ marginTop: '10px' }}>
                {['nodejs', 'python'].map((tech, index) => (
                  <Grid item key={tech}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1 + (enterCount * 0.05),
                      }}
                      transition={{
                        delay: 0.3 + index * 0.2,
                        duration: 0.6,
                      }}
                    >
                      <div
                        style={iconStyle}
                        onMouseEnter={handleHover}
                        onMouseLeave={handleMouseLeave}
                      >
                        {tech === 'nodejs' && <FaNodeJs size={40} color="#3e8e41" />}
                        {tech === 'python' && <FaPython size={40} color="#306998" />}
                        <Typography variant="body2" style={{ color: darkMode ? '#fff' : '#000' }}>
                          {tech === 'nodejs' && 'Node.js'}
                          {tech === 'python' && 'Python'}
                        </Typography>
                      </div>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </motion.div>
        </Grid>

        {/* Tools Section */}
        <Grid item xs={12} sm={6} md={3}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1 + (enterCount * 0.05),
            }}
            transition={{
              duration: 0.8,
              ease: 'easeOut',
              delay: 0.6,
            }}
          >
            <Paper
              elevation={3}
              sx={{
                background: darkMode ? 'rgb(31, 41, 55)' : '#f1f1f1',
                padding: '20px',
                textAlign: 'center',
                height: '55vh',
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: darkMode ? 'white' : 'black',
                  fontWeight: 600,
                  fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
                }}
              >
                Tools
              </Typography>
              <Grid container spacing={2} justifyContent="space-around" style={{ marginTop: '10px' }}>
                {['docker', 'github'].map((tech, index) => (
                  <Grid item key={tech}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1 + (enterCount * 0.05),
                      }}
                      transition={{
                        delay: 0.3 + index * 0.2,
                        duration: 0.6,
                      }}
                    >
                      <div
                        style={iconStyle}
                        onMouseEnter={handleHover}
                        onMouseLeave={handleMouseLeave}
                      >
                        {tech === 'docker' && <FaDocker size={40} color="#0f4b5f" />}
                        {tech === 'github' && <FaGithub size={40} color="#3e4b48" />}
                        <Typography variant="body2" style={{ color: darkMode ? '#fff' : '#000' }}>
                          {tech === 'docker' && 'Docker'}
                          {tech === 'github' && 'GitHub'}
                        </Typography>
                      </div>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </motion.div>
        </Grid>

        {/* Database Section */}
        <Grid item xs={12} sm={6} md={3}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1 + (enterCount * 0.05),
            }}
            transition={{
              duration: 0.8,
              ease: 'easeOut',
              delay: 0.8,
            }}
          >
            <Paper
              elevation={3}
              sx={{
                background: darkMode ? 'rgb(31, 41, 55)' : '#f1f1f1',
                padding: '20px',
                textAlign: 'center',
                height: '55vh',
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: darkMode ? 'white' : 'black',
                  fontWeight: 600,
                  fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
                }}
              >
                Database
              </Typography>
              <Grid container spacing={2} justifyContent="space-around" style={{ marginTop: '10px' }}>
                {['mongodb', 'aws'].map((tech, index) => (
                  <Grid item key={tech}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1 + (enterCount * 0.05),
                      }}
                      transition={{
                        delay: 0.3 + index * 0.2,
                        duration: 0.6,
                      }}
                    >
                      <div
                        style={iconStyle}
                        onMouseEnter={handleHover}
                        onMouseLeave={handleMouseLeave}
                      >
                        {tech === 'mongodb' && <FaDatabase size={40} color="#4caf50" />}
                        {tech === 'aws' && <FaAws size={40} color="#ff9900" />}
                        <Typography variant="body2" style={{ color: darkMode ? '#fff' : '#000' }}>
                          {tech === 'mongodb' && 'MongoDB'}
                          {tech === 'aws' && 'AWS'}
                        </Typography>
                      </div>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </motion.div>
        </Grid>
      </Grid>
    </div>
  );
};

export default TechStack;
