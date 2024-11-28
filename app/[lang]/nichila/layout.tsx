import { i18n, type Locale } from "../../../i18n-config";
import "../../../app/globals.css";
import { Header } from "../components/header/header";
import { useDataNichila } from "./nichila.data";
import { italiana, inter } from "../../fonts/nichila.fonts";
import { Footer } from "../components/footer/footer";

export const metadata = {
  title: "Nichila Ecohotel | Los mejores alojamiento en Nuquí",
  description:
    "Ecohotel Nichila hubicado en Nuquí, Chocó a orillas del Pacífico Colombiano es el lugar perfecto para alojarse si tu plan es el avistamiento de ballenas, el ecoturismo o la pesca artesanal. Con playa a 2 min, wifi gratis, restaurante y una vista panorámica a la bahía.",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
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
