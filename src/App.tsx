import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/HomePage";
import Login from "./Pages/AuthPage";
import { createTheme, ThemeProvider } from "@mui/material";
import { AuthContextProvider } from "../src/context/AuthContext";
const theme = createTheme({
  palette: {
    primary: {
      main: "#3144c3",
    },
  },
  typography: {
    fontFamily: "Poppins",
    fontWeightBold: 800,
  },
});

function App() {
  return (
    <AuthContextProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </AuthContextProvider>
  );
}

export default App;
