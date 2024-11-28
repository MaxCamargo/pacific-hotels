"use client";
import Image from "next/image";
import styles from "./footer.module.css";
import { useEffect, useState } from "react";
import Button from "../button/button";
import IconsClass from "../icon-class/icon-class";

interface FooterProps {
    data: Array<{
      id: string;
      icon: string;
      link: string;
    }>;
    rights: string;
    contact: string;
    url?: string;
} 

export const Footer = ({rights, contact, data, url }: FooterProps) => {
  const [currentYear, setCurrentYear] = useState<number>(
    new Date().getFullYear()
  );

  const handleClick = () => {
    window.open(url, "_blank");
  };

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <div className={styles.footer}>
      <div className={styles.containerFooter}>
        <div className={styles.footerDate}>
          <p className="date">© {currentYear}</p>
          <span className={`${styles.iconLogo}${styles.icon}`}>
            {rights}
          </span>
        </div>
        <div className={styles.footerFollowBox}>
          <div className={styles.footerDownload}>
            <div className={styles.footerBottoms}>
              <div className={styles.footerDownloadBox}>
                <Button appearance="tertiary" onClick={handleClick}>
                  {contact}
                </Button>
              </div>
            </div>
          </div>
          <div className={styles.footerSocial} aria-label={"social-links"}>
            {data.map((data, index) => (
              <div key={`footer-item-${data.id}`}>
                <a
                  className={"icon-box"}
                  href={`${data.link}`}
                  rel="noreferrer"
                  target="_blank"
                >
                  <IconsClass iconName={data.icon} size={30} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
