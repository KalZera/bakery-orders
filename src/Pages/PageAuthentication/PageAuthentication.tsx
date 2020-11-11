import React, { FunctionComponent } from "react";
import { Form, Formik } from "formik";
import { useHistory } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";

import { Container } from "Styles/Container";
import { Input, Button } from "Components";
import { Content, FieldForm, Label, BoxButton } from "./styled";

interface Props {}

export const PageAuthentication: FunctionComponent<Props> = () => {
  const history = useHistory();
  const initialValue = {
    email: "",
    password: "",
  };
  return (
    <>
      <Formik
        initialValues={initialValue}
        onSubmit={(values) => {
          const { email, password } = values;
          //  função de login
          firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            //eu poderia importar a rota mas como por enquanto está pequeno o projeto vou informar a rota direta.
            .then(() => history.push("/home"))
            .catch(() => alert("não entrou"));
        }}
      >
        {({ submitForm }) => {
          return (
            <Container>
              <Content>
                <Label>Logar</Label>
                <Form>
                  <FieldForm>
                    <Input type="text" placeholder="Email" name="email" />
                  </FieldForm>
                  <FieldForm>
                    <Input
                      type="password"
                      placeholder="Senha"
                      name="password"
                    />
                  </FieldForm>
                  <BoxButton>
                    <Button
                      text="Cadastrar"
                      onClick={() => history.push("/register")}
                      variant="success"
                    />
                    <Button
                      text="Entrar"
                      onClick={submitForm}
                      variant="primary"
                    />
                  </BoxButton>
                </Form>
              </Content>
            </Container>
          );
        }}
      </Formik>
    </>
  );
};
