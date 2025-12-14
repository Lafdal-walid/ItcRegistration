import React, { useState, useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";

const CountdownCard = ({ label, screenWidth, gradientAngle, animationDelay = "0s" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const cardRef = useRef(null);

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

    const currentRef = cardRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date('December 21, 2025 00:00:00').getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const getNumber = () => {
    switch (label.toLowerCase()) {
      case 'days':
        return timeLeft.days.toString().padStart(2, '0');
      case 'hours':
        return timeLeft.hours.toString().padStart(2, '0');
      case 'minute':
        return timeLeft.minutes.toString().padStart(2, '0');
      case 'second':
        return timeLeft.seconds.toString().padStart(2, '0');
      default:
        return '00';
    }
  };

  return (
    <Box
      ref={cardRef}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0) scale(1)" : "translateY(30px) scale(0.8)",
        transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
        transitionDelay: animationDelay,
      }}
    >
      {/* CARD */}
      <Box
        sx={{
          position: "relative",
          width: screenWidth > 1200 ? "200px" : screenWidth > 992 ? "160px" : screenWidth > 776 ? "140px" : screenWidth > 600 ? "120px" : "80px",
          height: screenWidth > 1200 ? "200px" : screenWidth > 992 ? "160px" : screenWidth > 776 ? "140px" : screenWidth > 600 ? "120px" : "80px",
          borderRadius: screenWidth > 1200 ? "29px" : screenWidth > 992 ? "25px" : screenWidth > 776 ? "22px" : screenWidth > 600 ? "20px" : "18px",
          border: "0.435px solid rgba(255,255,255,0.08)",
          background:
            "linear-gradient(159.021deg, rgba(64, 65, 79, 0.17) 4.1653%, rgba(27, 27, 31, 0.17) 94.143%)",
          backdropFilter: "blur(4.602px)",
          boxShadow: "0px 1.739px 1.739px 0px rgba(0,0,0,0.25)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontSize: screenWidth > 1200 ? "80px" : screenWidth > 992 ? "70px" : screenWidth > 776 ? "60px" : screenWidth > 600 ? "50px" : "30px",
            fontWeight: 600,
            color: "#FFFFFF",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {getNumber()}
        </Typography>
      </Box>

      {/* LABEL تحت الـ CARD */}
      <Typography
        sx={{
          fontFamily: "Poppins",
          fontSize: screenWidth > 1200 ? "24px" : screenWidth > 992 ? "20px" : screenWidth > 776 ? "16px" : screenWidth > 600 ? "14px" : "10px",
          fontWeight: 500,
          letterSpacing: "0.8px",
          background: `linear-gradient(${gradientAngle}deg, rgb(255, 255, 255) 19.384%, rgba(255, 255, 255, 0.6) 131.08%)`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          textTransform: "uppercase",
          textAlign: "center",
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};

export default CountdownCard;
