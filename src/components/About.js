import React from "react";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <div>
      <Box display="felx" flexDirection="column" alignItems="center">
        <Typography sx={{ fontFamily: "fantasy" }} variant="h2">
          This is a CRUD Application By Hasini
        </Typography>
        <Typography sx={{ fontFamily: "fantasy" }} variant="h3">
          By MERN Stack
        </Typography>
      </Box>
    </div>
  );
};

export default About;
