import { i18n, type Locale } from "../../i18n-config";
import "../../app/globals.css";


export const metadata = {
  title: "Los Mejores Hoteles en Nuquí | Alojamiento en la Costa Pacífica",
  description: "Descubre los mejores hoteles en Nuquí, Colombia. Reserva tu alojamiento y disfruta de la naturaleza, el avistamiento de ballenas, la gastronomia y la tranquilidad en la costa del Pacífico.",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}) {
  const params = await props.params;
  const { children } = props;

  return (
    <html lang={params.lang}>
      <body>
        {children}
      </body>
    </html>
  );
}
