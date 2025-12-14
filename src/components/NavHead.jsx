import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import Logo from "../assets/Logo.svg";
import { ThemeProvider } from "@emotion/react";
import theme from "../theme.js";

const NavHead = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navRef = useRef(null);

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

    const currentRef = navRef.current;
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
    <ThemeProvider theme={theme}>
      <Box
        ref={navRef}
        component="header"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "rgba(10, 8, 8, 0.97)",
          padding: "12px 200px",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          fontFamily: '"Poppins-Regular", sans-serif',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(-20px)",
          transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            component="img"
            src={Logo}
            sx={{
              width: "40px",
              height: "45px",
              marginTop: "7px",
            }}
          />
        </Box>

        {/* Navigation Items */}
        <Box
          sx={{
            display: "flex",
            gap: "45px",
            alignItems: "center",
            marginTop: "7px",
          }}
        >
          {["Home", "About", "Partners", "Agenda", "Location", "Count"].map(
            (item) => (
              <Link
                key={item}
                to={`/${item}`}
                style={{
                  color: '#BAB9B9',
                  textDecoration: "none",
                  fontSize: "15px",
                  fontWeight: "300",
                  transition: "0.3s ease",
                }}
                onMouseOver={(e) => (e.target.style.color = "#E61707")}
                onMouseOut={(e) => (e.target.style.color = "white")}
              >
                {item}
              </Link>
            )
          )}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default NavHead;
