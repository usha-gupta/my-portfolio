import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
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
import CustomAppBar from "../app-bar/CustomAppBar";

const drawerWidth = 240;

interface Props {
  children: JSX.Element;
  darkMode: boolean;
  toggleDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ResponsiveDrawer(props: Props) {
  const { children, darkMode, toggleDarkMode } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
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
        darkMode={darkMode}
        toggleDrawer={handleDrawerToggle}
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
          // container={container}
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
          width: { xs: "100%", sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
