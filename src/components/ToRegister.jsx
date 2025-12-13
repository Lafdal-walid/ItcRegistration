import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import bkImage from "../assets/bkImage.png";
import overlayImage from "../assets/overlayImage.png";

const ToRegister = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#000000",
        position: "relative",
        zIndex: 0,
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
          transform: "translate(-50%, -50%)",
          maxWidth: "60%",
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
            fontSize: screenWidth > 776 ? "58px" : "40px",
            fontWeight: 400,
            marginBottom: "60px",
            marginTop: screenWidth > 776 ? "-58px" : "-100px",
            lineHeight: screenWidth > 776 ? "60px" : "55px",
            background: "#FFFFFF",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
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
            marginBottom: "60px",
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
            borderRadius: "25.427px",
            padding: "8px 40px",
            fontSize: "12px",
            fontFamily: "'Poppins', sans-serif",
            textTransform: "none",
            color: "#ffffff",
            background:
              "radial-gradient(ellipse 10.1px 2.3739px at 50% 50%, rgba(168,26,19,1) 0%, rgba(230,23,7,1) 100%)",
            boxShadow: `
                0px 0px 100.98025px 0px rgba(41,121,255,0.376),
                0px 0px 0.4315px 1.7265px rgba(255,255,255,0.1),
                inset 0px -1.7265px 0.863px 0px rgba(0,0,0,0.25),
                inset 0px 0.863px 0.4315px 0px rgba(255,255,255,0.25)
              `,
            overflow: "hidden",
            "&:hover": {
              background:
                "radial-gradient(ellipse 10.1px 2.3739px at 50% 50%, rgba(188,26,19,1) 0%, rgba(250,23,7,1) 100%)",
              boxShadow: `
                  0px 0px 113.99925px 0px rgba(41,121,255,0.456),
                  0px 0px 0.4315px 1.7265px rgba(255,255,255,0.15),
                  inset 0px -0.7265px 0.863px 0px rgba(0,0,0,0.25),
                  inset 0px 0.363px 0.4315px 0px rgba(255,255,255,0.25)
                `,
            },
            "&:active": {
              transform: "scale(0.98)",
            },
          }}
        >
          Register Now
        </Button>
      </Box>
    </Box>
  );
};

export default ToRegister;
