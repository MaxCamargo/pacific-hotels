import { url } from "inspector";
import { getDictionary } from "../../../get-dictionary";
import { Locale } from "../../../i18n-config";


export const useDataLandingMenu = async (props: {
    params: Promise<{ lang: Locale }>;
  }) => {
    const params = await props.params;
    const { lang } = params;
    const dictionary = await getDictionary(lang);
    
    const MENU_SEO_ITEMS = [
        {
          id: "Hotel 1",
          title: dictionary.hotelNames.hotelNichila,
          url: "/nichila",
        },
        {
          id: "questions",
          title: dictionary.header.menu.contact,
          url: "/contacto",
        },
      ];
    
      const BUTTON_TEXT = dictionary.footer.contact;
      const LOGO_NAME = dictionary.landing.logoName;
      const BTN_LANDING_HEADER_LINK = "https://wa.link/87ixkj"
    return {
        MENU_SEO_ITEMS,
        BUTTON_TEXT,
        BTN_LANDING_HEADER_LINK,
        LOGO_NAME
    }
};