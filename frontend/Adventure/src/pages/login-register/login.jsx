import React, { useState } from "react";
import styles from "./css/Login.module.css"; // Import your CSS module
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  // const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  // const handleLogin = () => {
  //   // Implement your login logic here
  //   // Validate input fields, make API calls, etc.
  //   console.log("User logged in:", { email });
  // };

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const { data } = await axios.post("/login", {
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});

        window.location.href = "/dashboard";
      }
    } catch (error) {}
  };
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Login</h1>
        <form onSubmit={loginUser}>
        <div className={styles.form}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            required
          />
          <input type="submit" className={styles.loginButton} value="Login" />
          {/* <button className={styles.loginButton} onClick={handleLogin}>
            Log In
          </button> */}
          <p className={styles.title}>
            Don't have an account yet? <p></p>
            <Link to="/register">Click here</Link> to register.
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
