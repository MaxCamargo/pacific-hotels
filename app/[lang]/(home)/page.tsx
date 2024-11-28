import { use } from "react";
import { getDictionary } from "../../../get-dictionary";
import { Locale } from "../../../i18n-config";
import { HeroLanding } from "../components/hero-landing/hero-landing";
import LocaleSwitcher from "../components/switcher/locale-switcher";
import { useDataLandingMenu } from "./landing-menu.data";

export default async function IndexPage(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;
  const dictionary = await getDictionary(lang);
  const { BTN_LANDING_PRINCIPAL, DESKTOP_IMAGE, MOBILE_IMAGE, HOTELS } = await useDataLandingMenu(props);

  return (
    <div>
      <HeroLanding
        title={dictionary.landing.title}
        subtitle={dictionary.landing.subtitle}
        buttonText={dictionary.landing.buttonText}
        buttonUrl={BTN_LANDING_PRINCIPAL}
        desktopImage={DESKTOP_IMAGE}
        mobileImage={ MOBILE_IMAGE}
        hotels={HOTELS}
      />
    </div>
  );
}
