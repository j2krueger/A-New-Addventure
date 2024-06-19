import React from 'react'
import { Link } from "react-router-dom";
import styles from './css/entrypage.module.css'

const EntryPage = () => {
  return (
    <div className={styles.main}>
      <div className={styles.author}>
        {" "}
        By <Link to="/profile:id">Test author</Link>
      </div>
      <div className={styles.title}>Title: </div>
      <div className={styles.entry}>full story</div>
      <ul className={styles.choice}>
        <li>next choice</li>
        <li>next choice</li>
        <li>next choice</li>
        <li>next choice</li>
      </ul>
      <div className={styles.previousEntry}>
        <Link to="/">Previous Entry</Link>
      </div>
    </div>
  );
}

export default EntryPage