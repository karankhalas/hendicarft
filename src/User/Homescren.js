import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  IconButton,
  Menu,
  MenuItem,
  Box,
  Badge,
  Avatar,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Menu as MenuIcon } from "@mui/icons-material";
import logo from "../Admin/Image/logo1.png";
import userAvatar from "../Admin/Image/man.png";
import {
  ShoppingCart as ShoppingCartIcon,
  FavoriteBorder as FavoriteBorderIcon,
  Favorite as FavoriteIcon,
} from "@mui/icons-material";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import { useWishlist } from "../Wishcontext";
import { useCart } from "../Cartcontext"; // Make sure this matches your actual filename & exported hook

const App = () => {
  const { wishlist } = useWishlist();
  const { cart } = useCart(); // get cart from context (no local cart state)
  const navigate = useNavigate();

  const handleViewWishlist = () => {
    navigate("/wishlist");
  };

  const handleViewCart = () => {
    navigate("/cart");
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const tabsList = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/aboutus" },
    { label: "Catalog", path: "/catalog" },
    { label: "Products", path: "/products" },
    { label: "Contact Us", path: "/contactus" },
  ];

  const location = useLocation();
  const currentTab = tabsList.findIndex(
    (tab) => tab.path === location.pathname
  );

  const handleTabChange = (event, newValue) => {
    navigate(tabsList[newValue].path);
  };

  const handleDrawerClick = (index) => {
    setDrawerOpen(false);
    navigate(tabsList[index].path);
  };

  const handleProfileMenuOpen = (e) => setAnchorEl(e.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  return (
    <Box>
      <CssBaseline />

      {/* Top Bar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1100,
          background: "#d7e3fc",
        }}
      >
        <div className="container">
          <Box sx={{ py: 1, px: 2 }}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              flexWrap="wrap"
            >
              <Typography fontSize="0.8rem">
                📞 9106089227 📍 Mukhwas gali, Manekchok, Ahmedabad
              </Typography>
              <Typography
                fontSize="0.8rem"
                fontStyle="italic"
                fontWeight="bold"
              >
                "Celebrating the Art of Handmade Creations."
              </Typography>
            </Box>
          </Box>
        </div>
      </div>

      {/* AppBar below top bar */}
      <AppBar
        position="fixed"
        sx={{
          top: "35.5px",
          zIndex: 1200,
          backgroundColor: "snow",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box display="flex" alignItems="center">
            <img src={logo} alt="App Logo" width="50" height="50" />
            <Typography
              variant="h6"
              sx={{ ml: 1, fontWeight: "bold", color: "#000" }}
            >
              JM Handicrafts
            </Typography>
          </Box>

          {isMobile ? (
            <>
              <IconButton color="inherit" onClick={toggleDrawer}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
                <Box
                  sx={{
                    width: 250,
                    color: "black",
                    fontWeight: "bold",
                    fontSize: "16px",
                  }}
                  role="presentation"
                >
                  <List>
                    {tabsList.map((tab, index) => (
                      <ListItem
                        button
                        key={tab.label}
                        onClick={() => handleDrawerClick(index)}
                      >
                        <ListItemText primary={tab.label} />
                      </ListItem>
                    ))}
                  </List>
                  <Divider />
                </Box>
              </Drawer>
            </>
          ) : (
            <Box>
              <Tabs
                value={currentTab === -1 ? false : currentTab}
                onChange={handleTabChange}
                textColor="inherit"
                indicatorColor="secondary"
                variant="scrollable"
                scrollButtons="auto"
                sx={{ ml: 3, color: "black", fontWeight: "bold" }}
              >
                {tabsList.map((tab) => (
                  <Tab key={tab.label} label={tab.label} />
                ))}
              </Tabs>
            </Box>
          )}

          {/* Icons */}
          <Box display="flex" alignItems="center" gap={1}>
            <IconButton color="error" onClick={handleViewWishlist}>
              <Badge badgeContent={wishlist.length} color="error" showZero>
                {wishlist.length > 0 ? (
                  <FavoriteIcon />
                ) : (
                  <FavoriteBorderIcon />
                )}
              </Badge>
            </IconButton>

            <IconButton color="success" onClick={handleViewCart}>
              <Badge badgeContent={cart.length} color="success" showZero>
                <ShoppingCartIcon />
              </Badge>
            </IconButton>

            <IconButton onClick={handleProfileMenuOpen} color="inherit">
              <Avatar src={userAvatar} sx={{ width: 36, height: 36 }} />
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={() => {
                  handleMenuClose();
                  navigate("/profile");
              }}
              
              >My Profile</MenuItem>
              <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
              <MenuItem
                onClick={() => {
                  handleMenuClose();
                  navigate("/logout"); // 👈 Navigate to LogoutPage
                }}
              >
                Logout
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box sx={{ pt: 16, px: 1 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default App;
