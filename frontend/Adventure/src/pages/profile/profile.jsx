import React from 'react'
import styles from './css/profile.module.css'
import profile1 from "../../assets/profile.jpeg"

const Profile = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.top}>
          <div className={styles.image}>
            <img src={profile1}></img>
          </div>
          <div className={styles.username}>Username</div>
          <div className={styles.bio}>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
            egestas semper. Aenean ultricies mi vitae est. Mauris placerat
            eleifend leo.
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.contributions}>
            <ul>
              <li>Link to entry</li>
              <li>Link to entry</li>
              <li>Link to entry</li>
              <li>Link to entry</li>
              <li>Link to entry</li>
              <li>Link to entry</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile