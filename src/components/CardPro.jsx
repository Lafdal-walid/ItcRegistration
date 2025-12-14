import React from "react";
import { Box, Typography } from "@mui/material";

const CardPro = ({
  title = "",
  description = "",
  icon,
  background,
  width = "450px",
}) => {
  const safeWidth = typeof width === "string" ? width : `${width}px`;

  return (
    <Box
      sx={{
        position: "relative",

        // 🔥 العرض الطبيعي في الشاشات الكبيرة
        width: safeWidth,

        height: "200px",
        borderRadius: "8px",
        overflow: "hidden",

        // 🔥 عند الشاشات الصغيرة: يصبح 80% تلقائيًا
        "@media (max-width: 992px)": {
          width: "80%",
          margin: "0 auto", // لتوسيط الكارد
        },
      }}
    >
      {/* Background Image with better display */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: background ? `url(${background})` : "none",
          backgroundSize: "contain",
          backgroundPosition: "right center",
          backgroundRepeat: "no-repeat",
          zIndex: 0,
        }}
      />

      {/* Blur Layer */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          borderRadius: "3.461px",
          border: "0.433px solid rgba(255,255,255,0.08)",
          boxShadow: "0px 1.731px 1.731px 0px rgba(0,0,0,0.25)",
          backdropFilter: "blur(4.579px)",
          background:
            "linear-gradient(164.73deg, rgba(64, 65, 79, 0.17) 4.1653%, rgba(27, 27, 31, 0.17) 94.143%)",
          zIndex: 1,
        }}
      />

      {/* Icon Box */}
      <Box
        sx={{
          position: "absolute",
          top: "37px",
          left: "44px",
          width: "50px",
          height: "50px",
          borderRadius: "8px",
          border: "0.433px solid rgba(255,255,255,0.18)",
          boxShadow: "0px 1.731px 1.731px 0px rgba(0,0,0,0.25)",
          backdropFilter: "blur(4.579px)",
          background:
            "linear-gradient(90deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.02) 100%), linear-gradient(158.136deg, rgba(64, 65, 79, 0.17) 4.1653%, rgba(27, 27, 31, 0.17) 94.143%)",
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          "@media (max-width: 776px)": {
            left: "50%",
            transform: "translateX(-50%)",
          },
        }}
      >
        {/* Glow */}
        <Box
          sx={{
            position: "absolute",
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,2,2,0.3) 0%, rgba(255,2,2,0) 70%)",
            zIndex: 1,
          }}
        />

        <Box
          sx={{
            position: "relative",
            width: "29px",
            height: "29px",
            zIndex: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#FF0202",
          }}
        >
          {icon}
        </Box>
      </Box>

      {/* Title */}
      <Typography
        sx={{
          position: "absolute",
          top: "110px",
          left: "44px",
          fontFamily: '"Poppins-Regular", sans-serif',
          fontWeight: 500,
          fontSize: "18px",
          color: "#FFFFFF",
          whiteSpace: "nowrap",
          zIndex: 2,

          "@media (max-width: 776px)": {
            left: "50%",
            transform: "translateX(-50%)",
            textAlign: "center",
            fontSize: "14px", 
          },
        }}
      >
        {title}
      </Typography>

      {/* Description */}
      <Typography
        sx={{
          position: "absolute",
          top: "150px",
          left: "44px",
          fontFamily: '"Poppins-Regular", sans-serif',
          fontWeight: 400,
          fontSize: "12px",
          color: "#BAB9B9",
          whiteSpace: "nowrap",
          zIndex: 2,

          "@media (max-width: 776px)": {
            left: "50%",
            transform: "translateX(-50%)",
            textAlign: "center",
            fontSize: "11px", 
          },
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default CardPro;
