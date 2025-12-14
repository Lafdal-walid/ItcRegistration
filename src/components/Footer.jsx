import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import FooterIcon from "../assets/FooterIcon.svg";

// Suppress ResizeObserver warning
const resizeObserverErrorHandler = (e) => {
  if (e.message === 'ResizeObserver loop completed with undelivered notifications.') {
    return;
  }
  console.error(e);
};
window.addEventListener('error', resizeObserverErrorHandler);

const Footer = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

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

    const currentRef = footerRef.current;
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
      ref={footerRef}
      sx={{
        backgroundColor: "#070809",
        width: "100%",
        minHeight: screenWidth > 776 ? "auto" : "60vh",
        position: "relative",
        overflow: "hidden",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(50px)",
        transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 50%, rgba(230, 23, 7, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 40% 20%, rgba(186, 185, 185, 0.05) 0%, transparent 50%)
          `,
          animation: "gradientShift 15s ease infinite",
          "@keyframes gradientShift": {
            "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
            "33%": { transform: "translate(-20px, -20px) rotate(120deg)" },
            "66%": { transform: "translate(20px, -10px) rotate(240deg)" },
          },
        },
      }}
    >
      <Box
        sx={{
          padding: screenWidth > 776 ? "60px 20px 30px" : "40px 15px 20px",
          color: "#BAB9B9",
          fontFamily: "Poppins",
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
      {/* Main Footer Content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: screenWidth > 776 ? "row" : "column",
          justifyContent: "space-between",
          alignItems: screenWidth > 776 ? "flex-start" : "center",
          gap: screenWidth > 776 ? "40px" : "30px",
          marginBottom: "40px",
        }}
      >
        {/* Logo and Address Section */}
        <Box
          sx={{
            flex: screenWidth > 776 ? 1 : "none",
            minWidth: screenWidth > 776 ? "250px" : "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: screenWidth > 776 ? "flex-start" : "center",
            textAlign: screenWidth > 776 ? "left" : "center",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateX(0)" : "translateX(-30px)",
            transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s",
          }}
        >
          <Box
            component="img"
            src={FooterIcon}
            alt="Footer Logo"
            sx={{
              width: screenWidth > 776 ? "60px" : "50px",
              height: screenWidth > 776 ? "60px" : "50px",
              marginBottom: "20px",
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: screenWidth > 776 ? "flex-start" : "center",
              gap: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: "10px",
                justifyContent: screenWidth > 776 ? "flex-start" : "center",
              }}
            >
              <LocationOnIcon
                sx={{
                  fontSize: screenWidth > 776 ? "18px" : "16px",
                  color: "#E61707",
                  marginTop: "2px",
                }}
              />
              <Typography
                sx={{
                  fontSize: screenWidth > 776 ? "14px" : "12px",
                  lineHeight: "1.5",
                  opacity: 0.9,
                }}
              >
                University of Blida1
              </Typography>
            </Box>
            <Typography
              sx={{
                fontSize: screenWidth > 776 ? "14px" : "12px",
                lineHeight: "1.5",
                opacity: 0.9,
                marginLeft: screenWidth > 776 ? "28px" : "0",
              }}
            >
              SHARING IS CARING
            </Typography>
          </Box>
        </Box>

        {/* Mobile Layout - Follow Us next to Logo */}
        {screenWidth <= 776 && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "scale(1)" : "scale(0.8)",
              transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s",
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 600,
                marginBottom: "20px",
                color: "#FFFFFF",
                background: "linear-gradient(135deg, #FFFFFF 0%, #E0E0E0 50%, #C8C8C8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textAlign: "center",
              }}
            >
              Follow Us
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: "15px",
                justifyContent: "center",
              }}
            >
              <IconButton
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  color: "#BAB9B9",
                  width: "45px",
                  height: "45px",
                  borderRadius: "12px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  position: "relative",
                  overflow: "hidden",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: "0",
                    height: "0",
                    borderRadius: "50%",
                    background: "rgba(230, 23, 7, 0.3)",
                    transform: "translate(-50%, -50%)",
                    transition: "all 0.6s ease",
                  },
                  "&:hover": {
                    backgroundColor: "rgba(230, 23, 7, 0.1)",
                    color: "#E61707",
                    border: "1px solid rgba(230, 23, 7, 0.3)",
                    transform: "translateY(-3px) scale(1.05)",
                    boxShadow: `
                      0 10px 25px rgba(230, 23, 7, 0.3),
                      0 5px 10px rgba(0, 0, 0, 0.2)
                    `,
                    "&::before": {
                      width: "100px",
                      height: "100px",
                    },
                  },
                  "&:active": {
                    transform: "translateY(-1px) scale(0.98)",
                  },
                }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  color: "#BAB9B9",
                  width: "45px",
                  height: "45px",
                  borderRadius: "12px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  position: "relative",
                  overflow: "hidden",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: "0",
                    height: "0",
                    borderRadius: "50%",
                    background: "rgba(230, 23, 7, 0.3)",
                    transform: "translate(-50%, -50%)",
                    transition: "all 0.6s ease",
                  },
                  "&:hover": {
                    backgroundColor: "rgba(230, 23, 7, 0.1)",
                    color: "#E61707",
                    border: "1px solid rgba(230, 23, 7, 0.3)",
                    transform: "translateY(-3px) scale(1.05)",
                    boxShadow: `
                      0 10px 25px rgba(230, 23, 7, 0.3),
                      0 5px 10px rgba(0, 0, 0, 0.2)
                    `,
                    "&::before": {
                      width: "100px",
                      height: "100px",
                    },
                  },
                  "&:active": {
                    transform: "translateY(-1px) scale(0.98)",
                  },
                }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  color: "#BAB9B9",
                  width: "45px",
                  height: "45px",
                  borderRadius: "12px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  position: "relative",
                  overflow: "hidden",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: "0",
                    height: "0",
                    borderRadius: "50%",
                    background: "rgba(230, 23, 7, 0.3)",
                    transform: "translate(-50%, -50%)",
                    transition: "all 0.6s ease",
                  },
                  "&:hover": {
                    backgroundColor: "rgba(230, 23, 7, 0.1)",
                    color: "#E61707",
                    border: "1px solid rgba(230, 23, 7, 0.3)",
                    transform: "translateY(-3px) scale(1.05)",
                    boxShadow: `
                      0 10px 25px rgba(230, 23, 7, 0.3),
                      0 5px 10px rgba(0, 0, 0, 0.2)
                    `,
                    "&::before": {
                      width: "100px",
                      height: "100px",
                    },
                  },
                  "&:active": {
                    transform: "translateY(-1px) scale(0.98)",
                  },
                }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  color: "#BAB9B9",
                  width: "45px",
                  height: "45px",
                  borderRadius: "12px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  position: "relative",
                  overflow: "hidden",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: "0",
                    height: "0",
                    borderRadius: "50%",
                    background: "rgba(230, 23, 7, 0.3)",
                    transform: "translate(-50%, -50%)",
                    transition: "all 0.6s ease",
                  },
                  "&:hover": {
                    backgroundColor: "rgba(230, 23, 7, 0.1)",
                    color: "#E61707",
                    border: "1px solid rgba(230, 23, 7, 0.3)",
                    transform: "translateY(-3px) scale(1.05)",
                    boxShadow: `
                      0 10px 25px rgba(230, 23, 7, 0.3),
                      0 5px 10px rgba(0, 0, 0, 0.2)
                    `,
                    "&::before": {
                      width: "100px",
                      height: "100px",
                    },
                  },
                  "&:active": {
                    transform: "translateY(-1px) scale(0.98)",
                  },
                }}
              >
                <FacebookIcon />
              </IconButton>
            </Box>
          </Box>
        )}

        {/* Desktop Layout - Middle Section */}
        {screenWidth > 776 && (
          <Box
            sx={{
              flex: 1,
              minWidth: "200px",
              display: "flex",
              flexDirection: "column",
              gap: "40px",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s",
            }}
          >
            {/* Follow Us Section */}
            <Box>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 600,
                  marginBottom: "20px",
                  color: "#FFFFFF",
                  background: "linear-gradient(135deg, #FFFFFF 0%, #E0E0E0 50%, #C8C8C8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Follow Us
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: "15px",
                }}
              >
                <IconButton
                  sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    color: "#BAB9B9",
                    width: "45px",
                    height: "45px",
                    borderRadius: "12px",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(10px)",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    position: "relative",
                    overflow: "hidden",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      width: "0",
                      height: "0",
                      borderRadius: "50%",
                      background: "rgba(230, 23, 7, 0.3)",
                      transform: "translate(-50%, -50%)",
                      transition: "all 0.6s ease",
                    },
                    "&:hover": {
                      backgroundColor: "rgba(230, 23, 7, 0.1)",
                      color: "#E61707",
                      border: "1px solid rgba(230, 23, 7, 0.3)",
                      transform: "translateY(-3px) scale(1.05)",
                      boxShadow: `
                        0 10px 25px rgba(230, 23, 7, 0.3),
                        0 5px 10px rgba(0, 0, 0, 0.2)
                      `,
                      "&::before": {
                        width: "100px",
                        height: "100px",
                      },
                    },
                    "&:active": {
                      transform: "translateY(-1px) scale(0.98)",
                    },
                  }}
                >
                  <InstagramIcon />
                </IconButton>
                <IconButton
                  sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    color: "#BAB9B9",
                    width: "45px",
                    height: "45px",
                    borderRadius: "12px",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(10px)",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    position: "relative",
                    overflow: "hidden",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      width: "0",
                      height: "0",
                      borderRadius: "50%",
                      background: "rgba(230, 23, 7, 0.3)",
                      transform: "translate(-50%, -50%)",
                      transition: "all 0.6s ease",
                    },
                    "&:hover": {
                      backgroundColor: "rgba(230, 23, 7, 0.1)",
                      color: "#E61707",
                      border: "1px solid rgba(230, 23, 7, 0.3)",
                      transform: "translateY(-3px) scale(1.05)",
                      boxShadow: `
                        0 10px 25px rgba(230, 23, 7, 0.3),
                        0 5px 10px rgba(0, 0, 0, 0.2)
                      `,
                      "&::before": {
                        width: "100px",
                        height: "100px",
                      },
                    },
                    "&:active": {
                      transform: "translateY(-1px) scale(0.98)",
                    },
                  }}
                >
                  <TwitterIcon />
                </IconButton>
                <IconButton
                  sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    color: "#BAB9B9",
                    width: "45px",
                    height: "45px",
                    borderRadius: "12px",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(10px)",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    position: "relative",
                    overflow: "hidden",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      width: "0",
                      height: "0",
                      borderRadius: "50%",
                      background: "rgba(230, 23, 7, 0.3)",
                      transform: "translate(-50%, -50%)",
                      transition: "all 0.6s ease",
                    },
                    "&:hover": {
                      backgroundColor: "rgba(230, 23, 7, 0.1)",
                      color: "#E61707",
                      border: "1px solid rgba(230, 23, 7, 0.3)",
                      transform: "translateY(-3px) scale(1.05)",
                      boxShadow: `
                        0 10px 25px rgba(230, 23, 7, 0.3),
                        0 5px 10px rgba(0, 0, 0, 0.2)
                      `,
                      "&::before": {
                        width: "100px",
                        height: "100px",
                      },
                    },
                    "&:active": {
                      transform: "translateY(-1px) scale(0.98)",
                    },
                  }}
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton
                  sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    color: "#BAB9B9",
                    width: "45px",
                    height: "45px",
                    borderRadius: "12px",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(10px)",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    position: "relative",
                    overflow: "hidden",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      width: "0",
                      height: "0",
                      borderRadius: "50%",
                      background: "rgba(230, 23, 7, 0.3)",
                      transform: "translate(-50%, -50%)",
                      transition: "all 0.6s ease",
                    },
                    "&:hover": {
                      backgroundColor: "rgba(230, 23, 7, 0.1)",
                      color: "#E61707",
                      border: "1px solid rgba(230, 23, 7, 0.3)",
                      transform: "translateY(-3px) scale(1.05)",
                      boxShadow: `
                        0 10px 25px rgba(230, 23, 7, 0.3),
                        0 5px 10px rgba(0, 0, 0, 0.2)
                      `,
                      "&::before": {
                        width: "100px",
                        height: "100px",
                      },
                    },
                    "&:active": {
                      transform: "translateY(-1px) scale(0.98)",
                    },
                  }}
                >
                  <FacebookIcon />
                </IconButton>
              </Box>
            </Box>

            {/* Contact Us Section */}
            <Box>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 600,
                  marginBottom: "20px",
                  color: "#FFFFFF",
                  background: "linear-gradient(135deg, #FFFFFF 0%, #E0E0E0 50%, #C8C8C8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Contact Us
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "15px",
                }}
              >
                <EmailIcon
                  sx={{
                    fontSize: "18px",
                    color: "#E61707",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "14px",
                    opacity: 0.9,
                  }}
                >
                  itc@gmail.com
                </Typography>
              </Box>
            </Box>
          </Box>
        )}

        {/* Navigation Links Section */}
        <Box
          sx={{
            flex: screenWidth > 776 ? 1 : "none",
            minWidth: screenWidth > 776 ? "200px" : "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: screenWidth > 776 ? "flex-start" : "center",
            textAlign: screenWidth > 776 ? "left" : "center",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateX(0)" : "translateX(30px)",
            transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s",
          }}
        >
          <Typography
            sx={{
              fontSize: screenWidth > 776 ? "16px" : "14px",
              fontWeight: 600,
              marginBottom: "20px",
              color: "#FFFFFF",
              background: "linear-gradient(135deg, #FFFFFF 0%, #E0E0E0 50%, #C8C8C8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textAlign: screenWidth > 776 ? "left" : "center",
            }}
          >
            ITC Programing 4.0
          </Typography>
          
          {/* Mobile Layout - Contact Us next to ITC Programming */}
          {screenWidth <= 776 && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "20px",
                justifyContent: "center",
              }}
            >
              <EmailIcon
                sx={{
                  fontSize: "16px",
                  color: "#E61707",
                }}
              />
              <Typography
                sx={{
                  fontSize: "12px",
                  opacity: 0.9,
                }}
              >
                itc@gmail.com
              </Typography>
            </Box>
          )}

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: screenWidth > 776 ? "repeat(2, 1fr)" : "1fr",
              gap: "12px",
              justifyContent: screenWidth > 776 ? "flex-start" : "center",
              width: "100%",
            }}
          >
            {["Home", "About", "Partners", "Agenda", "Location", "Sponsors"].map((item) => (
              <Typography
                key={item}
                sx={{
                  fontSize: screenWidth > 776 ? "14px" : "12px",
                  opacity: 0.8,
                  cursor: "pointer",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  position: "relative",
                  padding: "8px 12px",
                  borderRadius: "8px",
                  background: "transparent",
                  textAlign: screenWidth > 776 ? "left" : "center",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "0",
                    height: "2px",
                    background: "linear-gradient(90deg, #E61707, #FF4444)",
                    transition: "all 0.3s ease",
                    borderRadius: "2px",
                  },
                  "&:hover": {
                    opacity: 1,
                    color: "#E61707",
                    background: "rgba(230, 23, 7, 0.05)",
                    transform: "translateX(5px)",
                    "&::before": {
                      width: "100%",
                    },
                  },
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Copyright Section */}
      <Box
        sx={{
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          paddingTop: "20px",
          textAlign: "center",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.6s",
        }}
      >
        <Typography
          sx={{
            fontSize: screenWidth > 776 ? "12px" : "10px",
            opacity: 0.7,
            background: "linear-gradient(135deg, #BAB9B9 0%, #E0E0E0 50%, #C8C8C8 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          © 2025 ITCP Challenge. All rights reserved.
        </Typography>
      </Box>
      </Box>
    </Box>
  );
};

export default Footer;
