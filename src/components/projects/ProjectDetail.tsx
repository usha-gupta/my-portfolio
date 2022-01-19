import React from "react";
import {
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ArrowForward, Close, GitHub } from "@mui/icons-material";
import styled from "styled-components";
import { Project } from "./project.model";
import AdvanceImg from "../advance-img/AdvanceImg";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(0),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose && (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <Close />
        </IconButton>
      )}
    </DialogTitle>
  );
};

interface ProjectDetailProps {
  open: boolean;
  handleClose: () => void;
  project: Project;
}

const ProjectDetail = (props: ProjectDetailProps) => {
  const { open, handleClose, project } = props;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      fullScreen={fullScreen}
      theme={theme}
    >
      <BootstrapDialogTitle
        id="customized-dialog-title"
        onClose={handleClose}
        data-testid="modal-project-title"
      >
        {project.name}
      </BootstrapDialogTitle>
      <DialogContent dividers>
        <AdvanceImg
          src={project.image}
          srcWebp={project.imageWebp}
          altText={`${project.name} screenshot`}
          style={{ width: "100%" }}
        />
        <Box sx={{ p: 2 }}>
          <Typography gutterBottom variant="body1">
            {project.description}
          </Typography>
          <Box sx={{ mx: 2, mb: 2 }}>
            <ul>
              {project.accomplishments.map((accomplishment) => (
                <li key={accomplishment}>
                  <Typography variant="body1">{accomplishment}</Typography>
                </li>
              ))}
            </ul>
          </Box>
          <div>
            {project.skills.map((skill) => (
              <Chip
                key={skill}
                label={skill}
                variant="outlined"
                sx={{ mr: 1, mb: 1 }}
              />
            ))}
          </div>
        </Box>
      </DialogContent>
      <DialogActions>
        {project.githubLink && (
          <Button
            target="_blank"
            href={project.githubLink}
            startIcon={<GitHub />}
            variant="outlined"
          >
            Github
          </Button>
        )}
        {project.websiteLink && (
          <Button
            target="_blank"
            href={project.websiteLink}
            endIcon={<ArrowForward />}
            variant="outlined"
          >
            View
          </Button>
        )}
      </DialogActions>
    </BootstrapDialog>
  );
};

export default ProjectDetail;
