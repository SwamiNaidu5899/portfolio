import React from 'react';
import { Grid, Typography, Avatar, Paper } from '@mui/material';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaDocker, FaGithub, FaDatabase, FaAws } from 'react-icons/fa';
import { Height } from '@mui/icons-material';

const TechStack = () => {
  // Custom style for each icon container
  const iconStyle = {
    backgroundColor: 'rgb(55, 65, 81)',
    padding: '15px',
    borderRadius: '8px',
    textAlign: 'center',
    marginBottom: '10px',
    Height : '10vh', 
    width : '40%'
  };

  return (
    <div style={{ padding: '20px',background: 'rgb(17, 24, 39)',
    }}>
      <Typography variant="h4" gutterBottom align="center">
        My Tech Stack
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {/* Frontend Section */}
        <Grid item xs={12} md={3} >
          <Paper elevation={3} sx={{background : 'rgb(31, 41, 55) ',padding: '20px', textAlign: 'center' }}>
            <Typography variant="h6">Frontend</Typography>
            <Grid container spacing={2} justifyContent="space-around" style={{ marginTop: '10px' }}>
              <Grid item style={iconStyle}>
                <FaHtml5 size={30} color="#f44336" />
                <Typography variant="body2" style={{ color: '#fff' }}>HTML5</Typography>
              </Grid>
              <Grid item style={iconStyle}>
                <FaCss3Alt size={30} color="#1976d2" />
                <Typography variant="body2" style={{ color: '#fff' }}>CSS3</Typography>
              </Grid>
              <Grid item style={iconStyle}>
                <FaJs size={30} color="#ffeb3b" />
                <Typography variant="body2" style={{ color: '#fff' }}>JavaScript</Typography>
              </Grid>
              <Grid item style={iconStyle}>
                <FaReact size={30} color="#61dafb" />
                <Typography variant="body2" style={{ color: '#fff' }}>React</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Backend Section */}
        <Grid item xs={12} md={3}>
        <Paper elevation={3} sx={{background : 'rgb(31, 41, 55) ',padding: '20px', textAlign: 'center' }}>
        <Typography variant="h6">Backend</Typography>
        <Grid container spacing={2} justifyContent="space-around" style={{ marginTop: '10px' }}>
        <Grid item style={iconStyle}>
                <FaNodeJs size={30} color="#3e8e41" />
                <Typography variant="body2" style={{ color: '#fff' }}>Node.js</Typography>
              </Grid>
              <Grid item style={iconStyle}>
                <FaPython size={30} color="#306998" />
                <Typography variant="body2" style={{ color: '#fff' }}>Python</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Tools Section */}
        <Grid item xs={12} md={3}>
        <Paper elevation={3} sx={{background : 'rgb(31, 41, 55) ',padding: '20px', textAlign: 'center' }}>
        <Typography variant="h6">Tools</Typography>
        <Grid container spacing={2} justifyContent="space-around" style={{ marginTop: '10px' }}>
        <Grid item style={iconStyle}>
                <FaDocker size={30} color="#0f4b5f" />
                <Typography variant="body2" style={{ color: '#fff' }}>Docker</Typography>
              </Grid>
              <Grid item style={iconStyle}>
                <FaGithub size={30} color="#3e4b48" />
                <Typography variant="body2" style={{ color: '#fff' }}>GitHub</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Database Section */}
        <Grid item xs={12} md={3}>
        <Paper elevation={3} sx={{background : 'rgb(31, 41, 55) ',padding: '20px', textAlign: 'center' }}>
        <Typography variant="h6">Database</Typography>
        <Grid container spacing={2} justifyContent="space-around" style={{ marginTop: '10px' }}>
        <Grid item style={iconStyle}>
                <FaDatabase size={30} color="#4caf50" />
                <Typography variant="body2" style={{ color: '#fff' }}>MongoDB</Typography>
              </Grid>
              <Grid item style={iconStyle}>
                <FaAws size={30} color="#ff9900" />
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
