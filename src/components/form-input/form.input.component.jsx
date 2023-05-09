import styles from "./form-input.module.css";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className={styles["group"]}>
      <input className={styles["form-input"]} {...otherProps} />
      {label && (
        <label
          className={`${otherProps.value.length ? styles["shrink"] : ""} ${
            styles["form-input-label"]
          }`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
