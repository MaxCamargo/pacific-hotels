import { getDictionary } from "../../../get-dictionary";
import { Locale } from "../../../i18n-config";
import { ephesis } from "../../fonts/landing.fonts";
import { Header } from "../components/header/header";
import { useDataLandingMenu } from "./landing-menu.data";


export default async function HomeLayout(props: {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}) {
  const params = await props.params;
  const { lang } = params;
  const dictionary = await getDictionary(lang);
  const { children } = props;
  const { MENU_SEO_ITEMS, BUTTON_TEXT, LOGO_NAME, BTN_LANDING_HEADER_LINK } = await useDataLandingMenu(
    props
  );
  return (
    <section>
      <Header
        dictionary={dictionary}
        menuItemsData={MENU_SEO_ITEMS}
        buttonText={BUTTON_TEXT}
        logoName={LOGO_NAME}
        classNameLogo={ephesis.className}
        buttonType="primary"
        urlLogo=""
        buttonUrl={BTN_LANDING_HEADER_LINK}
      />
      {children}
    </section>
  );
}
