import React, { useState, useEffect, useRef } from "react";
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
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const paddingBottom = typeof pb === "string" ? pb : pb.pb || "900px";

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

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <Box
      ref={sectionRef}
      sx={{
        position: "relative",
        width: "100vw",
        minHeight: "100vh",
        backgroundColor: "#000",
        padding: "80px 0px 0px 0px",
        paddingBottom: paddingBottom,
        boxSizing: "border-box",
        overflow: "visible",

        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(50px)",
        transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",

        "@media (max-width: 992px)": {
          paddingBottom: "120px",
        },
      }}
    >
      {/* Background */}
      <Box
        component="img"
        src={bk2}
        alt="background"
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 1,
        }}
      />

      {/* Text Section */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          color: "#fff",
          maxWidth: "800px",
          margin: "0 auto",
          marginTop: screenWidth > 776 ? "0" : "60px",
        }}
      >
        <Box
          component="img"
          src={Logo2}
          alt="Logo"
          sx={{ width: 90, height: 90, mb: 2 }}
        />

        <Typography
          variant="h2"
          sx={{
            fontFamily: '"Poppins-Regular", sans-serif',
            fontSize: screenWidth > 776 ? "34px" : "33px",
            fontWeight: 600,
            marginBottom: "0px",
            marginTop: screenWidth > 776 ? "-15px" : "0px",
            lineHeight: screenWidth > 776 ? "60px" : "55px",
            background:
              "linear-gradient(90deg, #aaaaaaff 0%, #dfdfdf 60%, #f2f2f2 70%, #ffffff 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            padding: screenWidth > 776 ? "0 0px" : "0 0px",
            maxWidth: "100%",
          }}
        >
          CODE REAL SOLUTIONS. SHAPE THE FUTURE.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontFamily: "Poppins",
            fontSize: screenWidth > 776 ? "17px" : "15px",
            fontWeight: 400,
            marginBottom: "0px",
            marginTop: screenWidth > 776 ? "25px" : "30px",
            opacity: 0.9,
            background:
              "linear-gradient(90deg, #9b9b9b 0%, #bdbdbd 35%, #e0e0e0 70%, #ffffff 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Compete and level up. Solve complex, real-life problems using any
          programming <br></br> language you choose. Your next breakthrough starts here
        </Typography>
      </Box>

      {/* Cards Section */}
      <Box
        sx={{
          position: screenWidth > 992 ? "absolute" : "relative",
          top: screenWidth > 992 ? "450px" : "auto",
          left: 0,
          right: 0,
          marginTop: screenWidth > 992 ? "-30px" : "60px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "30px",
          zIndex: 2,
        }}
      >
        {/* Top Row */}
        <Box
          sx={{
            display: "flex",
            flexDirection: screenWidth > 992 ? "row" : "column",
            gap: "30px",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <CardPro
            title="Any programming language"
            description="Python, C++, JavaScript—use what makes you fast."
            icon={<Box component="img" src={ic1} sx={{ width: "100%" }} />}
            background={ve1}
            width="400px"
          />

          <CardPro
            title="Real problems"
            description="Solve complex, real-life challenges that matter."
            icon={<Box component="img" src={ic2} sx={{ width: "100%" }} />}
            background={ve2}
            width="600px"
          />
        </Box>

        {/* Bottom Row */}
        <Box
          sx={{
            display: "flex",
            flexDirection: screenWidth > 992 ? "row" : "column",
            gap: "30px",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <CardPro
            title="Compete & win"
            description="Battle against the best coders worldwide."
            icon={<Box component="img" src={ic3} sx={{ width: "100%" }} />}
            background={ve3}
            width="600px"
          />

          <CardPro
            title="Level up"
            description="Push your skills to the next level."
            icon={<Box component="img" src={ic4} sx={{ width: "100%" }} />}
            background={ve4}
            width="400px"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default EventDescription;
