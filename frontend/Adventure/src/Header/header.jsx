import styles from "./css/header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className={styles.header}>
        <Link to="/"><h1>Awesome Adventures</h1></Link>
        <div className={styles.subHeader}>
          <Link to="/">
            <h2>Home</h2>
          </Link>
          <h2>Search</h2>
          <h2>About</h2>
          <h2>FAQ</h2>
          <Link to="/register">
            <h2>Register/Login</h2>
          </Link>
        </div>
      </header>
    </>
  );
}

export default Header;
