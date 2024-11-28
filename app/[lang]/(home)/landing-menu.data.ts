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
          image: "",
        },
        {
          id: "questions",
          title: dictionary.header.menu.contact,
          url: "/contacto",
          image: "",
        },
      ];

      const HOTELS = [
        {
          id: "Hotel1",
          title: "Ecohotel Casa Nichila",
          location: "Nuquí, Choco",
          url: "/nichila",
          altText: dictionary.hotelNames.hotelNichila,
          image: "https://img.playbook.com/bv-QXgGzVEpxiapP3J2lZ3TkNzehEKtBArLHfrRXnjI/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9lMTc3/ODI2MS1mZDQ4LTRh/MjctYjE2Ny1mOTIz/NjU5ODc1Mjg.webp",
        },
        {
          id: "Hotel2",
          title: "Hotel Bonito Amanecer",
          location: "Nuquí, Choco",
          url: "/nichila",
          altText: dictionary.hotelNames.hotelNichila,
          image: "https://img.playbook.com/bv-QXgGzVEpxiapP3J2lZ3TkNzehEKtBArLHfrRXnjI/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9lMTc3/ODI2MS1mZDQ4LTRh/MjctYjE2Ny1mOTIz/NjU5ODc1Mjg.webp",
        },
      ];
    
      const BUTTON_TEXT = dictionary.footer.contact;
      const LOGO_NAME = dictionary.landing.logoName;
      const BTN_LANDING_HEADER_LINK = "https://wa.link/87ixkj"
      const DESKTOP_IMAGE ="https://img.playbook.com/bv-QXgGzVEpxiapP3J2lZ3TkNzehEKtBArLHfrRXnjI/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9lMTc3/ODI2MS1mZDQ4LTRh/MjctYjE2Ny1mOTIz/NjU5ODc1Mjg.webp";
      const MOBILE_IMAGE ="https://img.playbook.com/AphQNNQYkjcg_RSmbMt46Hy0h7DYwLaQrHQ088jy2Oc/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy8yYzIx/OWMyZC01NDM0LTQ2/YzUtYjRkMi03YjNh/MzU3ZmVjODI.webp";
      const BTN_LANDING_PRINCIPAL = "https://wa.link/87ixkj";
    
    return {
        MENU_SEO_ITEMS,
        BUTTON_TEXT,
        BTN_LANDING_HEADER_LINK,
        LOGO_NAME,
        DESKTOP_IMAGE,
        MOBILE_IMAGE,
        BTN_LANDING_PRINCIPAL,
        HOTELS
    }
};