import React from "react";
import {
  AlternateEmail,
  Category,
  CloudDownload,
  DataObject,
  Grade,
  Person,
  School,
  Timeline,
} from "@mui/icons-material";
import {
  CssBaseline,
  Divider,
  Drawer,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  List,
} from "@mui/material";
import { Box } from "@mui/system";
import CustomAppBar from "../app-bar/CustomAppBar";

const drawerWidth = 240;

interface Props {
  children: JSX.Element;
  darkMode: boolean;
  toggleDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const ResponsiveDrawer = ({ children, darkMode, toggleDarkMode }: Props) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem button key="about">
          <ListItemIcon>
            <Person />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button key="experience">
          <ListItemIcon>
            <Timeline />
          </ListItemIcon>
          <ListItemText primary="Experience" />
        </ListItem>
        <ListItem button key="projects">
          <ListItemIcon>
            <Category />
          </ListItemIcon>
          <ListItemText primary="Projects" />
        </ListItem>
        <ListItem button key="skills">
          <ListItemIcon>
            <DataObject />
          </ListItemIcon>
          <ListItemText primary="Skills" />
        </ListItem>
        <ListItem button key="certifications">
          <ListItemIcon>
            <Grade />
          </ListItemIcon>
          <ListItemText primary="Certifications" />
        </ListItem>
        <ListItem button key="education">
          <ListItemIcon>
            <School />
          </ListItemIcon>
          <ListItemText primary="Education" />
        </ListItem>
        <ListItem button key="contact">
          <ListItemIcon>
            <AlternateEmail />
          </ListItemIcon>
          <ListItemText primary="Contact" />
        </ListItem>
        <ListItem button key="resume">
          <ListItemIcon>
            <CloudDownload />
          </ListItemIcon>
          <ListItemText primary="Resume" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <CustomAppBar
        toggleDrawer={handleDrawerToggle}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        drawerWidth={drawerWidth}
      />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default ResponsiveDrawer;
