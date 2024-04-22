import styles from "./Auth.module.css";

type AuthProps = {
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
  onClose: () => void;
};

export default function Auth({ setIsAuth, onClose }: AuthProps) {
  return (
    <div className={styles.wrapper}>
      <form className={styles.form}>
        <input type="email" placeholder="Email" className={styles.input} />
        <input
          type="password"
          placeholder="Password"
          className={styles.input}
        />
      </form>
      <button
        className={styles.signInButton}
        onClick={() => {
          setIsAuth(true);
          onClose();
        }}
      >
        Sign in
      </button>
    </div>
  );
}
