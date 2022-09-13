import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const { username, onInputChange } = useForm({
    username: '',
  });

  const onLoginSubmit = (event) => {
    event.preventDefault();
    if (username.trim() < 1) return;
    login(username);

    navigate("/", {
      replace: true,
    });
  };

  return (
    <div className="container mt-5">
      <h1>LoginPage</h1>
      <hr />
      <form onSubmit={onLoginSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your username"
          name="username"
          value={username}
          autoComplete="off"
          onChange={onInputChange}
        />
        <button className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};
