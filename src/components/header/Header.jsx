import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { setCurrentUser } from "../singIn/SignIn";
import { setToken } from "../singIn/SignIn";

const pages = ["Rooms", "Calendar", "Contacts"];
const settings = ["MyBookings", "MyProfile", "Logout"];

const Header = () => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (event) => {
    let id = event.target.id.toLowerCase();
    let route = event.target.innerHTML.toLowerCase();

    if (id === "rooms" || route === "rooms") {
      navigate("/");
      setAnchorElNav(null);
    } else if (id === "calendar" || route === "calendar") {
      navigate("/calendar");
      setAnchorElNav(null);
    } else if (id === "contacts" || route === "contacts") {
      navigate("/contacts");
      setAnchorElNav(null);
    } else {
      setAnchorElNav(null);
    }
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (event) => {
    let id = event.target.id.toLowerCase();
    let route = event.target.innerHTML.toLowerCase();
    if (id === "logout" || route === "logout") {
      setCurrentUser("");
      setToken("");

      navigate("/login");
      setAnchorElUser(null);
    } else if (id === "myprofile" || route === "myprofile") {
      navigate("/myprofile");
      setAnchorElUser(null);
    } else if (id === "mybookings" || route === "mybookings") {
      navigate("/mybookings");
      setAnchorElUser(null);
    } else {
      setAnchorElUser(null);
    }
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 900,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            JUSAN SINGULARITY
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} id={page}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            JUSAN SINGULARITY
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                id={page}
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Button
            href="/login"
            sx={{
              my: 2,
              color: "white",
              display: "block",
              border: "1px solid #fff",
              borderRadius: 2,
              marginRight: 2,
              fontSize: 12,
            }}
          >
            Sign In
          </Button>
          <Button
            href="/registration"
            sx={{
              my: 2,
              color: "white",
              display: "block",
              border: "1px solid #fff",
              borderRadius: 2,
              marginRight: 2,
              fontSize: 12,
            }}
          >
            Sign Up
          </Button>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="avatar" src="" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  onClick={handleCloseUserMenu}
                  id={setting}
                >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
