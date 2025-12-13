import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import bk2 from "../assets/bk2.png";
import Logo2 from "../assets/Logo2.svg";
import CardPro from "./CardPro.jsx";
import ic1 from "../assets/cards/ic1.svg";
import ic2 from "../assets/cards/ic2.svg";
import ic3 from "../assets/cards/ic3.svg";
import ic4 from "../assets/cards/ic4.svg";
import ve1 from "../assets/cards/ve1.svg";
import ve2 from "../assets/cards/ve2.svg";
import ve3 from "../assets/cards/ve3.svg";
import ve4 from "../assets/cards/ve4.svg";

const EventDescription = ({ pb = {} }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const paddingBottom = typeof pb === "string" ? pb : pb.pb || "900px";

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        minHeight: "100vh",
        backgroundColor: "#000000",
        margin: 0,
        padding: "80px 20px",
        boxSizing: "border-box",
        paddingBottom: paddingBottom,

        "@media (max-width: 992px)": {
          paddingBottom: "1250px",
        },
      }}
    >
      {/* Background Image */}
      <Box
        component="img"
        src={bk2}
        alt="background overlay"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: 1,
        }}
      />

      {/* Main Text Section */}
      <Box
        sx={{
          position: "absolute",
          top: "190px",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          zIndex: 2,
          color: "#FFFFFF",
        }}
      >
        <Box
          component="img"
          src={Logo2}
          alt="Logo2"
          sx={{
            width: "90px",
            height: "90px",
            marginBottom: screenWidth > 776 ? "15px" : "0px",
          }}
        />

        <Typography
          variant="h2"
          sx={{
            fontFamily: '"Poppins-Regular", sans-serif',
            fontSize: screenWidth > 776 ? "28px" : "22px",
            fontWeight: 400,
            marginBottom: "30px",
            lineHeight: "30px",
            background: "#BAB9B9",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          CODE REAL SOLUTIONS. SHAPE THE FUTURE.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontFamily: "Poppins",
            fontSize: screenWidth > 776 ? "14px" : "12px",
            fontWeight: 400,
            opacity: 0.9,
            color: "#BAB9B9",
            marginTop: "30px",
          }}
        >
          Compete and level up. Solve complex, real-life problems using an
          programming <br></br> language you choose. Your next breakthrough
          starts here.
        </Typography>
      </Box>

      {/* 4 Cards Section */}
      <Box
        sx={{
          position: "absolute",
          top: "400px",
          left: "20px",
          right: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: screenWidth > 992 ? "10px" : "30px",
          zIndex: 2,
        }}
      >
        {/* Top Row */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: screenWidth > 992 ? "10px" : "30px",
            alignItems: "flex-start",
            flexDirection: screenWidth > 992 ? "row" : "column",
            width: screenWidth > 992 ? "auto" : "100%",
          }}
        >
          <CardPro
            title="Any programming language"
            description="Python, C++, JavaScript—use what makes you fast."
            icon={
              <Box
                component="img"
                src={ic1}
                sx={{ width: "100%", height: "100%" }}
              />
            }
            background={ve1}
            width="400px"
          />

          <CardPro
            title="Real problems"
            description="Solve complex, real-life challenges that matter."
            icon={
              <Box
                component="img"
                src={ic2}
                sx={{ width: "100%", height: "100%" }}
              />
            }
            background={ve2}
            width="600px"
          />
        </Box>

        {/* Bottom Row */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: screenWidth > 992 ? "10px" : "30px",
            alignItems: "flex-start",
            marginTop: screenWidth > 992 ? "20px" : "0px",
            flexDirection: screenWidth > 992 ? "row" : "column",
            width: screenWidth > 992 ? "auto" : "100%",
          }}
        >
          <CardPro
            title="Compete & win"
            description="Battle against the best coders worldwide."
            icon={
              <Box
                component="img"
                src={ic3}
                sx={{ width: "100%", height: "100%" }}
              />
            }
            background={ve3}
            width="600px"
          />

          <CardPro
            title="Level up"
            description="Push your skills to the next level."
            icon={
              <Box
                component="img"
                src={ic4}
                sx={{ width: "100%", height: "100%" }}
              />
            }
            background={ve4}
            width="400px"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default EventDescription;
