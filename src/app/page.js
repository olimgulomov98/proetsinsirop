import Image from "next/image";

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Проецин® сироп 100 мл",
  alternateName: "PROETSIN sirop 100 ml",
  description:
    "Проецин® сироп — комбинированный растительный препарат с секретолитическим, противовоспалительным и противовирусным действием для лечения острого и хронического риносинусита (синусита). Sinusit va burun tiqilishini davolash uchun o'simlik dorisi.",
  image: "https://proetsinsirop.uz/proetsinsirop.webp",
  url: "https://proetsinsirop.uz",
  brand: {
    "@type": "Brand",
    name: "Spring Pharmaceutic",
  },
  manufacturer: {
    "@type": "Organization",
    name: 'ООО "SPRING PHARMACEUTIC"',
    url: "https://proetsinsirop.uz",
    logo: "https://proetsinsirop.uz/proetsin-logo.svg",
    address: {
      "@type": "PostalAddress",
      addressCountry: "UZ",
      addressRegion: "Наманганская область",
      addressLocality: "Касансайский район",
      streetAddress: "Кукимбой, Навбахор МСГ, улица Булак, дом 129",
    },
    telephone: "+998996942363",
    email: "spring_pharmaceutic@gmail.com",
    sameAs: [
      "https://www.instagram.com/springpharmaceutic/",
      "https://www.facebook.com/spring.pharm.3/",
      "https://t.me/SpringPharmaceutic",
    ],
  },
  category: "Фитопрепараты",
  dosageForm: "Сироп (капли для приёма внутрь)",
  activeIngredient: [
    "горечавки желтой корни (Gentianae luteae radicibus)",
    "первоцвета цветки (Primulae flores)",
    "щавеля трава (Rumicis herbae)",
    "бузины черной цветки (Sambuci nigrae flores)",
    "вербены лекарственной трава (Verbenae officinale herbae)",
  ],
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceCurrency: "UZS",
    url: "https://proetsinsirop.uz",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Проецин® сироп нима учун ишлатилади?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Проецин® сироп — бурун бўшлиғи яллиғланиши (риносинусит/синусит) ни даволаш учун ишлатиладиган ўсимлик препарати. У секретолитик, яллиғланишга қарши ва вирусга қарши таъсирга эга.",
      },
    },
    {
      "@type": "Question",
      name: "Для чего применяется Проецин® сироп?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Проецин® сироп применяется в комплексной терапии острого и хронического воспаления придаточных пазух носа (риносинусите), сопровождающемся образованием вязкого секрета. Обладает секретолитическим, противовоспалительным и противовирусным действием.",
      },
    },
    {
      "@type": "Question",
      name: "Проецин® сиропни болаларга бериш мумкинми?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ҳа, Проецин® сиропни 2 ёшдан ошган болаларга бериш мумкин. 2-6 ёш: 15 томчидан кунига 3 марта, 6-11 ёш: 25 томчидан кунига 3 марта, 12 ёшдан ошганлар ва катталар: 50 томчидан кунига 3 марта.",
      },
    },
    {
      "@type": "Question",
      name: "Как принимать Проецин® сироп?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Проецин® принимают внутрь 3 раза в день, предварительно разведя в небольшом количестве воды. Дети 2-6 лет: 15 капель, дети 6-11 лет: 25 капель, дети старше 12 лет и взрослые: 50 капель. Курс лечения 7-14 дней.",
      },
    },
    {
      "@type": "Question",
      name: "Проецин® сиропнинг таркиби нимадан иборат?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Проецин® сироп 5 та ўсимлик экстрактидан иборат: оқ горечавка илдизи, биринчи гул гуллари, щавель ўти, қора бузина гуллари ва доривор вербена ўти. Бу табиий таркибий қисмлар секретолитик ва яллиғланишга қарши таъсир кўрсатади.",
      },
    },
  ],
};

const medicalWebPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Проецин® сироп — инструкция по применению",
  url: "https://proetsinsirop.uz",
  description:
    "Полная инструкция по медицинскому применению препарата Проецин® сироп 100 мл. Состав, показания, дозировка, побочные эффекты.",
  lastReviewed: "2026-02-26",
  medicalAudience: {
    "@type": "MedicalAudience",
    audienceType: "Patient",
  },
  mainContentOfPage: {
    "@type": "WebPageElement",
    cssSelector: "article",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(medicalWebPageJsonLd),
        }}
      />
      <div className="xl:max-w-[1110px] my-0 mx-auto w-[90%]">
        <header className="h-[80px] flex items-center justify-between">
          <a href="/" aria-label="Proetsin — Bosh sahifa">
            <svg
              width="300"
              height="140"
              viewBox="0 0 500 140"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Proetsin логотип"
            >
              <rect width="500" height="160" fill="white" />
              <text
                x="50%"
                y="55%"
                textAnchor="middle"
                dominantBaseline="middle"
                fontFamily="Arial, Helvetica, sans-serif"
                fontSize="72"
                fontWeight="700"
                fill="#4CAF50"
                letterSpacing="2"
              >
                Proetsin
              </text>
              <text
                x="415"
                y="55"
                fontFamily="Arial"
                fontSize="24"
                fill="#4CAF50"
              >
                ®
              </text>
            </svg>
          </a>
          <h3 className="text-[11px] md:text-[18px] md:block font-medium">
            Tel:{" "}
            <a href="tel:+998996942363" aria-label="Telefon raqami">
              +998 99 694 23 63
            </a>
          </h3>
        </header>

        <main>
          <article>
            <section className="mt-[50px]">
              <h1 className="font-semibold text-center text-4xl font-roboto">
                Проецин® сироп — растительный препарат при синусите
              </h1>
              <div className="flex justify-center flex-wrap md:flex-nowrap md:items-end">
                <Image
                  height={600}
                  width={600}
                  className="hidden md:block"
                  src="/proetsinsirop.webp"
                  alt="Проецин® сироп 100 мл — растительный препарат для лечения синусита и риносинусита"
                  priority
                />
                <Image
                  height={300}
                  width={300}
                  className="block md:hidden"
                  src="/proetsinsirop.webp"
                  alt="Проецин® сироп 100 мл — растительный препарат для лечения синусита и риносинусита"
                  priority
                />
              </div>
            </section>

            <section className="text-[14px] md:text-[16px] font-roboto font-light text-justify leading-relaxed max-w-[700px] px-4 md:px-6">
              <h2 className="text-xl md:text-2xl mt-5 text-[#0C54A0] font-semibold font-roboto mb-3">
                ИНСТРУКЦИЯ ПО МЕДИЦИНСКОМУ ПРИМЕНЕНИЮ Проецин® сироп 100 мл
              </h2>

              <div className="mb-4">
                <strong className="font-medium">
                  <span className="text-[#0C54A0]">
                    Торговое название: Проецин® .
                  </span>{" "}
                </strong>
              </div>
              <div className="mb-4">
                <p className="font-roboto text-[14px] md:text-[16px]">
                  <strong className="font-medium">
                    <span className="text-[#0C54A0]">
                      Форма выпуска, упаковка и состав сиропа Проецин®
                    </span>
                  </strong>{" "}
                </p>
              </div>
              <div className="mb-4">
                <strong className="font-medium">
                  <span className="text-[#0C54A0]">Состав препарата:</span>
                </strong>

                <p className="mt-2 font-medium">
                  Капли для приема внутрь. По 100 мл препарата во флаконе из
                  тёмного стекла с дозирующим капельным устройством сверху, с
                  навинчивающейся крышкой и с предохранительным кольцом, а также
                  инструкцией, помещёнными в складную картонную коробку.
                </p>
                <p className="mt-2 font-medium">
                  Прозрачная, желтовато-коричневая жидкость с ароматным запахом.
                  Возможно легкое помутнение или выпадение незначительного осадка
                  в процессе хранения.
                </p>
                <p className="mt-2 font-medium">
                  100 г капель Проецин® содержат 29 г водно-спиртового экстракта
                  из смеси следующих видов лекарственного растительного сырья:
                </p>
                <table className="border-collapse border border-slate-300 w-full mt-3 mb-3 text-[14px]">
                  <thead>
                    <tr className="bg-[#f5f5f5]">
                      <th className="border border-slate-300 text-left px-3 py-2">
                        Лекарственное растительное сырье
                      </th>
                      <th className="border border-slate-300 text-center px-3 py-2">
                        100 гр.
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-300 px-3 py-2">
                        горечавки желтой корни (Gentianae luteae radicibus)
                      </td>
                      <td className="border border-slate-300 px-3 py-2 text-center">
                        0,2 г
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 px-3 py-2">
                        первоцвета цветки (Primulae flores)
                      </td>
                      <td className="border border-slate-300 px-3 py-2 text-center">
                        0,6 г
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 px-3 py-2">
                        щавеля трава (Rumicis herbae)
                      </td>
                      <td className="border border-slate-300 px-3 py-2 text-center">
                        0,6 г
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 px-3 py-2">
                        бузины черной цветки (Sambuci nigrae flores)
                      </td>
                      <td className="border border-slate-300 px-3 py-2 text-center">
                        0,6 г
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 px-3 py-2">
                        вербены лекарственной трава (Verbenae officinale herbae)
                      </td>
                      <td className="border border-slate-300 px-3 py-2 text-center">
                        0,6 г
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className="font-medium">
                  Содержание этанола: 16,0 – 19,0 % (о/о)
                </p>
                <p className="font-medium mt-2">
                  <strong>Вспомогательные вещества:</strong> Очищенная вода 71,0
                  г.
                </p>
              </div>
              <div className="mb-4">
                <strong className="font-medium">
                  <span className="text-[#0C54A0]">
                    Показания препарата Проецин®
                  </span>
                </strong>
                <ul className="list-disc pl-6 mt-2 space-y-1 font-medium">
                  <li>
                    В комплексной терапии острого и хронического воспаления
                    придаточных пазух носа (риносинусите), сопровождающемся
                    образованием вязкого секрета.
                  </li>
                </ul>
              </div>
              <div className="mb-4">
                <strong className="font-medium">
                  <span className="text-[#0C54A0]">Режим дозирования.</span>
                </strong>
                <p className="mt-2 font-medium">
                  Принимают внутрь, предварительно разведя в небольшом количестве
                  воды.
                </p>
                <p className="mt-2 font-medium">
                  Рекомендуемая доза: 3 раза/сут (утром, днем и вечером) в
                  соответствии с приведенной ниже таблицей.
                </p>
                <table className="border-collapse border border-slate-300 w-full mt-3 mb-3 text-[14px]">
                  <thead>
                    <tr className="bg-[#f5f5f5]">
                      <th className="border border-slate-300 px-3 py-2 text-left font-semibold">
                        Возраст
                      </th>
                      <th className="border border-slate-300 px-3 py-2 text-center font-semibold">
                        Разовая доза
                      </th>
                      <th className="border border-slate-300 px-3 py-2 text-center font-semibold">
                        Суточная доза
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-300 px-3 py-2">
                        Дети в возрасте от 2 до 6 лет
                      </td>
                      <td className="border border-slate-300 px-3 py-2 text-center">
                        15 капель
                      </td>
                      <td className="border border-slate-300 px-3 py-2 text-center">
                        45 капель
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 px-3 py-2">
                        Дети в возрасте от 6 до 11 лет
                      </td>
                      <td className="border border-slate-300 px-3 py-2 text-center">
                        25 капель
                      </td>
                      <td className="border border-slate-300 px-3 py-2 text-center">
                        75 капель
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 px-3 py-2">
                        Дети в возрасте старше 12 лет и взрослые
                      </td>
                      <td className="border border-slate-300 px-3 py-2 text-center">
                        50 капель
                      </td>
                      <td className="border border-slate-300 px-3 py-2 text-center">
                        150 капель
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className="font-medium mt-2">
                  Длительность курса лечения составляет 7-14 дней. Увеличение
                  продолжительности и проведение повторных курсов лечения возможно
                  по рекомендации врача.
                </p>
                <p className="mt-2 font-medium">
                  Необходимо проинформировать пациента о том, что, если через 7-14
                  дней лечения улучшения не наступает или симптомы усугубляются,
                  или появляются новые симптомы, необходимо проконсультироваться с
                  врачом.
                </p>
              </div>
              <div className="mb-4">
                <strong className="font-medium">
                  <span className="text-[#0C54A0]">Побочное действие</span>
                </strong>
                <p className="mt-2 font-medium">
                  <span className="font-medium">
                    Со стороны иммунной системы:
                  </span>{" "}
                  нечасто — местные аллергические реакции (кожная сыпь,
                  покраснение кожи, зуд); неизвестно — системные аллергические
                  реакции (ангионевротический отек, отек лица).
                </p>
                <p className="mt-2 font-medium">
                  <span className="font-medium">
                    Со стороны дыхательной системы, органов грудной клетки и
                    средостения:
                  </span>{" "}
                  неизвестно — одышка.
                </p>
                <p className="mt-2 font-medium">
                  <span className="font-medium">Со стороны ЖКТ:</span> нечасто —
                  тошнота, боль в эпигастральной области.
                </p>
              </div>
              <div className="mb-4">
                <strong className="font-medium">
                  <span className="text-[#0C54A0]">
                    Сообщение о подозреваемых нежелательных реакциях
                  </span>
                </strong>
                <p className="mt-2 font-medium">
                  Важно сообщать о подозреваемых нежелательных реакциях после
                  регистрации лекарственного препарата с целью обеспечения
                  непрерывного мониторинга соотношения «польза-риск»
                  лекарственного препарата.
                </p>
              </div>
              <div className="mb-4">
                <strong className="font-medium">
                  <span className="text-[#0C54A0]">
                    Противопоказания к применению
                  </span>
                </strong>
                <ul className="list-disc pl-6 mt-2 space-y-1 font-medium">
                  <li>
                    повышенная чувствительность к активным компонентам препарата
                    и/или к любому из вспомогательных веществ, входящих в состав
                    препарата.
                  </li>
                  <li>
                    Алкоголизм, детский возраст (до 2 лет). Не следует принимать
                    препарат пациентам после успешного антиалкогольного лечения.
                  </li>
                </ul>
              </div>
              <div className="mb-4">
                <strong className="font-medium">
                  <span className="text-[#0C54A0]">
                    Применение при беременности и кормлении грудью
                  </span>
                </strong>
                <p className="mt-2 font-medium">
                  Применение препарата Проецин в период беременности возможно
                  только по назначению врача; принимать капли Проецин, вследствие
                  содержания алкоголя, следует только в том случае, если
                  невозможен прием таблетки Проецин®.
                </p>
                <p className="mt-2 font-medium">
                  Препарат не рекомендуется принимать в период кормления грудью (в
                  связи с отсутствием опыта его клинического применения).
                </p>
              </div>
              <div className="mb-4">
                <strong className="font-medium">
                  <span className="text-[#0C54A0]">Применение у детей</span>
                </strong>
                <p className="mt-2 font-medium">
                  Противопоказан детям в возрасте до 2 года (из-за недостаточности
                  клинических данных).
                </p>
              </div>
              <div className="mb-4">
                <strong className="font-medium">
                  <span className="text-[#0C54A0]">Особые указания.</span>
                </strong>
                <p className="mt-2 font-medium">
                  В составе препарата содержится 16,0 – 19,0 % этанола (в объемном
                  отношении).
                </p>
                <p className="mt-2 font-medium">
                  При использовании флакон следует держать в вертикальном
                  положении.
                </p>
                <p className="mt-2 font-medium">
                  В процессе хранения капель Проецин® возможно легкое помутнение
                  или выпадение незначительного осадка, что не влияет на
                  эффективность препарата.
                </p>
                <p className="mt-2 font-medium">
                  При применении в рекомендуемых дозах препарат не оказывает
                  влияния на способность к управлению автотранспортом и работе с
                  механизмами, требующими повышенного внимания.
                </p>
                <p className="mt-2 font-medium font-semibold">
                  Перед употреблением взбалтывать!
                </p>
              </div>
              <div className="mb-4">
                <strong className="font-medium">
                  <span className="text-[#0C54A0]">Передозировка.</span>
                </strong>
                <p className="mt-2 font-medium">
                  До настоящего времени случаи передозировки при применении
                  препарата не зарегистрированы.
                </p>
                <p className="mt-2 font-medium">
                  Симптомы: возможно усиление выраженности дозозависимых побочных
                  эффектов.
                </p>
                <p className="mt-2 font-medium">
                  Лечение: проведение симптоматической терапии.
                </p>
              </div>
              <div className="mb-4">
                <strong className="font-medium">
                  <span className="text-[#0C54A0]">
                    Лекарственное взаимодействие.
                  </span>
                </strong>
                <p className="mt-2 font-medium">
                  Комбинация с антибактериальными лекарственными средствами
                  возможна и целесообразна.
                </p>
                <p className="mt-2 font-medium">
                  Взаимодействие с другими лекарственными средствами до настоящего
                  времени неизвестно.
                </p>
              </div>
              <div className="mb-4">
                <strong className="font-medium">
                  <span className="text-[#0C54A0]">
                    Условия хранения препарата.
                  </span>
                </strong>
                <p className="mt-2 font-medium">
                  Препарат следует хранить в недоступном для детей месте при
                  температуре не выше 25°С.
                </p>
              </div>
              <div className="mb-4">
                <strong className="font-medium">
                  <span className="text-[#0C54A0]">
                    Срок годности препарата.
                  </span>
                </strong>
                <p className="mt-2 font-medium">Срок годности — 2 года.</p>
                <p className="mt-2 font-medium">
                  Не применять по истечении срока годности.
                </p>
              </div>
              <div className="mb-4">
                <strong className="font-medium">
                  <span className="text-[#0C54A0]">Условия реализации</span>
                </strong>
                <p className="mt-2 font-medium">
                  Препарат отпускают без рецепта.
                </p>
              </div>
              <div className="mb-4 mt-4">
                <strong className="font-medium">
                  <span className="text-[#0C54A0]">Производитель:</span>
                </strong>
                <p className="mt-2 font-medium">
                  ООО &quot;SPRING PHARMACEUTIC&quot; СП Великобритания.
                </p>
              </div>
              <div className="mb-4">
                <strong className="font-medium">
                  <span className="text-[#0C54A0]">
                    Местонахождение производителя и адрес места осуществления
                    деятельности:
                  </span>
                </strong>
                <p className="mt-2 font-medium">
                  Республика Узбекистан, Наманганская область, Касансайский район,
                  Кукимбой, Навбахор МСГ, улица Булак, дом 129. Тел.:
                  +998996942363
                </p>
              </div>
            </section>

            <footer className="text-[14px] md:text-[16px] font-roboto font-light max-w-[700px] px-4 md:px-6">
              <nav aria-label="Социальные сети">
                <a
                  href="https://www.instagram.com/springpharmaceutic/"
                  className="flex gap-3 items-center"
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label="Instagram — @springpharmaceutic"
                >
                  <Image
                    src="/Instagram-Logo.wine.svg"
                    width={30}
                    height={30}
                    className="w-[30px] h-[30px]"
                    alt="Instagram логотип"
                    loading="lazy"
                  />
                  @springpharmaceutic
                </a>
                <a
                  href="https://www.facebook.com/spring.pharm.3/"
                  className="flex gap-3 items-center"
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label="Facebook — Spring Pharm"
                >
                  <Image
                    src="/Facebook-f_Logo-Blue-Logo.wine.svg"
                    width={30}
                    height={30}
                    className="w-[30px] h-[30px]"
                    alt="Facebook логотип"
                    loading="lazy"
                  />
                  Spring Pharm
                </a>
                <a
                  href="https://t.me/SpringPharmaceutic"
                  className="flex gap-3 items-center"
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label="Telegram — Spring_Pharmaceutic"
                >
                  <Image
                    src="/telegram.webp"
                    width={20}
                    height={20}
                    className="w-[20px] h-[20px] ml-1"
                    alt="Telegram логотип"
                    loading="lazy"
                  />
                  Spring_Pharmaceutic
                </a>
                <a
                  href="mailto:spring_pharmaceutic@gmail.com"
                  className="flex gap-3 items-center mb-3"
                  aria-label="Email — spring_pharmaceutic@gmail.com"
                >
                  <Image
                    src="/email-svgrepo-com.svg"
                    width={25}
                    height={25}
                    className="w-[25px] h-[25px]"
                    alt="Email иконка"
                    loading="lazy"
                  />
                  spring_pharmaceutic@gmail.com
                </a>
              </nav>
              <div className="mb-5 flex gap-3 flex flex-wrap">
                <a
                  href="/instruction_ru.docx"
                  className="px-3 py-2 bg-green-500 text-white inline-flex items-center gap-2 rounded-lg text-[12px] md:text-[16px]"
                  download
                  aria-label="Скачать инструкцию в формате Word"
                >
                  СКАЧАТЬ ИНСТРУКЦИЮ
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="white"
                    aria-hidden="true"
                  >
                    <g id="Interface / Download">
                      <path
                        id="Vector"
                        d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                </a>
              </div>
            </footer>
          </article>
        </main>
      </div>
    </>
  );
}
