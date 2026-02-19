const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "PROETSIN® таблетки №60",
  description:
    "Комбинированный растительный препарат для лечения заболеваний почек и мочевыводящих путей. Мочегонное, спазмолитическое, противовоспалительное, противомикробное действие.",
  image: "https://proetsin.uz/proetsin.webp",
  brand: {
    "@type": "Brand",
    name: "Spring Pharmaceutic",
  },
  manufacturer: {
    "@type": "Organization",
    name: 'ООО "SPRING PHARMACEUTIC"',
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
  category: "Фитопрепараты, урология",
  url: "https://proetsin.uz",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="xl:max-w-[1110px] my-0 mx-auto w-[90%]">
        <div className="h-[80px] flex items-center justify-between">
          <a href="#">
            <svg
              width="300"
              height="140"
              viewBox="0 0 500 140"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="500" height="160" fill="white" />

              <text
                x="50%"
                y="55%"
                text-anchor="middle"
                dominant-baseline="middle"
                font-family="Arial, Helvetica, sans-serif"
                font-size="72"
                font-weight="700"
                fill="#4CAF50"
                letter-spacing="2"
              >
                Proetsin
              </text>

              <text
                x="415"
                y="55"
                font-family="Arial"
                font-size="24"
                fill="#4CAF50"
              >
                ®
              </text>
            </svg>
          </a>
          <h3 className="text-[11px] md:text-[18px] md:block font-medium">
            Tel: +998 99 694 23 63
          </h3>
        </div>
        <div className="mt-[50px]">
          <h2 className="font-semibold text-center text-4xl font-roboto">
            « PROETSIN ® »
          </h2>
          <div className="flex justify-center flex-wrap md:flex-nowrap md:items-end">
            <img
              height={600}
              width={600}
              className="hidden md:block"
              src="/proetsin.webp"
              alt="инвиреп"
              loading={"lazy"}
            />
            {/* <img
              height={600}
              width={600}
              className="hidden md:block w-[500px] h-[500px]"
              src="/mediren.png"
              alt="инвиреп"
              loading={"lazy"}
            /> */}
            <img
              height={300}
              width={300}
              className="block md:hidden"
              src="/proetsin.webp"
              alt="Invirep"
              loading={"lazy"}
            />
          </div>
          <h3 className="text-xl md:text-2xl mt-5 text-[#0C54A0] font-semibold font-roboto mb-3">
            ИНСТРУКЦИЯ ПО МЕДИЦИНСКОМУ ПРИМЕНЕНИЮ Проецин® таблетки №60
          </h3>
          <div className="text-[14px] md:text-[16px] font-roboto font-light text-justify leading-relaxed max-w-[700px] px-4 md:px-6">
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
                    Форма выпуска, упаковка и состав препарата Проецин®
                  </span>
                </strong>{" "}
              </p>
            </div>
            <div className="mb-4">
              <strong className="font-medium">
                <span className="text-[#0C54A0]">Состав препарата:</span>
              </strong>
              <p className="mt-2 font-medium">
                Таблетки, покрытые оболочкой зеленого цвета, круглые,
                двояковыпуклые, с гладкой поверхностью; на изломе видны три
                слоя: внутренний — от светло-коричневого с зеленоватым оттенком
                до коричневого цвета, допустимы белые вкрапления; средний —
                белого цвета; наружный — зеленого цвета.
              </p>
              <table className="border-collapse border border-slate-300 w-full mt-3 mb-3 text-[14px]">
                <thead>
                  <tr className="bg-[#f5f5f5]">
                    <th className="border border-slate-300 text-left px-3 py-2">
                      Измельченное лекарственное растительное сырье
                    </th>
                    <th className="border border-slate-300 text-center px-3 py-2">
                      1 таб.
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2">
                      горечавки желтой корни (Gentianae luteae radicibus)
                    </td>
                    <td className="border border-slate-300 px-3 py-2 text-center">
                      6 мг
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2">
                      первоцвета цветки (Primulae flores)
                    </td>
                    <td className="border border-slate-300 px-3 py-2 text-center">
                      18 мг
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2">
                      щавеля трава (Rumicis herbae)
                    </td>
                    <td className="border border-slate-300 px-3 py-2 text-center">
                      18 мг
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2">
                      бузины черной цветки (Sambuci nigrae flores)
                    </td>
                    <td className="border border-slate-300 px-3 py-2 text-center">
                      18 мг
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2">
                      вербены лекарственной трава (Verbenae officinale herbae)
                    </td>
                    <td className="border border-slate-300 px-3 py-2 text-center">
                      18 мг
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className="font-medium">
                Вспомогательные вещества: желатин, лактозы моногидрат, крахмал
                картофельный, кремния диоксид коллоидный безводный, сорбитол,
                стеариновая кислота, сополимер бутилметакрилата основной,
                кальция карбонат (Е170), клещевины обыкновенной семян масло
                (касторовое масло), хлорофиллина медный комплекс (Е141)
                (хлорофиллина медный комплекс, глюкозы сироп), декстрин, глюкоза
                жидкая, индигокармина лак алюминиевый (Е132) (индигокармин,
                алюминия гидроксид), магния оксид, крахмал кукурузный, воск
                горный гликолевый, рибофлавин (Е101), шеллак, сахароза, тальк,
                титана диоксид (Е171).
              </p>
              <p className="mt-2 font-medium">
                20 шт. — блистеры (3) — пачки картонные.
              </p>
            </div>
            <div className="mb-4">
              <strong className="font-medium">
                <span className="text-[#0C54A0]">
                  Клинико-фармакологическая группа:{" "}
                </span>
                <span className="text-[#0C54A0] underline">
                  Комбинированный препарат растительного происхождения с
                  секретолитическим, секретомоторным, противовоспалительным и
                  противовирусным действием
                </span>
              </strong>
            </div>
            <div className="mb-4">
              <strong className="font-medium">
                <span className="text-[#0C54A0]">
                  Фармако-терапевтическая группа:{" "}
                </span>
                <span className="text-[#0C54A0] underline">
                  Другие препараты для лечения простудных заболеваний
                </span>
              </strong>
            </div>
            <div className="mb-4">
              <strong className="font-medium">
                <span className="text-[#0C54A0]">
                  Фармакологическое действие
                </span>
              </strong>
              <p className="mt-2 font-medium font-semibold">
                Механизм действия и фармакодинамические свойства
              </p>
              <p className="mt-2 font-medium">
                Фармакологические свойства обусловлены биологически активными
                веществами, входящими в состав препарата.
              </p>
              <p className="mt-2 font-medium">
                Проецин® оказывает секретолитическое, секретомоторное,
                противовоспалительное, противоотечное, умеренное
                антибактериальное и противовирусное действие. Способствует
                оттоку экссудата из придаточных пазух носа и верхних дыхательных
                путей, предупреждая развитие осложнений.
              </p>
            </div>
            <div className="mb-4">
              <strong className="font-medium">
                <span className="text-[#0C54A0]">
                  Показания препарата Проецин®
                </span>
              </strong>
              <p className="mt-2 font-medium">
                Взрослым и детям от 6 лет и старше при:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1 font-medium">
                <li>
                  остром и хроническом синусите (риносинусите), сопровождающемся
                  образованием вязкого секрета.
                </li>
              </ul>
            </div>
            <div className="mb-4">
              <strong className="font-medium">
                <span className="text-[#0C54A0]">Режим дозирования.</span>
              </strong>
              <p className="mt-2 font-medium">
                Принимают внутрь, не разжевывая, запивая небольшим количеством
                воды, независимо от приема пищи.
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
                      Дети в возрасте от 6 до 11 лет
                    </td>
                    <td className="border border-slate-300 px-3 py-2 text-center">
                      1 таблетка
                    </td>
                    <td className="border border-slate-300 px-3 py-2 text-center">
                      3 таблетки
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2">
                      Дети в возрасте старше 12 лет и взрослые
                    </td>
                    <td className="border border-slate-300 px-3 py-2 text-center">
                      2 таблетки
                    </td>
                    <td className="border border-slate-300 px-3 py-2 text-center">
                      6 таблеток
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
              <p className="mt-2 font-medium font-semibold">Дети</p>
              <p className="font-medium">
                Безопасность и эффективность у детей в возрасте от 0 до 6 лет на
                настоящий момент не установлены. Данные отсутствуют.
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
              </ul>
            </div>
            <div className="mb-4">
              <strong className="font-medium">
                <span className="text-[#0C54A0]">
                  Применение при беременности и кормлении грудью
                </span>
              </strong>
              <p className="mt-2 font-semibold">Беременность</p>
              <p className="font-medium">
                Применение препарата при беременности возможно только по
                назначению врача.
              </p>
              <p className="mt-2 font-semibold">
                Период грудного вскармливания
              </p>
              <p className="font-medium">
                Препарат не рекомендуется принимать в период грудного
                вскармливания (в связи с отсутствием опыта его клинического
                применения).
              </p>
              <p className="mt-2 font-semibold">Фертильность</p>
              <p className="font-medium">
                Данные о влиянии препарата на фертильность отсутствуют.
              </p>
            </div>
            <div className="mb-4">
              <strong className="font-medium">
                <span className="text-[#0C54A0]">Применение у детей</span>
              </strong>
              <p className="mt-2 font-medium">
                Противопоказан детям в возрасте до 6 лет (из-за недостаточности
                клинических данных).
              </p>
            </div>
            <div className="mb-4">
              <strong className="font-medium">
                <span className="text-[#0C54A0]">Особые указания</span>
              </strong>
              <p className="mt-2 font-medium">
                Необходимо проинформировать пациента о том, что, если через 7-14
                дней лечения улучшения не наступает или симптомы усугубляются,
                или появляются новые симптомы, необходимо проконсультироваться с
                врачом.
              </p>
              <p className="mt-2 font-medium">
                В случае, если у пациента появились носовые кровотечения,
                лихорадка, сильные головные или лицевые боли, гнойные выделения
                из носа, нарушение зрения, асимметрия средней части лица или
                глаз или онемение лица, необходимо обратиться за консультацией к
                врачу, поскольку перечисленные симптомы считаются серьезными для
                всех форм риносинуситов, что требует проведения обследования и
                срочного лечения.
              </p>
              <p className="mt-2 font-medium">
                Пациентам с гастритом и другими заболеваниями
                желудочно-кишечного тракта в фазе обострения и пациентам с
                чувствительным желудком рекомендуется принимать препарат
                Проецин® с осторожностью, желательно после еды, запивая стаканом
                воды.
              </p>
              <p className="mt-2 font-semibold font-medium">
                Вспомогательные вещества
              </p>
              <p className="font-medium">
                Пациентам с редкой наследственной непереносимостью фруктозы,
                непереносимостью галактозы, дефицитом лактазы,
                глюкозо-галактозной мальабсорбцией или сахаразо-изомальтазной
                недостаточностью не следует принимать препарат, таблетки,
                покрытые оболочкой. Возможен прием препарата в лекарственных
                формах капли для приема внутрь или сироп, которые не содержат
                вышеуказанных сахаров.
              </p>
              <p className="mt-2 font-semibold font-medium">
                Информация для пациентов с сахарным диабетом:
              </p>
              <p className="font-medium">
                одна таблетка, покрытая оболочкой, содержит 0.01 ХЕ.
              </p>
              <p className="mt-2 font-semibold font-medium">
                Влияние на способность к управлению транспортными средствами и
                механизмами
              </p>
              <p className="font-medium">
                При применении в рекомендуемых дозах препарат Проецин® не
                оказывает влияния на способность к выполнению потенциально
                опасных видов деятельности, требующих повышенной концентрации
                внимания и быстроты психомоторных реакций (управление
                транспортными средствами, работа с движущимися механизмами,
                работа диспетчера и оператора).
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
                <span className="text-[#0C54A0]">Срок годности препарата.</span>
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

            <a
              href="https://www.instagram.com/springpharmaceutic/"
              className="flex gap-3 items-center"
            >
              <img
                src="/Instagram-Logo.wine.svg"
                loading={"lazy"}
                className="w-[30px] h-[30px]"
                alt="instagram"
              />
              @springpharmaceutic
            </a>
            <a
              href="https://www.facebook.com/spring.pharm.3/"
              className="flex gap-3 items-center"
            >
              <img
                src="/Facebook-f_Logo-Blue-Logo.wine.svg"
                loading={"lazy"}
                className="w-[30px] h-[30px]"
                alt="instagram"
              />
              Spring Pharm
            </a>
            <a
              href="https://t.me/SpringPharmaceutic"
              className="flex gap-3 items-center"
            >
              <img
                src="/telegram.webp"
                width={20}
                height={20}
                loading={"lazy"}
                className="w-[20px] h-[20px] ml-1"
                alt="instagram"
              />
              Spring_Pharmaceutic
            </a>
            <a href="#" className="flex gap-3 items-center mb-3">
              <img
                src="/email-svgrepo-com.svg"
                loading={"lazy"}
                className="w-[25px] h-[25px]"
                alt="instagram"
              />
              spring_pharmaceutic@gmail.com
            </a>
            <div className="mb-5 flex gap-3 flex flex-wrap">
              <a
                href="/instruction_ru.docx"
                className="px-3 py-2 bg-green-500 text-white inline-flex items-center gap-2 rounded-lg text-[12px] md:text-[16px]"
              >
                СКАЧАТЬ ИНСТРУКЦИЮ
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="white"
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
              {/* <a
                href="/instruction_uz.docx"
                className="px-3 py-2 bg-green-500 text-white inline-flex items-center gap-2 rounded-lg text-[12px] md:text-[16px]"
              >
                СКАЧАТЬ ИНСТРУКЦИЮ НА УЗБЕКСКОМ ЯЗЫКЕ
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="white"
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
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
