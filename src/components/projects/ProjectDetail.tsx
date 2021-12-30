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
import { Close } from "@mui/icons-material";
import styled from "styled-components";
import { Project } from "./project.model";

const StyledImage = styled.img`
  width: 100%;
  border: ${({ theme }) => `4px solid ${theme.palette.primary.main}`};
`;

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
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
      {onClose ? (
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
      ) : null}
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
        <StyledImage
          theme={theme}
          src={project.image}
          alt={`${project.name} screenshot`}
        />
        <Typography gutterBottom>{project.description}</Typography>
        <Box sx={{ mx: 2, mb: 2 }}>
          <ul>
            {project.accomplishments.map((accomplishment) => (
              <li key={accomplishment}>{accomplishment}</li>
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
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Github</Button>
        <Button onClick={handleClose}>View</Button>
      </DialogActions>
    </BootstrapDialog>
  );
};

export default ProjectDetail;
