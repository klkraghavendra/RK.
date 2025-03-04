import React from 'react';
import { Grid, Card, CardContent, Typography, Container, Box, IconButton } from '@mui/material';
import { GitHub, Launch } from '@mui/icons-material';

// Importing project images
import BewakoofCloneImage from '../../assets/Bewakoof_Clone.png';
import GrosseryStoreImage from '../../assets/Grossery_Store.png';
import CarRentalImage from '../../assets/Car_Rental.png';
import AppendImage from '../../assets/Append_Website.png';
import PortfolioImage from '../../assets/Portfolio_IMG.png';
import StockComparatorImage from '../../assets/Stock_Comparator.png';

const projects = [
  { 
    title: 'Bewakoof Clone', 
    description: 'Bewakoof Clone is an e-commerce website designed to replicate the user experience and functionality of the popular clothing brand "Bewakoof." This project focuses on showcasing my ability to build a responsive, interactive online store using modern web development technologies.', 
    tools: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'React'],
    image: BewakoofCloneImage,
    githubLink: 'https://github.com/yourusername/bewakoof-clone',
    liveDemoLink: 'https://yourdemo.com/bewakoof-clone'
  },
  { 
    title: 'Portfolio Website', 
    description: 'A personal portfolio website showcasing my skills, projects, and experience in web development. Designed with a modern, clean layout, it highlights my work across various domains, offering visitors an easy way to explore my projects and get in touch for potential collaborations.', 
    tools: ['JavaScript', 'React.js', 'Material UI'],
    image: PortfolioImage,
    githubLink: 'https://github.com/yourusername/portfolio',
    liveDemoLink: 'https://yourdemo.com/portfolio'
  },
  { 
    title: 'Grossery Store', 
    description: 'The Grossery Store is an e-commerce website for buying groceries online, offering an intuitive shopping experience. This project demonstrates my ability to build functional and visually appealing websites with a focus on user experience, leveraging modern front-end technologies.', 
    tools: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    image: GrosseryStoreImage,
    githubLink: 'https://surl.li/ruumhs',
    liveDemoLink: 'https://grocery-store-zeta-lake.vercel.app/'
  },
  { 
    title: 'Car Rental Website', 
    description: 'A comprehensive platform designed to simplify the car rental and sales process, allowing users to easily browse, rent, or purchase vehicles. Featuring a clean, user-friendly interface, it provides seamless booking options, vehicle management, and secure payment methods for customers.', 
    tools: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    image: CarRentalImage,
    githubLink: 'https://surl.li/pocliw',
    liveDemoLink: 'https://car-rental-website-eta.vercel.app/'
  },
  { 
    title: 'Append Website Template', 
    description: 'A fully responsive website template built using HTML, CSS, and Bootstrap. Designed with modern, clean aesthetics and optimized for performance, this template can be easily customized for various web projects, providing solid and flexible foundation for any website design or development needs.', 
    tools: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    image: AppendImage,
    githubLink: 'https://surl.li/xbybnl',
    liveDemoLink: 'https://website-one-three.vercel.app/'
  },
  {
    title: 'Stocks Comparator',
    description: 'The "Stocks Comparator" project compares stock market performance using real-time data and advanced analytics. Built with HTML, CSS, JavaScript, and Python/Flask, it stores data in PostgreSQL & hosted on Netlify for easy access, seamless user experience, and real-time interaction.',
    tools: ['HTML', 'CSS', 'JavaScript', 'Python', 'Flask', 'PostgreSQL', 'Netlify'],
    image: StockComparatorImage,
    githubLink: 'https://github.com/yourusername/append-template',
    liveDemoLink: 'https://yourdemo.com/append-template'
  },
];

const Projects = () => (
  <Container id="projects" sx={{ mt: 14, mb: 8 }}>
    {/* Section Heading */}
    <Typography
      variant="h4"
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
      Projects
    </Typography>

    {/* Project cards */}
    <Grid container spacing={4}>
      {projects.map((project, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card>
            <CardContent>
              {/* Project Title */}
              <Typography
                variant="h6"
                gutterBottom
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
                {project.title}
              </Typography>
              
              {/* Project Image */}
              <img 
                src={project.image} 
                alt={project.title} 
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  marginBottom: '16px',
                }} 
              />
              
              {/* Project Description */}
              <Typography
                variant="body2"
                paragraph
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
                {project.description}
              </Typography>
              
              {/* Tools */}
              <Typography 
              variant="body2"
              sx={{
                color: 'rgb(68, 68, 68)',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '13px',
                lineHeight: '19.2px',
                fontWeight: 600,
                textTransform: 'none',
                textDecoration: 'none solid rgb(68, 68, 68)',
                textAlign: 'justify',
                letterSpacing: 'normal',
                wordSpacing: '0px',
              }}
              >
                Tools: {project.tools.join(', ')}
              </Typography>
              
              {/* GitHub & Launch Icons */}
              <Box 
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  mt: 2,
                  gap: 2
                }}
              >
                <IconButton 
                  component="a"
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ 
                    color: 'rgb(41, 120, 181)', 
                    fontSize: '24px', 
                    lineHeight: '36px' 
                  }}
                >
                  <GitHub fontSize="inherit" />
                </IconButton>
                <IconButton 
                  component="a"
                  href={project.liveDemoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ 
                    color: 'rgb(41, 120, 181)', 
                    fontSize: '24px', 
                    lineHeight: '36px' 
                  }}
                >
                  <Launch fontSize="inherit" />
                </IconButton>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Projects;
