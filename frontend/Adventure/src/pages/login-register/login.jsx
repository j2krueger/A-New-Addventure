import React, { useState } from "react";
import styles from "./css/Login.module.css"; // Import your CSS module
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Implement your login logic here
    // Validate input fields, make API calls, etc.
    console.log("User logged in:", { email });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Login</h1>
      <div className={styles.form}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className={styles.loginButton} onClick={handleLogin}>
          Log In
        </button>
        <p className={styles.title}>
          Don't have an account yet? <p></p>
          <Link to="/register">Click here</Link> to register.
        </p>
      </div>
    </div>
  );
};

export default Login;
