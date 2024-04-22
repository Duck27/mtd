import styles from "./UploadPage.module.css";
import { Link } from "react-router-dom";
import SignButton from "../components/SignButton/SignButton";
import { motion } from "framer-motion";

function UploadPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.wrapper}
    >
      <div className={styles.wrapper}>
        <div className={styles.innerWrapper}>
          <header className={styles.header}>
            <Link to="/" className={styles.backBtn}>
              <div className={styles.backBtn_wrapper}>
                <i className="fas fa-chevron-left"></i>
                <span className={styles.backBtn_text}>Go back</span>
              </div>
            </Link>
          </header>
          <main className={styles.profileLayer}>
            <div className={styles.profileWrapper}>
              {" "}
              <img style={{ margin: "10px" }} src="/" alt="Показ перехода" />
              <div className={styles.profile}></div>
              <div className={styles.baseProfile}></div>
            </div>
          </main>
          <footer className={styles.btnsWrapper}>
            <Link to="/res" style={{ textDecoration: "none" }}>
              <SignButton
                text="Choose photo from gallery"
                iconName="fa-image"
                iconSize="4"
              ></SignButton>
            </Link>
            <Link to="/res" style={{ textDecoration: "none" }}>
              <SignButton
                text="Take photo with camera"
                iconName="fa-camera"
                iconSize="4"
              ></SignButton>
            </Link>
          </footer>
        </div>
      </div>
    </motion.div>
  );
}

export default UploadPage;
