// EditForge Master Quest Database
// 20 Professional Video Editing Challenges across 5 Pillars

const EDITFORGE_QUESTS = [
  // ================= FILAR 1: SOUND DESIGN & RYTM =================
  {
    id: "SND-01",
    title: "The 4-Layer Impact Rule",
    subtitle: "Architektura Uderzenia i Składowe Częstotliwości",
    pillar: "sound",
    pillarName: "Sound Design & Rytm",
    pillarIcon: "volume-2",
    difficulty: "Intermediate",
    targetTools: ["CapCut", "Alight Motion", "Premiere Pro", "After Effects"],
    estimatedMinutes: 20,
    xpReward: 150,
    objective: "Stworzenie jednego potężnego momentu uderzenia/przejścia w wideo przy użyciu minimum 4 odrębnych, precyzyjnie zbalansowanych warstw audio.",
    constraints: [
      "Zero gotowych, scalonych efektów 'Boom' lub 'Drop' z bibliotek szablonów.",
      "Każda warstwa musi pełnić inną rolę częstotliwościową (Sub, Transient, Riser, Reverb Tail).",
      "Ręczny balans poziomów głośności (gain staging) – brak przesterowania (clippingu)."
    ],
    layersRequired: [
      "Sub-Bass / 808 Drop (30-80 Hz) dla fizycznego uderzenia",
      "Transient Strike (średnie tony) – dźwięk metalu, ciosu lub bębna",
      "Pre-Whoosh / Riser (100-200ms przed uderzeniem) dla budowy napięcia",
      "Reverb Tail (1-2s wybrzmienia) budujący przestrzeń sceniczną"
    ],
    filmTheory: "Mózg ludzki nie postrzega dźwięku jako potężny bez kontrastu dynamicznego (krótka mikrocisza przed uderzeniem) oraz pełnego spektrum częstotliwościowego. Pojedynczy sampel brzmi płasko; nakładanie warstw tworzy wrażenie kinowej masywności.",
    mobileTips: "W CapCut lub Alight Motion dodaj 4 niezależne ścieżki audio. Użyj opcji Fade In dla risera oraz Fade Out dla ogona pogłosu. Obniż główny sub-bass o -3dB, aby nie przesterować głośnika telefonu.",
    desktopBridge: {
      tool: "Premiere Pro & After Effects",
      technique: "Essential Sound Panel & Parametric EQ",
      tip: "W Premiere Pro oznacz klipy jako SFX. Użyj 'Audio Track Mixer', aby nałożyć kompresor i limitować szczyty na -1 dB. W After Effects użyj skrótu 'L-L' na warstwie audio, by zobaczyć falę dźwiękową i dopasować keyframy."
    },
    aiReviewCriteria: {
      soundAnalysis: "Wykrycie narastania fali (riser) tuż przed uderzeniem oraz płynnego wybrzmienia (tail).",
      syncCheck: "Zgodność klatki cięcia obrazu z wierzchołkiem fali dźwiękowej (transientem).",
      clippingDetection: "Sprawdzenie, czy szczyty audio nie są spłaszczone przez przester."
    }
  },
  {
    id: "SND-02",
    title: "Audio-Lead Transition (J-Cut & L-Cut)",
    subtitle: "Płynny Montaż Oparty na Słuchu",
    pillar: "sound",
    pillarName: "Sound Design & Rytm",
    pillarIcon: "volume-2",
    difficulty: "Intermediate",
    targetTools: ["CapCut", "Premiere Pro"],
    estimatedMinutes: 25,
    xpReward: 160,
    objective: "Zmontowanie 15-sekundowej sceny z 3 ujęciami, w której każde przejście wizualne jest wyprzedzone (J-Cut) lub przedłużone (L-Cut) przez ścieżkę dźwiękową.",
    constraints: [
      "Całkowity zakaz twardych cięć (gdzie obraz i dźwięk zmieniają się w tej samej klatce).",
      "Zero sztucznych przejść wideo (brak whipów, zoomów, glitchy) – montaż ma opierać się wyłącznie na cięciu i dźwięku.",
      "Przesunięcie audio musi wynosić minimum 6 do 14 klatek (150–400 ms)."
    ],
    filmTheory: "Percepcja słuchowa człowieka jest szybsza niż wzrokowa. Usłyszenie dźwięku nowego ujęcia ułamek sekundy przed jego zobaczeniem przygotowuje korę mózgową, sprawiając, że zmiana sceny wydaje się w 100% płynna i organiczna.",
    mobileTips: "W CapCut kliknij klip wideo i wybierz 'Extract Audio'. Przeciągnij lewy koniec powstałego paska dźwięku pod poprzedni klip wideo, tworząc klasyczny J-Cut.",
    desktopBridge: {
      tool: "Premiere Pro",
      technique: "Alt-Click Slip & Ripple Edit",
      tip: "Przytrzymaj klawisz 'Alt' i kliknij dolną belkę audio klipu, aby przesuwać lub rozciągać dźwięk niezależnie od obrazu bez rozgrupowywania (Unlink) ścieżek."
    },
    aiReviewCriteria: {
      soundAnalysis: "Identyfikacja punktów wejścia audio wyprzedzających cięcie wideo o 150-350 ms.",
      naturalPacing: "Płynność dialogu/atmosfery bez gwałtownych skoków poziomu tła (room tone)."
    }
  },
  {
    id: "SND-03",
    title: "Micro-Foley & World Building",
    subtitle: "Potęga Niewidzialnych Dźwięków",
    pillar: "sound",
    pillarName: "Sound Design & Rytm",
    pillarIcon: "volume-2",
    difficulty: "Advanced",
    targetTools: ["CapCut", "Alight Motion", "Premiere Pro"],
    estimatedMinutes: 30,
    xpReward: 180,
    objective: "Pobierz niemy klip z pojedynczą postacią wykonującą czynność (np. picie kawy, zakładanie kurtki, pisanie na klawiaturze). Zbuduj całe udźwiękowienie od zera, dodając minimum 5 mikro-dźwięków Foley.",
    constraints: [
      "Zakaz głośnej muzyki w tle, która maskowałaby brak detali (muzyka może być max -22 dB lub brak).",
      "Każdy mikro-ruch (szelest tkaniny, stuknięcie ceramiki, oddech) musi mieć swój zsynchronizowany sampel."
    ],
    filmTheory: "Foley to sztuka dodawania realistycznych dźwięków codziennych. Widz nie zwraca na nie bezpośredniej uwagi, ale ich brak natychmiast sprawia, że film wydaje się sztuczny i amatorski.",
    mobileTips: "Znajdź paczkę dźwięków typu 'cloth rustle' i 'foley items'. Wytnij ułamki sekund i dopasuj precyzyjnie do klatki w Alight Motion na powiększonej osi czasu.",
    desktopBridge: {
      tool: "Premiere Pro",
      technique: "Subframe Audio Editing",
      tip: "W Premiere Pro kliknij prawym na nagłówek osi czasu i włącz 'Show Audio Time Units'. Możesz przesuwać dźwięk z dokładnością do 1/48000 sekundy, a nie tylko pełnej klatki!"
    },
    aiReviewCriteria: {
      syncCheck: "Precyzja mikro-uderzeń w klatkach kontaktu dłoni/przedmiotu.",
      ambienceCheck: "Obecność szumu tła eliminującego martwą cyfrową ciszę."
    }
  },
  {
    id: "SND-04",
    title: "Off-Beat Sync & Rhythm Disruption",
    subtitle: "Ucieczka od Schematu Cięcia na Każdy Beat",
    pillar: "sound",
    pillarName: "Sound Design & Rytm",
    pillarIcon: "volume-2",
    difficulty: "Advanced",
    targetTools: ["CapCut", "Premiere Pro"],
    estimatedMinutes: 25,
    xpReward: 175,
    objective: "Montaż dynamicznego 10-sekundowego materiału do utworu z wyraźnym bitem, w którym cięcia celowo NIE następują na każdym uderzeniu stopy.",
    constraints: [
      "Zastosowanie zasady '3 szybkie akcenty na synkopie + 1 długie ujęcie oddechu na 2 takty'.",
      "Zakaz jednostajnego metronomu (nie możesz ciąć co równe 0.5 sekundy)."
    ],
    filmTheory: "Cięcie w schemacie 1:1 z perkusją po kilku sekundach nudzi ludzki mózg. Prawdziwa dynamika powstaje z kontrastu: nagłe przyspieszenie, a potem niespodziewane zawieszenie akcji na pięknym kadrze.",
    mobileTips: "Zamiast włączać 'Auto Beat' w CapCut i ciąć na każdej żółtej kropce, postaw ręczne znaczniki tylko na melodię i partie wokalne.",
    desktopBridge: {
      tool: "Premiere Pro",
      technique: "Sequence Markers (Skrót M)",
      tip: "Wciskaj 'M' w trakcie odtwarzania utworu ze spacją, celując w melodie i werbel zamiast stopy perkusji."
    },
    aiReviewCriteria: {
      paceVariance: "Zróżnicowanie długości klipów – odrzucenie powtarzalnych, identycznych interwałów czasowych."
    }
  },

  // ================= FILAR 2: MOTION & GRAPH EDITOR =================
  {
    id: "MOT-01",
    title: "The Inertia & Bounce Curve",
    subtitle: "Fizyka Bezwładności w Graph Editorze",
    pillar: "motion",
    pillarName: "Motion Physics & Graph",
    pillarIcon: "activity",
    difficulty: "Intermediate",
    targetTools: ["Alight Motion", "After Effects"],
    estimatedMinutes: 30,
    xpReward: 160,
    objective: "Animacja wlotu napisu lub kształtu na ekran, który lekko przekracza punkt docelowy (overshoot), odbija się i miękko osiada.",
    constraints: [
      "Zero gotowych szablonów animacji (Bounce Presets).",
      "Cały ruch wyrysowany w Graph Editorze za pomocą 3 klatek kluczowych i krzywych prędkości.",
      "Odbicie nie może przekraczać 8% docelowej skali/pozycji."
    ],
    filmTheory: "Zasada bezwładności Newtona: obiekty posiadające masę nie zatrzymują się w próżni jak skała. Dodanie subtelnego 'overshoot' natychmiast ożywia animację, nadając jej organiczny, fizyczny charakter.",
    mobileTips: "W Alight Motion przejdź do Move & Transform, postaw keyframy dla Position. Otwórz ikonę Graph pod osiami i uformuj krzywą S-curve z lekkim wybrzuszeniem ponad górną krawędź.",
    desktopBridge: {
      tool: "After Effects",
      technique: "Speed Graph & Value Graph Manipulators",
      tip: "W After Effects naciśnij 'F9' (Easy Ease), wejdź w Graph Editor. Kliknij prawym i wybierz 'Edit Value Graph', aby wyciągnąć wąsy Béziera poza linię poziomą lub wpisać proste wyrażenie sprężystości."
    },
    aiReviewCriteria: {
      motionCurves: "Weryfikacja krzywej deceleracji (wykrycie miękkiego hamowania zamiast gwałtownego uderzenia o krawędź)."
    }
  },
  {
    id: "MOT-02",
    title: "Directional Whip & Momentum Conservation",
    subtitle: "Zasada Zachowania Pędu w Przejściach",
    pillar: "motion",
    pillarName: "Motion Physics & Graph",
    pillarIcon: "activity",
    difficulty: "Advanced",
    targetTools: ["Alight Motion", "After Effects"],
    estimatedMinutes: 35,
    xpReward: 190,
    objective: "Ręczne zbudowanie przejścia Whip Pan łączącego ujęcie A i ujęcie B z zachowaniem idealnej ciągłości kierunku i prędkości obrotu/przesunięcia.",
    constraints: [
      "Zakaz używania gotowego przejścia 'Whip' lub 'Rotate' z menu aplikacji.",
      "Klip A musi kończyć się z taką samą prędkością kątową, z jaką rozpoczyna się klip B.",
      "Obowiązkowe włączenie Motion Blur (rozmycia w ruchu)."
    ],
    filmTheory: "Zasada zachowania pędu w montażu (Conservation of Momentum). Jeśli oko widza śledzi ruch z prędkością 1500 px/s w prawo, jakiekolwiek zwolnienie na punkcie cięcia psuje iluzję płynności.",
    mobileTips: "W Alight Motion stwórz 'Null Layer' (warstwę nadrzędną) lub zlinkuj warstwy. Dodaj efekt 'Motion Blur' i ustaw go na wartość 1.0 - 1.5.",
    desktopBridge: {
      tool: "After Effects",
      technique: "Null Object & Layer Motion Blur Switch",
      tip: "Utwórz Null Object (`Ctrl+Alt+Shift+Y`), podepnij pod niego obie warstwy za pomocą lasso (Pick Whip). Włącz przełącznik Motion Blur na osi czasu oraz dla kompozycji."
    },
    aiReviewCriteria: {
      vectorContinuity: "Weryfikacja wektora przesunięcia pikseli klatka przed cięciem vs klatka po cięciu."
    }
  },
  {
    id: "MOT-03",
    title: "Kinetic Speed Ramping",
    subtitle: "Mistrzostwo Krzywych Czasu",
    pillar: "motion",
    pillarName: "Motion Physics & Graph",
    pillarIcon: "activity",
    difficulty: "Advanced",
    targetTools: ["CapCut", "Alight Motion", "Premiere Pro"],
    estimatedMinutes: 40,
    xpReward: 200,
    objective: "Stworzenie 6-sekundowego klipu ze speed rampem: płynne przejście z 1x do spowolnienia 0.2x (Slow-mo), eksplozja prędkości do 6x na cięciu i powrót do 1x.",
    constraints: [
      "Brak skokowych zmian klatkowych (płynna krzywa interpolacji prędkości).",
      "Punkt najszybszego przyspieszenia musi pokrywać się z kulminacją ruchu postaci lub uderzeniem dźwięku."
    ],
    filmTheory: "Speed Ramping manipuluje percepcją czasu widza. Skupia uwagę na detalu w powolnym fragmencie, a następnie gwałtownie przyspiesza, by wywołać zastrzyk dopaminy.",
    mobileTips: "W CapCut wybierz 'Speed' -> 'Curve' -> 'Custom'. Rozsuń kropki wykresu tak, by przejścia były gładkimi łukami, a nie ostrymi kątami.",
    desktopBridge: {
      tool: "Premiere Pro",
      technique: "Time Remapping & Bezier Handles",
      tip: "Kliknij prawym na ikonę 'fx' na klipie w Premiere -> Time Remapping -> Speed. Przytrzymaj `Ctrl` i kliknij linię, by dodać keyframe. Rozsuń połówki znacznika i obróć niebieski uchwyt Béziera dla gładkości."
    },
    aiReviewCriteria: {
      framePacing: "Brak zacięć (stutter) i artefaktów klatek przy skrajnych wartościach spowolnienia."
    }
  },
  {
    id: "MOT-04",
    title: "Parallax 2.5D Depth Simulation",
    subtitle: "Głębia Przestrzenna ze Statycznego Zdjęcia",
    pillar: "motion",
    pillarName: "Motion Physics & Graph",
    pillarIcon: "activity",
    difficulty: "Advanced",
    targetTools: ["Alight Motion", "After Effects"],
    estimatedMinutes: 45,
    xpReward: 220,
    objective: "Rozdzielenie jednego płaskiego zdjęcia na 3 plany (Pierwszy plan, Postać, Tło) i zanimowanie kamery tak, by powstał realistyczny efekt paralaksy.",
    constraints: [
      "Przedmioty bliżej kamery muszą poruszać się szybciej niż tło (zgodnie z optyką).",
      "Wypełnienie dziury w tle za postacią (Inpainting / rozmycie tła)."
    ],
    filmTheory: "Paralaksa to różnica w pozornym przesunięciu obiektu względem tła przy ruchu obserwatora. Jest kluczowym wskaźnikiem trójwymiarowości dla ludzkiego oka.",
    mobileTips: "Wytnij postać w Alight Motion maską wektorową. Pod spód wklej powiększone tło. Zanimuj skalę i pozycję obu warstw z różnymi prędkościami.",
    desktopBridge: {
      tool: "After Effects",
      technique: "3D Layers & Camera Tool",
      tip: "Włącz przełącznik 3D (kostkę) dla warstw. Odsuń warstwę tła w osi Z (`Z-space: 800px`), a warstwę pierwszego planu przybliż (`Z-space: -300px`). Dodaj kamerę 35mm i zanimuj jej pozycję."
    },
    aiReviewCriteria: {
      parallaxRatios: "Sprawdzenie, czy prędkość przemieszczania warstw zewnętrznych jest proporcjonalna do ich symulowanej odległości."
    }
  },

  // ================= FILAR 3: PACING & STORYTELLING =================
  {
    id: "PAC-01",
    title: "The 3-Second Hook Architecture",
    subtitle: "Zatrzymanie Palca w Formacie 9:16",
    pillar: "pacing",
    pillarName: "Pacing & Storytelling",
    pillarIcon: "scissors",
    difficulty: "Intermediate",
    targetTools: ["CapCut", "Premiere Pro"],
    estimatedMinutes: 30,
    xpReward: 160,
    objective: "Zbudowanie pierwszych 3 sekund wideo w pionie (Shorts/Reels/TikTok), które zatrzymują przewijanie palcem widza.",
    constraints: [
      "Ruch kamery lub obiektu obecny już w klatce 0:00:00 (zero statycznego czekania).",
      "Dźwiękowy bodziec w pierwszych 50 ms (natychmiastowy SFX lub wokal).",
      "Zmiana perspektywy lub wielkości planu przed upływem 1.4 sekundy."
    ],
    filmTheory: "W erze krótkich form wideo średni czas podjęcia decyzji przez widza o przewinięciu wynosi 1.8 sekundy. Jeśli pierwsze 45 klatek nie dostarczy bodźca wizualnego i dźwiękowego, materiał traci 70% zasięgu.",
    mobileTips: "W CapCut zacznij klip z lekkim cyfrowym zoomem w przód (Keyframe Scale od 110% do 100%) i natychmiastowym riserem lub stuknięciem basu.",
    desktopBridge: {
      tool: "Premiere Pro",
      technique: "Scale Punch-in & Adjustment Layer Crop",
      tip: "Użyj cięcia na ujęciu mówcy i powiększ drugi fragment o 15% (Scale 115%), centrując oczy w tej samej linii – to klasyczny podcastowy punch-in."
    },
    aiReviewCriteria: {
      hookActivity: "Pomiar aktywności pikseli i spektrogramu audio w przedziale 0.0s – 1.5s."
    }
  },
  {
    id: "PAC-02",
    title: "The Invisible Match Cut",
    subtitle: "Płynność Oparta na Geometrii Kadru",
    pillar: "pacing",
    pillarName: "Pacing & Storytelling",
    pillarIcon: "scissors",
    difficulty: "Advanced",
    targetTools: ["CapCut", "Premiere Pro"],
    estimatedMinutes: 35,
    xpReward: 190,
    objective: "Połączenie dwóch zupełnie różnych ujęć (np. koło samochodu i zegarek, oko i obiektyw) za pomocą idealnej zbieżności geometrycznej w punkcie cięcia.",
    constraints: [
      "Zakaz jakichkolwiek rozmyć, przejść typu fade, whip czy glitch.",
      "Cięcie musi być czystym twardym cięciem (Hard Cut).",
      "Środek geometryczny dopasowanych elementów musi pokrywać się z dokładnością do kilku pikseli."
    ],
    filmTheory: "Match Cut wykorzystuje retencję siatkówkową oka. Jeśli punkt skupienia wzroku nie zmienia współrzędnych X/Y, mózg postrzega zmianę otoczenia jako poetycką i logiczną kontynuację.",
    mobileTips: "Włącz siatkę pomocniczą (Grid) w CapCut, aby dopasować położenie środka obu obiektów przed wykonaniem cięcia.",
    desktopBridge: {
      tool: "Premiere Pro",
      technique: "Guides & Safe Margins Alignment",
      tip: "Włącz 'Safe Margins' lub przeciągnij niebieską linię prowadzącą (Guide) z linijki na punkt centralny. Użyj 'Effect Controls -> Position', by spasować ujęcia co do piksela."
    },
    aiReviewCriteria: {
      focalPointMatch: "Porównanie środka ciężkości kompozycji klatki przed cięciem i klatki po cięciu."
    }
  },
  {
    id: "PAC-03",
    title: "Eye-Tracking & Visual Centering",
    subtitle: "Kierowanie Spojrzeniem Widza",
    pillar: "pacing",
    pillarName: "Pacing & Storytelling",
    pillarIcon: "scissors",
    difficulty: "Intermediate",
    targetTools: ["CapCut", "Premiere Pro"],
    estimatedMinutes: 25,
    xpReward: 150,
    objective: "Seria 4 szybkich cięć (każde poniżej 0.8 sekundy), w których punkt skupienia wzroku widza pozostaje w tym samym wyznaczonym okręgu ekranu.",
    constraints: [
      "Widz nie może mieć potrzeby 'skakania wzrokiem' po rogach ekranu.",
      "Tempo montażu szybkie, ale bez wywoływania zmęczenia poznawczego."
    ],
    filmTheory: "Montaż akcji w Hollywood (np. Mad Max: Fury Road) trzyma punkt uwagi dokładnie w centrum kadru na każdym cięciu. Dzięki temu widz może odbierać cięcia co 12 klatek bez poczucia chaosu.",
    mobileTips: "Użyj kadrowania w CapCut, aby przesunąć twarze lub obiekty w identyczny centralny punkt we wszystkich 4 ujęciach.",
    desktopBridge: {
      tool: "Premiere Pro",
      technique: "Crosshair Guides & Anchor Point Centering",
      tip: "Ustaw celownik w środku kadru. Przesuwaj klipy za pomocą narzędzia Motion z włączoną przezroczystością 50% (Opacity) do podejrzenia poprzedniej klatki."
    },
    aiReviewCriteria: {
      eyeFatigueScore: "Analiza dyspersji ogniskowej pomiędzy sąsiadującymi scenami."
    }
  },
  {
    id: "PAC-04",
    title: "The Tension & Release Curve",
    subtitle: "Dynamika Sceny: Staccato do Legato",
    pillar: "pacing",
    pillarName: "Pacing & Storytelling",
    pillarIcon: "scissors",
    difficulty: "Master",
    targetTools: ["CapCut", "Premiere Pro"],
    estimatedMinutes: 45,
    xpReward: 240,
    objective: "Stworzenie 20-sekundowej sekwencji, która buduje napięcie coraz szybszymi cięciami (staccato), po czym w punkcie kulminacyjnym zawiesza akcję na jednym 5-sekundowym, powolnym ujęciu z dźwiękiem wyciszenia.",
    constraints: [
      "Kolejne ujęcia przed punktem kulminacyjnym muszą skracać się matematycznie (np. 1.2s -> 0.8s -> 0.5s -> 0.2s).",
      "Punkt kulminacyjny musi zawierać moment 'dropu ciszy' przed wejściem ujęcia końcowego."
    ],
    filmTheory: "Napięcie w kinie nie rośnie liniowo. Zmniejszanie czasu trwania ujęć wywołuje u widza przyspieszenie pulsu, a nagłe zatrzymanie potęguje katharsis.",
    mobileTips: "Ułóż klipy na osi czasu CapCut, precyzyjnie skracając każdy kolejny o określoną liczbę klatek. Wstaw biały błysk (Flash) lub nagłe wyciszenie muzyki na przełomie.",
    desktopBridge: {
      tool: "Premiere Pro",
      technique: "Audio Low-Pass Filter Automation",
      tip: "Przed ujęciem kulminacyjnym nałóż efekt 'Lowpass' na ścieżkę muzyczną i zanimuj odcięcie częstotliwości z 20kHz do 400Hz, symulując efekt przytępienia słuchu."
    },
    aiReviewCriteria: {
      rhythmRamp: "Wykrycie geometrycznego spadku czasu trwania klipów przed punktem zerwania."
    }
  },

  // ================= FILAR 4: COMPOSITING, MASKI & STYL =================
  {
    id: "CMP-01",
    title: "Seamless Foreground Object Wipe",
    subtitle: "Naturalne Maskowanie Przejścia",
    pillar: "compositing",
    pillarName: "Compositing & Styl",
    pillarIcon: "layers",
    difficulty: "Intermediate",
    targetTools: ["Alight Motion", "After Effects"],
    estimatedMinutes: 35,
    xpReward: 180,
    objective: "Ukrycie przejścia między dwoma ujęciami za postacią lub obiektem pierwszoplanowym przechodzącym przed kamerą (słup, człowiek, krawędź ściany).",
    constraints: [
      "Ręcznie prowadzona maska śledząca krawędź obiektu klatka po klatce.",
      "Krawędź maski musi mieć delikatne wtapianie (Feather / Softness 10-20%), aby nie wyglądała jak wycięta z kartonu."
    ],
    filmTheory: "Naturalne maskowanie obiektowe (Wipe) symuluje brak montażu. Oko widza interpretuje zasłonięcie kadru jako naturalną przeszkodę fizyczną, nie zdając sobie sprawy ze zmiany scenerii.",
    mobileTips: "W Alight Motion nałóż ujęcie B nad ujęcie A. Dodaj efekt 'Mask / Key' -> 'Vector Mask' i animuj pozycję punktów w miarę przesuwania się obiektu.",
    desktopBridge: {
      tool: "After Effects",
      technique: "Pen Tool Masking & Feather Automation",
      tip: "Wybierz narzędzie Pen Tool (`G`), narysuj maskę na warstwie wierzchniej. Wciśnij `M` dla Mask Path i dodawaj klatki kluczowe. Ustaw Mask Feather (`F`) na 15px."
    },
    aiReviewCriteria: {
      maskEdgeQuality: "Brak ostrych cyfrowych schodków i zniekształceń krawędzi maskowania."
    }
  },
  {
    id: "CMP-02",
    title: "Kinetic Typography Behind Subject",
    subtitle: "Głębia Przestrzenna z Tekstem",
    pillar: "compositing",
    pillarName: "Compositing & Styl",
    pillarIcon: "layers",
    difficulty: "Advanced",
    targetTools: ["CapCut", "Alight Motion", "After Effects"],
    estimatedMinutes: 40,
    xpReward: 195,
    objective: "Umieszczenie animowanego napisu ZA postacią znajdującą się w centrum kadru, z zachowaniem cieniowania i spójności oświetlenia.",
    constraints: [
      "Trzy warstwy: Tło (oryginał), Warstwa pośrednia (Tekst), Warstwa wierzchnia (Wycięta postać).",
      "Tekst musi mieć subtelny cień (Drop Shadow) rzucany na tło za postacią."
    ],
    filmTheory: "Umieszczenie tekstu w przestrzeni za człowiekiem natychmiast przenosi estetykę materiału ze 'zwykłego nagrania z telefonu' w stronę wysokobudżetowej produkcji reklamowej.",
    mobileTips: "W CapCut powiel klip jako 'Overlay' (nakładkę). Na nakładce wybierz 'Cutout' -> 'Auto Cutout'. Pomiędzy oryginalne wideo a nakładkę wstaw warstwę tekstową.",
    desktopBridge: {
      tool: "After Effects",
      technique: "Roto Brush 3.0 & Track Matte",
      tip: "Kliknij dwukrotnie warstwę i wybierz Roto Brush (`Alt+W`). Przeciągnij zielonym pędzlem po postaci, kliknij 'Freeze'. Wróć do kompozycji i umieść warstwę tekstową pod spodem."
    },
    aiReviewCriteria: {
      layerOrder: "Weryfikacja porządku warstw (litery nie mogą nachodzić na postać w centrum)."
    }
  },
  {
    id: "CMP-03",
    title: "Film Halation & Cinematic Glow",
    subtitle: "Emulacja Fizyki Taśmy Filmowej",
    pillar: "compositing",
    pillarName: "Compositing & Styl",
    pillarIcon: "layers",
    difficulty: "Advanced",
    targetTools: ["Alight Motion", "After Effects", "Premiere Pro"],
    estimatedMinutes: 35,
    xpReward: 185,
    objective: "Ręczne stworzenie efektu halacji taśmy filmowej (czerwonawe/ciepłe rozproszenie światła wokół jasnych źródeł) bez używania gotowych wtyczek.",
    constraints: [
      "Zakaz gotowych presetów typu 'Film Look One-Click'.",
      "Efekt budowany na powielonej warstwie z wyodrębnionymi jasnymi tonami (Luma Key / High Pass) i trybem mieszania Screen/Linear Dodge."
    ],
    filmTheory: "Halacja występuje w kamerach analogowych, gdy intensywne światło przebija emulsję i odbija się od tylnej warstwy taśmy, tworząc charakterystyczną czerwoną aurę.",
    mobileTips: "W Alight Motion powiel warstwę. Dodaj efekt 'Brightness / Contrast' i podbij kontrast, by zostawić tylko biel. Dodaj 'Colorize' na kolor pomarańczowo-czerwony, nałóż 'Gaussian Blur' i ustaw Blending na 'Screen'.",
    desktopBridge: {
      tool: "After Effects & Premiere Pro",
      technique: "Curves + Fast Box Blur + Screen Blend Mode",
      tip: "W Premiere Pro zduplikuj klip na V2. Dodaj efekt Curves (obetnij cienie do zera), dodaj Tint (białe zamień na czerwone), dodaj Gaussian Blur (50px) i zmień Blending Mode na Screen."
    },
    aiReviewCriteria: {
      glowSpread: "Subtelność poświaty – wykluczenie prześwietlenia całego kadru."
    }
  },
  {
    id: "CMP-04",
    title: "Split-Toning & Skin Tone Preservation",
    subtitle: "Kolorystyka Kinowa Bez Psucia Twarzy",
    pillar: "compositing",
    pillarName: "Compositing & Styl",
    pillarIcon: "layers",
    difficulty: "Intermediate",
    targetTools: ["CapCut", "Premiere Pro"],
    estimatedMinutes: 30,
    xpReward: 170,
    objective: "Nadanie scenie kontrastowego zabarwienia (np. chłodne cienie i ciepłe światła - Teal & Orange) przy zachowaniu w 100% naturalnego odcienia skóry postaci.",
    constraints: [
      "Odcień skóry na twarzy musi pozostać na naturalnej linii odcienia (Skin Tone Line).",
      "Brak bandingów (paskowania barw) na jednolitych płaszczyznach."
    ],
    filmTheory: "Ludzkie oko jest biologicznie wyczulone na odcienie ludzkiej twarzy. Widz wybaczy najbardziej agresywną stylizację tła, ale jeśli twarz aktora zzielenieje lub zsinieje, film zostanie odebrany negatywnie.",
    mobileTips: "W CapCut w panelu 'Adjust' -> 'HSL' kliknij kolor pomarańczowy (odpowiadający za skórę) i zablokuj jego Hue na zerze, manipulując jedynie odcieniami niebieskiego i cyjanu.",
    desktopBridge: {
      tool: "Premiere Pro",
      technique: "Lumetri Color & Vectorscope Skin Tone Line",
      tip: "W panelu Lumetri Color otwórz okno 'Lumetri Scopes' -> 'Vectorscope YUV'. Upewnij się, że wektor barwy twarzy układa się wzdłuż linii 10:30 na tarczy wektorskopu."
    },
    aiReviewCriteria: {
      skinToneIntegrity: "Weryfikacja próbkowania barwy skóry pod kątem naturalnego nasycenia i odcienia."
    }
  },

  // ================= FILAR 5: THE DESKTOP BRIDGE =================
  {
    id: "BRG-01",
    title: "The Graph Editor Rosetta Stone (AM ➔ AE)",
    subtitle: "Przełożenie Krzywych Alight Motion na Speed Graph",
    pillar: "desktop",
    pillarName: "Desktop Bridge (PC)",
    pillarIcon: "monitor",
    difficulty: "Beginner in AE",
    targetTools: ["Alight Motion", "After Effects"],
    estimatedMinutes: 30,
    xpReward: 170,
    objective: "Odwzorowanie 3 fundamentalnych krzywych prędkości z Alight Motion w zaawansowanym edytorze wykresów After Effects (Speed Graph i Value Graph).",
    constraints: [
      "Stworzenie: 1. Snap Curve (agresywny start), 2. S-Curve (płynny środek), 3. Overshoot (przekroczenie wartości).",
      "Zrozumienie różnicy między edycją wykresu prędkości (Speed Graph) a wartości (Value Graph)."
    ],
    filmTheory: "W Alight Motion masz jeden uproszczony diagram krzywej. W After Effects masz do wyboru kontrolę pikseli na sekundę (Speed) lub bezpośrednich współrzędnych (Value). Opanowanie tego rozróżnienia to granica między amatorem a profesjonalistą.",
    mobileTips: "Zrób zrzut ekranu swoich ulubionych krzywych z Alight Motion, aby mieć wzorzec kształtu wąsów Béziera.",
    desktopBridge: {
      tool: "After Effects",
      technique: "Speed Graph vs Value Graph Toggle",
      tip: "W Graph Editorze na dole kliknij ikonę 'Graph Options' (druga od lewej) i przełączaj między 'Edit Value Graph' a 'Edit Speed Graph'. Użyj skrótu `Shift + przeciągnięcie uchwytu`, by blokować kąt."
    },
    aiReviewCriteria: {
      curveFidelity: "Zgodność profilu prędkości z zadanym profilem przyspieszenia/hamowania."
    }
  },
  {
    id: "BRG-02",
    title: "The 0-Mouse Keyboard Timeline Speed Run",
    subtitle: "Ergonomia i Montaż Wyłącznie Klawiaturą",
    pillar: "desktop",
    pillarName: "Desktop Bridge (PC)",
    pillarIcon: "monitor",
    difficulty: "Intermediate in Premiere",
    targetTools: ["Premiere Pro"],
    estimatedMinutes: 35,
    xpReward: 200,
    objective: "Zmontowanie 30-sekundowej surowej sekwencji (Rough Cut) z 10 klipów bez używania myszki do przesuwania, cięcia i usuwania przerw.",
    constraints: [
      "Myszka może służyć wyłącznie do otwarcia programu.",
      "Użycie skrótów J-K-L, I / O, przecinek (,), kropka (.) oraz Ripple Trim (Q i W)."
    ],
    filmTheory: "Największy zysk prędkości przy przesiadce z telefonu na PC nie wynika z mocniejszego procesora, lecz z ergonomii pracy dwuręcznej na klawiaturze. Narzędzie żyletki (Razor Tool `C`) klikane myszką spowalnia pracę o 400%.",
    mobileTips: "Na telefonie jesteś zmuszony do dotykania ekranu. Na komputerze celem jest, by Twoja lewa ręka spoczywała na klawiszach Q-W-E-R, a prawa na J-K-L.",
    desktopBridge: {
      tool: "Premiere Pro",
      technique: "Three-Point Editing & Ripple Trim Shortcuts",
      tip: "Skrót `Q`: przycina klip od początku do głowicy i usuwa pustą przestrzeń. Skrót `W`: przycina od głowicy do końca klipu. Skrót `Alt + Backspace`: usuwa lukę między klipami."
    },
    aiReviewCriteria: {
      roughCutPacing: "Brak pustych czarnych klatek (gapów) między klipami na osi czasu."
    }
  },
  {
    id: "BRG-03",
    title: "Hierarchy: Groups (AM) ➔ Pre-compose & Nulls (AE)",
    subtitle: "Czysta Architektura i Ład na Osi Czasu",
    pillar: "desktop",
    pillarName: "Desktop Bridge (PC)",
    pillarIcon: "monitor",
    difficulty: "Intermediate in AE",
    targetTools: ["After Effects"],
    estimatedMinutes: 40,
    xpReward: 210,
    objective: "Zbudowanie złożonej animacji z 10 elementów graficznych zorganizowanych w 2 podkompozycje (Pre-compositions) kontrolowane przez nadrzędny Null Object z suwakami Expression Controls.",
    constraints: [
      "Główna oś czasu (Main Comp) nie może zawierać więcej niż 4 warstwy.",
      "Wszystkie warstwy muszą mieć nadane spójne etykiety kolorystyczne (Color Labels) i czytelne nazwy."
    ],
    filmTheory: "W komercyjnych studiach montażowych projekty są przekazywane między różnymi pracownikami. Projekt z 60 nieopisanymi warstwami zostanie natychmiast odrzucony przez Art Directora.",
    mobileTips: "W Alight Motion odpowiednikiem jest zaznaczenie warstw i kliknięcie ikony Grupy u góry ekranu.",
    desktopBridge: {
      tool: "After Effects",
      technique: "Pre-compose (`Ctrl+Shift+C`) & Null Object Parenting",
      tip: "Zaznacz warstwy, naciśnij `Ctrl+Shift+C`, wybierz 'Move all attributes into the new composition'. Dodaj Null Object (`Ctrl+Alt+Shift+Y`) i podepnij pod niego Pre-compy za pomocą Pick Whip."
    },
    aiReviewCriteria: {
      compositionCleanliness: "Weryfikacja struktury warstw i braku chaotycznego nakładania efektów."
    }
  },
  {
    id: "BRG-04",
    title: "Safe Zones & Multi-Platform Mastering (9:16 / 16:9)",
    subtitle: "Zgodność z Interfejsem Aplikacji Społecznościowych",
    pillar: "desktop",
    pillarName: "Desktop Bridge (PC)",
    pillarIcon: "monitor",
    difficulty: "Intermediate",
    targetTools: ["Premiere Pro", "After Effects", "CapCut"],
    estimatedMinutes: 25,
    xpReward: 160,
    objective: "Stworzenie szablonu montażowego w pionie (1080x1920), w którym żaden element typografii ani kluczowy obiekt nie jest zasłaniany przez elementy interfejsu TikToka i Reels.",
    constraints: [
      "Tekst musi znajdować się w strefie bezpiecznej: min. 140px od góry, 240px od dołu i 90px od prawej krawędzi.",
      "Przetestowanie czytelności na symulatorze nakładki interfejsu (UI Overlay)."
    ],
    filmTheory: "Setki świetnych montaży traci sens, ponieważ napisy lądują pod opisem filmu na TikToku lub pod przyciskami 'Polub/Komentuj'. Profesjonalny edytor montuje zawsze z włączoną maską interfejsu platformy.",
    mobileTips: "W CapCut włącz nakładkę siatki, ale pamiętaj, że różne telefony mają różne proporcje ekranu.",
    desktopBridge: {
      tool: "Premiere Pro & After Effects",
      technique: "Custom Guide Overlays & Title Safe Margins",
      tip: "Pobierz przezroczysty plik PNG z siatką UI TikToka. Wrzuć go na najwyższą ścieżkę V5 w Premiere, zablokuj kłódką i wyłączaj widoczność tylko przed ostatecznym renderem."
    },
    aiReviewCriteria: {
      safeZoneMarginCheck: "Analiza położenia tekstu i grafiki względem stref zasłonięcia interfejsu."
    }
  }
];

