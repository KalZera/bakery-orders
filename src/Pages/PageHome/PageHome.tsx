import React, { FunctionComponent } from "react";

import { Container } from "Styles/Container";
import { Content, Title, SubTitle } from "./styled";

interface Props {}

export const PageHome: FunctionComponent<Props> = () => {
  return (
    <>
      <Container>
        <Content>
          <Title>Seja Bem Vindo!!</Title>
          <SubTitle>Você está logado</SubTitle>
        </Content>
      </Container>
    </>
  );
};
