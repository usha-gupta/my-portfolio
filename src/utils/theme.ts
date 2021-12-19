import { createTheme } from "@mui/material";

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
