import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata = {
  metadataBase: new URL("https://proetsin.uz"),
  title: "Проецин® — Растительный препарат при синусите | Таблетки №60",
  description:
    "Проецин® — комбинированный растительный препарат с секретолитическим, противовоспалительным и противовирусным действием для лечения острого и хронического риносинусита. Производитель: Spring Pharmaceutic.",
  keywords: [
    "Проецин",
    "проецин таблетки",
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
    canonical: "https://proetsin.uz",
  },
  openGraph: {
    type: "website",
    url: "https://proetsin.uz",
    title: "Проецин® — Растительный препарат при синусите",
    description:
      "Комбинированный растительный препарат с секретолитическим и противовоспалительным действием для лечения острого и хронического риносинусита.",
    siteName: "PROETSIN",
    images: [
      {
        url: "/proetsin.webp",
        width: 900,
        height: 800,
        alt: "Проецин® таблетки",
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
    title: "Проецин® — Растительный препарат при синусите",
    description:
      "Комбинированный растительный препарат для лечения острого и хронического риносинусита.",
    images: ["/proetsin.webp"],
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
