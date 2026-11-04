# CONTENT.md — Текстове наповнення сайту BLACKLINE BARBER

> **Мова контенту:** Польська (`pl-PL`)  
> **Статус:** Робочий контент-бриф для демонстраційного сайту  
> **Бренд:** BLACKLINE BARBER  
> **Тональність (Tone of Voice):** Стримана, преміальна, впевнена, без зайвого пафосу та кліше  

---

## 0. Контрольна таблиця змінних бізнес-даних (Business Data Registry)

| Змінна / Поле | Демонстраційне значення | Статус | Примітка для адаптації під клієнта |
|---|---|---|---|
| `BUSINESS_NAME` | **BLACKLINE BARBER** | Демонстраційне | Замінити на офіційну назву реального салону |
| `TAGLINE` | Męski styl. Czysta precyzja. | Затверджено | Короткий слоган бренду |
| `CITY` | `[MIASTO]` (напр. Warszawa) | Плейсхолдер | Вказати реальне місто розташування |
| `ADDRESS` | `[ULICA I NUMER, KOD POCZTOWY MIASTO]` | Плейсхолдер | Не створювати фейкових геоданих та iframe карт |
| `PHONE` | `[+48 XXX XXX XXX]` | Плейсхолдер | Не використовувати дійсні `tel:` до отримання номера |
| `EMAIL` | `[kontakt@blacklinebarber.pl]` | Плейсхолдер | Не надсилати тестові листи, вказати клієнтський email |
| `OPENING_HOURS` | `[Pn–Pt: 09:00–20:00, Sob: 09:00–16:00]` | Плейсхолдер | Заповнити за графіком конкретного закладу |
| `BOOKSY_URL` | `[BOOKSY_URL]` | Плейсхолдер | Демо-кнопка показує інформаційне повідомлення |
| `INSTAGRAM_URL`| `[INSTAGRAM_URL]` | Плейсхолдер | Посилання на реальний профіль лише з дозволу |
| `PRICING_STATUS`| Ceny orientacyjne / demonstracyjne | Демонстраційне | Обов'язкове попередження про прикладний характер цін |

---

## 1. Header / Навігація

* **Логотип / Назва бренду:** `BLACKLINE BARBER`
* **Дескриптор під логотипом (опціонально для десктопу):** `Męska przestrzeń i styl`
* **Пункти головного меню:**
  1. `O nas` (перехід до `#o-nas`)
  2. `Usługi` (перехід до `#uslugi`)
  3. `Galeria` (перехід до `#galeria`)
  4. `Kontakt` (перехід до `#kontakt`)
* **Головна кнопка дії в навігації (Header CTA):**
  * Текст: `Umów wizytę`
  * Доступність: `aria-label="Umów wizytę w salonie (wersja demonstracyjna)"`

---

## 2. Hero — Головний екран

### 2.1. Елементи першого екрана
* **Короткий надзаголовок (Eyebrow):**  
  `Męska estetyka i rzemiosło`

### 2.2. Затверджений головний заголовок (H1)
* **Затверджений H1:**  
  `Strzyżenie z charakterem.`  
  *(Назва бренду BLACKLINE BARBER винесена в логотип у Header для чистоти композиції)*
* **Альтернативні варіанти з початкового брифу:**  
  - `BLACKLINE BARBER — Męski styl. Bezkompromisowa precyzja.`
  - `Fryzjerstwo męskie z charakterem.`
  - `Precyzyjne cięcie. Spokojna męska przestrzeń.`

> **Вибір:** Затверджено лаконічний H1 `Strzyżenie z charakterem.` згідно з дизайн-специфікацією `DESIGN.md` для збереження легкості та бездоганної мобільної ергономіки.

### 2.3. Варіанти підзаголовка
* **Варіант A (Рекомендований):**  
  `Dopracowane strzyżenie męskie, profesjonalna pielęgnacja brody i klasyczne rzemiosło w nowoczesnym, spokojnym wydaniu.`
* **Варіант B:**  
  `Miejsce stworzone dla mężczyzn, którzy cenią dbałość o detal, konsekwentną jakość i bezbłędną formę.`
