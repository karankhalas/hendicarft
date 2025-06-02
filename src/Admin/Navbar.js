import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Menu,
  MenuItem,
  Typography,
  Box,
  Avatar,
  Drawer,
  List,
  ListItem,
  ListItemText,
  CssBaseline,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Notifications,
  Mail,
} from "@mui/icons-material";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import FeedbackIcon from "@mui/icons-material/Feedback";
import HomeIcon from "@mui/icons-material/Home";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import { Link } from "react-router-dom";

// Images
import img from "./Image/pet1.png"; // App logo
import img2 from "./Image/man.png"; // User avatar

const drawerWidth = 250;

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  const Footer = () => {
    return (
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          textAlign: "center",
          backgroundColor: "#ff6666",
          color: "white",
          padding: "10px",
        }}
      >
        © 2025 Jay Mataji Handicrafts. All rights reserved.
      </Box>
    );
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* Sidebar */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": { width: drawerWidth, boxSizing: "border-box" },
        }}
      >
        <Toolbar />
        <List>
          <ListItem button>
            <HomeIcon />
            <ListItemText primary="Dashboard" sx={{ ml: 1 }} />
          </ListItem>
          <ListItem button component={Link} to="/manageuser">
  <ManageAccountsIcon />
  <ListItemText primary="Manage User" sx={{ ml: 1 }} />
</ListItem>
          <ListItem button>
            <SettingsSuggestOutlinedIcon />
            <ListItemText primary="Manage Catalog" sx={{ ml: 1 }} />
          </ListItem>
          <ListItem button>
            <AnalyticsIcon />
            <ListItemText primary="Reporting" sx={{ ml: 1 }} />
          </ListItem>
          <ListItem button>
            <FeedbackIcon />
            <ListItemText primary="Feedback" sx={{ ml: 1 }} />
          </ListItem>
          <ListItem button>
            <SettingsIcon />
            <ListItemText primary="Settings" sx={{ ml: 1 }} />
          </ListItem>
          <ListItem button>
            <LogoutIcon />
            <ListItemText primary="Logout" sx={{ ml: 1 }} />
          </ListItem>
        </List>
      </Drawer>

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, marginLeft: drawerOpen ? `${drawerWidth}px` : 0 }}>
        <AppBar position="fixed" sx={{ backgroundColor: "#ff6666", zIndex: 1201 }}>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            {/* Left: Logo & Menu */}
            <Box display="flex" alignItems="center">
              <img src={img} alt="App Logo" width="40" height="40" />
              <Typography
                variant="h6"
                sx={{ ml: 1, fontWeight: "bold", fontSize: "30px" }}
              >
                Jay Mataji Handicrafts
              </Typography>
              <IconButton
                onClick={() => toggleDrawer(!drawerOpen)}
                color="inherit"
              >
                <MenuIcon sx={{ fontSize: "36px" }} />
              </IconButton>
            </Box>
            {/* Right: Notifications & Profile */}
            <Box display="flex" alignItems="center" gap={1}>
              <IconButton color="inherit">
                <Badge badgeContent={4} color="primary">
                  <Notifications />
                </Badge>
              </IconButton>
              <IconButton color="inherit">
                <Badge badgeContent={3} color="success">
                  <Mail />
                </Badge>
              </IconButton>
              <IconButton onClick={handleProfileMenuOpen} color="inherit">
                <img
                  src={img2}
                  alt="User Avatar"
                  width="40"
                  height="40"
                  style={{ borderRadius: "50%" }}
                />
                <Typography fontSize="18px" sx={{ ml: 1 }}>
                  Karan
                </Typography>
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleMenuClose}>
                  <Avatar src={img2} sx={{ mr: 1 }} /> My Profile
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>Account Settings</MenuItem>
                <MenuItem onClick={handleMenuClose}>Sign Out</MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>

        {/* Page Content */}
        <Toolbar />
      </Box>
      <Footer />
    </Box>
  );
};

export default Header;
