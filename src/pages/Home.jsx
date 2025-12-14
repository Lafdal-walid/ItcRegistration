import React, { useState, useEffect, useRef } from "react";
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
  Button,
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
import Footer from "../components/Footer.jsx";

const Home = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [visibleSections, setVisibleSections] = useState(new Set());

  // Refs for scroll animations
  const partnershipRef = useRef(null);
  const sponsorsRef = useRef(null);
  const agendaRef = useRef(null);
  const locationRef = useRef(null);
  const timerRef = useRef(null);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    const refs = [
      { ref: partnershipRef, id: "partnership" },
      { ref: sponsorsRef, id: "sponsors" },
      { ref: agendaRef, id: "agenda" },
      { ref: locationRef, id: "location" },
      { ref: timerRef, id: "timer" },
    ];

    const currentRefs = refs.map(({ ref }) => ref.current).filter(Boolean);

    refs.forEach(({ ref, id }) => {
      const currentRef = ref.current;
      if (currentRef) {
        currentRef.id = id;
        observer.observe(currentRef);
      }
    });

    return () => {
      currentRefs.forEach((currentRef) => {
        if (currentRef) {
          observer.unobserve(currentRef);
        }
      });
    };
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
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#000000",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: `
            radial-gradient(circle at 20% 20%, rgba(230, 23, 7, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(186, 185, 185, 0.08) 0%, transparent 60%),
            linear-gradient(45deg, rgba(230, 23, 7, 0.03) 0%, transparent 30%, rgba(255, 255, 255, 0.02) 70%, transparent 100%)
          `,
          animation: "globalBackgroundShift 25s ease-in-out infinite",
          zIndex: -1,
          "@keyframes globalBackgroundShift": {
            "0%, 100%": { 
              transform: "translate(0, 0) rotate(0deg) scale(1)",
              filter: "brightness(1) hue-rotate(0deg)"
            },
            "25%": { 
              transform: "translate(-30px, -20px) rotate(90deg) scale(1.1)",
              filter: "brightness(1.1) hue-rotate(10deg)"
            },
            "50%": { 
              transform: "translate(20px, -30px) rotate(180deg) scale(1.05)",
              filter: "brightness(0.95) hue-rotate(-10deg)"
            },
            "75%": { 
              transform: "translate(-20px, 30px) rotate(270deg) scale(1.08)",
              filter: "brightness(1.05) hue-rotate(5deg)"
            }
          }
        },
        "&::after": {
          content: '""',
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: `
            radial-gradient(circle at 30% 70%, rgba(230, 23, 7, 0.08) 0%, transparent 40%),
            radial-gradient(circle at 70% 30%, rgba(255, 255, 255, 0.03) 0%, transparent 40%)
          `,
          animation: "secondaryBackgroundMove 30s ease-in-out infinite reverse",
          zIndex: -1,
          "@keyframes secondaryBackgroundMove": {
            "0%, 100%": { 
              transform: "translate(0, 0) scale(1)",
              opacity: 0.5
            },
            "33%": { 
              transform: "translate(40px, -40px) scale(1.2)",
              opacity: 0.7
            },
            "66%": { 
              transform: "translate(-40px, 40px) scale(0.9)",
              opacity: 0.3
            }
          }
        }
      }}
    >
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
              backgroundColor: "rgba(186, 185, 185, 0.1)",
              color: "#BAB9B9",
              border: "1px solid rgba(186, 185, 185, 0.3)",
              backdropFilter: "blur(10px)",
              boxShadow: "0px 2px 8px rgba(186, 185, 185, 0.15)",
              animation: "pulse 2s ease-in-out infinite",
              "&:hover": {
                backgroundColor: "rgba(186, 185, 185, 0.2)",
                color: "#FFFFFF",
                transform: "scale(1.05)",
                boxShadow: "0px 3px 12px rgba(186, 185, 185, 0.25)",
                animation: "none",
              },
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              "@keyframes pulse": {
                "0%": { transform: "scale(1)" },
                "50%": { transform: "scale(1.1)" },
                "100%": { transform: "scale(1)" },
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
            background:
              "linear-gradient(135deg, rgba(10, 8, 8, 0.95) 0%, rgba(20, 15, 15, 0.98) 100%)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(186, 185, 185, 0.2)",
            borderRight: "2px solid rgba(186, 185, 185, 0.4)",
            width: 280,
            boxShadow: "0px 0px 20px rgba(186, 185, 185, 0.15)",
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: "-100%",
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(90deg, transparent, rgba(230, 23, 7, 0.15), transparent)",
              animation: "shimmer 3s infinite",
            },
            "@keyframes shimmer": {
              "0%": { left: "-100%" },
              "100%": { left: "100%" },
            },
          },
        }}
      >
        <Box
          sx={{
            width: 280,
            padding: 3,
            background:
              "linear-gradient(180deg, rgba(186, 185, 185, 0.05) 0%, transparent 100%)",
            position: "relative",
            zIndex: 1,
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Typography
            variant="h6"
            sx={{
              color: "#BAB9B9",
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 600,
              fontSize: "20px",
              marginBottom: 3,
              textAlign: "center",
              textShadow: "0px 1px 5px rgba(186, 185, 185, 0.2)",
            }}
          >
            Menu
          </Typography>
          <List>
            {menuItems.map((item, index) => (
              <ListItem
                key={item}
                component="a"
                href={`/${item}`}
                sx={{
                  color: "#BAB9B9",
                  textDecoration: "none",
                  fontSize: "16px",
                  fontWeight: 400,
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  borderRadius: "12px",
                  marginBottom: 1,
                  padding: "12px 20px",
                  background:
                    "linear-gradient(135deg, rgba(186, 185, 185, 0.05) 0%, transparent 100%)",
                  border: "1px solid rgba(186, 185, 185, 0.1)",
                  borderLeft: "2px solid rgba(230, 23, 7, 0.3)",
                  borderRight: "2px solid rgba(230, 23, 7, 0.3)",
                  position: "relative",
                  zIndex: 2,
                  "&:hover": {
                    color: "#FFFFFF",
                    background:
                      "linear-gradient(135deg, rgba(186, 185, 185, 0.2) 0%, rgba(230, 23, 7, 0.05) 100%)",
                    border: "1px solid rgba(186, 185, 185, 0.3)",
                    borderLeft: "3px solid rgba(230, 23, 7, 0.6)",
                    borderRight: "3px solid rgba(230, 23, 7, 0.6)",
                    transform: "translateX(8px)",
                    boxShadow: "0px 2px 10px rgba(186, 185, 185, 0.15)",
                  },

                  animation: `slideIn 0.3s ease-out ${index * 0.1}s both`,
                }}
              >
                <ListItemText
                  primary={item}
                  sx={{
                    "& .MuiListItemText-primary": {
                      fontFamily: '"Poppins", sans-serif',
                      fontWeight: 500,
                    },
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <ToRegister />
      <EventDescription pb="900px" />

      <Box
        ref={partnershipRef}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: screenWidth > 776 ? "-200px" : "-20px",
          marginBottom: "10px",
          opacity: visibleSections.has("partnership") ? 1 : 0,
          transform: visibleSections.has("partnership")
            ? "translateY(0)"
            : "translateY(30px)",
          transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
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
          fontSize: screenWidth > 776 ? "34px" : "24px",
          fontWeight: 500,
          marginBottom: "20px",
          opacity: visibleSections.has("partnership") ? 0.95 : 0,
          color: "#BAB9B9",
          marginTop: "15px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
          background: "linear-gradient(90deg, #ffffff 0%, #f2f2f2 30%, #dfdfdf 60%, #c8c8c9 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.15))",
          letterSpacing: "0.3px",
          transform: visibleSections.has("partnership")
            ? "translateY(0)"
            : "translateY(20px)",
          transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s",
        }}
      >
        Hosted in Partnership with
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "-15px",
          marginBottom: "20px",
          opacity: visibleSections.has("partnership") ? 1 : 0,
          transform: visibleSections.has("partnership")
            ? "scale(1)"
            : "scale(0.8)",
          transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s",
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
          fontSize: screenWidth > 776 ? "16px" : "16px",
          fontWeight: 400,
          marginBottom: "20px",
          opacity: visibleSections.has("partnership") ? 0.9 : 0,
          color: "#BAB9B9",
          marginTop: screenWidth > 776 ? "40px" : "30px",
          textAlign: "center",
          paddingLeft: "50px",
          paddingRight: "50px",
          background:
            "linear-gradient(135deg, #BAB9B9 0%, #E0E0E0 50%, #C8C8C8 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          filter: "drop-shadow(0px 1px 2px rgba(0,0,0,0.1))",
          letterSpacing: "0.2px",
          lineHeight: 1.5,
          transform: visibleSections.has("partnership")
            ? "translateY(0)"
            : "translateY(20px)",
          transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.6s",
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
        ref={sponsorsRef}
        variant="body1"
        sx={{
          fontFamily: "Poppins",
          fontSize: screenWidth > 776 ? "40px" : "28px",
          fontWeight: 500,
          marginBottom: "20px",
          opacity: visibleSections.has("sponsors") ? 0.95 : 0,
          color: "#BAB9B9",
          marginTop: screenWidth > 776 ? "120px" : "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(90deg, #ffffff 0%, #f2f2f2 30%, #dfdfdf 60%, #c8c8c9 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.15))",
          letterSpacing: "0.4px",
          transform: visibleSections.has("sponsors")
            ? "translateY(0)"
            : "translateY(30px)",
          transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
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
        {[1, 2, 3, 4, 5].map((item, index) => (
          <Box
            key={item}
            sx={{
              width: screenWidth > 776 ? "115px" : "70px",
              height: screenWidth > 776 ? "115px" : "70px",
              borderRadius: "50%",
              backgroundColor: "#D9D9D966",
              flex: "0 0 auto",
              opacity: visibleSections.has("sponsors") ? 1 : 0,
              transform: visibleSections.has("sponsors")
                ? "scale(1) rotate(0deg)"
                : `scale(0) rotate(${180 + index * 30}deg)`,
              transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s",
              transitionDelay: visibleSections.has("sponsors")
                ? `${index * 0.15}s`
                : "0s",
              boxShadow: visibleSections.has("sponsors")
                ? "0px 4px 20px rgba(217, 217, 217, 0.3)"
                : "none",
            }}
          />
        ))}
      </Box>

      <Typography
        ref={agendaRef}
        variant="body1"
        sx={{
          fontFamily: "Poppins",
          fontSize: screenWidth > 776 ? "45px" : "30px",
          fontWeight: 600,
          marginBottom: "20px",
          opacity: visibleSections.has("agenda") ? 0.95 : 0,
          color: "#BAB9B9",
          marginTop: screenWidth > 776 ? "140px" : "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(90deg, #ffffff 0%, #f2f2f2 30%, #dfdfdf 60%, #c8c8c9 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.15))",
          letterSpacing: "0.5px",
          transform: visibleSections.has("agenda")
            ? "translateY(0)"
            : "translateY(30px)",
          transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        Agenda
      </Typography>

      <Box
        sx={{
          fontFamily: "Poppins",
          fontSize: screenWidth > 650 ? "16px" : "11px",
          fontWeight: 400,
          mt: "20px",
          opacity: visibleSections.has("agenda") ? 0.9 : 0,
          color: "#BAB9B9",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "4px",
          background:
            "linear-gradient(135deg, #BAB9B9 0%, #E0E0E0 50%, #C8C8C8 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          filter: "drop-shadow(0px 1px 2px rgba(0,0,0,0.1))",
          letterSpacing: "0.2px",
          transform: visibleSections.has("agenda")
            ? "translateY(0)"
            : "translateY(20px)",
          transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s",
        }}
      >
        <span>The Great challenge of ITCP 4.0 will be at</span>
        <span
          style={{
            color: "#E61707",
            fontWeight: 500,
            background:
              "linear-gradient(135deg, #E61707 0%, #FF4444 50%, #CC0000 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            filter: "drop-shadow(0px 1px 2px rgba(230,23,7,0.2))",
          }}
        >
          21-22 December
        </span>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "30px",
          opacity: visibleSections.has("agenda") ? 1 : 0,
          transform: visibleSections.has("agenda")
            ? "translateX(0)"
            : "translateX(-50px)",
          transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s",
        }}
      >
        <img
          src={Agenda}
          alt="Agenda"
          style={{
            maxWidth: getMaxWidth(),
            width: screenWidth > 992 ? "120%" : "210%",
            height: "100%"
          }}
        />
      </Box>

      <Typography
        ref={locationRef}
        variant="body1"
        sx={{
          fontFamily: "Poppins",
          fontSize: screenWidth > 776 ? "45px" : "28px",
          fontWeight: 600,
          marginBottom: "20px",
          opacity: visibleSections.has("location") ? 0.95 : 0,
          color: "#BAB9B9",
          marginTop: screenWidth > 776 ? "-30px" : "-40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textShadow: `
            0px 1px 2px rgba(0,0,0,0.3),
            0px 0px 15px rgba(186,185,185,0.1)
          `,
          letterSpacing: "0.4px",
          lineHeight: 1.1,
          background: "linear-gradient(90deg, #ffffff 0%, #f2f2f2 30%, #dfdfdf 60%, #c8c8c9 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.2))",
          transform: visibleSections.has("location")
            ? "translateY(0)"
            : "translateY(30px)",
          transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
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
          opacity: visibleSections.has("location") ? 0.9 : 0,
          color: "#bebebeff",
          marginTop: screenWidth > 776 ? "10px" : "-10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textShadow: `
            0px 1px 1px rgba(0,0,0,0.2),
            0px 0px 8px rgba(186,185,185,0.05)
          `,
          letterSpacing: "0.2px",
          lineHeight: 1.3,
          transform: visibleSections.has("location")
            ? "translateY(0)"
            : "translateY(20px)",
          transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s",
        }}
      >
        The N 1, lot alioua fodil, Chéraga 16014, Algiers
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: screenWidth > 776 ? "0px" : "10px",
          marginBottom: screenWidth > 776 ? "20px" : "120px",
          opacity: visibleSections.has("location") ? 1 : 0,
          transform: visibleSections.has("location")
            ? "translateX(0)"
            : "translateX(50px)",
          transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s",
        }}
      >
        <img
          src={Map}
          alt="Map"
          style={{
            maxWidth: screenWidth > 776 ? "80%" : "95%",
            height: "80%",
          }}
        />
      </Box>

      {/* Timer Section with Background Overlay */}
      <Box
        ref={timerRef}
        sx={{
          position: "relative",
          width: "100vw",
          minHeight: "100vh",
          backgroundColor: "#000000",
          margin: 0,
          padding: "80px 20px",
          boxSizing: "border-box",
          opacity: visibleSections.has("timer") ? 1 : 0,
          transform: visibleSections.has("timer")
            ? "translateY(0)"
            : "translateY(50px)",
          transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {/* Background Images */}
        <Box
          component="img"
          src={bkMed}
          alt="background"
          sx={{
            position: "absolute",
            top: screenWidth > 776 ? "47%" : "22%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: screenWidth > 776 ? "80%" : "95%",
            height: screenWidth > 776 ? "auto" : "200px",
            zIndex: 0,
            animation: "float 6s ease-in-out infinite",
            "@keyframes float": {
              "0%, 100%": { transform: "translate(-50%, -50%) translateY(0)" },
              "50%": { transform: "translate(-50%, -50%) translateY(-10px)" },
            },
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
            animation: "slideLeft 8s ease-in-out infinite",
            "@keyframes slideLeft": {
              "0%, 100%": { transform: "translateX(0)" },
              "50%": { transform: "translateX(-20px)" },
            },
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
            animation: "slideRight 8s ease-in-out infinite",
            "@keyframes slideRight": {
              "0%, 100%": { transform: "translateX(0)" },
              "50%": { transform: "translateX(20px)" },
            },
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
              marginTop: screenWidth > 776 ? "200px" : "60px",
              marginBottom: screenWidth > 776 ? "20px" : "0px",
            }}
          >
            <img
              src={TimerLogo}
              alt="TimerLogo"
              style={{
                maxWidth: screenWidth > 776 ? "300px" : "130px",
                height: screenWidth > 776 ? "80px" : "45px",
                marginBottom: screenWidth > 776 ? "0px" : "20px",
                marginTop: "30px",
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
              opacity: 0.95,
              color: "#BAB9B9",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textShadow: `
                0px 1px 2px rgba(0,0,0,0.3),
                0px 0px 15px rgba(186,185,185,0.1)
              `,
              letterSpacing: "0.5px",
              lineHeight: 1.1,
              background: "linear-gradient(90deg, #ffffff 0%, #f2f2f2 30%, #dfdfdf 60%, #c8c8c9 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.2))",
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
              gap:
                screenWidth > 1200
                  ? "100px"
                  : screenWidth > 992
                  ? "80px"
                  : screenWidth > 776
                  ? "80px"
                  : screenWidth > 600
                  ? "60px"
                  : "40px",
              marginTop: screenWidth > 600 ? "40px" : "20px",
              flexWrap: "nowrap",
              width: "100%",
              overflowX: "auto",
              padding: "10px",
            }}
          >
            {/* Days */}
            <CountdownCard
              number="01"
              label="Days"
              screenWidth={screenWidth}
              gradientAngle={159.021}
              animationDelay="0s"
            />

            {/* Minute */}
            <CountdownCard
              number="57"
              label="Minute"
              screenWidth={screenWidth}
              gradientAngle={162.418}
              animationDelay="0.2s"
            />

            {/* Second */}
            <CountdownCard
              number="43"
              label="Second"
              screenWidth={screenWidth}
              gradientAngle={165.157}
              animationDelay="0.4s"
            />
          </Box>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Poppins",
              fontSize: screenWidth > 776 ? "40px" : "20px",
              fontWeight: 600,
              marginBottom: screenWidth > 776 ? "20px" : "10px",
              opacity: 0.95,
              color: "#BAB9B9",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: screenWidth > 776 ? "60px" : "60px",
              textShadow: `
                0px 1px 2px rgba(0,0,0,0.3),
                0px 0px 20px rgba(186,185,185,0.1)
              `,
              letterSpacing: "0.3px",
              lineHeight: 1.2,
              background: "linear-gradient(90deg, #ffffff 0%, #f2f2f2 30%, #dfdfdf 60%, #c8c8c9 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.2))",
            }}
          >
            Don't Miss Out Your chance
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <Button
              variant="contained"
              sx={{
                position: "relative",
                borderRadius: "30px",
                padding: "12px 30px",
                fontSize: "12px",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                textTransform: "none",
                color: "#ffffff",
                background:
                  "radial-gradient(ellipse 15px 3px at 50% 50%, rgba(168,26,19,1) 0%, rgba(230,23,7,1) 100%)",
                boxShadow: `
                    0px 0px 120px 0px rgba(230,23,7,0.4),
                    0px 0px 20px 0px rgba(230,23,7,0.3),
                    0px 0px 0.4315px 1.7265px rgba(255,255,255,0.2),
                    inset 0px -2px 1px 0px rgba(0,0,0,0.3),
                    inset 0px 1px 0.5px 0px rgba(255,255,255,0.3)
                  `,
                overflow: "hidden",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                border: "1px solid rgba(255,255,255,0.1)",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: "-100%",
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                  transition: "left 0.5s",
                },
                "&:hover": {
                  background:
                    "radial-gradient(ellipse 18px 4px at 50% 50%, rgba(188,26,19,1) 0%, rgba(250,23,7,1) 100%)",
                  boxShadow: `
                      0px 0px 150px 0px rgba(230,23,7,0.6),
                      0px 0px 30px 0px rgba(230,23,7,0.4),
                      0px 0px 0.4315px 1.7265px rgba(255,255,255,0.3),
                      inset 0px -2px 1px 0px rgba(0,0,0,0.2),
                      inset 0px 1px 0.5px 0px rgba(255,255,255,0.4)
                    `,
                  transform: "translateY(-2px)",
                  "&::before": {
                    left: "100%",
                  },
                },
                "&:active": {
                  transform: "translateY(0) scale(0.98)",
                  boxShadow: `
                      0px 0px 100px 0px rgba(230,23,7,0.5),
                      0px 0px 15px 0px rgba(230,23,7,0.3)
                    `,
                },
              }}
            >
              <Box
                component="span"
                sx={{
                  position: "relative",
                  zIndex: 1,
                  textShadow: `
                    0px 0px 10px rgba(255,255,255,0.5),
                    0px 0px 20px rgba(230,23,7,0.3),
                    0px 2px 4px rgba(0,0,0,0.3)
                  `,
                  letterSpacing: "0.5px",
                }}
              >
                Register Now
              </Box>
            </Button>
          </Box>
        </Box>
      </Box>
      <Footer sx={{marginTop: screenWidth > 776 ? "-180px" : "-50px"}} />
    </Box>
  );
};

export default Home;
