import React from 'react';
import Layout from '../components/layout';
import styles from './index.module.scss';
import avatar from '../assets/chris_avatar.jpg';
import github from '../assets/GitHub-Mark-64px.png';
import linkedin from '../assets/LI-In-Bug-black-64px.png';
import spotify from '../assets/Spotify_Icon_RGB_Black-64px.png';

export default () => (
  <Layout>
    <div className={styles.container}>
      <button className={styles.avatar}>
        <div className={styles.avatarInner}>
          <img src={avatar} alt="Chris Morbitzer"/>
        </div>
      </button>

      <h1>Hi, I'm Chris. 👋🏼</h1>

      <p className="center">
        I design and develop <span className="red">delightful</span> software solutions.
      </p>

      <ul className={styles.socialLinks}>
        <li>
          <a href="https://github.com/cmorbitzer">
            <img src={github} alt="Github"/>
          </a>
        </li>

        <li>
          <a href="https://www.linkedin.com/in/cmorbitzer/">
            <img src={linkedin} alt="LinkedIn"/>
          </a>
        </li>

        <li>
          <a href="https://open.spotify.com/user/cmorbitzer">
            <img src={spotify} alt="Spotify"/>
          </a>
        </li>
      </ul>
    </div>
  </Layout>
);
