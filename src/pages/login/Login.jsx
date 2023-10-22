import { useEffect, useState } from "react";
import axios from "axios";

import { Link, Navigate, useNavigate } from "react-router-dom";
import "./Login.css";
import { API_URL } from "../../utils";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    // console.log({ username, password });

    try {
      const res = await axios.post(API_URL + "auth/login", {
        username,
        password,
      });
      const user = JSON.stringify(res.data);
      localStorage.setItem("user", user);
      navigate("../", { replace: true });
    } catch (err) {
      // console.log(err);
    }
    // const json = await user.json();
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <h1 className="login-title">SIGN IN</h1>
        <form className="login-form">
          <input
            className="login-input"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="login-input"
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-button" onClick={handleClick}>
            LOGIN
          </button>
          <Link style={{ color: "black", textDecoration: "none" }}>
            <span className="login-link">FORGOT PASSWORD?</span>
          </Link>
          <Link
            to="/register"
            style={{ color: "black", textDecoration: "none" }}
          >
            <span className="login-link">CREATE A NEW ACCOUNT</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
