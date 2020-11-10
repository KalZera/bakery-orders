import React, { FunctionComponent } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { useField } from "formik";

interface Props {
  placeholder?: string;
  name: string;
  type: "text" | "password";
}

export const Input: FunctionComponent<Props> = ({
  placeholder,
  name,
  type,
}) => {
  const [field] = useField(name);
  return (
    <>
      <InputGroup>
        <FormControl
          {...field}
          type={type}
          placeholder={placeholder || ""}
          aria-label={placeholder || ""}
        />
      </InputGroup>
    </>
  );
};
