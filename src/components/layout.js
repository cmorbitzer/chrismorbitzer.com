import React from "react";
import { Helmet } from "react-helmet";
// import Header from "./header";
import Footer from "./footer";
import styles from "./layout.module.scss";

export default ({ children }) => (
  <div className={styles.container}>
    <Helmet>
      <title>Chris Morbitzer</title>
    </Helmet>

    {/*<Header/>*/}

    <main>
      {children}
    </main>

    <Footer/>
  </div>
);
