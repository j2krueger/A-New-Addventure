import React from "react";
import styles from './css/dashboard.module.css'
import Dashsection1 from './components/dashsection1'
import Dashsection2 from './components/dashsection2'
import Dashsection3 from './components/dashsection3'


const Dashboard = () => {


  return (
    <div className={styles.main}>
        <Dashsection1 />
        <Dashsection2 />
        <Dashsection3 />
    </div>
  )
}

export default Dashboard