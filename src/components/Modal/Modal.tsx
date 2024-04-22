import styles from "./Modal.module.css";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handleCloseClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onClose();
  };

  return (
    <div>
      <div
        id="overlay"
        className={`${styles.overlay} ${isOpen ? styles.open : ""}`}
        onClick={handleOverlayClick}
      >
        {children}
      </div>

      {isOpen && (
        <button
          onClick={handleCloseClick}
          className={`${styles.closeButton} ${isOpen ? styles.open : ""}`}
        >
          &times;
        </button>
      )}
    </div>
  );
};

export default Modal;
