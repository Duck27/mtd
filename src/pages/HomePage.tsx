import { motion } from "framer-motion";

import styles from "./HomePage.module.css";
import UploadBlock from "../components/UploadBlock/UploadBlock";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.wrapper}
    >
      <Header />

      <main className={styles.uploadWrapper}>
        <UploadBlock></UploadBlock>
        <UploadBlock></UploadBlock>
      </main>
      <Footer />
    </motion.div>
  );
}

export default HomePage;
