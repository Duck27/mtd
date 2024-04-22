import styles from "./ResultPage.module.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ResultPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.wrapper}
    >
      <div className={styles.wrapper}>
        <div className={styles.imageWrapper}>
          <img src="/img/legoMan.png" alt="Result" className={styles.img} />
        </div>
        <button className={styles.button}>Save</button>
        <Link to="/" style={{ textDecoration: "none" }}>
          <button className={styles.buttonSecondary}>More pics</button>
        </Link>
      </div>
    </motion.div>
  );
};
export default ResultPage;
