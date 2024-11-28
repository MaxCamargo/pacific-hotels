import { getDictionary } from "../../../get-dictionary";
import { Locale } from "../../../i18n-config";
import { Feature } from "../components/feature/feature";
import { SeoHero } from "../components/hero/hero";
import { MdHotelClass } from "react-icons/md";
import { useDataNichila } from "./nichila.data";
import { Facilities } from "../components/facilities/facilities";
import { MasonryGallery } from "../components/masonry-gallery/masonry";
import { CallToAction } from "../components/call-to-action/call-to-action";
import styles from "./nichila.module.css";
import RoomsAndSuites from "../components/rooms-and-suites/rooms-and-suites";

const HotelNichila = async (props: { params: Promise<{ lang: Locale }> }) => {
  const {
    NICHILA_WHATSAPP,
    dictionary,
    DESKTOP_IMAGE,
    MOBILE_IMAGE,
    PROMO_IMAGE,
    NICHILA_IMAGE_FEATURE,
    MASONRY_ITEMS_NICHILA,
    DATA_ROOMS_AND_SUITES,
    FACILITIES,
    IMAGES_CARROUSEL,
  } = await useDataNichila(props);

  return (
    <div>
      <SeoHero
        title={dictionary.nichila.hero.title}
        subtitle={dictionary.nichila.hero.subtitle}
        buttonText={dictionary.nichila.hero.buttonText}
        buttonUrl={NICHILA_WHATSAPP}
        desktopImage={DESKTOP_IMAGE}
        mobileImage={MOBILE_IMAGE}
        promoImage={PROMO_IMAGE}
        sliderImages={IMAGES_CARROUSEL}
      />
      <Facilities
        facilities={FACILITIES}
        title={dictionary.nichila.facilities.title}
      />
      <RoomsAndSuites
        roomsAndSuitesData={DATA_ROOMS_AND_SUITES}
        title={dictionary.nichila.roomsAndSuites.title}
        description={dictionary.nichila.roomsAndSuites.description}
        disclaimer={dictionary.nichila.roomsAndSuites.disclaimer}
      />
      <Feature
        title={dictionary.nichila.feature.title}
        description={dictionary.nichila.feature.description}
        buttonText={dictionary.nichila.feature.textButton}
        small={dictionary.nichila.feature.small}
        icon={<MdHotelClass size={30} />}
        url={NICHILA_WHATSAPP}
        image={NICHILA_IMAGE_FEATURE}
      />
      <CallToAction
        title={dictionary.nichila.callToActionTwo.title}
        description={dictionary.nichila.callToActionTwo.description}
        btnTextOne={dictionary.nichila.callToActionTwo.buttonTextOne}
        btnTextTwo={dictionary.nichila.callToActionTwo.ButtonTextTwo}
        btnTypeOne="secondary"
        btnTypeTwo="primary"
        className={styles.bgColorCallToActionOne}
        imageBg="https://img.playbook.com/L0jJ9Rb_laYHIddWI4cg2YVQLQATu1qSOQxs6U3ar9E/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9jMDE4/NjhiOC1hOGEzLTQ2/NTMtODc3MC0xMDUw/N2Q5NzE1ODU.webp"
      />
      <MasonryGallery
        title={dictionary.nichila.masonry.title}
        items={MASONRY_ITEMS_NICHILA}
      />
      <CallToAction
        title={dictionary.nichila.callToActionOne.title}
        description={dictionary.nichila.callToActionOne.description}
        btnTextOne={dictionary.nichila.callToActionOne.ButtonTextTwo}
        linkBtnOne={NICHILA_WHATSAPP}
        btnTypeOne="primary"
        className={styles.bgColorCallToActionTwo}
        imageBg="https://img.playbook.com/ukSV16dIk7TXHuUZvvuIC_xZMljVXX3A9eiz2yEfCQs/w:1000/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9s/YXJnZV9wcmV2aWV3/cy84ZWNlYzk3Zi1h/NjljLTQ0MTYtOGU3/MS0zYzliM2MwZDM4/NTA.webp"
      />
    </div>
  );
};

export default HotelNichila;
