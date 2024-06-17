import styles from './css/header.module.css';

function Header() {
  return (
    <>
      <header className={styles.header}>
        <h1>Awesome Adventures</h1>
        <div className={styles.subHeader}>
            <h2>Home</h2>
            <h2>About</h2>
            <h2>FAQ</h2>
            <h2>Login</h2>
        </div>
      </header>
    </>
  );
}

export default Header;
