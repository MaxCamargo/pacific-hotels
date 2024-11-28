import { i18n, type Locale } from "../../i18n-config";
import "../../app/globals.css";
import { getDictionary } from "../../get-dictionary";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: Promise<{ lang: Locale }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata(props: {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const params = await props.params;
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
 
  return {
    title: dictionary.metaData.landing.title,
    description: dictionary.metaData.landing.subtitle,
    openGraph: {
      images: [
        {
          url: "https://img.playbook.com/Y0k5HUUat66kDKtubUdmhwP-kCM1v4-V930t4ybjg50/s:743:400/exp:1733356799/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9s/YXJnZV9wcmV2aWV3/cy85ODNjNjE5ZC00/ZGZjLTQzYzItYjli/ZC1jZGUyYjk5NjM4/MDY.webp",
          alt: dictionary.metaData.landing.alt,
        },
      ],
      siteName: dictionary.metaData.landing.alt,
    },
  }
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