// Rosetta Stone dictionary mapping mobile features to desktop pro equivalents
const ROSETTA_STONE = [
  {
    category: "Ruch & Fizyka",
    mobileApp: "Alight Motion",
    mobileFeature: "Graph Curves (Krzywe Ruchu)",
    desktopApp: "After Effects",
    desktopFeature: "Value Graph & Speed Graph",
    explanation: "W AM masz uproszczony diagram 2D. W AE masz dwa tryby: Value Graph (edycja wartości np. pikseli w czasie) oraz Speed Graph (prędkość w px/s). Skrót F9 włącza Easy Ease.",
    proTip: "W AE przytrzymaj Shift podczas edycji uchwytów krzywych, aby utrzymać idealny kąt."
  },
  {
    category: "Organizacja Warstw",
    mobileApp: "Alight Motion",
    mobileFeature: "Grupy Warstw (Grouping)",
    desktopApp: "After Effects",
    desktopFeature: "Pre-compose & Null Objects",
    explanation: "Zamiast prostego grupowania, AE tworzy zagnieżdżone kompozycje (Pre-comps, skrót Ctrl+Shift+C) oraz puste obiekty sterujące (Null Objects, Ctrl+Alt+Shift+Y).",
    proTip: "Null Object nie ma pikseli, ale rodzicielstwo (Parenting) pozwala jednym obiektem animować 20 innych warstw."
  },
  {
    category: "Rytm i Audio",
    mobileApp: "CapCut",
    mobileFeature: "Auto Beat Detection (Żółte kropki)",
    desktopApp: "Premiere Pro",
    desktopFeature: "Sequence Markers (Skrót M)",
    explanation: "W Premiere zamiast zdawać się na algorytm telefonu, odtwarzasz utwór spacją i w rytm muzyki uderzasz klawisz M, stawiając dokładne znaczniki na linii czasu.",
    proTip: "Kliknij dwa razy marker, by nadać mu kolor (np. czerwony = uderzenie basu, zielony = zmiana ujęcia)."
  },
  {
    category: "Cięcie i Trimowanie",
    mobileApp: "CapCut",
    mobileFeature: "Narzędzie 'Podziel' i usuwanie luki",
    desktopApp: "Premiere Pro",
    desktopFeature: "Ripple Trim (Skróty Q i W)",
    explanation: "Na telefonie klikasz klip, dzielisz go i ręcznie kasujesz resztkę. W Premiere naciskasz Q, by obciąć lewą stronę do kursora, lub W, by obciąć prawą – luka zamyka się automatycznie w 0.01s.",
    proTip: "Opanowanie klawiszy Q i W przyspiesza montaż surówki o ponad 300%."
  },
  {
    category: "Maskowanie & Wycinanie",
    mobileApp: "CapCut",
    mobileFeature: "Auto Cutout (Automatyczne wycinanie)",
    desktopApp: "After Effects",
    desktopFeature: "Roto Brush 3.0 & Track Matte",
    explanation: "Na telefonie AI wycina postać bez kontroli detali. W AE Roto Brush pozwala uczyć model pędzlem, zamrażać klatki (Freeze) i precyzyjnie kontrolować włosy i krawędzie.",
    proTip: "Roto Brush działa w osobnym oknie Layer, a nie w Composition."
  },
  {
    category: "Prędkość & Czas",
    mobileApp: "CapCut / Alight Motion",
    mobileFeature: "Curve Speed (Krzywe prędkości)",
    desktopApp: "Premiere Pro",
    desktopFeature: "Time Remapping & Optical Flow",
    explanation: "W Premiere włączasz Time Remapping na klipie, rozsuwasz klatki kluczowe i włączasz interpolację 'Optical Flow', która generuje sztuczne klatki pośrednie dla nieskazitelnego slow-mo.",
    proTip: "Optical Flow pozwala spowolnić nagranie 30fps do 20% prędkości bez efektu skakania."
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { EDITFORGE_QUESTS, ROSETTA_STONE };
}
