import React from "react";
import Slider from "react-slick";
import styles from "./slider-carrousel.module.css";

interface RoomsCarrouselProps {
  roomsAndSuitesData?: Array<{
    id: string;
    roomType: string;
    description: string;
    image: string;
    link: string;
  }>;
}

const RoomsCarrousel = ({ roomsAndSuitesData }: RoomsCarrouselProps) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.roomCarrousel}>
      <div className={styles.roomCarrouselContainer}>
        <div className={styles.roomCarrouselContent}>
          <Slider {...settings}>
            {roomsAndSuitesData?.map((room, index) => (
              <a key={room.id} href={room.link} target="_blank">
                <div className={styles.slideRoomCard}>
                  <div className={styles.imageRoom}>
                    <img
                      className={styles.image}
                      src={room.image}
                      alt={room.description}
                    />
                  </div>
                  <div className={styles.textsRoom}>
                    <h3 className={styles.title}>{room.roomType}</h3>
                    <p className={styles.description}>{room.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default RoomsCarrousel;
