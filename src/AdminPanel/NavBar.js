import * as React from "react";
import App from "./App.css"
import AppBar from "@mui/material/AppBar";

import Box from "@mui/material/Box";

import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";

import Button from "@mui/material/Button";

import IconButton from "@mui/material/IconButton";

import MenuIcon from "@mui/icons-material/Menu";

import { Link, MenuItem, Menu } from "@mui/material";

import logo from "../assets/logo.png";

export default function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-menu";

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <Link href="#" color="inherit" className="Navstyles">
          Product
        </Link>
      </MenuItem>

      <MenuItem onClick={handleMenuClose}>
        <Link href="aboutus" color="inherit" className="Navstyles">
          About
        </Link>
      </MenuItem>

      <MenuItem onClick={handleMenuClose}>
        <Link href="#" color="inherit" className="Navstyles">
          Contact
        </Link>
      </MenuItem>
    </Menu>
  );

  return (
    <AppBar position="static" color="default" elevation={1} py={3} >
      <Box container>
        <Toolbar
          sx={{
            marginLeft: { xs: "0", md: "5%" },

            marginRight: { xs: "0", md: "5%" },
          }}
        >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Box
              sx={{
                width: { xs: "10rem", md: "15rem" },
              }}
            >
              <img
                style={{ width: "100%", padding: "5%" }}
                src={logo}
                alt="Hero"
              />
            </Box>
          </Typography>

          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Link
              href="#"
              color="inherit"
              className="Navstyles"
              sx={{ mx: 2, textDecoration: "none", fontSize:17, fontWeight:600 }}
            >
              Product
            </Link>

            <Link
              href="aboutus"
              color="inherit"
              className="Navstyles"
              sx={{ mx: 2, textDecoration: "none", fontSize:17, fontWeight:600 }}
            >
              About
            </Link>

            <Link
              href="#"
              color="inherit"
              className="Navstyles"
              sx={{ mx: 2, textDecoration: "none", fontSize:17, fontWeight:600 }}
            >
              Contact
            </Link>
          </Box>

          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Box>

      {renderMenu}
    </AppBar>
  );
}
