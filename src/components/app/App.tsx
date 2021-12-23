import GlobalStyle from "../../utils/global-style";
import createCustomTheme from "../../utils/theme";
import { useState } from "react";
import { Box, ThemeProvider } from "@mui/material";
import Header from "../header/Header";
import ResponsiveDrawer from "../responsive-drawer/ResponsiveDrawer";
import About from "../about/About";

function App() {
  let [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={createCustomTheme(darkMode)}>
      <GlobalStyle />
      <ResponsiveDrawer darkMode={darkMode} toggleDarkMode={setDarkMode}>
        <Box>
          <Header />
          <About />
        </Box>
      </ResponsiveDrawer>
    </ThemeProvider>
  );
}

export default App;
