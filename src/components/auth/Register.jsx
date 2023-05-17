import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContextProvider";

const Register = () => {
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

  return (
    <div className="containerAuth">
      <h1 className="title">CREATE ACCOUNT</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label className="input-label">First Name</label>
        <input type="text" className="input" onChange={() => {}} required />

        <label className="input-label">Last Name</label>
        <input type="text" className="input" onChange={() => {}} required />

        <label className="input-label">Email:</label>
        <input
          type="email"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          helperText={emailError}
        />

        <label className="input-label">Password:</label>
        <input
          type="password"
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          helperText={passwordError}
        />

        <button
          type="submit"
          className="submit-button"
          onClick={() => {
            handleSignUp();
          }}
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default Register;
