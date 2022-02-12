import { forwardRef, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import styled from "styled-components";
import projects from "./data";
import ProjectDetail from "./ProjectDetail";
import { Project } from "./project.model";
import AdvanceImg from "../advance-img/AdvanceImg";

const ProjectDescriptionStyled = styled(Typography)`
  height: 60px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box !important;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  white-space: normal;
`;

const Projects = forwardRef((_, ref) => {
  const [openProjectDetail, setOpenProjectDetail] = useState(false);
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  const handleCardClick = (project: Project) => {
    setSelectedProject(project);
    setOpenProjectDetail(true);
  };
  return (
    <Box
      ref={ref}
      id="projects-section"
      sx={{
        p: { xs: 2, sm: 4 },
        pt: 8,
      }}
    >
      <Typography
        variant="h3"
        textAlign="center"
        gutterBottom
        color="primary"
        fontWeight="500"
        fontSize={{ xs: "2.125rem", sm: "3rem" }}
      >
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
              variant="outlined"
            >
              <AdvanceImg
                src={project.image}
                srcWebp={project.imageWebp}
                altText={`${project.name} screenshot`}
                style={{
                  display: "block",
                  width: "100%",
                  height: "140px",
                  objectFit: "cover",
                }}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  data-testid="project-title"
                  color="primary"
                  sx={{
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                  }}
                >
                  {project.name}
                </Typography>
                <ProjectDescriptionStyled
                  variant="body2"
                  color="text.secondary"
                  textAlign="justify"
                >
                  {project.description}
                </ProjectDescriptionStyled>
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
});

export default Projects;
