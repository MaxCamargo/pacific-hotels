import { getDictionary } from "../../../get-dictionary";
import { Locale } from "../../../i18n-config";
import { HeroLanding } from "../components/hero-landing/hero";
import LocaleSwitcher from "../components/switcher/locale-switcher";

export default async function IndexPage(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;

  const dictionary = await getDictionary(lang);
  const DESKTOP_IMAGE ="https://img.playbook.com/bv-QXgGzVEpxiapP3J2lZ3TkNzehEKtBArLHfrRXnjI/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9lMTc3/ODI2MS1mZDQ4LTRh/MjctYjE2Ny1mOTIz/NjU5ODc1Mjg.webp";
  const MOBILE_IMAGE ="https://img.playbook.com/AphQNNQYkjcg_RSmbMt46Hy0h7DYwLaQrHQ088jy2Oc/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy8yYzIx/OWMyZC01NDM0LTQ2/YzUtYjRkMi03YjNh/MzU3ZmVjODI.webp";
  const BTN_LANDING_PRINCIPAL = "https://wa.link/87ixkj";
  return (
    <div>
      <HeroLanding
        title={"Hoteles en Nuquí"}
        subtitle={"Expertos en alojamientos, ven descubre y disfruta del turismo en Nuquí con los mejores hoteles y ecohoteles del pacífico Colombiano."}
        buttonText={"Reservar"}
        buttonUrl={BTN_LANDING_PRINCIPAL}
        desktopImage={DESKTOP_IMAGE}
        mobileImage={ MOBILE_IMAGE}
      />
    </div>
  );
}
