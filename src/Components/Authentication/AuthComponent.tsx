import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import AuthForm from "./AuthForm";
import { useAuth } from "../../context/AuthContext";


const AuthComponent = () => {
  const { googleSignIn } = useAuth();
  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width:'90vw'
        }}
      >
        
          
          {/* Authentication page message */}
          <Grid container>
            <Grid
              item
              xs={6}
              sx={{
                color: "white",
                textAlign: "center",
                backgroundImage: `url(${"/assets/joel-mott-O9Ogddfvl-U-unsplash.jpg"})`,
                backgroundSize: "cover",
                display: { xs: "none", md: "block" },
              }}
            >
              <Box
                sx={{
                  backgroundColor: "rgba(49, 68, 195, 0.8)",
                  width: "100%",
                  height: "100%",
                }}
              >
                <Box sx={{ paddingY: "2rem" }}>
                  <Typography variant="h5" fontWeight={800}>
                    ChatUp
                  </Typography>
                  {/* <Typography paddingTop={1} sx={{ fontSize: "0.5rem" }}>
                    Speed, Easy, Fast
                  </Typography> */}
                  <Typography
                    paddingTop={4}
                    paddingX={4}
                    sx={{ fontSize: "1.5rem" }}
                  >
                    Discover something new: Find new interests, hobbies, and
                    perspectives by exploring our vast community.
                  </Typography>
                </Box>
              </Box>
            </Grid>

           {/* Authentication page registration/login form  */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                color: "black",
                paddingY: "2rem",
                textAlign: "center",
              }}
            >
              <Typography sx={{ fontSize: "0.9rem", fontWeight: "bold" }}>
                Sign In to chatUp
              </Typography>

              <Box
                onClick={googleSignIn}
                sx={{ marginTop: "1rem", cursor: "pointer" }}
              >
                <img
                  src="/assets/icons8-google-48.png"
                  height={"30rem"}
                  width={"30rem"}
                />
              </Box>

              <Typography sx={{ fontSize: "0.8rem" }}>
                or Sign In with
              </Typography>
              <AuthForm />
            </Grid>
          </Grid>
       
      </Container>
    </>
  );
};

export default AuthComponent;