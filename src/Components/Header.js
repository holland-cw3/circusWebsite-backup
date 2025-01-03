import {
  Link,
  Stack,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";



import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import "../CSS/header.css";
import logo from "../Images/kingdom-of-wonders.png";

export default function Header() {
  const location = useLocation();
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();


  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <div class="navbar desktop-only">
        <div class="header-container">
          <img
            src={logo}
            alt="Kingdom of Wonders Logo"
            className="logo"
            onClick={() => navigate('/')}
          />

          {/* Desktop Navigation */}
          <div className="lollipop-bar border border-white border-opacity-20">
            <Stack direction="row" spacing={39}>
              <Stack direction='row' spacing={12}>
              <Link
                href="/"
                className={`${location.pathname === "/" ? "active" : ""}`}
              >
                Home
              </Link>
              <Link
                href="/schedule"
                className={`${
                  location.pathname === "/schedule" ? "active" : ""
                }`}
              >
                Schedule
              </Link>
              
              <Link
                href="/photos"
                className={`${location.pathname === "/photos" ? "active" : ""}`}
              >
                Gallery
              </Link>
              </Stack>
              <Stack direction="row" spacing={12}>
              <Link
                href="/concessions"
                className={`${
                  location.pathname === "/concessions" ? "active" : ""
                }`}
              >
                Concessions
              </Link>
              <Link
                href="/faq"
                className={`${location.pathname === "/faq" ? "active" : ""}`}
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className={`${
                  location.pathname === "/contact" ? "active" : ""
                }`}
              >
                Contact
              </Link>
              </Stack>
            </Stack>
          </div>
        </div>
      </div>
      <div class="mobile-only">
        <div class="mobile-header border-b border-white border-opacity-50">
          <a href="/">
            <img
              src={logo}
              alt="Kingdom of Wonders Logo"
              className="logo"
              href="/home"
            />
          </a>
          <div class="icon">
            <IconButton
              edge="start"
              color="white"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ color: "white" }}
            >
              <MenuIcon sx={{ fontSize: "5vh" }} />{" "}
            </IconButton>
          </div>
        </div>

        <Drawer
          anchor="right"
          open={isDrawerOpen}
          onClose={toggleDrawer(false)}
        >
          <div className="drawer-header mt-3">
            <IconButton
              edge="end"
              aria-label="close"
              onClick={toggleDrawer(false)}
              className="close-button"
            >
              <CloseIcon />
            </IconButton>
          </div>
          <List className="drawer-list">
            <ListItem
              button
              component="a"
              href="/"
              onClick={toggleDrawer(false)}
            >
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem
              button
              component="a"
              href="/schedule"
              onClick={toggleDrawer(false)}
            >
              <ListItemText primary="Schedule" />
            </ListItem>
            <ListItem
              button
              component="a"
              href="/photos"
              onClick={toggleDrawer(false)}
            >
              <ListItemText primary="Gallery" />
            </ListItem>
            <ListItem
              button
              component="a"
              href="/concessions"
              onClick={toggleDrawer(false)}
            >
              <ListItemText primary="Concessions" />
            </ListItem>
            <ListItem
              button
              component="a"
              href="/faq"
              onClick={toggleDrawer(false)}
            >
              <ListItemText primary="FAQ" />
            </ListItem>
            <ListItem
              button
              component="a"
              href="/contact"
              onClick={toggleDrawer(false)}
            >
              <ListItemText primary="Contact" />
            </ListItem>
          </List>
        </Drawer>
      </div>
    </>
  );
}
