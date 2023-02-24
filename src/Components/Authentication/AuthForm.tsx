import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import InputField from "./InputField";
import { inputProps } from "./InputField";
import {
  Checkbox,
  FormControlLabel,
  InputAdornment,
  IconButton,
  Typography,
  Box,
} from "@mui/material";

import Button from "@mui/material/Button";
import { Dispatch, SetStateAction } from "react";
type Dispatcher<S> = Dispatch<SetStateAction<S>>;

type Props = {
  signedUp: boolean
  setSignedUp: Dispatcher<boolean>;
};

const AuthForm = ({signedUp, setSignedUp}: Props) => {
  
  const [firstname, setFirstname] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  // const handleClickShowPassword = () => setShowPassword((show) => !show);
  const { signUpHandler} = useAuth();

  const inputFieldObjectArray: inputProps[] = [
    {
      variant: "outlined",
      htmlFor: "first-name-input",
      label: "First name",
      id: "first-name-input",
      type: "text",
      setInputValue: setFirstname,
    },
    {
      variant: "outlined",
      htmlFor: "surname-input",
      label: "Surname",
      id: "surname-input",
      type: "text",
      setInputValue: setSurname,
    },
    {
      variant: "outlined",
      htmlFor: "email-input",
      label: "Email Address",
      id: "email-input",
      type: "email",
      setInputValue: setEmail,
    },
    {
      variant: "outlined",
      htmlFor: "password-input",
      label: "Password",
      id: "password-input",
      type: showPassword ? "text" : "password",
      setInputValue: setPassword,
    },
  ];

  //End Adornment
  const endAdornment = (
    <InputAdornment position="end">
      <IconButton
        aria-label="toggle password visibility"
        onClick={() => setShowPassword(!showPassword)}
        edge="end"
      >
        {showPassword ? <VisibilityOff /> : <Visibility />}
      </IconButton>
    </InputAdornment>
  );

  //Login Form
  const LoginForm = inputFieldObjectArray
    .slice(2, 4)
    .map((inputType, index) => {
      return (
        <InputField
          variant={inputType.variant}
          htmlFor={inputType.htmlFor}
          label={inputType.label}
          id={inputType.id}
          key={index}
          type={inputType.type}
          setInputValue={inputType.setInputValue}
          endAdornment={index === 1 && endAdornment}
        />
      );
    });
  const signUpForm = inputFieldObjectArray.map((inputType, index) => {
    return (
      <InputField
        variant={inputType.variant}
        htmlFor={inputType.htmlFor}
        label={inputType.label}
        id={inputType.id}
        key={index}
        type={inputType.type}
        setInputValue={inputType.setInputValue}
        endAdornment={index === 3 && endAdornment}
      />
    );
  });

  const AuthenticationHandler = (
    e: React.FormEvent<HTMLFormElement>,
    passwordValue: string,
    emailValue: string
  ): void => {
    e.preventDefault();
    signUpHandler(emailValue, passwordValue);
  };

  return (
    <>
      <form
        noValidate
        autoComplete="on"
        onSubmit={(e) => AuthenticationHandler(e, password, email)}
      >
        {signedUp ? LoginForm : signUpForm}
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
          {signedUp ? "Log in" : "Sign up"}
        </Button>

        <Typography sx={{ marginTop: "2rem" }}>
          {signedUp
            ? "Don't have an account? Sign Up"
            : "Already have an account? Log in"}
          <Box
            component="span"
            onClick={() => {
              setSignedUp(!signedUp);
            }}
            sx={{
              color: "primary.main",
              cursor: "pointer",
              textDecoration: "underline",
              marginLeft: "0.4rem",
            }}
          >
            Here
          </Box>
          .
        </Typography>
      </form>
    </>
  );
};

export default AuthForm;
