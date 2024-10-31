import { i18n, Locale } from "@/i18n-config";
import "../globals.css";
import { Nunito } from "next/font/google";
import localFont from "next/font/local";
import React from "react";
import Header from "@/src/components/layout/header";
import Footer from "@/src/components/layout/footer";
import LangSwitch from "@/src/components/lang-switch";
import { getDictionary } from "@/get-dictionary";

const nunito = Nunito({
  subsets: ["latin"],
});

const dana = localFont({
  src: "../../fonts/DanaVF.ttf",
  display: "swap",
});

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({
    lang: locale,
  }));
}

const setDir = (lang: string) => {
  switch (lang) {
    case "fa":
      return "rtl";
    case "en":
      return "ltr";
    default:
      return "";
  }
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(params.lang);

  return (
    <html lang={params.lang} dir={setDir(params.lang)}>
      <head>
        {/* Primary Meta Tags */}
        <title>{dictionary.name}</title>
        <meta name="title" content={dictionary.name} />
        <meta name="description" content={dictionary.description} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nazanin.vercel.app/" />
        <meta property="og:title" content={dictionary.name} />
        <meta property="og:description" content={dictionary.description} />
        <meta
          property="og:image"
          content="https://ik.imagekit.io/mggo9dfob/preview-meta-tag.jpg?updatedAt=1690547641336"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://nazanin.vercel.app/" />
        <meta property="twitter:title" content={dictionary.name} />
        <meta property="twitter:description" content={dictionary.description} />
        <meta
          property="twitter:image"
          content="https://ik.imagekit.io/mggo9dfob/preview-meta-tag.jpg?updatedAt=1690547641336"
        />

        {/* favicon */}
        <link rel="shortcut icon" href="/src/app/favicon.ico" />
      </head>
      <body
        className={params.lang === "en" ? nunito.className : dana.className}
      >
        <Header dictionary={dictionary} />
        {children}
        <LangSwitch />
        <Footer dictionary={dictionary} />
      </body>
    </html>
  );
}
