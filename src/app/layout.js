import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata = {
  metadataBase: new URL("https://proetsinsirop.uz"),
  title: "Проецин® сироп | PROETSIN",
  description:
    "Проецин® сироп — комбинированный растительный препарат с секретолитическим, противовоспалительным и противовирусным действием для лечения острого и хронического риносинусита. Производитель: Spring Pharmaceutic.",
  keywords: [
    "Проецин",
    "проецин сироп",
    "Проецин сироп",
    "синусит лечение",
    "риносинусит",
    "простуда",
    "секретолитический препарат",
    "противовоспалительный",
    "растительный препарат",
    "Spring Pharmaceutic",
    "фитопрепарат",
    "противовирусный",
    "proetsin",
    "proetsin sirop",
    "sinusit",
    "burni tiqilishi",
    "o'simlik preparati",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "EeNrX_Vhd4bMEJnslGv6D89shImpFKT1eTXHeeqUF8I",
  },
  alternates: {
    canonical: "https://proetsinsirop.uz",
  },
  openGraph: {
    type: "website",
    url: "https://proetsinsirop.uz",
    title: "Проецин® сироп — Растительный препарат при синусите",
    description:
      "Проецин® сироп — комбинированный растительный препарат с секретолитическим и противовоспалительным действием для лечения острого и хронического риносинусита.",
    siteName: "PROETSIN",
    images: [
      {
        url: "/proetsinsirop.webp",
        width: 900,
        height: 800,
        alt: "Проецин® сироп",
      },
      {
        url: "/proetsin-logo.svg",
        width: 800,
        height: 600,
        alt: "Проецин логотип",
      },
    ],
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Проецин® сироп — Растительный препарат при синусите",
    description:
      "Проецин® сироп — комбинированный растительный препарат для лечения острого и хронического риносинусита.",
    images: ["/proetsinsirop.webp"],
  },
  other: {
    "telegram:channel": "@SpringPharmaceutic",
    "instagram:account": "@springpharmaceutic",
    "article:publisher": "https://www.facebook.com/spring.pharm.3/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
