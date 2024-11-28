import { getDictionary } from "../../../get-dictionary";
import { Locale } from "../../../i18n-config";

export const useDataNichila = async (props: {
  params: Promise<{ lang: Locale }>;
}) => {
  const params = await props.params;
  const { lang } = params;
  const dictionary = await getDictionary(lang);
  
  const BUTTON_TEXT = dictionary.nichila.reservation;
  const LOGO_NAME = dictionary.nichila.logo;

  const changeMessageLanguage = () => {
    if (lang === "en" || lang === "es" ) {
      return "https://wa.link/st6gjr"
    } else
    return "https://wa.link/bcn1st"
  }

  const NICHILA_WHATSAPP = changeMessageLanguage();

  const DESKTOP_IMAGE =
    "https://img.playbook.com/IImDR_YR5EQGGq3milxUnxB6jjPS4fjowE3AoFzfKbs/w:1200/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9s/YXJnZV9wcmV2aWV3/cy8yY2U3NmMxMS00/OWZlLTRhZGYtYmI4/NC04YzgzYWEzMGVl/YmE.webp";
  const MOBILE_IMAGE =
    "https://img.playbook.com/3LeFdJsJDZjc_lMoVH2v2dCruYzN4nyjnx2PsVHX6UU/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy8zY2M2/OGQ0YS02ZDIxLTQ4/MjMtYjg5My1kMWY1/NzA4ZjY5NTE.webp";
  const PROMO_IMAGE =
    "https://img.playbook.com/XIJ5uirx4QMQVdMi-h6UCyABfvNrtWMy-yaZ9ew-pfw/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9jYTg4/OWExOC0xY2YwLTQ5/ZTctOWJkZC1lMDE2/YjMyNTlkY2M.webp";
  const NICHILA_IMAGE_FEATURE =
    "https://img.playbook.com/Cg9cZDrhUmX9s2ea4ZSk2Wjvj2vpAvT94HfDtPpitmI/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9mN2U3/YmMxZi1kZWQ3LTQy/NGMtOTdiZC05ZWQx/MzI5YmUzZjg.webp";

  const NICHILA_MENU = [
    {
      id: dictionary.header.menu.home,
      title: dictionary.header.menu.home,
      url: "/",
    },
    {
      id: "contact",
      title: dictionary.header.menu.contact,
      url: NICHILA_WHATSAPP,
    },
  ];
  const FACILITIES = [
    {
      id: "1",
      title: dictionary.nichila.facilities.facilitiesItems.item1.title,
      description: dictionary.nichila.facilities.facilitiesItems.item1.description,
      icon: "restaurant",
    },
    {
      id: "2",
      title: dictionary.nichila.facilities.facilitiesItems.item2.title,
      description: dictionary.nichila.facilities.facilitiesItems.item2.description,
      icon: "bahia",
    },
    {
      id: "3",
      title: dictionary.nichila.facilities.facilitiesItems.item3.title,
      description: dictionary.nichila.facilities.facilitiesItems.item3.description,
      icon: "beach",
    },
    {
      id: "4",
      title: dictionary.nichila.facilities.facilitiesItems.item4.title,
      description: dictionary.nichila.facilities.facilitiesItems.item4.description,
      icon: "wifi",
    },
  ];


  const MASONRY_ITEMS_NICHILA = [
    {
      id: "1",
      image: "https://img.playbook.com/4jz7WULrU3exD4GQGDsue1nrHvkfUneknCHalwqmFxM/s:744:744/exp:1732924799/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9s/YXJnZV9wcmV2aWV3/cy9hY2EyNDQ3NC1k/N2Y4LTQzN2ItODBj/NC1iNWNhYWRlMWJj/NmI.webp",
    },
    {
      id: "2",
      image: "https://img.playbook.com/PRVKNDB_faHRUzHDNngJptlkoZ5UGRQU4mb34DQJUWM/s:743:400/exp:1732924799/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9s/YXJnZV9wcmV2aWV3/cy80N2ZlZTEyZi02/OGQ0LTQxYTYtOWYw/Yy0zMjBkM2YzNTc1/NGE.webp",
    },
    {
      id: "3",
      image: "https://img.playbook.com/UHuT_YgRe-QWgpo81SpP194_5MSOhsV41r3MyDWEIjs/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9lZmU2/MThkNC03ZmU4LTRj/MzgtOGZlOS0wMzQ0/MTNkZmM2NDk.webp",
    }
  ]

  const DATA_FOOTER_NICHILA = [
    {
      id: "1",
      icon: "instagram",
      link: "https://www.instagram.com/nichilaecohotel/?hl=es-la",
    }
  ];

  return {
    NICHILA_MENU,
    BUTTON_TEXT,
    DESKTOP_IMAGE,
    MOBILE_IMAGE,
    LOGO_NAME,
    NICHILA_WHATSAPP,
    dictionary,
    PROMO_IMAGE,
    NICHILA_IMAGE_FEATURE,
    FACILITIES ,
    MASONRY_ITEMS_NICHILA,
    DATA_FOOTER_NICHILA
  };
};
