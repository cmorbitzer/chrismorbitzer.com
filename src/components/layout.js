import React from "react";
// import Header from "./header";
import Footer from "./footer";
import styles from "./layout.module.scss";

export default ({ children }) => (
  <div className={styles.container}>
    {/*<Header/>*/}

    <main>
      {children}
    </main>

    <Footer/>
  </div>
);
