import "../styles.css";

import type { ReactNode } from "react";

import { Header } from "../components/header";
import { Footer } from "../components/footer";

type RootLayoutProps = { children: ReactNode };

export default async function RootLayout({ children }: RootLayoutProps) {
  const data = await getData();

  return (
    <div className="font-geist min-h-screen bg-black text-gray-300">
      <meta name="description" content={data.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="keywords"
        content="Uyiosa Richmond Eribo, Portfolio, Web Developer, Frontend Engineer, Data Scientist, Graphics Designer"
      />
      <meta name="author" content="Uyiosa Richmond Eribo" />
      <meta property="og:title" content="Uyiosa Richmond Eribo Portfolio" />
      <meta property="og:description" content={data.description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Uyiosa Richmond Eribo Portfolio" />
      <meta name="twitter:description" content={data.description} />
      <link rel="icon" type="image/png" href={data.icon} />
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-8 mt-24">{children}</main>
      <Footer />
    </div>
  );
}

const getData = async () => {
  const data = {
    description: "Uyiosa Richmond Eribo Portfolio",
    icon: "/images/favicon.png",
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: "static",
  } as const;
};
