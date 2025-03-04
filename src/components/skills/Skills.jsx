import React from "react";
import { Grid, Chip, Container, Typography, Box } from "@mui/material";

const skills = [
  "HTML",
  "CSS",
  "Bootstrap",
  "Tailwind Css",
  "JavaScript",
  "React.js",
  "Redux",
  "Material.UI",
  "GitHub",
  "Git",
  "MongoDB",
  "MySQL",
  "Express.js",
  "Node.js",
];

const Skills = () => (
  <Container id="skills" sx={{ mt: 11, mb: 8, textAlign: "center" }}>
    {/* Title */}
    <Typography
      variant="h4"
      fontWeight="bold"
      gutterBottom
      sx={{
        color: "rgb(68, 68, 68)",
        fontFamily: "Poppins, sans-serif",
        fontSize: "40px",
        lineHeight: "38.4px",
        fontWeight: 700,
        textTransform: "uppercase",
        textAlign: "center",
        textDecoration: "none",
      }}
    >
      Skills
    </Typography>

    {/* Wrapper Box for styling */}
    <Box
      sx={{
        maxWidth: "500px",
        width: "95%",
        margin: "0 auto",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {/* Skills Grid */}
      <Grid container spacing={2} justifyContent="center">
        {skills.map((skill, index) => (
          <Grid item xs={6} sm={3} key={index}>
            {/* Square Chip with Text Styling */}
            <Chip
              label={skill}
              variant="outlined"
              sx={{
                fontSize: "14.4px",
                fontWeight: 500,
                fontFamily: "Poppins, sans-serif",
                lineHeight: "21.6px",
                verticalAlign: "baseline",
                letterSpacing: "normal",
                wordSpacing: "0px",
                fontStyle: "normal",
                fontVariant: "normal",
                textTransform: "none",
                textDecoration: "none solid rgb(85, 85, 85)",
                textAlign: "left",
                textIndent: "0px",
                color: "rgb(85, 85, 85)",
                padding: "10px",
                boxShadow: 1,
                borderRadius: 0, // Square shape
                width: "100%", // Ensures consistent size
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  </Container>
);

export default Skills;
