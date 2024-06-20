import React, { useState } from "react";
import styles from "./css/register.module.css"; // Import your CSS module
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
      email: "",
      password: "",
      password2: "",
      username: "",
    });

    const [value, setValue] = useState("");

    const registerUser = async (e) => {
      e.preventDefault();
      const {email, password, password2, username} =
        data;

      //check to make sure passwords match
      if (password !== password2) {
        toast.error("Passwords do not match");
        return;
      }

      try {
        const { data } = await axios.post("/register", {
          email,
          password,
          username,
        });
        if (data.error) {
          toast.error(data.error);
        } else {
          setData({});
          setValue({});
          toast.success("Register Successful. Welcome!");
          navigate("/login");
        }
      } catch (error) {
        console.log(error);
      }
    };

  const handleRegister = () => {
    // Implement your registration logic here
    // Validate input fields, make API calls, etc.
    console.log("User registered:", { email, username });
  };

  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Register</h1>
      <form onSubmit={registerUser}>  
        <div className={styles.form}>
          <input
            type="email"
            placeholder="Email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Username"
            value={data.username}
            onChange={(e) => setData({ ...data, username: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={data.password2}
            onChange={(e) => setData({ ...data, password2: e.target.value })}
            required
          />
          {/* <button className={styles.registerButton} onClick={handleRegister}>
            Register
          </button> */}
          <input type="submit" className={styles.registerButton} value="Register" />
          <p className={styles.title}>
            Already Registered? <p></p>
            <Link to="/login">Click here</Link> to login.
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
