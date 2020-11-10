import React, { FunctionComponent } from "react";
import { Button as Btn } from "react-bootstrap";
import { Variant } from "./types";
interface Props {
  text: string;
  variant: Variant;
  onClick: () => void;
  outlined?: boolean;
  disabled?: boolean;
}

export const Button: FunctionComponent<Props> = ({
  text,
  variant,
  onClick,
  outlined,
  disabled,
}) => {
  return (
    <>
      <Btn
        variant={`${!!outlined ? "outlined-" : ""}${variant}`}
        disabled={disabled || undefined}
        onClick={onClick}
      >
        {text}
      </Btn>
    </>
  );
};
