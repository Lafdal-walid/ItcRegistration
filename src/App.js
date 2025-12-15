import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme.js";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";


function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* Routes */}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
           
          </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
