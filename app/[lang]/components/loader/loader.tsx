import { FC } from "react";
import styles from "./loader.module.css";
import { LoaderProps } from "./loader.types";

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
