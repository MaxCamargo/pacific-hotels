"use client";
import { useEffect, useState } from "react";
import styles from "./header.module.css";
import Link from "next/link";
import { getDictionary } from "../../../../get-dictionary";
import LocaleSwitcher from "../switcher/locale-switcher";
import Button from "../button/button";

interface SeoHeaderProps {
  menuItemsData?: Array<{
    id: string;
    title: string;
    url?: string;
  }>;

  buttonText?: string;
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
  logoName?: string;
  bg?: true;
  classNameLogo?: string;
  buttonType?: string;
  urlLogo: string | undefined;
  buttonUrl?: string;
}

export const Header = ({
  menuItemsData,
  buttonText,
  dictionary,
  logoName,
  bg,
  classNameLogo,
  buttonType,
  urlLogo,
  buttonUrl,
}: SeoHeaderProps) => {
  const [colorHeader, setColorHeader] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setColorHeader(true);
    } else {
      setColorHeader(false);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const scrollToSection = (title: string) => {
    const element = document.getElementById(title);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const onClickHeaderButton = () => {
    window.open(`${buttonUrl}`, "_blank");
  };

  return (
    <div className={`${styles.header} ${bg ? styles.headerBg : ""}`}>
      <nav className={styles.container}>
        <div className={styles.logoContainer}>
          <Link passHref href={`/${urlLogo}`}>
            <span
              className={`${styles.logo} ${styles.iconLogo} ${classNameLogo}`}
            >
              {logoName}
            </span>
          </Link>
          <input className={styles.menuBtn} type="checkbox" id="menu-btn" />
          <label className={styles.menuIcon} htmlFor="menu-btn">
            <span className={styles.navIcon}></span>
          </label>
        </div>
        <ul className={styles.menu}>
          <div className={styles.box}>
            {menuItemsData?.map((item, index) => (
              <li className={styles.menuItem} key={item.id}>
                <a
                  href={`${item.url}`}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.title}
                </a>
              </li>
            ))}
            <LocaleSwitcher dictionary={dictionary.languageSwitcher} />
            <Button
              appearance={buttonType as "primary" | "secondary" | "tertiary" | "destructive"}
              className="color-button"
              onClick={onClickHeaderButton}
            >
              {buttonText}
            </Button>
          </div>
        </ul>
      </nav>
    </div>
  );
};
