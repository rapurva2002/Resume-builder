import React from 'react'
import styles from "./Landing.module.css";
import resumeSvg from "../../assets/screen1.svg";

const Landing = () => {
  return (
    <div>
      <section className="main-container">
            <div className={styles.container}>
                <div className={styles.left}>
                    <p className={styles.heading}>
                        <b>Looking for a new job?</b>
                    </p>
                    <p className={styles.heading1}>
                        A good resume is a way to land your dream job...
                    </p>
                </div>
                <div className={styles.right}>
                    <img src={resumeSvg} alt="Resume" />
                </div>
            </div>
        </section>
    </div>
  )
}

export default Landing
