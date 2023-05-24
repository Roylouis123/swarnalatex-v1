import React from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CancelIcon from "@mui/icons-material/Cancel";
import logo from "../assets/logo.png";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  listItem: {
    "&:hover": {
      backgroundColor: "grey",
    },
  },
  selectedListItem: {
    backgroundColor: "grey",
    "&:hover": {
      backgroundColor: "grey",
    },
  },
  underline: {
    
    marginTop: "5px",
    borderBottom: `3px solid pink`, // Change the border color here
  },
}));

export default function NavBar() {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleCloseDrawer = () => {
    setMobileOpen(false);
  };

  const renderMobileMenu = (
    <Drawer anchor="top" open={mobileOpen} onClose={handleCloseDrawer}>
      <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
        <Typography variant="h6" component="div">
          <img style={{ width: "50%" }} src={logo} alt="Logo" />
        </Typography>
        <IconButton color="inherit" aria-label="cancel" onClick={handleCloseDrawer}>
          <CancelIcon fontSize="large" />
        </IconButton>
      </Box>
      <List sx={{ width: 200 }} onClick={handleCloseDrawer}>
        <ListItem
          button
          component={RouterLink}
          to="/ProductCatalog"
          className={classes.listItem}
        >
          <ListItemText
            primary="Product"
            primaryTypographyProps={{
              className:
                location.pathname === "/ProductCatalog" ? classes.underline : "",
            }}
          />
        </ListItem>
        <ListItem
          button
          component={RouterLink}
          to="/aboutus"
          className={classes.listItem}
        >
          <ListItemText
            primary="About"
            primaryTypographyProps={{
              className: location.pathname === "/aboutus" ? classes.underline : "",
            }}
          />
        </ListItem>
        <ListItem
          button
          component={RouterLink}
          to="/contactus"
          className={classes.listItem}
        >
          <ListItemText
            primary="Contact"
            primaryTypographyProps={{
              className: location.pathname === "/contactus" ? classes.underline : "",
            }}
          />
        </ListItem>
      </List>
    </Drawer>
  );

  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar
        sx={{
          justifyContent: "space-between",
          borderBottom: `2px solid ${
            location.pathname === "/ProductCatalog"
              ? theme.palette.secondary.main
              : "transparent"
          }`,
        }}
      >
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {isMobile ? (
            <img style={{ width: "50%", padding: "3%" }} src={logo} alt="Logo" />
          ) : (
            <Box
              sx={{
                width: "12rem",
              }}
            >
              <img
                style={{ width: "100%", padding: "5%" }}
                src={logo}
                alt="Logo"
              />
            </Box>
          )}
        </Typography>
        {isMobile ? (
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        ) : (
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button
              component={RouterLink}
              to="/ProductCatalog"
              color="inherit"
              sx={{ mx: 2 }}
            >
              <Typography
                variant="body1"
                component="span"
                fontWeight={600}
                className={
                  location.pathname === "/ProductCatalog" ? classes.underline : ""
                }
              >
                Product
              </Typography>
            </Button>
            <Button
              component={RouterLink}
              to="/aboutus"
              color="inherit"
              sx={{ mx: 2 }}
            >
              <Typography
                variant="body1"
                component="span"
                fontWeight={600}
                className={location.pathname === "/aboutus" ? classes.underline : ""}
              >
                About
              </Typography>
            </Button>
            <Button
              component={RouterLink}
              to="/contactus"
              color="inherit"
              sx={{ mx: 2 }}
            >
              <Typography
                variant="body1"
                component="span"
                fontWeight={600}
                className={location.pathname === "/contactus" ? classes.underline : ""}
              >
                Contact
              </Typography>
            </Button>
          </Box>
        )}
      </Toolbar>
      {isMobile && renderMobileMenu}
    </AppBar>
  );
}
