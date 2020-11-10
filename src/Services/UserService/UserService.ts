import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

interface User {
  name: string;
  email: string;
  phone: string;
  cpf: string;
}

const RegisterUserAuth = async (user: User, password: string) => {
  //poderia o then e catch mas com async e await fica mais legível.
  const newUser = await firebase
    .auth()
    .createUserWithEmailAndPassword(user.email, password);
  if (!!newUser.user) {
    const { uid } = newUser.user;
    firebase.database().ref("/users").child(uid).set(user);
  } else {
    throw Error("Usuário não foi criado");
  }
};

export const UserService = { RegisterUserAuth };
