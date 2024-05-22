import React from "react";
import AppLayout from "../components/layout/AppLayout";
import { Box, Typography } from "@mui/material";

const home = () => {
  return (
    <Box bgcolor={"rgba(0,0,0,0.1)"} height={"100%"}>
      <Typography p={"2rem"} variant="h5" textAlign={"center"}>
        Select A Friend To Chat
      </Typography>
    </Box>
  );
};

export default AppLayout()(home);
