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
import Map from "../assets/Map.svg";
import TimerLogo from "../assets/TimerLogo.svg";
import rightBK from "../assets/rightBK.svg";
import leftBK from "../assets/leftBK.svg";
import bkMed from "../assets/bkMed.svg";
import CountdownCard from "../components/CountdownCard.jsx";

const Home = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  React.useEffect(() => {
    setIsMobile(window.innerWidth < 992);
    setScreenWidth(window.innerWidth);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getMaxWidth = () => {
    if (screenWidth > 992) return "1500px";
    if (screenWidth > 776) return "1300px";
    if (screenWidth > 650) return "1200px";
    if (screenWidth > 450) return "850px";
    return "700px";
  };

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
          marginTop: screenWidth > 776 ? "00px" : "60px",
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
          fontSize: screenWidth > 776 ? "30px" : "22px",
          fontWeight: 500,
          marginBottom: "20px",
          opacity: 0.9,
          color: "#BAB9B9",
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
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
            height: screenWidth > 776 ? "60px" : "45px",
          }}
        />
      </Box>

      <Typography
        variant="body1"
        sx={{
          fontFamily: "Poppins",
          fontSize: screenWidth > 776 ? "16px" : "14px",
          fontWeight: 400,
          marginBottom: "20px",
          opacity: 0.9,
          color: "#BAB9B9",
          marginTop: screenWidth > 776 ? "40px" : "30px",
          textAlign: "center",
          paddingLeft: "50px",
          paddingRight: "50px",
        }}
      >
        {screenWidth > 776 ? (
          <>
            We are proud to collaborate with Code & Sens, a leading private
            school offering accessible, flexible, and career-<br></br>oriented
            training. Their mission is to make tech education available to
            everyone . Thanks to their adaptable, hands-<br></br>on learning
            approach, Code & Sens is the perfect environment to host a
            competition that empowers beginners to <br></br>grow, create, and
            challenge themselves.
          </>
        ) : (
          <>
            We are proud to collaborate with Code & Sens, a leading private
            school offering accessible, flexible, and career-oriented training.
            Their mission is to make tech education available to everyone .
            Thanks to their adaptable, hands-on learning approach, Code & Sens
            is the perfect environment to host a competition that empowers
            beginners to grow, create, and challenge themselves.
          </>
        )}
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
          gap: screenWidth > 776 ? "100px" : "50px",
          marginTop: "40px",
          padding: screenWidth > 776 ? "15px" : "30px",
        }}
      >
        {[1, 2, 3, 4, 5].map((item) => (
          <Box
            key={item}
            sx={{
              width: screenWidth > 776 ? "100px" : "60px",
              height: screenWidth > 776 ? "100px" : "60px",
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
          marginTop: screenWidth > 776 ? "110px" : "40px",
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
          fontSize: screenWidth > 650 ? "16px" : "10px",
          fontWeight: 400,
          mb: "10px",
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
          marginTop: "30px",
          marginBottom: "30px",
        }}
      >
        <img
          src={Agenda}
          alt="Agenda"
          style={{
            maxWidth: getMaxWidth(),
            width: "auto",
            height: "auto",
            marginLeft: "20px",
          }}
        />
      </Box>

      <Typography
        variant="body1"
        sx={{
          fontFamily: "Poppins",
          fontSize: screenWidth > 776 ? "45px" : "28px",
          fontWeight: 600,
          marginBottom: "20px",
          opacity: 0.9,
          color: "#BAB9B9",
          marginTop: screenWidth > 776 ? "-40px" : "-40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Location
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontFamily: "Poppins",
          fontSize: screenWidth > 776 ? "18px" : "10px",
          fontWeight: 600,
          marginBottom: "px",
          opacity: 0.9,
          color: "#BAB9B9",
          marginTop: screenWidth > 776 ? "0px" : "-10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        The N 1, lot alioua fodil, Chéraga 16014, Algiers
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: screenWidth > 776 ? "0px" : "20px",
          marginBottom: "20px",
        }}
      >
        <img
          src={Map}
          alt="Map"
          style={{
            maxWidth: "85%",
            height: "100%",
          }}
        />
      </Box>

      {/* Timer Section with Background Overlay */}
      <Box
        sx={{
          position: "relative",
          width: "100vw",
          minHeight: "100vh",
          backgroundColor: "#000000",
          margin: 0,
          padding: "80px 20px",
          boxSizing: "border-box",
        }}
      >
        {/* Background Images */}
        <Box
          component="img"
          src={bkMed}
          alt="background"
          sx={{
            position: "absolute",
            top: screenWidth > 776 ? "47%" : "35%",
            left: "50%",
            transform: "translate(-50%, -60%)",
            width: screenWidth > 776 ? "90vw" : "90vw",
            height: screenWidth > 776 ? "40vh" : "40vh",
            objectFit: "contain",
            zIndex: 1,
          }}
        />
        <Box
          component="img"
          src={leftBK}
          alt="left background"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: screenWidth > 776 ? "50vw" : "40vw",
            height: screenWidth > 776 ? "100vh" : "100vh",
            objectFit: "cover",
            zIndex: 2,
          }}
        />
        <Box
          component="img"
          src={rightBK}
          alt="right background"
          sx={{
            position: "absolute",
            top: 0,
            right: screenWidth > 776 ? 0 : "0px",
            width: screenWidth > 776 ? "50vw" : "40vw",
            height: screenWidth > 776 ? "100vh" : "100vh",
            objectFit: "cover",
            zIndex: 2,
          }}
        />

        {/* Content */}
        <Box
          sx={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 10,
            left: "50%",
            top: screenWidth > 776 ? "220px" : "150px",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: screenWidth > 776 ? "20px" : "20px",
              marginBottom: screenWidth > 776 ? "20px" : "0px",
            }}
          >
            <img
              src={TimerLogo}
              alt="TimerLogo"
              style={{
                maxWidth: screenWidth > 776 ? "300px" : "130px",
                height: screenWidth > 776 ? "80px" : "45px",
                marginBottom :screenWidth > 776 ? "0px" : "20px",
                marginTop :"30px",

              }}
            />
          </Box>

          <Typography
            variant="body1"
            sx={{
              fontFamily: "Poppins",
              fontSize: screenWidth > 776 ? "45px" : "20px",
              fontWeight: 600,
              marginBottom: "20px",
              opacity: 0.9,
              color: "#BAB9B9",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            The battle begins in
          </Typography>

          {/* Countdown Timer Cards */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: screenWidth > 1200 ? "100px" : screenWidth > 992 ? "80px" : screenWidth > 776 ? "80px" : screenWidth > 600 ? "60px" : "40px",
              marginTop: "40px",
              flexWrap: "nowrap",
              width: "100%",
              overflowX: "auto",
              padding :"10px"
            }}
          >
            {/* Days */}
            <CountdownCard
              number="01"
              label="Days"
              screenWidth={screenWidth}
              gradientAngle={159.021}
            />

            {/* Minute */}
            <CountdownCard
              number="57"
              label="Minute"
              screenWidth={screenWidth}
              gradientAngle={162.418}
            />

            {/* Second */}
            <CountdownCard
              number="43"
              label="Second"
              screenWidth={screenWidth}
              gradientAngle={165.157}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
