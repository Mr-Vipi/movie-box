import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { firebaseConfig } from "../config";

initializeApp(firebaseConfig);

const auth = getAuth();

// interface Provider {
//   navigate: () => void;
//   email: string;
//   password: string;
// }

export const signUp = (
  navigate: (a: string) => void,
  email: string | null,
  password: string | null
) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      navigate("/main");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
};

export const signIn = (
  navigate: (a: string) => void,
  email: string | null,
  password: string | null
) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      navigate("/main");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};