* **Варіант C:**  
  `Indywidualne podejście do każdego cięcia i modelowania brody. Poczuj różnicę prawdziwego profesjonalizmu.`

> **Вибір:** Варіант A чітко відповідає на запитання відвідувача за перші 3 секунди: що пропонується і в якому стилі.

### 2.4. Кнопки дії (Hero CTA)
* **Головна кнопка (Primary CTA):**  
  `Umów wizytę`
* **Другорядна кнопка (Secondary CTA):**  
  `Zobacz usługi i cennik` (перехід до `#uslugi`)

---

## 3. O nas

* **Надзаголовок секції:** `O nas`
* **Головний заголовок секції (H2):**  
  `Więcej niż strzyżenie. Świadome rzemiosło.`

* **Основний текст секції (3 абзаци):**
  > **Akapit 1 (Klimat i filozofia):**  
  > BLACKLINE BARBER powstał z myślą o mężczyznach, którzy oczekują czegoś więcej niż pośpiesznej usługi. Tworzymy przestrzeń, w której surowa, minimalistyczna estetyka łączy się ze spokojem i pełnym skupieniem na Twoim wizerunku. Tutaj czas zwalnia, a rzemiosło fryzjerskie wraca do swoich najlepszych korzeni.

  > **Akapit 2 (Precyzja i technika):**  
  > Nie wierzymy w szablonowe rozwiązania ani powtarzalne schematy. Każde strzyżenie oraz modelowanie zarostu dobieramy indywidualnie — uwzględniając rysy twarzy, strukturę włosa i Twój codzienny styl życia. Korzystamy wyłącznie ze sprawdzonych technik barberskich oraz starannie wyselekcjonowanych kosmetyków pielęgnacyjnych.

  > **Akapit 3 (Doświadczenie i dbałość o detal):**  
  > Zadbana fryzura i symetryczna broda to nie kwestia przypadku, lecz precyzji co do milimetra. Dbamy o każdy szczegół wizyty: od rzetelnej konsultacji, przez czyste kontury brzytwy, aż po finalną stylizację. Wychodzisz z pewnością, że Twój wygląd jest dokładnie taki, jak powinien być.

* **Три ключові стовпи бренду (Brand Values):**
  1. **Precyzja geometrii** — Czyste linie karku, dopracowane cieniowanie i kontury wykonane z chirurgiczną dokładnością.
  2. **Spokojna przestrzeń** — Kameralna atmosfera bez pośpiechu, głośnej muzyki i przypadkowego chaosu.
  3. **Najwyższa jakość kosmetyków** — Profesjonalne olejki, pomady i toniki dobrane pod kątem zdrowia włosów i skóry.

---

## 4. Usługi i cennik

* **Надзаголовок секції:** `Oferta`
* **Головний заголовок секції (H2):**  
  `Usługi i cennik`
* **Короткий вступний опис:**  
  `Przejrzyste zasady i pełna dbałość o formę. Wybierz usługę dopasowaną do Twoich potrzeb.`

### Список послуг:

1. **Strzyżenie męskie**
   * **Опис:** Konsultacja wizerunkowa, precyzyjne mycie, strzyżenie nożyczkami oraz maszynką dopasowane do kształtu głowy, czyszczenie karku brzytwą i stylizacja końcowa.
   * **Демонстраційна ціна:** `od 70 zł`
   * **Орієнтовний час (демонстраційний):** `45 min`

2. **Strzyżenie brody**
   * **Опис:** Modelowanie kształtu brody, wyznaczanie ostrych konturów, strzyżenie wąsów, pielęgnacja gorącym ręcznikiem, odżywczy olejek i balsam ochronny.
   * **Демонстраційна ціна:** `od 50 zł`
   * **Орієнтовний час (демонстраційний):** `30 min`

3. **Combo: Włosy + Broda**
   * **Опис:** Kompletny pakiet męskiej pielęgnacji. Pełne strzyżenie fryzury oraz kompleksowe trymowanie i konturowanie brody z rytuałem pielęgnacyjnym w trakcie одной wizyty.
   * **Демонстраційна ціна:** `od 110 zł`
   * **Орієнтовний час (демонстраційний):** `75 min`

