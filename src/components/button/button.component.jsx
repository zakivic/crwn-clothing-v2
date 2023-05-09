import styles from "./button.module.css";

const BUTTON_TYPES_CLASSES = {
  google: styles.googleSignIn,
  inverted: styles.inverted,
  default: "",
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`${styles.buttonContainer} ${BUTTON_TYPES_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};
export default Button;
