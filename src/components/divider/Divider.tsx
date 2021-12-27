import { Box } from "@mui/material";
import React from "react";
import DarkVariant from "./DarkVariant";
import LightVariant from "./LightVariant";

interface Props {
  width: string;
  variant: string;
}

const Divider = (props: Props) => {
  const { width, variant } = props;
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Box sx={{ width }}>
        {variant === "light" ? <LightVariant /> : <DarkVariant />}
      </Box>
    </Box>
  );
};

export default Divider;
