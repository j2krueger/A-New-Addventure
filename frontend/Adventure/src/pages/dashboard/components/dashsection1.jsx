import React, {useState} from 'react'
import styles from '../css/dashsection1.module.css'

const Dashsection1 = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = () => {
      console.log("Searching for:", searchTerm);
    };
  return (
    <div className={styles.main}>
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