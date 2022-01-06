import React from "react";
import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import SkillsData from "./data";

const Skills = () => {
  return (
    <Box sx={{ p: 4, pt: 8 }} id="skills-section">
      <Typography
        variant="h3"
        textAlign="center"
        gutterBottom
        color="primary"
        fontWeight="500"
      >
        Skills
      </Typography>
      {SkillsData.map((skillCategory) => (
        <Card key={skillCategory.name} sx={{ mb: 2 }} variant="outlined">
          <CardContent>
            <Typography variant="h5" color="primary">
              {skillCategory.name}
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Grid container spacing={2}>
              {skillCategory.skills.map((skill) => (
                <Grid
                  key={skill.name}
                  item
                  xs={4}
                  lg={2}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: "100px",
                      height: "100px",
                      mb: 2,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      style={{ maxWidth: "100px", maxHeight: "100px" }}
                    />
                  </Box>
                  <Typography textAlign="center">{skill.name}</Typography>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default Skills;
