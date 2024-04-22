import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.innerWrapper}>
        <div className={styles.helpText}>Get help at support@avgen.me</div>
        <div className={styles.copyrightText}>Copyright © 2024 Mook Ltd. </div>
        <div className={styles.copyrightText}>All rights reserved. </div>
      </div>
    </div>
  );
};

export default Footer;
