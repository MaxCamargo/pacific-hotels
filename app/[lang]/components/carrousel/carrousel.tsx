import React from "react";
import Slider from "react-slick";
import styles from "./carrousel.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDataSlider } from "./carrousel.data";

interface SliderImagesProps {
  sliderImages?: Array<{
    id: number;
    src: string;
    alt: string;
  }>;
}

const Carrousel = ({ sliderImages }: SliderImagesProps) => {
  
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        {sliderImages?.map((slide, index) => (
          <div className={styles.slideCard} key={slide.id}>
            <div className={styles.emblaSlideImg}>
              <img className={styles.image} src={slide.src} alt={slide.alt} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carrousel;
