import { i18n, type Locale } from "../../../i18n-config";
import "../../../app/globals.css";
import { Header } from "../components/header/header";
import { useDataNichila } from "./nichila.data";
import { italiana, inter } from "../../fonts/nichila.fonts";
import { Footer } from "../components/footer/footer";
import { ResolvingMetadata, Metadata } from "next";
import { getDictionary } from "../../../get-dictionary";



export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata(props: {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}){
  const params = await props.params;
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return {
    title: dictionary.metaData.nichila.title,
    description: dictionary.metaData.nichila.subtitle,
    openGraph: {
      images: [
        {
          url: "https://img.playbook.com/kNcENmqI3einkAWitn4Tocw2J44A-LncieBumu5BR7Y/s:743:400/exp:1733356799/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9s/YXJnZV9wcmV2aWV3/cy82MDYwMTY0Ny1m/NzY0LTQ2NGUtYjY4/OC1lOThiNDUyNTJh/NjU.webp",
          alt: dictionary.metaData.nichila.alt,
        },
      ],
      siteName: dictionary.metaData.nichila.alt,
    },
  };
}

export default async function HotelLayout(props: {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}) {
  const {
    NICHILA_MENU,
    BUTTON_TEXT,
    LOGO_NAME,
    NICHILA_WHATSAPP,
    dictionary,
    DATA_FOOTER_NICHILA,
  } = await useDataNichila(props);
  const { children } = props;

  return (
    <section className={inter.className}>
      <Header
        dictionary={dictionary}
        menuItemsData={NICHILA_MENU}
        buttonText={BUTTON_TEXT}
        logoName={LOGO_NAME}
        classNameLogo={italiana.className}
        buttonUrl={NICHILA_WHATSAPP}
        buttonType="primary"
        urlLogo="nichila"
        bg
      />
      {children}
      <Footer
        rights={dictionary.footer.rights}
        contact={dictionary.footer.contact}
        data={DATA_FOOTER_NICHILA}
        url={NICHILA_WHATSAPP}
      />
    </section>
  );
}
