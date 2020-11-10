import React, { FunctionComponent } from "react";
import { Form, Formik } from "formik";

import { Container } from "Styles";
import { Input, Button } from "Components";
import { FieldForm } from "./styled";

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
          alert("hello");
          console.log("submit");
          console.log(values);
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
