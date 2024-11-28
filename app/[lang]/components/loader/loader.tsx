import { FC } from "react";
import styles from "./loader.module.css";
import { LoaderProps } from "./loader.types";
/**

 * <code>UiComponent</code>
 * El loader es un componente que se utiliza para mostrar que una __**acción que está en progreso**__.
 * 
## Instalación
 * Instale el paquete <code>@sumerkit/ui</code> e importe el componente <code>Loader</code> desde el paquete.
 *
 * <code>import Loader from "@sumerkit/ui/loader"</code>
 **/
const Loader: FC<LoaderProps> = ({ className, size = 16 }) => {
  return (
    <div
      className={`${styles.loader} ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
      role="figure"
    />
  );
};

export default Loader;
