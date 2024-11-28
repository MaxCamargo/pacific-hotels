"use client";
import Button from "../button/button";
import Carrousel from "../carrousel/carrousel";
import styles from "./hero.module.css";

interface SeoHeroProps {
  sliderImages?: Array<{
    id: number;
    src: string;
    alt: string;
  }>;
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonUrl?: string;
  desktopImage?: string;
  mobileImage?: string;
  altText?: string;
  promoImage?: string;
}

export const SeoHero = ({
  title,
  subtitle,
  buttonText,
  buttonUrl,
  desktopImage,
  mobileImage,
  promoImage,
  altText,
  sliderImages,
}: SeoHeroProps) => {
  const handleClick = () => {
    window.open(`${buttonUrl}`, "_blank");
  };
  return (
    <div className={styles.hero}>
      <div className={styles.seoImage}>
        <img className={styles.desktopImage} src={desktopImage} alt={altText} />
        <img className={styles.mobileImage} src={mobileImage} alt={altText} />
      </div>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
          {buttonText && buttonUrl && (
            <Button
              appearance="primary"
              className="color-button"
              onClick={handleClick}
            >
              {buttonText}
            </Button>
          )}
        </div>
        <div className={styles.square}>
          <Carrousel sliderImages={sliderImages} />
        </div>
      </div>
    </div>
  );
};
