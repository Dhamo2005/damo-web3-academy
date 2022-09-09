import React, { useState } from 'react';
import Image from "next/image";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIconOutlined from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Logo from "../assets/images/logos/Damo Softwares Fevicon.svg";
import { ThemeProvider, createTheme } from "@mui/material/styles";
// import { Container, Drawer } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#ffffff",
    },
  },
});

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const IconBtn = styled(IconButton)(({ theme }) => ({
  color: '#525960',
  '&:hover':{
    color: '#242424'
  }
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#525960',
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Home() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  return (
    <ThemeProvider theme={lightTheme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" backgroundcolor="white">
          <Toolbar varient="dense">
            <IconBtn
              size="large"
              edge="start"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconBtn>
            <Image
              padding="0"
              sx={{ display: { xs: "block" } }}
              alt="Damo Web 3.0 Academy"
              src={Logo}
              width={50}
              height={50}
            />
            <Search>
              <SearchIconWrapper>
                <SearchIcon sx={{color: '#525960'}} />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: "flex" }}>
              <IconBtn
                size="large"
                aria-label="Search"
              >
                <SearchIcon />
              </IconBtn>
              <IconBtn
                size="large"
                aria-label="show 4 new mails"
              >
                <Badge badgeContent={4} color="error">
                  <MailIconOutlined />
                </Badge>
              </IconBtn>
              <IconBtn
                size="large"
                aria-label="show 17 new notifications"
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconBtn>
              <IconBtn
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
              >
                <AccountCircle />
              </IconBtn>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMenu}
      </Box>
      {/* <Box>
        <Container>
        <Drawer
      anchor="left"
      open={drawer}
    >
      hello
    </Drawer>
        </Container>
      </Box> */}
    </ThemeProvider>
  );
}

// import Head from "next/head";
// import Navbar from "../components/navbar";
// import Sidebar from "../components/Sidebar";
// import Feed from "../components/Feed";
// import Rightbar from "../components/Rightbar";
// import { Box, Stack } from "@mui/material";

// export default function Home() {
//   return (
//     <Box>
//       <Head>
//         <title>Home Page | Damo Softwares</title>
//       </Head>
//       <Navbar />
//       <Stack direction="row" spacing={2} justifyContent="space-between">
//         <Sidebar />
//         <Feed />
//         <Rightbar />
//       </Stack>
//     </Box>
//   );
// }
