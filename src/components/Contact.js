import React from 'react';
import { Grid, Typography, Card, CardContent, Box, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import { Email, Phone, LocationOn } from '@mui/icons-material'; // Importing icons

// Custom Styled Components
const SectionTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 700,
  fontSize: '2.5rem',
  marginBottom: '30px',
  textAlign: 'center',
}));

const ContactCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
  borderRadius: '15px',
  padding: '30px',
  marginTop: '20px',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  zIndex: 1, // Lower z-index for mobile responsiveness
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)',
  },
  '@media (max-width: 600px)': {
    zIndex: 0, // Ensure no overlap on mobile screens
    marginTop: '10px', // Reduced margin for mobile screens
    padding: '15px', // Adjust padding for smaller screens
    width: '100%', // Ensure it occupies full width on mobile
    boxSizing: 'border-box', // Prevent overflow by including padding in the width calculation
  },
}));

const InfoItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '20px', // Adjusted margin for better spacing
  color: theme.palette.text.primary,
}));

const InfoText = styled(Typography)(({ theme }) => ({
  marginLeft: '15px',
  fontSize: '1.3rem', // Increased font size for better readability
  fontWeight: 500, // Increased boldness
  color: theme.palette.text.primary,
  textDecoration: 'none',
  '&:hover': {
    color: theme.palette.primary.main,
    cursor: 'pointer',
  },
}));

const Contact = ({ darkMode }) => {
  const theme = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='contact'
    >
      <Box
        sx={{
          padding: '80px 20px',
          background: darkMode ? 'rgb(19, 28, 47)' : '#f4f4f4',
          borderRadius: '12px',
          maxWidth: '1600px',
          margin: '0 auto',
        }}
      >
        <SectionTitle variant="h4">
          Let's Connect 👋
        </SectionTitle>
        <Typography
          variant="body1"
          align="center"
          style={{
            color: theme.palette.text.secondary,
            marginBottom: '40px',
            fontWeight: 400,
          }}
        >
          Reach out to me via any of the below channels
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {/* Contact Info Card */}
          <Grid item xs={12} sm={8} md={6} lg={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <ContactCard>
                <CardContent>
                  {/* Email Info */}
                  <InfoItem>
                    <Email fontSize="large" style={{ color: theme.palette.mode === 'dark' ? 'white' : 'black' }} />
                    <InfoText>
                      <a
                        href="mailto:swaminaidu874@gmail.com"
                        style={{
                          color: theme.palette.text.primary,
                          textDecoration: 'none',
                        }}
                      >
                        swaminaidu874@gmail.com
                      </a>
                    </InfoText>
                  </InfoItem>
                  <Divider sx={{ margin: '10px 0' }} />

                  {/* Phone Info */}
                  <InfoItem>
                    <Phone fontSize="large" style={{ color: theme.palette.mode === 'dark' ? 'white' : 'black' }} />
                    <InfoText>
                      <a
                        href="tel:+919014725899"
                        style={{
                          color: theme.palette.text.primary,
                          textDecoration: 'none',
                        }}
                      >
                        +91 9014725899
                      </a>
                    </InfoText>
                  </InfoItem>
                  <Divider sx={{ margin: '10px 0' }} />

                  {/* Location Info */}
                  <InfoItem>
                    <LocationOn fontSize="large" style={{ color: theme.palette.mode === 'dark' ? 'white' : 'black' }} />
                    <InfoText>Hyderabad, India</InfoText>
                  </InfoItem>
                </CardContent>
              </ContactCard>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </motion.div>
  );
};

export default Contact;
