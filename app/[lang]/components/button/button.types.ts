import { ReactNode } from "react";

export interface ButtonProps {
  /**
   * El contenido que se mostrará dentro del botón.
   */
  children: string | ReactNode;

  /**
   * Cambia la apariencia visual del botón.
   */
  appearance?: "primary" | "secondary" | "tertiary" | "destructive";

  /**
   * Cambia el tamaño del botón, en su altura y en su fuente.
   */
  size?: "normal" | "small";

  /**
   * Estiliza el boton para que se asemeje a un link
   */
  link?: boolean;

  /**
   * Quita el padding vertical y horizontal del botón.
   */
  ghost?: boolean;

  /**
   * Permite que el botón crezca hasta el ancho de su contenedor.
   */
  fullWidth?: boolean;

  /**
   * Desactiva el botón, lo que no permite la interacción con el elemento
   */
  disabled?: boolean;

  /**
   * Utilice className para definit las clases de elemento
   */
  className?: string;

  /**
   * Utilice iconos a la izquierda en los botones
   */
  leftIcon?: string | ReactNode;

  /**
   * Utilice iconos a la derecha en botones
   */
  rightIcon?: string | ReactNode;

  /**
   * Loader para la carga de los botones
   */
  isLoading?: boolean;

  /**
   * Permite version oscura del btn.
   */
  darkMode?: boolean;

  /**
   * Controlador de click
   */
  onClick?: () => void;
}
