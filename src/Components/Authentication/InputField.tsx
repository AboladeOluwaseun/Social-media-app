import { FormControl, OutlinedInput, InputLabel } from "@mui/material";
import styled from "@emotion/styled";
import { Dispatch, SetStateAction } from "react";
type Dispatcher<S> = Dispatch<SetStateAction<S>>;

type Props = {
  variant: string;
  htmlFor: string;
  label: string;
  id: string;
  type: string;
  setInputValue: Dispatcher<string>;
  endAdornment: React.ReactNode;
};

export interface inputProps {
  variant: string;
  htmlFor: string;
  label: string;
  id: string;
  type: string;
  setInputValue: Dispatcher<string>;
}


const Input = styled(FormControl)({
  padding: "0 1px",
  gap: "2px",
  marginTop: "2rem",
  width: "80%",
});

const InputField = ({
  variant,
  htmlFor,
  id,
  type,
  label,
  setInputValue,
  endAdornment,
}: Props) => {
  return (
    <>
      <Input variant="outlined">
        <InputLabel htmlFor={htmlFor}>{label}</InputLabel>
        <OutlinedInput
          id={id}
          type={type}
          label={label}
          onKeyUp={(e) => {
            setInputValue((e.target as HTMLInputElement).value);
          }}
          endAdornment={endAdornment}
        />
      </Input>
    </>
  );
};

export default InputField;
