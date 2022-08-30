import React from "react";
import { AppBar, Toolbar, styled, Typography, Box, InputBase } from "@mui/material";
import { Pets } from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({theme}) =>({
  backgroundColor:"white",
  padding:"0 10px",
  borderRadius: theme.shape.borderRadius,
  width:"40%"
}));

const Icons = styled(Box)(({theme}) =>({
  backgroundColor:"white"
}));

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography varient="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Damo Web 3.0 Academy
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <Search><InputBase placeholder="Search..."/></Search>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
