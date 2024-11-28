"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n, type Locale } from "../../../../i18n-config";
import styles from "./locale-switcher.module.css"
import { useState } from "react";
import { getDictionary } from "../../../../get-dictionary";
import { SiGoogletranslate } from "react-icons/si";
export default function LocaleSwitcher({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["languageSwitcher"];
}) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  

  const redirectedPathname = (locale: Locale) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const language = i18n.locales.find((locale) => locale === pathname?.split("/")[1]);

  return (
    <div className={styles.switcherContainer}>
      <div className={styles.dropdown}>
        <button onClick={toggleDropdown} className={styles.dropdownButton}>
        <SiGoogletranslate /> {language?.toUpperCase()} 
        </button>
        {isOpen && (
          <div className={styles.dropdownMenu}>
            {i18n.locales.map((locale) => (
              <Link key={locale} href={redirectedPathname(locale)} className={styles.dropdownItem}>
                {locale.toUpperCase()}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
