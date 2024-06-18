import React, { useState } from "react";
import styles from "./css/register.module.css"; // Import your CSS module
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    // Implement your registration logic here
    // Validate input fields, make API calls, etc.
    console.log("User registered:", { email, username });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Register</h1>
      <div className={styles.form}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button className={styles.registerButton} onClick={handleRegister}>
          Register
        </button>
        <p className={styles.title}>
          Already Registered? <p></p><Link to="/login">Click here</Link> to login.
        </p>
      </div>
    </div>
  );
};

export default Register;
