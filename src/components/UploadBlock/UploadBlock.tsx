import styles from "./UploadBlock.module.css";
import { Link } from "react-router-dom";

const UploadBlock = () => {
  return (
    <Link to="/upload" className={styles.wrapper}>
      <div className={styles.innerWrapper}>
        <img
          className={styles.uploadImg}
          src="/img/woman.jpg"
          alt="Переход на страницу загрузки"
        ></img>
        <div className={styles.uploadTitle}>Lego</div>
      </div>
    </Link>
  );
};

export default UploadBlock;
