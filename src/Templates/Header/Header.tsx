import React, { FunctionComponent } from "react";
import firebase from "firebase/app";
import "firebase/auth";

import { Container, BoxButton } from "./styled";
import { Button } from "Components";
import { useAuth } from "Hooks";

interface Props {}

export const Header: FunctionComponent<Props> = () => {
  // verifica se tem um usuário logado
  const auth = useAuth();
  const logOut = () => {
    firebase.auth().signOut();
  };
  return (
    <Container>
      {/* add logo */}
      {auth === "authenticated" && (
        <BoxButton>
          <Button text="Sair" variant="light" onClick={logOut} />
        </BoxButton>
      )}
    </Container>
  );
};
