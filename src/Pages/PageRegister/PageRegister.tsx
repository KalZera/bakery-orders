import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { Form, Formik } from "formik";

import { Container } from "Styles/Container";
import { Input, Button } from "Components";
import { LogoLogin } from "Templates";
import { Content, FieldForm, Label, BoxButton } from "./styled";

import { UserService } from "Services";

interface Props {}

export const PageRegister: FunctionComponent<Props> = () => {
  const history = useHistory();
  const initialValue = {
    name: "",
    email: "",
    phone: "",
    cpf: "",
    password: "",
  };
  return (
    <>
      <Formik
        initialValues={initialValue}
        onSubmit={(values) => {
          const { name, cpf, phone, email, password } = values;
          UserService.RegisterUserAuth({ name, cpf, phone, email }, password)
            .then(() => history.push("/home"))
            .catch(() => alert("não cadastrou"));
        }}
      >
        {({ submitForm }) => {
          return (
            <Container>
              <Content>
                <LogoLogin />
                <Label>Cadastre-se</Label>
                <Form>
                  <FieldForm>
                    <Input type="text" placeholder="Nome" name="name" />
                  </FieldForm>
                  <FieldForm>
                    <Input type="text" placeholder="Email" name="email" />
                  </FieldForm>
                  <FieldForm>
                    <Input type="text" placeholder="Telefone" name="phone" />
                  </FieldForm>
                  <FieldForm>
                    <Input type="text" placeholder="CPF" name="cpf" />
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
                      onClick={submitForm}
                      variant="success"
                    />
                  </BoxButton>
                  <BoxButton>
                    <Button
                      text="Já sou cadastrado, Entrar"
                      onClick={() => history.push("/auth")}
                      variant="link"
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
