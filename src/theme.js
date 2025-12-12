import { createTheme } from "@mui/material/styles";

const publicUrl = process.env.PUBLIC_URL || '';
const fontFaces = `
  @font-face {
    font-family: "Poppins";
    src: url("${publicUrl}/fonts/Poppins-Regular.ttf") format("truetype");
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: "Poppins";
    src: url("${publicUrl}/fonts/Poppins-Medium.ttf") format("truetype");
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: "Poppins";
    src: url("${publicUrl}/fonts/Poppins-SemiBold.ttf") format("truetype");
    font-weight: 600;
    font-style: normal;
  }
`;

// إضافة الخطوط إلى الصفحة
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = fontFaces;
  document.head.appendChild(styleElement);
}

// تعريف الألوان حسب الوظيفة
const colors = {
  // main colors
  main: "#E61707",
  darkMain: "#A81A13",
  
  // natural colors
  natural100: "#FFFFFF",
  natural200: "#BAB9B9",
  natural300: "#555555",
  natural400: "#080000",
  
  // linear colors
  linearFrom: "#FFFFFF",
  linearTo: "#ADADAD",
};

// إنشاء الثيم
const theme = createTheme({
  palette: {
    main: {
      main: colors.main,
      darkMain: colors.darkMain,
    },
    natural: {
      100: colors.natural100,
      200: colors.natural200,
      300: colors.natural300,
      400: colors.natural400,
    },
    linear: {
      from: colors.linearFrom,
      to: colors.linearTo,
    },
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
    fontWeight: {
      400: "Poppins-Regular",
      500: "Poppins-Medium", 
      600: "Poppins-SemiBold",
    },
    fontSize: 12,
  },
});

export default theme;