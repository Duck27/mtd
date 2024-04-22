import styles from "./SignButton.module.css";

type SignButtonProps = {
  text: string;
  iconName: string;
  iconSize?: string;
};

const SignButton = ({ text, iconName, iconSize = "1" }: SignButtonProps) => {
  return (
    <button className={styles.btn}>
      <i className={`fas ${iconName} fa-${iconSize}x`}></i>
      <div className={styles.btnText}>{text}</div>
    </button>
  );
};

export default SignButton;
