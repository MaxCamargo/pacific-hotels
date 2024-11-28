"use client";
import Button from "../button/button";
import styles from "./hero-landing.module.css";

interface SeoHeroProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonUrl?: string;
  desktopImage?: string;
  mobileImage?: string;
  altText?: string;
  promoImage?: string;
  hotels?: Array<{
    id: string;
    title: string;
    url?: string;
    image?: string;
    altText?: string;
    location?: string;
  }>;
}

export const HeroLanding = ({
  title,
  subtitle,
  buttonText,
  buttonUrl,
  desktopImage,
  mobileImage,
  promoImage,
  altText,
  hotels,
}: SeoHeroProps) => {
  const handleClick = () => {
    window.open(`${buttonUrl}`, "_blank");
  };

  return (
    <div className={styles.heroLanding}>
      <div className={styles.seoImage}>
        <img className={styles.desktopImage} src={desktopImage} alt={altText} />
        <img className={styles.mobileImage} src={mobileImage} alt={altText} />
      </div>
      <div className={styles.heroContainer}>
        <div className={styles.heroText}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
        <div className={styles.hotels}>
          {hotels?.map((hotel, index) => (
            <div key={hotel.id}>
              <Button appearance="primary">
                <a href={hotel.url} className={styles.hotelButton}>
                  <div className={styles.logoHotel}>
                    <img
                      className={styles.hotelImage}
                      src={hotel.image}
                      alt={altText}
                    />
                  </div>
                  <div className={styles.textsButton}>
                    <p className={styles.hotelName}>{hotel.title}</p>
                    <span className={styles.smallText}>{hotel.location}</span>
                  </div>
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
