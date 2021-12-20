import React from "react";
import {DarkMode, LightMode, Menu} from "@mui/icons-material";
import {AppBar, IconButton, Toolbar, Typography} from "@mui/material";
import {Box} from "@mui/system";

interface Props {
  darkMode: boolean;
  toggleDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  toggleDrawer: () => void;
  drawerWidth: number;
}

const CustomAppBar = ({
                        darkMode,
  toggleDarkMode,
  toggleDrawer,
  drawerWidth,
}: Props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, display: { sm: "none" } }}
            onClick={toggleDrawer}
          >
            <Menu />
          </IconButton>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h5" noWrap component="div" color="#008073">
              Vishnu Bochiwal
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
              onClick={() => toggleDarkMode(!darkMode)}
            >
              {darkMode ? <LightMode /> : <DarkMode />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default CustomAppBar;
