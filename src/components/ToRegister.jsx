import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, Button } from "@mui/material";
import bkImage from "../assets/bkImage.png";
import overlayImage from "../assets/overlayImage.png";

const ToRegister = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <Box
      ref={sectionRef}
      sx={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#000000",
        position: "relative",
        zIndex: 0,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(50px)",
        transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
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
        }}
      />
      <Box
        component="img"
        src={overlayImage}
        alt="overlay"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          right: "50%",
          transform: "translate(-50%, -100%)",
          maxWidth: screenWidth > 776 ? "60%" : "80%",
          maxHeight: "60%",
          zIndex: 1,
        }}
      />

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
            fontSize: screenWidth > 776 ? "52px" : "33px",
            fontWeight: 400,
            marginBottom: "30px",
            marginTop: screenWidth > 776 ? "100px" : "0px",
            lineHeight: screenWidth > 776 ? "60px" : "55px",
            background: "#FFFFFF",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            padding: screenWidth > 776 ? "0 0px" : "0 0px",
            maxWidth: "100%",
          }}
        >
          {screenWidth > 776 ? (
            <>
              The Coding Challenge That<br></br> Pushes Your Limits
            </>
          ) : (
            "The Coding Challenge That Pushes Your Limits"
          )}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontFamily: "Poppins",
            fontSize: screenWidth > 776 ? "18px" : "15px",
            fontWeight: 400,
            marginBottom: "30px",
            marginTop: screenWidth > 776 ? "25px" : "30px",
            opacity: 0.9,
            color: "#555555",
          }}
        >
          Problem-solving competition. Real problems. Real solutions. Code in
          any language Push your logc, speed, and creativity to the next level.
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