4. **Strzyżenie maszynką**
   * **Опис:** Szybkie, równe cięcie одной długości lub precyzyjny fade maszynką z dopracowaniem linii konturowych brzytwą i pielęgnacyjnym myciem głowy.
   * **Демонстраційна ціна:** `od 50 zł`
   * **Орієнтовний час (демонстраційний):** `30 min`

* **Позначення демонстраційного статусу цін (Demo Disclaimer):**  
  *Tekst informacyjny:* `* Ceny oraz czasy trwania usług mają charakter orientacyjny i demonstracyjny. Ostateczny cennik zostanie ustalony dla konkretnego lokalu.`
* **CTA під послугами:**  
  *Кнопка:* `Zarezerwuj wizytę`

---

## 5. Galeria

* **Надзаголовок секції:** `Portfolio`
* **Головний заголовок секції (H2):**  
  `Klimat i rzemiosło w kadrze`
* **Короткий опис:**  
  `Zobacz naszą przestrzeń, dbałość o warsztat fryzjerski oraz klimat codziennej pracy.`

* **Застереження щодо фотографій (Disclaimer):**  
  `* Prezentowane fotografie mają charakter poglądowy i służą celom demonstracyjnym projektu.`

* **Концепція необхідних 8 фотографій (Content Specifications for Phase 6):**
  1. `interior-chair`: Surowe, nowoczesne wnętrze — skórzany fotel barberski na tle ciemnej ściany ze stonowanym oświetleniem. (Alt: `Minimalistyczne wnętrze salonu barberskiego ze skórzanym fotelem`).
  2. `cutting-process`: Zbliżenie na dłonie barbera pracujące nożyczkami i grzebieniem nad precyzyjnym cieniowaniem. (Alt: `Precyzyjne strzyżenie męskich włosów nożyczkami i grzebieniem`).
  3. `beard-trim`: Barber modelujący zarost klienta trymerem z dbałością o linię żuchwy. (Alt: `Modelowanie i trymowanie męskiej brody`).
  4. `razor-shave`: Tradycyjne golenie brzytwą z widoczną pianą lub rytuał z ciepłym ręcznikiem. (Alt: `Klasyczne golenie karku brzytwą`).
  5. `tools-still-life`: Zestaw rzemieślniczych narzędzi — stalowe nożyczki, pędzel z borsuka, maszynka i brzytwa na drewnianym blacie. (Alt: `Zestaw profesjonalnych narzędzi barberskich na blacie`).
  6. `cosmetics`: Butelki z ciemnego szkła z olejkami do brody i pomadami w matowym wykończeniu. (Alt: `Męskie kosmetyki do stylizacji i pielęgnacji zarostu`).
  7. `hairstyle-fade`: Gotowa stylizacja — ujęcie z profilu prezentujące płynne przejście typu skin fade. (Alt: `Męska fryzura z precyzyjnym cieniowaniem typu fade`).
  8. `neckline-detail`: Czysta, geometryczna linia karku i wykończenie fryzury z bliska. (Alt: `Detal wykończenia linii włosów na karku`).

---

## 6. Kontakt

* **Надзаголовок секції:** `Lokalizacja i kontakt`
* **Головний заголовок секції (H2):**  
  `Skontaktuj się z nami`
* **Короткий опис:**  
  `Masz pytania dotyczące usług lub terminów? Skontaktuj się z nami bezpośrednio lub zarezerwuj wizytę online.`

* **Структура інформаційних блоків (з плейсхолдерами):**
  * **Adres:**  
    `[Ulica i numer lokalu]`  
    `[Kod pocztowy, Miasto — np. Warszawa / Kraków]`
  * **Godziny otwarcia:**  
    `Poniedziałek – Piątek: [09:00 – 20:00]`  
    `Sobota: [09:00 – 16:00]`  
    `Niedziela: Zamknięte`
  * **Telefon:**  
    `[+48 XXX XXX XXX]` (oznaczony jako demonstracyjny)
  * **E-mail:**  
    `[kontakt@blacklinebarber.pl]`

