import { useState } from "react";
import styles from "./Header.module.css";
import Modal from "./../Modal/Modal";
import Auth from "./../Auth/Auth";

const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const [isAuth, setIsAuth] = useState(false);

  return (
    <>
      <div className={styles.wrapper}>
        <span className={styles.logo}>OneAI</span>
        {!isAuth && (
          <button onClick={openModal} className={styles.signBtn}>
            Sign in
          </button>
        )}
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <Auth setIsAuth={setIsAuth} onClose={closeModal} />
      </Modal>
    </>
  );
};

export default Header;
