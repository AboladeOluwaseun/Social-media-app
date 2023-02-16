import { Box } from "@mui/system";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomePageComponent = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/login");
    }, 5000);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        color: "#3144c3",
        fontSize: "3rem",
        fontWeight: "bold",
        "@keyframes font-increase": {
          "0%": {
            fontSize: "1rem",
            opacity: 0.3,
          },
          "50%": {
            fontSize: "3rem",
            opacity: 0.5,
          },
          "100%": {
            opacity: 1,
          },
        },
        animation: "font-increase 3s ease 1",
      }}
      
    >
      chatUp
    </Box>
  );
};

export default HomePageComponent;
