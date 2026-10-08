# 🎬 EditForge: Personal Video Editing Gym & Skill Progression Hub

> **Osobista platforma do metodycznego rozwoju umiejętności montażu wideo**, zaprojektowana dla twórców przechodzących z aplikacji mobilnych (**CapCut**, **Alight Motion**) do profesjonalnego środowiska desktopowego (**Adobe Premiere Pro**, **Adobe After Effects**).

![License](https://img.shields.io/badge/license-MIT-blue)
![Hosting](https://img.shields.io/badge/hosting-GitHub%20Pages-brightgreen)
![AI](https://img.shields.io/badge/AI-Multimodal%20Video%20Audit-purple)

---

## 🌟 Dlaczego ten projekt powstał?

Większość początkujących edytorów montuje chaotycznie lub polega wyłącznie na gotowych szablonach i presetach. **EditForge** zamienia proces nauki w ustrukturyzowany trenażer (*deliberate practice*), który:
1. **Daje konkretne wyzwania techniczne** zamiast pustej kartki.
2. **Uczy uniwersalnych prawideł kina i psychoakustyki** (krzywe prędkości Béziera, cięcia J-Cut/L-Cut, warstwowanie audio).
3. **Buduje most pojęciowy Mobile ➔ PC (The Rosetta Stone)** – ułatwiając bezstresową przesiadkę na Premiere i After Effects.
4. **Analizuje montaż przez Multimodal AI** – oceniając nadesłane pliki MP4 klatka po klatce.
5. **Tworzy weryfikowalny Dziennik Treningowy (Audit Log)** – twardy dowód dyscypliny i samorozwoju na rozmowy rekrutacyjne i praktyki.

---

## 🚀 Główne Moduły

### 🎯 1. Baza 20 Zaawansowanych Zadań (5 Filarów)
* **🎧 Sound Design & Rytm:** Złożone uderzenia (Sub, Transient, Riser, Tail), cięcia J-Cut/L-Cut, mikro-foley.
* **📈 Motion Physics & Graph Editor:** Płynność bezwładności (Overshoot, S-Curve), Whip Pan, Speed Ramping.
* **✂️ Pacing & Storytelling:** Zatrzymanie uwagi w 3 sekundy (Hook 9:16), Match Cut, kierowanie wzrokiem widza.
* **🎨 Compositing & Styl:** Maskowanie za obiektem w kadrze, animowany tekst za postacią, halacja taśmy filmowej.
* **🖥️ The Desktop Bridge:** Szybki montaż na osi czasu Premiere wyłącznie klawiaturą (J-K-L, Q-W), organizacja kompozycji w After Effects.

### 🧠 2. AI Video Reviewer (Lead Editor)
* Upuść plik wideo (`.mp4`, `.mov`) metodą Drag & Drop.
* Model analizuje cięcia, timing audio i bezpieczeństwo stref mobilnych (Safe Zones).
* Otrzymujesz ocenę punktową (0–100) oraz profesjonalne uwagi Starszego Montażysty.

### 🌉 3. The Rosetta Stone (Most Mobile ➔ PC)
* Interaktywne zestawienie: funkcja w **Alight Motion / CapCut** ➔ bezpośredni odpowiednik w **After Effects / Premiere Pro**.

### 📊 4. Dziennik Treningowy (Auditable Logbook)
* Historia ukończonych zadań, zapisany czas, linki do wyrenderowanych plików i autorefleksja.
* Opcja eksportu całego raportu do pliku `.md` do pokazania rekruterowi.

---

## 🛠️ Uruchomienie na GitHub Pages (Krok po Kroku)

Projekt jest w 100% statyczny (HTML5, Tailwind CSS, Vanilla JS) – nie wymaga instalacji Node.js ani skomplikowanego builda.

1. **Zainicjalizuj repozytorium w tym folderze:**
   ```bash
   git init
   git add .
   git commit -m "feat: Initial release of EditForge"
   ```

2. **Połącz ze swoim kontem na GitHubie:**
   * Załóż nowe publiczne repozytorium na [github.com/new](https://github.com/new) o nazwie np. `editforge`.
   * Wpisz w terminalu:
   ```bash
   git remote add origin https://github.com/TWOJ_NICK/editforge.git
   git branch -M main
   git push -u origin main
   ```

3. **Włącz darmowy hosting GitHub Pages:**
   * W repozytorium na GitHubie wejdź w: **Settings** ➔ **Pages** (w menu po lewej).
   * Pod nagłówkiem **Build and deployment** / **Source** wybierz `Deploy from a branch`.
   * Wybierz gałąź `main` i folder `/ (root)`, a następnie kliknij **Save**.
   * Po 1-2 minutach Twoja strona będzie dostępna na: `https://TWOJ_NICK.github.io/editforge`!

---

## 🔑 Konfiguracja Opcjonalna (Gemini AI & Supabase)

Kliknij ikonę **Ustawień (⚙️)** w nagłówku strony:
* **Google Gemini API:** Pobierz darmowy klucz na [aistudio.google.com](https://aistudio.google.com/app/apikey) i wklej go, aby odblokować pełną analizę wideo AI.
* **Supabase:** Jeśli chcesz synchronizować postępy między wieloma urządzeniami, podaj URL i Anon Key swojego darmowego projektu w Supabase.

---

*Stworzone z pasją do montażu wideo i ciągłego rozwoju.*
