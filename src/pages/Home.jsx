import React, { useState } from "react";
import ToRegister from "../components/ToRegister";
import NavHead from "../components/NavHead.jsx";
import {
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import EventDescription from "../components/EventDescription.jsx";

const Home = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    setIsMobile(window.innerWidth < 992);
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = [
    "Home",
    "About",
    "Partners",
    "Agenda",
    "Location",
    "Count",
  ];

  return (
    <>
      {!isMobile && <NavHead />}
      {isMobile && (
        <Box
          sx={{
            position: "absolute",
            top: 20,
            left: 20,
            zIndex: 1001,
          }}
        >
          <IconButton
            onClick={toggleDrawer(true)}
            sx={{
              backgroundColor: "rgba(10, 8, 8, 0.97)",
              color: "#BAB9B9",
              "&:hover": {
                backgroundColor: "rgba(10, 8, 8, 0.97)",
                color: "#E61707",
              },
            }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      )}

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "rgba(10, 8, 8, 0.97)",
            width: 250,
          },
        }}
      >
        <Box
          sx={{ width: 250, padding: 2 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {menuItems.map((item) => (
              <ListItem
                key={item}
                component="a"
                href={`/${item}`}
                sx={{
                  color: "#BAB9B9",
                  textDecoration: "none",
                  fontSize: "15px",
                  fontWeight: "300",
                  transition: "0.3s ease",
                  "&:hover": {
                    color: "#E61707",
                  },
                }}
              >
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <ToRegister />
      <EventDescription pb="900px" />
    </>
  );
};

export default Home;
