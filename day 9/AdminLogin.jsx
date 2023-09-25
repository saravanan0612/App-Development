import React, { useState } from "react";
import "../assets/css/login.css";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "./redux/UserSlice";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (username === "Admin" && password === "admin@123") {
      setError("");
      dispatch(login(username));
      navigate("/dashboard");
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <div className="login-cont">
      <h1 className="login-title">Admin Login</h1>
      <input
        className="input"
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="input"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="login-button" onClick={handleLogin}>
        Login
      </button>
      {error && <p className="error-message">{error}</p>}
      {/* <p className="signup-link">
        Don't have an account? <Link to="/dashboard">Sign Up</Link>
      </p> */}
    </div>
  );
};

export default Login;
