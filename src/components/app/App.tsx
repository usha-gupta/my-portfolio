import CustomAppBar from "../app-bar/CustomAppBar";
import GlobalStyle from "../../utils/global-style";
import createCustomTheme from "../../utils/theme";
import { useState } from "react";
import { ThemeProvider } from "@mui/material";
import DrawerResponsive from "../drawer-responsive/ResponsiveDrawer";

function App() {
  let [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={createCustomTheme(darkMode)}>
      <GlobalStyle />
      <DrawerResponsive darkMode={darkMode} toggleDarkMode={setDarkMode}>
        <p>This is main content</p>
      </DrawerResponsive>
    </ThemeProvider>
  );
}

export default App;
