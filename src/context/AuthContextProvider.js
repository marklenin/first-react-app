import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import fire from "../fire";

export const authContext = createContext();
export const useAuth = () => useContext(authContext);

const AuthContextProvider = ({ children }) => {
  // состояния для храннения данных
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const navigate = useNavigate();

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  // функция регистрации
  const handleSignUp = () => {
    clearErrors();
    // обращаемся к firebase через fire
    fire
      .auth() // используем функцию, которую вернет метод auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => navigate("/")) // переход на home , в случае если регистрация прошла успешно
      .catch((err) => {
        // обработка ошибок
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;

          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  // функция для логина
  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => navigate("/"))
      .catch((err) => {
        switch (err.code) {
          case "auth/user-disabled":
          case "auth/invalid-email":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;

          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  // функция для отслеживания состояния авторизации
  const authListener = () => {
    // отлавливаем user'a через встроенную в firebase функцию
    fire.auth().onAuthStateChanged((user) => {
      // если user  существует
      if (user) {
        clearInputs();
        setUser(user); // то сохраняем его в состоянии
      } else {
        setUser(""); // если usera нет, то в состоянии ""
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  console.log(user);

  const values = {
    email,
    password,
    user,

    emailError,
    passwordError,
    hasAccount,

    setEmail,
    setPassword,
    setHasAccount,

    handleSignUp,
    handleLogin,
    handleLogout,
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
