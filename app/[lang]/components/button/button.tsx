import { FC } from "react";
import Loader from "../loader/loader";
import { ButtonProps } from "./button.types";
import styles from "./button.module.css";

const Button: FC<ButtonProps> = ({
  children,
  appearance = "primary",
  size = "normal",
  disabled = false,
  link = false,
  ghost = false,
  fullWidth = false,
  leftIcon = undefined,
  rightIcon = undefined,
  isLoading = false,
  darkMode = false,
  className,
  onClick,
}) => {
  return (
    <button
      className={`${styles.button} ${appearance ? styles[`appearance__${appearance}`] : ""} ${size ? styles[`size__${size}`] : ""} ${link ? styles.link : ""} ${ghost ? styles.ghost : ""} ${fullWidth ? styles.fullWidth : ""} ${darkMode ? styles.darkMode : ""} ${className || ""}`}
      disabled={disabled}
      onClick={onClick}
    >
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {leftIcon}
          <span className={styles.content}>{children}</span>
          {rightIcon}
        </>
      )}
    </button>
  );
};

export default Button;