import { ReactNode } from "react";
import styles from "./facilities.module.css";
import IconsClass from "../icon-class/icon-class";

interface FacilitiesProps {
  facilities: Array<{
    id: string;
    title: string;
    description: string;
    icon: string | ReactNode;
  }>;
  title?: string;
}

export const Facilities = ({ facilities, title }: FacilitiesProps) => {

  return (
    <div className={styles.facilities}>
      <div className={styles.facilitiesContainer}>
        <div className={styles.facilitiesTitle}>
          <h4>{title}</h4>
        </div>
        <div className={styles.items}>
        {facilities.map((facility, index) => (
          <div key={index} className={styles.facilitiesItem}>
            <IconsClass iconName={facility.icon} size={30} />
            <h3 className={styles.facilitiesTitle}>{facility.title}</h3>
            <p className={styles.facilitiesDescription}>
              {facility.description}
            </p>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};
