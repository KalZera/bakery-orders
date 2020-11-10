import React, { FunctionComponent } from "react";
import { Form, Formik } from "formik";

import { Container } from "Styles";
import { Input, Button } from "Components";
import { FieldForm } from "./styled";

import { UserService } from "Services";

interface Props {}

export const PageRegister: FunctionComponent<Props> = () => {
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
            .then(() => alert("cadastrado"))
            .catch(() => alert("não cadastrou"));
        }}
      >
        {({ submitForm }) => {
          return (
            <Container>
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
                  <Input type="password" placeholder="Senha" name="password" />
                </FieldForm>
                <Button
                  text="Cadastrar"
                  onClick={submitForm}
                  variant="success"
                />
              </Form>
            </Container>
          );
        }}
      </Formik>
    </>
  );
};
