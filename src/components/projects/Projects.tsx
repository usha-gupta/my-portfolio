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

const Projects = () => {
  return (
    <Box
      sx={{
        p: 4,
      }}
    >
      <Typography variant="h3" textAlign="center" gutterBottom>
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
            <Card>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={project.image}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
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
    </Box>
  );
};

export default Projects;
