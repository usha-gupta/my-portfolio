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
import { Divider, useMediaQuery, useTheme } from "@mui/material";
import CustomAppBar from "../app-bar/CustomAppBar";
import Logo from "../../assets/images/logo.png";

const drawerWidth = 240;

interface Props {
  children: JSX.Element;
  darkMode: boolean;
  toggleDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  selectedIndex: number;
}

export default function ResponsiveDrawer(props: Props) {
  const { children, darkMode, toggleDarkMode, selectedIndex } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuItemClick = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const drawer = (
    <div>
      <Box
        sx={{
          mr: 2,
          display: { xs: "none", sm: "flex" },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={Logo} alt="Vishnu Bochiwal Logo" style={{ height: "8rem" }} />
      </Box>
      <Divider />
      <List>
        <ListItem
          button
          key="about"
          data-testid="about"
          onClick={() => handleMenuItemClick("about-section")}
          selected={selectedIndex === 0}
        >
          <ListItemIcon>
            <Person />
          </ListItemIcon>
          <ListItemText primary="About Me" />
        </ListItem>
        <ListItem
          button
          key="experiences"
          data-testid="experiences"
          onClick={() => handleMenuItemClick("experiences-section")}
          selected={selectedIndex === 1}
        >
          <ListItemIcon>
            <Timeline />
          </ListItemIcon>
          <ListItemText primary="Experiences" />
        </ListItem>
        <ListItem
          button
          key="projects"
          data-testid="projects"
          onClick={() => handleMenuItemClick("projects-section")}
          selected={selectedIndex === 2}
        >
          <ListItemIcon>
            <Category />
          </ListItemIcon>
          <ListItemText primary="Projects" />
        </ListItem>
        <ListItem
          button
          key="skills"
          data-testid="skills"
          onClick={() => handleMenuItemClick("skills-section")}
          selected={selectedIndex === 3}
        >
          <ListItemIcon>
            <DataObject />
          </ListItemIcon>
          <ListItemText primary="Skills" />
        </ListItem>
        <ListItem
          button
          key="certifications"
          data-testid="certifications"
          onClick={() => handleMenuItemClick("certifications-section")}
          selected={selectedIndex === 4}
        >
          <ListItemIcon>
            <Grade />
          </ListItemIcon>
          <ListItemText primary="Certifications" />
        </ListItem>
        <ListItem
          button
          key="education"
          data-testid="education"
          onClick={() => handleMenuItemClick("education-section")}
          selected={selectedIndex === 5}
        >
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
        <Drawer
          variant={isDesktop ? "permanent" : "temporary"}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
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
