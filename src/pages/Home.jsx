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
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import EventDescription from "../components/EventDescription.jsx";
import Logo3 from "../assets/Logo3.svg";
import CodeandSens from "../assets/code & sens.svg";
import Agenda from "../assets/Agenda.svg";

const Home = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  React.useEffect(() => {
    setIsMobile(window.innerWidth < 992);
    setScreenSize(window.innerWidth);

    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 992);
      setScreenSize(width);
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

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "40px",
          marginBottom: "20px",
        }}
      >
        <img
          src={Logo3}
          alt="Logo3"
          style={{
            maxWidth: "40px",
            height: "40px",
          }}
        />
      </Box>

      <Typography
        variant="body1"
        sx={{
          fontFamily: "Poppins",
          fontSize: "30px",
          fontWeight: 500,
          marginBottom: "20px",
          opacity: 0.9,
          color: "#BAB9B9",
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Hosted in Partnership with
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <img
          src={CodeandSens}
          alt="CodeandSens"
          style={{
            maxWidth: "100%",
            height: "60px",
          }}
        />
      </Box>

      <Typography
        variant="body1"
        sx={{
          fontFamily: "Poppins",
          fontSize: "16px",
          fontWeight: 400,
          marginBottom: "20px",
          opacity: 0.9,
          color: "#BAB9B9",
          marginTop: "30px",
          textAlign: "center",
        }}
      >
        We are proud to collaborate with Code & Sens, a leading private school
        offering accessible, flexible, and career-<br></br>oriented training.
        Their mission is to make tech education available to everyone . Thanks
        to their adaptable, hands-<br></br>on learning approach, Code & Sens is
        the perfect environment to host a competition that empowers beginners to{" "}
        <br></br>grow, create, and challenge themselves.
      </Typography>

      <Typography
        variant="body1"
        sx={{
          fontFamily: "Poppins",
          fontSize: "40px",
          fontWeight: 500,
          marginBottom: "20px",
          opacity: 0.9,
          color: "#BAB9B9",
          marginTop: "70px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Our Sponsors
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "100px",
          marginTop: "40px",
          marginBottom: "50px",
        }}
      >
        {[1, 2, 3, 4, 5].map((item) => (
          <Box
            key={item}
            sx={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              backgroundColor: "#D9D9D966",
              flex: "0 0 auto",
            }}
          />
        ))}
      </Box>

      <Typography
        variant="body1"
        sx={{
          fontFamily: "Poppins",
          fontSize: "45px",
          fontWeight: 600,
          marginBottom: "20px",
          opacity: 0.9,
          color: "#BAB9B9",
          marginTop: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Agenda
      </Typography>

      <Box
        sx={{
          fontFamily: "Poppins",
          fontSize: "16px",
          fontWeight: 400,
          mb: "20px",
          mt: "20px",
          opacity: 0.9,
          color: "#BAB9B9",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "4px",
        }}
      >
        <span>The Great challenge of ITCP 4.0 will be at</span>
        <span style={{ color: "#E61707", fontWeight: 500 }}>
          21-22 December
        </span>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50px",
          marginBottom: "50px",
        }}
      >
        <img
          src={Agenda}
          alt="Agenda"
          style={{
            maxWidth: screenSize >= 992 ? "1500px" : screenSize >= 776 ? "1350px" : "1050px",
            width: "auto",
            height: "auto",
          }}
        />
      </Box>
    </>
  );
};

export default Home;
