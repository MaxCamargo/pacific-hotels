"use client";
import { ReactNode } from "react";
import styles from "./call-to-action.module.css";
import { describe } from "node:test";
import Button from "../button/button";

interface FacilitiesProps {
  title?: string;
  description?: string;
  imageBg?: string;
  btnTextOne?: string;
  btnTextTwo?: string;
  linkBtnOne?: string;
  linkBtnTwo?: string;
  btnTypeOne?: string;
  btnTypeTwo?: string;
  className?: string;
}

export const CallToAction = ({
  title,
  description,
  imageBg,
  btnTextOne,
  btnTextTwo,
  linkBtnOne,
  linkBtnTwo,
  btnTypeOne,
  btnTypeTwo,
  className,
}: FacilitiesProps) => {
  const handleClickOne = () => {
    window.open(`${linkBtnOne}`, "_blank");
  };

  const handleClickTwo = () => {
    window.open(`${linkBtnTwo}`, "_blank");
  };

  return (
    <div className={`${styles.callToAction}`}>
      <div className={styles.CallToActionImage}>
        <img className={styles.desktopImage} src={imageBg} alt="background" />
      </div>
      <div className={`${styles.CallToActionContent} ${className}`}>
        <div className={styles.titles}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.buttons}>
          {btnTextOne && (
            <Button appearance={btnTypeOne as any} onClick={handleClickOne}>
              {btnTextOne}
            </Button>
          )}
          {btnTextTwo && (
            <Button appearance={btnTypeTwo as any} onClick={handleClickTwo}>
              {btnTextTwo}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
