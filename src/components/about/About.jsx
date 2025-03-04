import React from 'react';
import { Grid, Paper, Typography, Step, StepLabel, Stepper, Box, Divider } from '@mui/material';


// Industry Experience Steps
const industryExperience = [
  {
    label: 'Internship',
    Company: 'React Developer at Rego Digital Solutions Pvt. Ltd.',
    description: 'Designed and implemented responsive user interfaces using React.js, ensuring cross-browser and cross-device compatibility. Collaborated with a team to maintain and optimize the website, improving load times by 20%. Enhanced site reliability by debugging and resolving critical issues, ensuring a seamless user experience.',
    date: 'Apr 2024 - Present',
  },
  {
    label: 'Internship',
    Company: 'Web Developer at Binary bridge Technologies India Pvt Ltd',
    description: 'Built and deployed responsive, user-centric websites using Front-End Technology enhancing mobile compatibility by 30%. Collaborated with senior developers in an agile team to develop user-friendly interfaces. Delivered weekly project updates in daily stand-ups, improving team alignment and project transparency.',
    date: 'Sep 2023 - Dec 2023',
  },
  // {
  //   label: 'Intern at Tech Innovators',
  //   description: 'Assisted with software testing and debugging during the internship.',
  //   date: '2017 - 2018',
  // },
];

// Education Steps
const education = [
  {
    label: 'Bachelor of Technology',
    college:'Savitribai Phule Pune University (SPPU)',
    description: 'Designed and implemented responsive user interfaces using React.js, ensuring cross-browser and cross-device compatibility across multiple platforms. Collaborated with a dedicated team to maintain and optimize the website, improving load times by 20%. Enhanced overall site reliability by debugging and resolving critical issues, ensuring a seamless and consistent user experience.',
    date: '2020 - 2023',
  },
  {
    label: 'Engineering Diploma',
    college: 'Maharashtra State Board of technical Education (MSBTE)',
    description: 'Built and deployed responsive, user-centric websites using Front-End Technology enhancing mobile compatibility by 30%. Collaborated with senior developers in an agile team to develop user-friendly interfaces, contributing to a 20% increase in engagement. Delivered weekly updates in daily stand-ups, improving team alignment and transparency.',
    date: '2015 - 2019',
  },
];

const Timeline = () => {
  return (
    <Box id="about" sx={{ mt: 14, mb: 8 }}>
      <Typography 
        variant="h4" 
        align="center" 
        gutterBottom
        sx={{
          color: 'rgb(68, 68, 68)',
          fontFamily: 'Poppins, sans-serif',
          fontSize: '40px',
          lineHeight: '38.4px',
          fontWeight: 700,
          textTransform: 'uppercase',
          textAlign: 'center',
          textDecoration: 'none',
        }}
      >
          ABOUT
      </Typography>

      {/* Industry Experience Timeline */}
      <Box mb={4}>
        <Typography 
          variant="h5" 
          align="center" 
          sx={{
            color: 'rgb(68, 68, 68)',
            fontFamily: 'Poppins, sans-serif',
            fontSize: '24px',
            lineHeight: '28.8px',
            fontWeight: 700,
            textTransform: 'none',
            textDecoration: 'none solid rgb(68, 68, 68)',
            textAlign: 'center',
            letterSpacing: 'normal',
            wordSpacing: '0px',
          }}
        >
          Industry Experience
        </Typography>
        <Stepper 
          alternativeLabel 
          activeStep={industryExperience.length - 1} 
          sx={{marginBottom: 2}}
        >
          {industryExperience.map((step, index) => (
            <Step key={index}>
              <StepLabel>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: 'rgb(68, 68, 68)',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '18px',
                    lineHeight: '28.8px',
                    fontWeight: 700,
                    textTransform: 'none',
                    textDecoration: 'none solid rgb(68, 68, 68)',
                    textAlign: 'center',
                    letterSpacing: 'normal',
                    wordSpacing: '0px',
                  }}
                >
                  {step.label} ({step.date})
                </Typography>
              </StepLabel>
            </Step>
          ))}
        </Stepper>

        <Grid container spacing={4} justifyContent="center">
          {industryExperience.map((step, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper elevation={3} sx={{ padding: 2, backgroundColor: '#e3f2fd' }}>
                <Typography variant="h6" 
                  align="justify" 
                  sx={{
                    color: 'rgb(68, 68, 68)',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '20px',
                    lineHeight: '28.8px',
                    fontWeight: 700,
                    textTransform: 'none',
                    textDecoration: 'none solid rgb(68, 68, 68)',
                    textAlign: 'justify',
                    letterSpacing: 'normal',
                    wordSpacing: '0px', 
                    }}
                  >
                  {step.Company}
                </Typography>
                <Typography 
                  variant="body2" 
                  align="Justify" 
                  sx={{
                    color: 'rgb(85, 85, 85)',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '16px',
                    lineHeight: '24px',
                    fontWeight: 400,
                    textTransform: 'none',
                    textDecoration: 'none solid rgb(85, 85, 85)',
                    textAlign: 'justify',
                    letterSpacing: 'normal',
                    wordSpacing: '0px',
                  }}
                >
                  {step.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Divider sx={{ marginY: 4 }} />

      {/* Education Timeline */}
      <Box>
        <Typography variant="h5" 
          align="center" 
          sx={{
            marginBottom: 2,
            color: 'rgb(68, 68, 68)',
            fontFamily: 'Poppins, sans-serif',
            fontSize: '24px',
            lineHeight: '28.8px',
            fontWeight: 700,
            textTransform: 'none',
            textDecoration: 'none solid rgb(68, 68, 68)',
            textAlign: 'center',
            letterSpacing: 'normal',
            wordSpacing: '0px',
            }}
          >
          Education
        </Typography>
        <Stepper alternativeLabel activeStep={education.length - 1} sx={{ marginBottom: 2 }}>
          {education.map((step, index) => (
            <Step key={index}>
              <StepLabel>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: 'rgb(68, 68, 68)',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '18px',
                    lineHeight: '28.8px',
                    fontWeight: 700,
                    textTransform: 'none',
                    textDecoration: 'none solid rgb(68, 68, 68)',
                    textAlign: 'center',
                    letterSpacing: 'normal',
                    wordSpacing: '0px',
                  }}
                >
                  {step.label} ({step.date})
                </Typography>
              </StepLabel>
            </Step>
          ))}
        </Stepper>

        <Grid container spacing={4} justifyContent="center">
          {education.map((step, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper elevation={3} sx={{ padding: 2, backgroundColor: '#e3f2fd' }}>
                <Typography 
                  variant="h6" 
                  align="justify" 
                  sx={{
                    color: 'rgb(68, 68, 68)',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '18px',
                    lineHeight: '28.8px',
                    fontWeight: 700,
                    textTransform: 'none',
                    textDecoration: 'none solid rgb(68, 68, 68)',
                    textAlign: 'justify',
                    letterSpacing: 'normal',
                    wordSpacing: '0px',
                    }}
                  >
                  {step.college}
                </Typography>
                <Typography 
                  variant="body2" 
                  align="Justify" 
                  sx={{
                    color: 'rgb(85, 85, 85)',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '16px',
                    lineHeight: '24px',
                    fontWeight: 400,
                    textTransform: 'none',
                    textDecoration: 'none solid rgb(85, 85, 85)',
                    textAlign: 'justify',
                    letterSpacing: 'normal',
                    wordSpacing: '0px',
                  }}
                >
                  {step.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Timeline;
