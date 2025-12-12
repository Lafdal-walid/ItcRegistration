import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme.js";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Partners from "./pages/Partners.jsx";
import Agenda from "./pages/Agenda.jsx";
import Location from "./pages/Location.jsx";
import Count from "./pages/Count.jsx";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* Routes */}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Partners" element={<Partners />} />
            <Route path="/Agenda" element={<Agenda />} />
            <Route path="/Location" element={<Location />} />
            <Route path="/Count" element={<Count />} />
          </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
