import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata = {
  metadataBase: new URL("https://proetsinsirop.uz"),
  title: "Проецин® сироп — растительный препарат при синусите | PROETSIN",
  description:
    "Проецин® (Proetsin) сироп 100 мл — комбинированный растительный препарат с секретолитическим, противовоспалительным и противовирусным действием для лечения острого и хронического риносинусита. Sinusit va burun tiqilishini davolash uchun o'simlik dorisi. Производитель: Spring Pharmaceutic.",
  keywords: [
    "Проецин",
    "проецин сироп",
    "Проецин сироп",
    "проецин сироп 100 мл",
    "проецин купить",
    "проецин инструкция",
    "синусит лечение",
    "риносинусит",
    "риносинусит лечение",
    "простуда лечение",
    "насморк лечение",
    "гайморит лечение",
    "заложенность носа",
    "секретолитический препарат",
    "противовоспалительный препарат",
    "растительный препарат",
    "фитопрепарат",
    "противовирусный препарат",
    "Spring Pharmaceutic",
    "proetsin",
    "proetsin sirop",
    "proetsin sirop 100 ml",
    "proetsin dori",
    "sinusit",
    "sinusit davolash",
    "burun tiqilishi",
    "burun tiqilishi davolash",
    "burun oqishi",
    "shamollash davolash",
    "rinusinusit",
    "gaymorit davolash",
    "o'simlik preparati",
    "o'simlik dorisi",
    "проецин узбекистан",
    "proetsin uzbekistan",
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
    languages: {
      "ru-RU": "https://proetsinsirop.uz",
      "uz-UZ": "https://proetsinsirop.uz",
    },
  },
  openGraph: {
    type: "website",
    url: "https://proetsinsirop.uz",
    title: "Проецин® сироп — Растительный препарат при синусите",
    description:
      "Проецин® сироп 100 мл — комбинированный растительный препарат с секретолитическим и противовоспалительным действием для лечения острого и хронического риносинусита. Sinusit davolash uchun o'simlik dorisi.",
    siteName: "PROETSIN",
    images: [
      {
        url: "https://proetsinsirop.uz/proetsinsirop.webp",
        width: 900,
        height: 800,
        alt: "Проецин® сироп 100 мл — растительный препарат при синусите и риносинусите",
      },
    ],
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Проецин® сироп — Растительный препарат при синусите",
    description:
      "Проецин® сироп 100 мл — комбинированный растительный препарат для лечения острого и хронического риносинусита.",
    images: ["https://proetsinsirop.uz/proetsinsirop.webp"],
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
