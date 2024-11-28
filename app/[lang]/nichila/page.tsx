import { getDictionary } from "../../../get-dictionary";
import { Locale } from "../../../i18n-config";
import { Feature } from "../components/feature/feature";
import { SeoHero } from "../components/hero/hero";
import { MdHotelClass } from "react-icons/md";
import { useDataNichila } from "./nichila.data";
import { Facilities } from "../components/facilities/facilities";
import { MasonryGallery } from "../components/masonry-gallery/masonry";
import { CallToAction } from "../components/call-to-action/call-to-action";

const HotelNichila = async (props: { params: Promise<{ lang: Locale }> }) => {
  const {
    NICHILA_WHATSAPP,
    dictionary,
    DESKTOP_IMAGE,
    MOBILE_IMAGE,
    PROMO_IMAGE,
    NICHILA_IMAGE_FEATURE,
    MASONRY_ITEMS_NICHILA,
    DATA_FOOTER_NICHILA,
    FACILITIES,
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
        title={dictionary.nichila.hero.title}
        description={dictionary.nichila.hero.subtitle}
        btnTextOne={dictionary.nichila.hero.buttonText}
        btnTextTwo={dictionary.nichila.hero.buttonText}
        btnTypeOne="secondary"
        btnTypeTwo="primary"
        imageBg="https://img.playbook.com/IImDR_YR5EQGGq3milxUnxB6jjPS4fjowE3AoFzfKbs/w:1200/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9s/YXJnZV9wcmV2aWV3/cy8yY2U3NmMxMS00/OWZlLTRhZGYtYmI4/NC04YzgzYWEzMGVl/YmE.webp"
      />
      <Facilities
        facilities={FACILITIES}
        title={dictionary.nichila.facilities.title}
      />
      <MasonryGallery
        title={dictionary.nichila.masonry.title}
        items={MASONRY_ITEMS_NICHILA}
      />
      <CallToAction
        title={dictionary.nichila.hero.title}
        description={dictionary.nichila.hero.subtitle}
        btnTextOne={dictionary.nichila.hero.buttonText}
        btnTextTwo={dictionary.nichila.hero.buttonText}
        btnTypeOne="secondary"
        btnTypeTwo="primary"
        imageBg="https://img.playbook.com/Cg9cZDrhUmX9s2ea4ZSk2Wjvj2vpAvT94HfDtPpitmI/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9mN2U3/YmMxZi1kZWQ3LTQy/NGMtOTdiZC05ZWQx/MzI5YmUzZjg.webp"
      />
    </div>
  );
};

export default HotelNichila;
