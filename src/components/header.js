import React from "react";
import { Link } from "gatsby";
import styles from "./header.module.scss";

export default () => (
  <header className={styles.header}>
    <div className={styles.brand}>
      <Link to="/">Chris Morbitzer</Link>
    </div>

    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  </header>
);
