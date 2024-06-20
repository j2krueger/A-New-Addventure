import React from 'react'
import { Link } from "react-router-dom";
import styles from './css/entrypage.module.css'

const EntryPage = () => {
  return (
    <div className={styles.main}>
      <div className={styles.author}>
        {" "}
        By <Link to="/profile/:id">Test author</Link>
      </div>
      <div className={styles.title}>Entry Title: </div>
      <div className={styles.entry}>
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
        ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
        egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend
        leo.
      </div>
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