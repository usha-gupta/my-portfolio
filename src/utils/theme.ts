import { createTheme } from "@mui/material";
import { dark, light } from "@mui/material/styles/createPalette";

const createCustomTheme = (darkMode: boolean) => {
  return createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: "#fff",
      },
    },
  });
};

export default createCustomTheme;
