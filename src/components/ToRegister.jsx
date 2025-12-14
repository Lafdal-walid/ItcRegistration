import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, Button, useTheme, useMediaQuery } from "@mui/material";
import bkImage from "../assets/bkImage.png";
import overlayImage from "../assets/overlayImage.png";

const ToRegister = () => {
  const sectionRef = useRef(null);
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [isClient, setIsClient] = useState(false);
  const [initialPosition, setInitialPosition] = useState({ top: "36%", left: "50%" });

  useEffect(() => {
    setIsClient(true);
    
    // Update position after 0.5s based on actual width
    const timer = setTimeout(() => {
      const screenWidth = window.innerWidth;
      if (screenWidth > 776) {
        setInitialPosition({ top: "52.5%", left: "49%" });
      }
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      ref={sectionRef}
      sx={{
        width: "100%",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        opacity: isClient ? 1 : 0,
        transition: "opacity 0.3s ease-in-out",
      }}
    >
      {/* Background Image */}
      <Box
        component="img"
        src={bkImage}
        alt="background"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          animation: "backgroundPulse 20s ease-in-out infinite",
          "@keyframes backgroundPulse": {
            "0%, 100%": { filter: "brightness(0.8) contrast(1.1)", transform: "scale(1)" },
            "25%": { filter: "brightness(0.9) contrast(1.05)", transform: "scale(1.02)" },
            "50%": { filter: "brightness(0.85) contrast(1.15)", transform: "scale(1.01)" },
            "75%": { filter: "brightness(0.95) contrast(1.08)", transform: "scale(1.015)" },
          },
        }}
      />

      {/* Overlay Image - only for desktop */}
      {!isMobile && (
        <Box
          component="img"
          src={overlayImage}
          alt="overlay"
          sx={{
            position: "absolute",
            top: "52.5%",
            left: "49%",
            transform: "translate(-50%, -50%)",
            maxWidth: "60%",
            maxHeight: "60%",
            zIndex: 0,
            animation: "float 8s ease-in-out infinite, pulse 6s ease-in-out infinite, glow 10s ease-in-out infinite",
            "@keyframes float": {
              "0%, 100%": { transform: "translate(-50%, -50%) translateY(0px) scale(1)" },
              "50%": { transform: "translate(-50%, -50%) translateY(-15px) scale(1.02)" },
            },
            "@keyframes pulse": {
              "0%, 100%": {
                opacity: 1,
                transform: "translate(-50%, -50%) scale(1)",
                filter: "brightness(1) drop-shadow(0 0 10px rgba(230, 23, 7, 0.2))",
              },
              "50%": {
                opacity: 0.95,
                transform: "translate(-50%, -50%) scale(1.03)",
                filter: "brightness(1.05) drop-shadow(0 0 20px rgba(230, 23, 7, 0.4))",
              },
            },
            "@keyframes glow": {
              "0%, 100%": { filter: "brightness(1) drop-shadow(0 0 8px rgba(230, 23, 7, 0.15))" },
              "33%": { filter: "brightness(1.08) drop-shadow(0 0 18px rgba(230, 23, 7, 0.3))" },
              "66%": { filter: "brightness(1.04) drop-shadow(0 0 12px rgba(230, 23, 7, 0.25))" },
            },
          }}
        />
      )}

      {/* Mobile overlay using ::after */}
      {isMobile && (
        <Box
          sx={{
            position: "absolute",
            top: "36%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            height: "80%",
            zIndex: 0,
            "&::after": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: `url(${overlayImage})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: 0.8,
              animation: "mobileFloat 8s ease-in-out infinite",
              "@keyframes mobileFloat": {
                "0%, 100%": { transform: "translateY(0px) scale(1)" },
                "25%": { transform: "translateY(-3px) scale(1.005)" },
                "50%": { transform: "translateY(-5px) scale(1.01)" },
                "75%": { transform: "translateY(-3px) scale(1.005)" },
              },
            },
          }}
        />
      )}

      {/* Text Content and Button */}
      <Box
        sx={{
          position: "absolute",
          top: "52%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          zIndex: 2,
          color: "#FFFFFF",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: '"Poppins-Regular", sans-serif',
            fontSize: isMobile ? "24px" : "50px",
            fontWeight: 600,
            marginBottom: "30px",
            marginTop: isMobile ? "-30px" : "40px",
            lineHeight: isMobile ? "30px" : "60px",
            background: "linear-gradient(90deg, #aaaaaaff 0%, #dfdfdf 60%, #f2f2f2 70%, #ffffff 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            maxWidth: "100%",
            width: isMobile ? "100vw" : "auto",
            padding: isMobile ? "0 20px" : 0,
            boxSizing: "border-box",
          }}
        >
          The Coding Challenge That<br /> Pushes Your Limits
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontFamily: "Poppins",
            fontSize: isMobile ? "12px" : "18px",
            padding: isMobile ? "0 25px" : 0,
            fontWeight: 400,
            marginBottom: isMobile ? "80px" : "42px",
            marginTop: isMobile ? "35px" : "25px",
            opacity: 0.9,
            background: "linear-gradient(90deg, #9b9b9b 0%, #bdbdbd 35%, #e0e0e0 70%, #ffffff 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Problem-solving competition. Real problems. Real solutions. Code in
          any language. Push your logic, speed, and creativity to the next level.
        </Typography>

        <Button
          variant="contained"
          sx={{
            position: "relative",
            borderRadius: "30px",
            padding: "12px 35px",
            fontSize: "14px",
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
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
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
  );
};

export default ToRegister;