* **Назви контактних кнопок:**
  1. `Zadzwoń do nas` (zabezpieczone przed przypadkowym wybieraniem w demo)
  2. `Napisz wiadomość`
  3. `Jak dojechać` (otwiera mapę — w wersji demo neutralny link z informacją)

* **Повідомлення про статус секції (Demo Notice):**  
  `Informacja demonstracyjna: Powyższe dane kontaktowe oraz lokalizacja są elementami przykładowymi szablonu. W docelowej witrynie zostaną zastąpione rzeczywistymi danymi salonu.`

---

## 7. Booksy / Інтеграція бронювання

* **Основний заклик до дії (Primary Button):**  
  `Umów wizytę`
* **Розширений заклик для карток/секцій (Alt Button):**  
  `Zarezerwuj termin online`

* **Повідомлення для користувача в демонстраційному режимі (Demo Modal / Notification Toast):**
  > **Tytuł komunikatu:** `Projekt demonstracyjny`  
  > **Treść:** `System bezpośredniej rezerwacji wizyt online (Booksy) jest nieaktywny w trybie demonstracyjnym. W wersji produkcyjnej ten przycisk przekierowuje bezpośrednio do zweryfikowanego profilu salonu w serwisie Booksy, umożliwiając natychmiastowy wybór terminu i barbera.`  
  > **Przycisk zamknięcia:** `Rozumiem`

---

## 8. Фінальний CTA (Przed stopką)

* **Заголовок секції (H2):**  
  `Gotowy na dopracowany styl?`
* **Підзаголовок:**  
  `Zadbaj o swój wizerunek z pomocą profesjonalistów. Zarezerwuj dogodny termin i przekonaj się, czym jest bezkompromisowa precyzja.`
* **Кнопка дії:**  
  `Umów wizytę`

---

## 9. Footer (Stopka strony)

* **Логотип / Назва бренду:** `BLACKLINE BARBER`
* **Короткий опис бренду:**  
  `Nowoczesne męskie fryzjerstwo, tradycyjne rzemiosło i przestrzeń stworzona do relaksu w surowym, minimalistycznym klimacie.`
* **Швидка навігація (Linki w stopce):**
  * `O nas`
  * `Usługi i cennik`
  * `Galeria prac`
  * `Kontakt i godziny`
* **Соціальні мережі (Placeholder):**  
  * `Instagram: [@blacklinebarber]` (poglądowy)
  * `Facebook: [/blacklinebarber]` (poglądowy)
* **Юридичне повідомлення про демонстрацію (Demo Legal Disclaimer):**  
  `© 2026 BLACKLINE BARBER. Wszelkie prawa zastrzeżone. Witryna powstała wyłącznie jako projekt koncepcyjny i demonstracyjny do portfolio technicznego. Nie stanowi oferty handlowej w rozumieniu przepisów prawa i nie reprezentuje zarejestrowanej działalności gospodarczej.`
* **Повідомлення про авторські права на фото:**  
  `Materiały graficzne i fotografie wykorzystane w projekcie pochodzą z bezpłatnych i licencjonowanych zasobów demonstracyjnych i mają charakter wyłącznie poglądowy.`

---

## 10. Метадані SEO та Open Graph

* **Title сторінки (`<title>`):**  
  `BLACKLINE BARBER — Męskie strzyżenie i pielęgnacja brody | Projekt demonstracyjny`
* **Meta Description:**  
  `Odkryj BLACKLINE BARBER — demonstracyjny serwis nowoczesnego męskiego fryzjerstwa. Precyzyjne strzyżenie włosów, stylizacja brody i męska estetyka w minimalistycznym wydaniu.`
* **Meta Keywords (довідково):**  
  `barber, fryzjer męski, strzyżenie męskie, pielęgnacja brody, combo włosy broda, salon barberski, styl męski`
* **Open Graph Title (`og:title`):**  
  `BLACKLINE BARBER — Nowoczesny styl i precyzja męskiego rzemiosła`
* **Open Graph Description (`og:description`):**  
  `Dopracowane strzyżenie męskie, pielęgnacja brody i klasyczne rzemiosło w minimalistycznym salonie barberskim. Projekt demonstracyjny.`
* **Open Graph Locale:** `pl_PL`
* **Open Graph Type:** `website`
