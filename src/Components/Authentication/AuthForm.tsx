import { Visibility, VisibilityOff } from "@mui/icons-material";
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
} from "@mui/material";
import Button from "@mui/material/Button";

type Props = {};

const AuthForm = (props: Props) => {
  const [signedUp, setSignedUp] = useState<boolean>(true);
  const [firstname, setFirstname] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const { signUpHandler } = useAuth();

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
  const endAdornment = (
    <InputAdornment position="end">
      {" "}
      <IconButton
        aria-label="toggle password visibility"
        edge="end"
        onClick={handleClickShowPassword}
      >
        {showPassword ? <VisibilityOff /> : <Visibility />}
      </IconButton>
    </InputAdornment>
  );
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
          endAdornment={inputType.type === "password" && endAdornment}
        />
      );
    });
  const signUpForm = inputFieldObjectArray.slice(0).map((inputType, index) => {
    return (
      <InputField
        variant={inputType.variant}
        htmlFor={inputType.htmlFor}
        label={inputType.label}
        id={inputType.id}
        key={index}
        type={inputType.type}
        setInputValue={inputType.setInputValue}
        endAdornment={inputType.type === "password" && endAdornment}
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

        <Typography>
          Don't have an account? Sign Up{" "}
          <Typography
            onClick={() => {
              setSignedUp(!signedUp);
            }}
            sx={{
              color: "primary.main",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            Here
          </Typography>
        </Typography>
      </form>
    </>
  );
};

export default AuthForm;
