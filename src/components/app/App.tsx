import { useEffect, useState } from "react";
import { Box, ThemeProvider, useMediaQuery } from "@mui/material";
import GlobalStyle from "../../utils/global-style";
import createCustomTheme from "../../utils/theme";
import Header from "../header/Header";
import ResponsiveDrawer from "../responsive-drawer/ResponsiveDrawer";
import About from "../about/About";
import Experiences from "../experiences/Experiences";
import Divider from "../divider/Divider";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [darkMode, setDarkMode] = useState(prefersDarkMode);
  useEffect(() => {
    setDarkMode(prefersDarkMode);
  }, [prefersDarkMode]);

  return (
    <ThemeProvider theme={createCustomTheme(darkMode)}>
      <GlobalStyle />
      <ResponsiveDrawer darkMode={darkMode} toggleDarkMode={setDarkMode}>
        <Box>
          <Header />
          <About />
          <Divider width="60%" variant={darkMode ? "dark" : "light"} />
          <Experiences />
        </Box>
      </ResponsiveDrawer>
    </ThemeProvider>
  );
}

export default App;
