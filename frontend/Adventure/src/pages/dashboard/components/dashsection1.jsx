import React, {useState} from 'react'
import styles from '../css/dashsection1.module.css'
import axios from 'axios';

const Dashsection1 = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = () => {
      console.log("Searching for:", searchTerm);
    };


    const handleLogout = async () => {
      try {
        await axios.post("/logout");
        window.location.href = "/login";
      } catch (error) {
        console.error("Error logging out:", error);
      }
    };
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <div className={styles.info}>
          <h2>Welcome !</h2>
        </div>
        <div className={styles.logout}>
          <input
            id={styles.logout}
            type="submit"
            value="Logout"
            onClick={handleLogout}
          />
        </div>
      </div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={styles.searchInput}
      />
      {/* <button className={styles.searchButton} onClick={handleSearch}>
        Search
      </button> */}
      <div className={styles.results}></div>
    </div>
  );
}

export default Dashsection1