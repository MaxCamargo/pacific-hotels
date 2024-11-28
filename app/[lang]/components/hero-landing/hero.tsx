'use client'
import Button from "../button/button";
import styles from "./hero.module.css";


interface SeoHeroProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonUrl?: string;
  desktopImage?: string;
  mobileImage?: string;
  altText?: string;
  promoImage?: string;
}

export const HeroLanding = ({
  title,
  subtitle,
  buttonText,
  buttonUrl,
  desktopImage,
  mobileImage,
  promoImage,
  altText
}: SeoHeroProps) => {

  const handleClick = () => {
    window.open(`${buttonUrl}`, "_blank");
  }
 
  return (
    <div className={styles.hero}>
      <div className={styles.seoImage}>
        <img className={styles.desktopImage} src={desktopImage} alt={altText} />
        <img className={styles.mobileImage} src={mobileImage} alt={altText} />
      </div>
      <div className={styles.hero}>
        <div className={styles.heroText}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
          {
            buttonText && buttonUrl &&
            <Button
              appearance="primary"
              className="color-button"
              onClick={handleClick }
            >
              {buttonText}
            </Button>
          }
  
        </div>
      </div>
    </div>
  );
};
