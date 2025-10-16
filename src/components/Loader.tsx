import React from 'react';
import styles from '../styles/Loader.module.css';

const Loader: React.FC = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.waveLoader}>
        <div className={styles.wave}></div>
        <div className={styles.wave}></div>
        <div className={styles.wave}></div>
      </div>
    </div>
  );
};

export default Loader;
