"use client";
import { ReactNode } from "react";
import styles from "./feature.module.css";
import Button from "../button/button";

interface FeatureProps {
  title: string;
  description: string;
  buttonText: string;
  icon?: string | ReactNode;
  url?: string;
  small?: string;
  image?: string;
}

export const Feature = ({
  title,
  description,
  icon,
  url,
  small,
  image,
  buttonText,
}: FeatureProps) => {
  const handelFeatureClick = () => {
    window.open(url, "_blank");
  };

  return (
    <div className={styles.feature}>
      <div className={styles.featureContainer}>
        <h3 className={styles.small}>{small}</h3>
        <div className={styles.boxTextFeature}>
          <div className={styles.floating}>
            <img className={styles.floatingImg} src={image} alt="" />
          </div>
          <div className={styles.texts}>
          {icon}
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
            <div className={styles.button}>
              <Button
                appearance={"secondary"}
                className="color-button"
                onClick={handelFeatureClick}
              >
                {buttonText}
              </Button>
            </div>
          </div>
          {image && (
            <div className={styles.imageFeatureContainer}>
              <div className={styles.imageFeature}>
                <img className={styles.img} src={image} alt="" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
