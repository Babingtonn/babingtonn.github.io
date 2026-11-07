# IMAGE_PLAN.md — План та каталог фотографій BLACKLINE BARBER

> **Проєкт:** BLACKLINE BARBER — демонстраційний односторінковий сайт польського барбершопу  
> **Етап:** 6Б — Інтеграція та оптимізація фотографій  
> **Стиль:** Dark Premium + Modern Minimal (глибокий вугільний `#111111`, графіт `#1A1A1A`, теплий бурштиновий акцент `#C5A059`, кінематографічне світло chiaroscuro)  
> **Статус:** Виконано та інтегровано в розмітку `index.html`

---

## 1. Загальні технічні стандарти та оптимізація

1. **Формат:** Сучасний високоефективний формат **WebP** (стиснення з параметром якості `q=83-84`).
2. **Пропорція кадру:** Суворо вертикальна пропорція **4:5** (аспект 0.80) для всіх зображень Hero та галереї.
3. **Роздільна здатність:**
   - **Hero:** `1000 × 1250 px` (забезпечує чіткість 2x DPR на ретина-дисплеях).
   - **Галерея (8 слотів):** `640 × 800 px` (забезпечує бездоганну чіткість при адаптивній сітці 2–4 колонки).
4. **Вага файлів:** Загальна вага всіх 9 зображень становить лише **~388 KB** (в середньому 20–64 KB на файл), що гарантує миттєве завантаження навіть у мобільних мережах 3G/4G.
5. **Продуктивність LCP / Lazy loading:**
   - **Hero:** прямий тег `<img>` з пріоритетним завантаженням `fetchpriority="high"`, без `loading="lazy"` (не блокує Largest Contentful Paint).
   - **Галерея:** `loading="lazy"` та `decoding="async"` для відкладеного завантаження під час прокручування.
   - Атрибути `width` та `height` задані явно для запобігання Layout Shift (CLS).
6. **Доступність (a11y):** Кожне фото має точний описовий `alt` польською мовою.

---

## 2. Головна фотографія першого екрана (Hero Media)

* **Файл:** `assets/images/hero-cutting.webp` (Оригінал: `assets/images/original/hero-cutting.jpg`)
* **Розмір:** `1000 × 1250 px`, вага: **50.5 KB**
* **Тематика:** Прецизійна робота ножицями у фокусному світлі
* **Автор:** Nate Johnston ([@natejohnston](https://unsplash.com/@natejohnston))
* **Джерело:** [Unsplash (ID: tgPrIYnW3g4)](https://unsplash.com/photos/a-man-cutting-another-mans-hair-with-a-pair-of-scissors-tgPrIYnW3g4)
* **Ліцензія:** [Unsplash License](https://unsplash.com/license) — вільне комерційне використання
* **HTML розмітка:**
  ```html
  <img src="assets/images/hero-cutting.webp" 
       alt="Barber precyzyjnie strzyże męskie włosy nożyczkami w stonowanym oświetleniu salonu" 
       width="1000" 
       height="1250" 
       fetchpriority="high">
  ```
* **Візуальна узгодженість:** Темний матовий фон кадру плавно перетікає в палітру сайту (`--color-bg: #111111`), а золотисті відблиски світла на ножицях та пальцях майстра підтримують акцентний тон `--color-accent: #C5A059`.

---

## 3. Каталог 8 фотографій портфоліо та атмосфери (Galeria)

| Слот | Файл | Розмір | Вага | Сюжет / Опис | Автор і джерело | Ліцензія | Польський alt-текст |
|---|---|---|---|---|---|---|---|
| **Foto 1** | `gallery-01-interior.webp` | 640×800 | 45.1 KB | Інтер'єр та шкіряні крісла | Nick Demou ([Pexels: 1319460](https://www.pexels.com/photo/1319460/)) | [Pexels License](https://www.pexels.com/license/) | `Nowoczesne, minimalistyczne fotele barberskie w przestronnym wnętrzu salonu` |
| **Foto 2** | `gallery-02-cutting.webp` | 640×800 | 25.6 KB | Стрижка ножицями та гребінцем | cottonbro studio ([Pexels: 3998417](https://www.pexels.com/photo/3998417/)) | [Pexels License](https://www.pexels.com/license/) | `Precyzyjne cięcie męskich włosów nożyczkami i grzebieniem` |
| **Foto 3** | `gallery-03-beard.webp` | 640×800 | 32.6 KB | Моделювання та контур бороди | cottonbro studio ([Pexels: 3998428](https://www.pexels.com/photo/3998428/)) | [Pexels License](https://www.pexels.com/license/) | `Barber trymuje i modeluje linię męskiego zarostu` |
| **Foto 4** | `gallery-04-shave.webp` | 640×800 | 19.8 KB | Традиційне гоління бритвой | cottonbro studio ([Pexels: 3998429](https://www.pexels.com/photo/3998429/)) | [Pexels License](https://www.pexels.com/license/) | `Tradycyjny rytuał golenia karku i zarostu brzytwą z ciepłą pianą` |
| **Foto 5** | `gallery-05-tools.webp` | 640×800 | 62.8 KB | Професійні інструменти на брусі | cottonbro studio ([Pexels: 3998403](https://www.pexels.com/photo/3998403/)) | [Pexels License](https://www.pexels.com/license/) | `Profesjonalne stalowe nożyczki, maszynka i brzytwa barberska na ciemnym blacie` |
| **Foto 6** | `gallery-06-cosmetics.webp` | 640×800 | 46.3 KB | Косметика у темному склі | cottonbro studio ([Pexels: 3998421](https://www.pexels.com/photo/3998421/)) | [Pexels License](https://www.pexels.com/license/) | `Męskie kosmetyki do pielęgnacji brody i włosów w buteleczkach z ciemnego szkła` |
| **Foto 7** | `gallery-07-fade.webp` | 640×800 | 63.5 KB | Зачіска з градієнтом skin fade | Marek Studzinski ([Pexels: 3065209](https://www.pexels.com/photo/3065209/)) | [Pexels License](https://www.pexels.com/license/) | `Męska fryzura z płynnym cieniowaniem typu skin fade i dopracowaną linią konturu` |
| **Foto 8** | `gallery-08-neckline.webp` | 640×800 | 41.7 KB | Чиста лінія окантовки бритвой | Ivan Samkov ([Pexels: 12797274](https://www.pexels.com/photo/12797274/)) | [Pexels License](https://www.pexels.com/license/) | `Detal czystego wykończenia linii włosów na karku wykonany brzytwą` |

---

## 4. Демонстраційний статус контенту

Всі розміщені світлини супроводжуються видимим роз'ясненням у розмітці сайту:
```html
<p class="disclaimer">
  <small>* Prezentowane fotografie mają charakter poglądowy i służą celom demonstracyjnym projektu.</small>
</p>
```
Це гарантує юридичну та етичну прозорість демонстраційного портфоліо-проєкту.
