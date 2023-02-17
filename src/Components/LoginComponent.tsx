import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import {
  FormControl,
  InputBase,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";

const InputField = styled(TextField)({
  padding: "0 1px",
  gap: "2px",
  marginTop: "2rem",
  width: "80%",
});

const LoginComponent = () => {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          witdth: "80vw",
          // backgroundColor:'red'
        }}
      >
        <Paper
          elevation={4}
          sx={{
            width: { xs: "80%", sm: "70%", md: "50%" },
            height: "60vh",
          }}
        >
          <Grid container sx={{ height: "100%" }}>
            <Grid
              item
              xs={6}
              sx={{
                color: "white",
                textAlign: "center",
                backgroundImage: `url(${"src/assets/joel-mott-O9Ogddfvl-U-unsplash.jpg"})`,
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
                <Box sx={{paddingY:'2rem'}}>
                  <Typography variant="h5" fontWeight={800}>ChatUp</Typography>
                  {/* <Typography paddingTop={1} sx={{ fontSize: "0.5rem" }}>
                    Speed, Easy, Fast
                  </Typography> */}
                  <Typography paddingTop={4} paddingX={4} sx={{ fontSize: "1.5rem", }}>
                    Discover something new: Find new interests, hobbies, and
                    perspectives by exploring our vast community.
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              sx={{
                // backgroundColor: "#3144c3",
                color: "black",
                paddingY: "2rem",
                textAlign: "center",
              }}
            >
              <Typography sx={{ fontSize: "0.9rem", fontWeight: "bold" }}>
                Sign In to chatUp
              </Typography>

              <Box sx={{ marginTop: "1rem", cursor: "pointer" }}>
                <img
                  src="src/assets/icons8-google-48.png"
                  height={"30rem"}
                  width={"30rem"}
                />
              </Box>

              <Typography sx={{ fontSize: "0.8rem" }}>
                or Sign In with
              </Typography>

              <form noValidate autoComplete="off">
                <InputField
                  variant="outlined"
                  required
                  size="small"
                  label="Email Address"
                />
                <InputField
                  variant="outlined"
                  required
                  size="small"
                  label="Password"
                />
                <FormControlLabel
                  sx={{ marginTop: "1rem" }}
                  control={<Checkbox defaultChecked />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ marginTop: "1rem", width: "80%" }}
                >
                  Log in
                </Button>
              </form>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
};

export default LoginComponent;
