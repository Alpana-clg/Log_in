import React from "react";
import styles from "./LogInForm.module.css";

const LogInForm=() =>{
    return(
    <div className={styles.LogInPage}>
       <form autoComplete="off" className="form">
        <p className={styles.p1}>UNLOCK THE TEST ZONE!</p>
        <p className={styles.p2}>LOG IN NOW TO START.</p>
        <label htmlFor="username" >
        </label>
        <input type="text" className={styles.input} placeholder="Username"/>
        <label htmlFor="password">
        </label>
        <input type="text" className={styles.input} placeholder="Password" />
        <button className={styles.button}>Login</button>
       </form>
       <div className={styles.horizontal_line_container}>
        <hr className={styles.horizontal_line} />
        <span className={styles.text_between}>OR</span>
        <hr className={styles.horizontal_line} />
       </div>
       <p className={styles.p3}>Are you new user?   <a href="" className={styles.signup}>Create an account</a></p>
    </div>
    )
}

export default LogInForm;