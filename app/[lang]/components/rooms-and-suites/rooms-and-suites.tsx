"use client";
import RoomsCarrousel from "./components/slider-carrousel/slider-carrousel";
import styles from "./rooms-and-suites.module.css";

interface RoomsAndSuitesProps {
  roomsAndSuitesData?: Array<{
    id: string;
    roomType: string;
    description: string;
    image: string;
    link: string;
  }>;
  title?: string;
  description?: string;
  disclaimer?: string;
}

const RoomsAndSuites = ({
  roomsAndSuitesData,
  title,
  description,
  disclaimer,
}: RoomsAndSuitesProps) => {
  return (
    <div className={styles.roomsAndSuites}>
      <div className={styles.roomsAndSuitesContainer}>
        <div className={styles.roomsAndSuitesContent}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
          <p className={styles.disclaimer}>{disclaimer}</p>
        </div>
        <div>
          {roomsAndSuitesData && <RoomsCarrousel roomsAndSuitesData={roomsAndSuitesData} />}
        </div>
      </div>
    </div>
  );
};

export default RoomsAndSuites;
