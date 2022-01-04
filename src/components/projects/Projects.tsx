import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import projects from "./data";
import ProjectDetail from "./ProjectDetail";
import { Project } from "./project.model";

const Projects = () => {
  const [openProjectDetail, setOpenProjectDetail] = useState(false);
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  const handleCardClick = (project: Project) => {
    setSelectedProject(project);
    setOpenProjectDetail(true);
  };
  return (
    <Box
      id="projects-section"
      sx={{
        p: 4,
        pt: 8
      }}
    >
      <Typography variant="h3" textAlign="center" gutterBottom color="primary" fontWeight="500">
        Projects
      </Typography>

      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {projects.map((project) => (
          <Grid
            item
            key={project.name}
            lg={4}
            md={6}
            sm={12}
            sx={{ position: "relative" }}
          >
            <Card
              onClick={() => handleCardClick(project)}
              data-testid="project-card"
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={project.image}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  data-testid="project-title"
                  color="primary"
                >
                  {project.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <ProjectDetail
        project={selectedProject}
        open={openProjectDetail}
        handleClose={() => setOpenProjectDetail(false)}
      />
    </Box>
  );
};

export default Projects;
