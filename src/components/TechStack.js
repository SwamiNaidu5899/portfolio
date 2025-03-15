import React from 'react';
import { Grid, Typography, Paper } from '@mui/material';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaDocker, FaGithub, FaDatabase, FaAws } from 'react-icons/fa';

const TechStack = () => {
  // Custom style for each icon container with hover effect
  const iconStyle = {
    backgroundColor: 'rgb(17, 24, 39)',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
    marginBottom: '10px',
    height: '120px', // Adjust height
    width: '120px',  // Adjust width
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth transition
  };

  const handleHover = (e) => {
    e.target.style.transform = 'translateY(-10px)'; // Shift horizontally to the right by 10px
    e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)'; // Shadow on hover
  };
  
  const handleMouseLeave = (e) => {
    e.target.style.transform = 'translateY(0)'; // Reset to original position
    e.target.style.boxShadow = 'none'; // Remove shadow
  };
  

  return (
    <div style={{ padding: '20px', background: 'rgb(17, 24, 39)', color: 'white' }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 700, fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' } }}>
        My Tech Stack
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {/* Frontend Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Paper elevation={3} sx={{ background: 'rgb(31, 41, 55)', padding: '20px', textAlign: 'center', height: '50vh' }}>
            <Typography variant="h6" sx={{color : 'white', fontWeight: 600, fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' } }}>
              Frontend
            </Typography>
            <Grid container spacing={2} justifyContent="space-around" style={{ marginTop: '10px' }}>
              <Grid item style={iconStyle} onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
                <FaHtml5 size={40} color="#f44336" />
                <Typography variant="body2" style={{ color: '#fff' }}>HTML5</Typography>
              </Grid>
              <Grid item style={iconStyle} onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
                <FaCss3Alt size={40} color="#1976d2" />
                <Typography variant="body2" style={{ color: '#fff' }}>CSS3</Typography>
              </Grid>
              <Grid item style={iconStyle} onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
                <FaJs size={40} color="#ffeb3b" />
                <Typography variant="body2" style={{ color: '#fff' }}>JavaScript</Typography>
              </Grid>
              <Grid item style={iconStyle} onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
                <FaReact size={40} color="#61dafb" />
                <Typography variant="body2" style={{ color: '#fff' }}>React</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Backend Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Paper elevation={3} sx={{ background: 'rgb(31, 41, 55)', padding: '20px', textAlign: 'center', height: '50vh' }}>
          <Typography variant="h6" sx={{color : 'white', fontWeight: 600, fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' } }}>
          Backend
            </Typography>
            <Grid container spacing={2} justifyContent="space-around" style={{ marginTop: '10px' }}>
              <Grid item style={iconStyle} onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
                <FaNodeJs size={40} color="#3e8e41" />
                <Typography variant="body2" style={{ color: '#fff' }}>Node.js</Typography>
              </Grid>
              <Grid item style={iconStyle} onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
                <FaPython size={40} color="#306998" />
                <Typography variant="body2" style={{ color: '#fff' }}>Python</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Tools Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Paper elevation={3} sx={{ background: 'rgb(31, 41, 55)', padding: '20px', textAlign: 'center', height: '50vh' }}>
          <Typography variant="h6" sx={{color : 'white', fontWeight: 600, fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' } }}>
          Tools
            </Typography>
            <Grid container spacing={2} justifyContent="space-around" style={{ marginTop: '10px' }}>
              <Grid item style={iconStyle} onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
                <FaDocker size={40} color="#0f4b5f" />
                <Typography variant="body2" style={{ color: '#fff' }}>Docker</Typography>
              </Grid>
              <Grid item style={iconStyle} onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
                <FaGithub size={40} color="#3e4b48" />
                <Typography variant="body2" style={{ color: '#fff' }}>GitHub</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Database Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Paper elevation={3} sx={{ background: 'rgb(31, 41, 55)', padding: '20px', textAlign: 'center', height: '50vh' }}>
          <Typography variant="h6" sx={{color : 'white', fontWeight: 600, fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' } }}>
          Database
            </Typography>
            <Grid container spacing={2} justifyContent="space-around" style={{ marginTop: '10px' }}>
              <Grid item style={iconStyle} onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
                <FaDatabase size={40} color="#4caf50" />
                <Typography variant="body2" style={{ color: '#fff' }}>MongoDB</Typography>
              </Grid>
              <Grid item style={iconStyle} onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
                <FaAws size={40} color="#ff9900" />
                <Typography variant="body2" style={{ color: '#fff' }}>AWS</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default TechStack;
