import React, { useState } from "react";
import "../assets/css/signup.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    if (!firstName || !lastName || !username || !password) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    navigate("/");
  };

  const handleNavigateToLogin = () => {
    navigate("/");
  };

  return (
    <div className="sign-container">
      <h1 className="title">Signup</h1>
      <input
        className="input"
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        className="input"
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        className="input"
        type="text"
        placeholder="Email"
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
      <button className="sign-button" onClick={handleSignup}>
        Sign up
      </button>
      {error && <p className="error-message">{error}</p>}
      <p className="login-link" onClick={handleNavigateToLogin}>
        Already have an account? Login
      </p>
    </div>
  );
};

export default Signup;
