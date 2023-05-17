import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContextProvider";

const Login = () => {
  const {
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
  } = useAuth();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const [passwordShown, setPasswordShown] = useState(false);

  return (
    <div className="containerAuth">
      <h1 className="title">LOGIN</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label className="input-label">Email:</label>
        <input
          type="email"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ fontSize: "20px" }}
        />

        <label className="input-label">Password:</label>
        <input
          type={passwordShown ? "text" : "password"}
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ fontSize: "20px" }}
        />

        <button s onClick={() => setPasswordShown(!passwordShown)}>
          Show Password
        </button>

        <button
          type="submit"
          className="submit-button"
          onClick={() => {
            handleLogin();
          }}
        >
          Login
        </button>
        <div
          style={{
            margin: "1em 0",
            display: "flex",
            gap: "0.5em",
            color: "black",
          }}
        >
          <Link style={{ color: "black", fontWeight: "600" }} href="#">
            Forgot your password
          </Link>
          /
          <Link
            style={{ color: "black", fontWeight: "600" }}
            to={"/auth/reg"}
            href="#"
          >
            Create account
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
