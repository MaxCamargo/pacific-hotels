import { FC } from "react";
import Loader from "../loader/loader";
import { ButtonProps } from "./button.types";
import styles from "./button.module.css";

/**
 * El botón es un elemento en el que se puede hacer clic que se utiliza para realizar una acción. __**Contiene una etiqueta de texto y se puede mostrar un icono de apoyo**__.
 *
## Instalación
 * Instale el paquete <code>@sumerkit/ui</code> e importe el componente <code>Button</code> desde el paquete.
 *
 * <code>import Button from "@sumerkit/ui/button"</code>
 * 
 * <br /><br /><hr />
 * 
#### Appearance
 * <code> primary | secondary | tertiary | destructive </code>
 *
#### Sizes
 * <code> normal | small | ghost </code>
 *
 **/
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