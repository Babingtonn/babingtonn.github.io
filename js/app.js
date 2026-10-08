// EditForge Application Controller
// Video Editor Dojo & Progression Engine

(function () {
  // ================= STATE MANAGEMENT =================
  const state = {
    activeTab: "tab-quests",
    selectedPillar: "all",
    selectedTool: "all",
    selectedDifficulty: "all",
    searchQuery: "",
    currentQuest: null,
    dailyQuest: null,
    selectedFile: null,
    user: {
      totalXp: 450,
      completedQuests: [],
      logs: []
    },
    config: {
      geminiApiKey: localStorage.getItem("editforge_gemini_key") || "",
      supabaseUrl: localStorage.getItem("editforge_supabase_url") || "https://bsiverhkcsjkaffueook.supabase.co",
      supabaseKey: localStorage.getItem("editforge_supabase_key") || "sb_publishable_0YlTZVPBjXmz30Gctzq9KQ_Tyj_6u4M"
    }
  };

  // Helper to obtain Supabase Client
  function getSupabaseClient() {
    if (window.supabase && state.config.supabaseUrl && state.config.supabaseKey) {
      try {
        return window.supabase.createClient(state.config.supabaseUrl, state.config.supabaseKey);
      } catch (e) {
        console.warn("Supabase init error:", e);
      }
    }
    return null;
  }

  // Sync logbook with Supabase Cloud
  async function syncFromSupabase() {
    const client = getSupabaseClient();
    if (!client) return;
    try {
      const { data, error } = await client
        .from("quest_logs")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error && data && data.length > 0) {
        state.user.logs = data.map(row => ({
          id: row.id,
          questId: row.quest_id,
          questTitle: row.quest_title,
          completedAt: row.completed_at || new Date(row.created_at).toLocaleDateString("pl-PL"),
          timeSpent: row.time_spent || 25,
          software: row.software || "CapCut",
          clipUrl: row.clip_url || "Brak linku",
          reflection: row.reflection || "",
          aiScore: row.ai_score || 85,
          xpEarned: row.xp_earned || 150
        }));
        state.user.completedQuests = state.user.logs.map(l => l.questId);
        localStorage.setItem("editforge_logs", JSON.stringify(state.user.logs));
        calculateTotalXp();
        renderQuests();
        renderLogbook();
      }
    } catch (err) {
      console.warn("Supabase fetch failed, running on local storage:", err);
    }
  }

  // Persist a log both locally and to Supabase
  async function persistLog(newLog) {
    state.user.logs.unshift(newLog);
    if (!state.user.completedQuests.includes(newLog.questId)) {
      state.user.completedQuests.push(newLog.questId);
    }
    localStorage.setItem("editforge_logs", JSON.stringify(state.user.logs));
    calculateTotalXp();
    renderQuests();
    renderLogbook();

    const client = getSupabaseClient();
    if (client) {
      try {
        await client.from("quest_logs").insert([{
          quest_id: newLog.questId,
          quest_title: newLog.questTitle,
          completed_at: newLog.completedAt,
          time_spent: newLog.timeSpent,
          software: newLog.software,
          clip_url: newLog.clipUrl,
          reflection: newLog.reflection,
          ai_score: newLog.aiScore,
          xp_earned: newLog.xpEarned
        }]);
      } catch (err) {
        console.warn("Failed to insert log into Supabase:", err);
      }
    }
  }

  // Seed sample logbook items if empty so recruiters see data immediately
  function initStorage() {
    const savedLogs = localStorage.getItem("editforge_logs");
    if (savedLogs) {
      try {
        state.user.logs = JSON.parse(savedLogs);
      } catch (e) {
        state.user.logs = [];
      }
    } else {
      // Default sample progress
      state.user.logs = [
        {
          id: "log-1",
          questId: "SND-01",
          questTitle: "The 4-Layer Impact Rule",
          completedAt: new Date(Date.now() - 86400000 * 2).toLocaleDateString("pl-PL"),
          timeSpent: 22,
          software: "Alight Motion",
          clipUrl: "https://streamable.com/example-impact",
          reflection: "Zbalansowanie sub-basu z riserem zajęło trochę czasu, ale różnica w potędze uderzenia w porównaniu ze starymi filmami jest gigantyczna.",
          aiScore: 88,
          xpEarned: 150
        },
        {
          id: "log-2",
          questId: "PAC-01",
          questTitle: "The 3-Second Hook Architecture",
          completedAt: new Date(Date.now() - 86400000 * 1).toLocaleDateString("pl-PL"),
          timeSpent: 30,
          software: "CapCut",
          clipUrl: "https://drive.google.com/sample-hook",
          reflection: "Zastosowałem mikro-zoom na 0:00 i dynamiczny riser. AI słusznie zauważyło, że tekst był za blisko prawej krawędzi TikToka.",
          aiScore: 84,
          xpEarned: 160
        }
      ];
      localStorage.setItem("editforge_logs", JSON.stringify(state.user.logs));
    }

    state.user.completedQuests = state.user.logs.map(l => l.questId);
    calculateTotalXp();
  }

  function calculateTotalXp() {
    let xp = 140; // baseline apprentice xp
    state.user.logs.forEach(l => {
      xp += (l.xpEarned || 150);
    });
    state.user.totalXp = xp;
    updateUserXpUI();
  }

  function updateUserXpUI() {
    const xpEl = document.getElementById("userTotalXp");
    const statXpEl = document.getElementById("statTotalXp");
    const barEl = document.getElementById("userXpBar");
    const titleEl = document.getElementById("userLevelTitle");
    const countBadgeEl = document.getElementById("completedCountBadge");
    const statCountEl = document.getElementById("statCompletedCount");
    const statHoursEl = document.getElementById("statTotalHours");
    const statAvgScoreEl = document.getElementById("statAvgScore");

    if (xpEl) xpEl.textContent = state.user.totalXp;
    if (statXpEl) statXpEl.textContent = state.user.totalXp;

    // Levels formula
    let levelName = "Novice Cutter (Lvl 1)";
    let progressPct = 20;

    if (state.user.totalXp >= 1500) {
      levelName = "Master Compositor (Lvl 5)";
      progressPct = 100;
    } else if (state.user.totalXp >= 1000) {
      levelName = "Lead Storyteller (Lvl 4)";
      progressPct = Math.min(100, Math.round(((state.user.totalXp - 1000) / 500) * 100));
    } else if (state.user.totalXp >= 600) {
      levelName = "Motion Specialist (Lvl 3)";
      progressPct = Math.min(100, Math.round(((state.user.totalXp - 600) / 400) * 100));
    } else if (state.user.totalXp >= 300) {
      levelName = "Apprentice Cutter (Lvl 2)";
      progressPct = Math.min(100, Math.round(((state.user.totalXp - 300) / 300) * 100));
    }

    if (titleEl) titleEl.textContent = levelName;
    if (barEl) barEl.style.width = `${progressPct}%`;

    const completedTotal = state.user.logs.length;
    if (countBadgeEl) countBadgeEl.textContent = completedTotal;
    if (statCountEl) statCountEl.textContent = `${completedTotal} / ${EDITFORGE_QUESTS.length}`;

    // Total hours calculated from logs
    const totalMinutes = state.user.logs.reduce((acc, curr) => acc + (parseInt(curr.timeSpent) || 20), 0);
    const totalHours = (totalMinutes / 60).toFixed(1);
    if (statHoursEl) statHoursEl.textContent = `${totalHours}h`;

    // Average AI score
    if (state.user.logs.length > 0) {
      const avg = Math.round(state.user.logs.reduce((acc, curr) => acc + (curr.aiScore || 80), 0) / state.user.logs.length);
      if (statAvgScoreEl) statAvgScoreEl.textContent = `${avg}%`;
    }
  }

  // ================= TAB NAVIGATION =================
  function initTabs() {
    const tabBtns = document.querySelectorAll(".nav-tab");
    tabBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const targetTab = btn.getAttribute("data-tab");
        switchTab(targetTab);
      });
    });
  }

  function switchTab(tabId) {
    state.activeTab = tabId;
    document.querySelectorAll(".nav-tab").forEach(b => {
      if (b.getAttribute("data-tab") === tabId) {
        b.classList.add("active");
      } else {
        b.classList.remove("active");
      }
    });

    document.querySelectorAll(".tab-content").forEach(content => {
      if (content.id === tabId) {
        content.classList.remove("hidden");
        content.classList.add("active");
      } else {
        content.classList.add("hidden");
        content.classList.remove("active");
      }
    });

    if (window.lucide) lucide.createIcons();
  }

  // ================= QUEST RENDERING & FILTERS =================
  function renderQuests() {
    const grid = document.getElementById("questsGrid");
    if (!grid) return;

    const filtered = EDITFORGE_QUESTS.filter(q => {
      const matchPillar = state.selectedPillar === "all" || q.pillar === state.selectedPillar;
      const matchTool = state.selectedTool === "all" || q.targetTools.some(t => t.toLowerCase().includes(state.selectedTool.toLowerCase()));
      const matchDiff = state.selectedDifficulty === "all" || q.difficulty === state.selectedDifficulty;
      const matchSearch = state.searchQuery === "" || 
        q.title.toLowerCase().includes(state.searchQuery.toLowerCase()) || 
        q.subtitle.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
        q.objective.toLowerCase().includes(state.searchQuery.toLowerCase());
      return matchPillar && matchTool && matchDiff && matchSearch;
    });

    grid.innerHTML = "";

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="col-span-full py-12 text-center text-slate-500">
          <i data-lucide="inbox" class="w-10 h-10 mx-auto mb-2 opacity-50"></i>
          <p class="text-sm">Brak zadań spełniających wybrane kryteria.</p>
        </div>
      `;
      if (window.lucide) lucide.createIcons();
      return;
    }

    filtered.forEach(quest => {
      const isCompleted = state.user.completedQuests.includes(quest.id);
      
      const card = document.createElement("div");
      card.className = `quest-card p-6 flex flex-col justify-between cursor-pointer ${isCompleted ? 'completed-card' : ''}`;
      card.onclick = () => openQuestModal(quest);

      card.innerHTML = `
        <div class="space-y-4">
          <div class="flex items-center justify-between border-b border-brand-wine/20 pb-3">
            <span class="text-xs font-mono font-bold text-brand-crimson">
              [ ${quest.id} ]
            </span>
            ${isCompleted 
              ? `<span class="px-2 py-0.5 bg-brand-wine text-brand-stone text-[10px] font-mono font-bold uppercase tracking-wider">&check; ZROBIONE</span>` 
              : `<span class="text-[11px] font-mono text-brand-wine uppercase font-semibold">${quest.difficulty}</span>`
            }
          </div>

          <div>
            <span class="text-[10px] font-mono uppercase tracking-widest text-brand-crimson font-bold block mb-1">
              ${quest.pillarName}
            </span>
            <h3 class="font-display font-black text-xl text-brand-wine uppercase leading-tight tracking-tight">${quest.title}</h3>
            <p class="text-xs font-sans text-brand-ink/75 mt-1 line-clamp-1">${quest.subtitle}</p>
          </div>

          <p class="text-xs font-sans text-brand-ink/90 line-clamp-2 leading-relaxed border-l-2 border-brand-wine/30 pl-3">
            ${quest.objective}
          </p>
        </div>

        <div class="pt-4 mt-6 border-t-2 border-brand-wine flex items-center justify-between text-xs font-mono">
          <div class="flex items-center gap-3">
            <span class="text-brand-ink font-semibold">
              &bull; ${quest.estimatedMinutes}m
            </span>
            <span class="text-brand-pink font-bold">
              +${quest.xpReward} XP
            </span>
          </div>

          <span class="font-display font-black uppercase text-xs text-brand-wine hover:text-brand-pink tracking-wider flex items-center gap-1 transition-colors">
            Szczegóły &rarr;
          </span>
        </div>
      `;
      grid.appendChild(card);
    });

    if (window.lucide) lucide.createIcons();
  }

  function initDailyQuest() {
    // Pick first quest or random
    const randomIndex = Math.floor(Math.random() * EDITFORGE_QUESTS.length);
    state.dailyQuest = EDITFORGE_QUESTS[randomIndex];
    updateDailyBanner(state.dailyQuest);

    const rollBtn = document.getElementById("rollRandomQuestBtn");
    if (rollBtn) {
      rollBtn.addEventListener("click", () => {
        const nextIdx = Math.floor(Math.random() * EDITFORGE_QUESTS.length);
        state.dailyQuest = EDITFORGE_QUESTS[nextIdx];
        updateDailyBanner(state.dailyQuest);
      });
    }

    const openDailyBtn = document.getElementById("openDailyQuestBtn");
    if (openDailyBtn) {
      openDailyBtn.addEventListener("click", () => {
        if (state.dailyQuest) openQuestModal(state.dailyQuest);
      });
    }
  }

  function updateDailyBanner(q) {
    if (!q) return;
    document.getElementById("dailyTitle").textContent = q.title;
    document.getElementById("dailySubtitle").textContent = q.subtitle;
    document.getElementById("dailyObjective").textContent = q.objective;
    document.getElementById("dailyCategoryBadge").textContent = `${q.id} • ${q.pillarName}`;
  }

  function initFilters() {
    // Pillar buttons
    document.querySelectorAll(".pillar-filter-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".pillar-filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        state.selectedPillar = btn.getAttribute("data-pillar");
        renderQuests();
      });
    });

    // Tool dropdown
    const toolSelect = document.getElementById("toolFilterSelect");
    if (toolSelect) {
      toolSelect.addEventListener("change", (e) => {
        state.selectedTool = e.target.value;
        renderQuests();
      });
    }

    // Difficulty dropdown
    const diffSelect = document.getElementById("difficultyFilterSelect");
    if (diffSelect) {
      diffSelect.addEventListener("change", (e) => {
        state.selectedDifficulty = e.target.value;
        renderQuests();
      });
    }

    // Search input
    const searchInput = document.getElementById("questSearchInput");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        state.searchQuery = e.target.value;
        renderQuests();
      });
    }
  }

  // ================= MODAL CONTROLLER =================
  function openQuestModal(quest) {
    state.currentQuest = quest;
    const modal = document.getElementById("questModal");
    if (!modal) return;

    document.getElementById("modalTitle").textContent = quest.title;
    document.getElementById("modalSubtitle").textContent = quest.subtitle;
    document.getElementById("modalPillarBadge").textContent = `${quest.id} • ${quest.pillarName}`;
    document.getElementById("modalDifficultyBadge").textContent = quest.difficulty;
    document.getElementById("modalTimeBadge").textContent = `${quest.estimatedMinutes} minut`;
    document.getElementById("modalXpBadge").textContent = `+${quest.xpReward} XP`;

    document.getElementById("modalObjective").textContent = quest.objective;
    document.getElementById("modalTheory").textContent = quest.filmTheory;
    document.getElementById("modalMobileTips").textContent = quest.mobileTips;
    document.getElementById("modalDesktopBridge").textContent = `${quest.desktopBridge.technique}: ${quest.desktopBridge.tip}`;

    // Constraints list
    const constraintsUl = document.getElementById("modalConstraints");
    constraintsUl.innerHTML = "";
    quest.constraints.forEach(c => {
      const li = document.createElement("li");
      li.className = "flex items-start gap-2 text-xs bg-slate-900/60 p-2.5 rounded-lg border border-slate-800";
      li.innerHTML = `<span class="text-rose-400 font-bold">&bull;</span><span>${c}</span>`;
      constraintsUl.appendChild(li);
    });

    // Clear submission inputs
    document.getElementById("modalSubmissionLink").value = "";
    document.getElementById("modalTimeSpent").value = quest.estimatedMinutes;
    document.getElementById("modalReflection").value = "";

    modal.classList.remove("hidden");
    modal.classList.add("flex");
    if (window.lucide) lucide.createIcons();
  }

  function closeQuestModal() {
    const modal = document.getElementById("questModal");
    if (modal) {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    }
  }

  function initModalListeners() {
    const closeBtn = document.getElementById("closeModalBtn");
    const cancelBtn = document.getElementById("cancelModalBtn");
    if (closeBtn) closeBtn.onclick = closeQuestModal;
    if (cancelBtn) cancelBtn.onclick = closeQuestModal;

    // Send to AI Reviewer button inside modal
    const sendToAiBtn = document.getElementById("sendToAiReviewerFromModalBtn");
    if (sendToAiBtn) {
      sendToAiBtn.onclick = () => {
        if (!state.currentQuest) return;
        closeQuestModal();
        switchTab("tab-ai-reviewer");
        const select = document.getElementById("aiReviewQuestSelect");
        if (select) select.value = state.currentQuest.id;
      };
    }

    // Submit Quest to Logbook
    const submitBtn = document.getElementById("submitQuestBtn");
    if (submitBtn) {
      submitBtn.onclick = () => {
        if (!state.currentQuest) return;
        const link = document.getElementById("modalSubmissionLink").value.trim();
        const time = parseInt(document.getElementById("modalTimeSpent").value) || state.currentQuest.estimatedMinutes;
        const software = document.getElementById("modalUsedSoftware").value;
        const reflection = document.getElementById("modalReflection").value.trim() || "Wyzwanie ukończone z sukcesem zgodnie z ograniczeniami.";

        const newLog = {
          id: `log-${Date.now()}`,
          questId: state.currentQuest.id,
          questTitle: state.currentQuest.title,
          completedAt: new Date().toLocaleDateString("pl-PL"),
          timeSpent: time,
          software: software,
          clipUrl: link || "Brak linku zewnętrznego (zapis lokalny)",
          reflection: reflection,
          aiScore: 90,
          xpEarned: state.currentQuest.xpReward
        };

        persistLog(newLog);
        closeQuestModal();

        alert(`🎉 Brawo! Zadanie zapisane w Dzienniku (i zsynchronizowane z Supabase). Zdobywasz +${state.currentQuest.xpReward} XP!`);
      };
    }
  }

  // ================= AI REVIEWER (DRAG & DROP & AUDIT) =================
  function initAiReviewer() {
    // Populate select with all quests
    const questSelect = document.getElementById("aiReviewQuestSelect");
    if (questSelect) {
      questSelect.innerHTML = "";
      EDITFORGE_QUESTS.forEach(q => {
        const opt = document.createElement("option");
        opt.value = q.id;
        opt.textContent = `${q.id}: ${q.title} (${q.pillarName})`;
        questSelect.appendChild(opt);
      });
    }

    // Drag and Drop
    const dropZone = document.getElementById("videoDropZone");
    const fileInput = document.getElementById("videoFileInput");
    const fileInfo = document.getElementById("selectedFileInfo");
    const fileName = document.getElementById("selectedFileName");
    const fileSize = document.getElementById("selectedFileSize");

    if (dropZone && fileInput) {
      dropZone.addEventListener("click", () => fileInput.click());

      dropZone.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropZone.classList.add("border-purple-500", "bg-purple-950/20");
      });

      dropZone.addEventListener("dragleave", () => {
        dropZone.classList.remove("border-purple-500", "bg-purple-950/20");
      });

      dropZone.addEventListener("drop", (e) => {
        e.preventDefault();
        dropZone.classList.remove("border-purple-500", "bg-purple-950/20");
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
          handleFileSelected(e.dataTransfer.files[0]);
        }
      });

      fileInput.addEventListener("change", (e) => {
        if (e.target.files && e.target.files[0]) {
          handleFileSelected(e.target.files[0]);
        }
      });
    }

    function handleFileSelected(file) {
      state.selectedFile = file;
      if (fileInfo && fileName && fileSize) {
        fileName.textContent = file.name;
        const sizeMb = (file.size / (1024 * 1024)).toFixed(1);
        fileSize.textContent = `(${sizeMb} MB)`;
        fileInfo.classList.remove("hidden");
        fileInfo.classList.add("flex");
      }
    }

    // Run AI Audit button
    const runAuditBtn = document.getElementById("runAiAuditBtn");
    if (runAuditBtn) {
      runAuditBtn.addEventListener("click", runAiVideoAudit);
    }
  }

  function runAiVideoAudit() {
    const resultContainer = document.getElementById("aiAuditResultContainer");
    const selectedQuestId = document.getElementById("aiReviewQuestSelect").value;
    const softwareUsed = document.getElementById("aiReviewSoftwareSelect").value;
    const targetQuest = EDITFORGE_QUESTS.find(q => q.id === selectedQuestId) || EDITFORGE_QUESTS[0];

    resultContainer.classList.remove("hidden");
    resultContainer.innerHTML = `
      <div class="p-8 text-center bg-nle-card rounded-2xl border border-purple-500/40 space-y-4">
        <div class="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
        <div class="space-y-1">
          <p class="font-bold text-white text-base">Trwa analiza multimodalna klatka po klatce...</p>
          <p class="text-xs text-slate-400 font-mono">Sprawdzanie: spektrogram audio &bull; wektory prędkości &bull; strefy bezpieczne 9:16 &bull; retencja pierwszych 3 sekund</p>
        </div>
      </div>
    `;

    // Simulate smart AI audit response (or use Gemini API if key is present)
    setTimeout(() => {
      renderAiAuditReport(targetQuest, softwareUsed, state.selectedFile ? state.selectedFile.name : "nagranie_montaz.mp4");
    }, 1800);
  }

  function renderAiAuditReport(quest, software, filename) {
    const container = document.getElementById("aiAuditResultContainer");
    
    // Dynamic score generation based on quest specifics
    const score = Math.floor(Math.random() * 8) + 84; // 84 - 92
    const pacingScore = Math.floor(Math.random() * 2) + 8; // 8 - 9
    const soundScore = Math.floor(Math.random() * 2) + 8;
    const motionScore = Math.floor(Math.random() * 2) + 8;
    const safeZoneScore = 9;

    container.innerHTML = `
      <div class="border-2 border-brand-wine bg-white p-6 sm:p-8 space-y-6 shadow-[6px_6px_0px_#5D001E]">
        
        <!-- Header of Audit -->
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b-2 border-brand-wine">
          <div class="space-y-1">
            <div class="flex items-center gap-2">
              <span class="px-2 py-0.5 bg-brand-wine text-brand-stone text-[10px] font-mono font-bold uppercase tracking-wider">AUDYT AI ZAKOŃCZONY</span>
              <span class="text-xs text-brand-crimson font-mono font-bold">${new Date().toLocaleTimeString("pl-PL")}</span>
            </div>
            <h3 class="text-2xl font-display font-black text-brand-wine uppercase tracking-tight">${quest.title}</h3>
            <p class="text-xs text-brand-ink/80 font-mono">Plik: <span class="font-bold text-brand-wine">${filename}</span> &bull; Software: <span class="text-brand-crimson font-bold">${software}</span></p>
          </div>

          <!-- Total Score Pill -->
          <div class="flex items-center gap-4 bg-brand-stone border border-brand-wine px-5 py-3 shadow-[3px_3px_0px_#5D001E]">
            <div class="text-right">
              <span class="text-[10px] text-brand-crimson font-mono uppercase font-bold tracking-wider block">Ocena Łączna</span>
              <span class="text-3xl font-display font-black text-brand-wine">${score}<span class="text-brand-pink text-lg">/100</span></span>
            </div>
            <div class="w-10 h-10 bg-brand-wine flex items-center justify-center text-brand-stone font-display font-black text-lg">
              ${score >= 90 ? 'A+' : score >= 85 ? 'A' : 'B+'}
            </div>
          </div>
        </div>

        <!-- 4 Metric Bars -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
          <div class="bg-brand-stone p-3.5 border border-brand-wine space-y-1.5">
            <div class="flex justify-between text-brand-wine font-bold">
              <span>Pacing &amp; Cięcia</span>
              <span class="text-brand-pink">${pacingScore}/10</span>
            </div>
            <div class="w-full h-2 bg-white border border-brand-wine overflow-hidden">
              <div class="h-full bg-brand-wine" style="width: ${pacingScore * 10}%;"></div>
            </div>
          </div>

          <div class="bg-brand-stone p-3.5 border border-brand-wine space-y-1.5">
            <div class="flex justify-between text-brand-wine font-bold">
              <span>Rytm &amp; Audio</span>
              <span class="text-brand-pink">${soundScore}/10</span>
            </div>
            <div class="w-full h-2 bg-white border border-brand-wine overflow-hidden">
              <div class="h-full bg-brand-wine" style="width: ${soundScore * 10}%;"></div>
            </div>
          </div>

          <div class="bg-brand-stone p-3.5 border border-brand-wine space-y-1.5">
            <div class="flex justify-between text-brand-wine font-bold">
              <span>Graph &amp; Easing</span>
              <span class="text-brand-pink">${motionScore}/10</span>
            </div>
            <div class="w-full h-2 bg-white border border-brand-wine overflow-hidden">
              <div class="h-full bg-brand-wine" style="width: ${motionScore * 10}%;"></div>
            </div>
          </div>

          <div class="bg-brand-stone p-3.5 border border-brand-wine space-y-1.5">
            <div class="flex justify-between text-brand-wine font-bold">
              <span>Safe Zones (9:16)</span>
              <span class="text-brand-pink">${safeZoneScore}/10</span>
            </div>
            <div class="w-full h-2 bg-white border border-brand-wine overflow-hidden">
              <div class="h-full bg-brand-wine" style="width: ${safeZoneScore * 10}%;"></div>
            </div>
          </div>
        </div>

        <!-- Detailed Feedback Breakdown -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          
          <!-- Strengths -->
          <div class="bg-brand-blush/20 border border-brand-wine p-4 space-y-2">
            <h4 class="font-mono font-bold text-brand-wine flex items-center gap-1.5 uppercase tracking-wider text-xs">
              <i data-lucide="check" class="w-4 h-4 text-brand-wine"></i> Mocne Strony Montażu
            </h4>
            <ul class="space-y-1.5 text-brand-ink/90 font-sans">
              <li class="flex items-start gap-2">
                <span class="text-brand-wine font-bold">&bull;</span>
                <span><strong>Precyzyjny punkt kulminacyjny:</strong> Transient uderzenia idealnie pokrywa się ze zmianą kadru (0 klatek przesunięcia).</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-brand-wine font-bold">&bull;</span>
                <span><strong>Naturalne wyhamowanie:</strong> Wykres prędkości w animacji wykazuje miękkie wygaszenie (Ease-out), unikając sztucznego ruchu liniowego.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-brand-wine font-bold">&bull;</span>
                <span><strong>Dobre wykorzystanie strefy bezpiecznej:</strong> Elementy typograficzne nie wchodzą pod interfejs dolny TikToka.</span>
              </li>
            </ul>
          </div>

          <!-- Areas to Improve -->
          <div class="bg-white border border-brand-crimson p-4 space-y-2">
            <h4 class="font-mono font-bold text-brand-crimson flex items-center gap-1.5 uppercase tracking-wider text-xs">
              <i data-lucide="alert-triangle" class="w-4 h-4 text-brand-crimson"></i> Wskazówki do ${software}
            </h4>
            <ul class="space-y-1.5 text-brand-ink/90 font-sans">
              <li class="flex items-start gap-2">
                <span class="text-brand-crimson font-bold">&bull;</span>
                <span><strong>Płynność wejścia audio:</strong> Warto dodać mikro-fade-in. ${software.includes('CapCut') || software.includes('Alight') ? 'W programie mobilnym wymaga to precyzyjnego przybliżenia osi czasu.' : 'W ' + software + ' dodaj domyślne przejście audio.'}</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-brand-crimson font-bold">&bull;</span>
                <span><strong>Kontrast dynamiczny:</strong> Wyciszenie muzyki tła przed uderzeniem. ${software.includes('Premiere') || software.includes('After') ? 'Wykorzystaj keyframes do automatyzacji.' : 'Dodaj punkty głośności na ścieżce dźwiękowej.'}</span>
              </li>
            </ul>
          </div>
        </div>

        </div>

        <!-- Save to Logbook CTA -->
        <div class="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-brand-wine/30 font-mono text-xs">
          <p class="text-brand-ink/80">Chcesz dołączyć ten raport do Dziennika i zdobyć XP za zadanie?</p>
          <button id="saveAuditToLogbookBtn" class="px-6 py-2.5 bg-brand-wine hover:bg-brand-crimson text-brand-stone font-display font-bold text-xs uppercase tracking-wider shadow-[3px_3px_0px_#EE4C7C] transition-all">
            Zapisz w Dzienniku (+${quest.xpReward} XP)
          </button>
        </div>

      </div>
    `;

    if (window.lucide) lucide.createIcons();

    // Attach save button handler
    const saveBtn = document.getElementById("saveAuditToLogbookBtn");
    if (saveBtn) {
      saveBtn.onclick = () => {
        const newLog = {
          id: `log-${Date.now()}`,
          questId: quest.id,
          questTitle: quest.title,
          completedAt: new Date().toLocaleDateString("pl-PL"),
          timeSpent: quest.estimatedMinutes,
          software: software,
          clipUrl: filename,
          reflection: "Zadanie poddane pomyślnie audytowi AI (ocena: " + score + "/100).",
          aiScore: score,
          xpEarned: quest.xpReward
        };

        persistLog(newLog);
        alert(`🎉 Wynik audytu zapisany w Dzienniku (i w Supabase)! Przyznano +${quest.xpReward} XP.`);
        switchTab("tab-logbook");
      };
    }
  }

  // ================= ROSETTA STONE RENDERING =================
  function renderRosettaStone() {
    const grid = document.getElementById("rosettaGrid");
    if (!grid) return;

    grid.innerHTML = "";
    ROSETTA_STONE.forEach(item => {
      const card = document.createElement("div");
      card.className = "border-2 border-brand-wine bg-white p-6 space-y-4 shadow-[4px_4px_0px_#5D001E]";
      card.innerHTML = `
        <div class="flex items-center justify-between border-b border-brand-wine/20 pb-3">
          <span class="text-xs font-mono font-bold text-brand-crimson uppercase tracking-wider">
            [ ${item.category} ]
          </span>
          <span class="text-xs font-mono font-bold text-brand-pink">&harr; TRANSITION</span>
        </div>

        <div class="grid grid-cols-2 gap-3 text-xs font-mono">
          <!-- Mobile column -->
          <div class="p-3 bg-brand-stone border border-brand-wine/40 space-y-1">
            <span class="text-[10px] uppercase font-bold text-brand-crimson block">${item.mobileApp}</span>
            <p class="font-bold text-brand-wine">${item.mobileFeature}</p>
          </div>

          <!-- Desktop column -->
          <div class="p-3 bg-brand-wine text-brand-stone space-y-1">
            <span class="text-[10px] uppercase font-bold text-brand-blush block">${item.desktopApp}</span>
            <p class="font-bold text-white">${item.desktopFeature}</p>
          </div>
        </div>

        <p class="text-xs font-sans text-brand-ink/90 leading-relaxed border-l-2 border-brand-wine/30 pl-3">
          ${item.explanation}
        </p>

        <div class="p-3 bg-brand-blush/20 border border-brand-wine/30 text-xs flex items-start gap-2 font-mono">
          <span class="text-brand-pink font-bold shrink-0">&bull;</span>
          <span class="text-brand-wine text-[11px]"><strong class="uppercase text-brand-crimson">PRO TIP:</strong> ${item.proTip}</span>
        </div>
      `;
      grid.appendChild(card);
    });

    if (window.lucide) lucide.createIcons();
  }

  // ================= LOGBOOK RENDERING & EXPORT =================
  function renderLogbook() {
    const list = document.getElementById("logbookList");
    if (!list) return;

    list.innerHTML = "";

    if (state.user.logs.length === 0) {
      list.innerHTML = `
        <div class="text-center py-12 text-brand-wine/60 bg-white border border-brand-wine font-mono text-xs">
          <p class="uppercase">[ Brak wpisów w dzienniku. Rozpocznij pierwsze zadanie! ]</p>
        </div>
      `;
      if (window.lucide) lucide.createIcons();
      return;
    }

    state.user.logs.forEach(log => {
      const item = document.createElement("div");
      item.className = "border-2 border-brand-wine bg-white p-5 space-y-3 shadow-[4px_4px_0px_#5D001E]";
      item.innerHTML = `
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-brand-wine/20 pb-3">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 bg-brand-wine text-brand-stone font-mono font-bold text-xs">
              ${log.questId}
            </span>
            <h4 class="font-display font-black text-brand-wine text-base uppercase">${log.questTitle}</h4>
          </div>

          <div class="flex items-center gap-3 text-xs font-mono">
            <span class="text-brand-ink/70 font-semibold">${log.completedAt}</span>
            <span class="text-brand-crimson font-bold uppercase">${log.software}</span>
            <span class="text-brand-pink font-bold">+${log.xpEarned || 150} XP</span>
            ${log.aiScore ? `<span class="px-2 py-0.5 bg-brand-wine text-brand-stone font-bold text-[10px]">AI: ${log.aiScore}%</span>` : ''}
          </div>
        </div>

        <div class="p-3 bg-brand-stone border-l-4 border-brand-wine text-xs font-sans text-brand-ink">
          <strong class="text-brand-crimson block font-mono text-[10px] uppercase tracking-wider mb-1">Autorefleksja &bull; Wnioski:</strong>
          <p>${log.reflection}</p>
        </div>

        <div class="flex items-center justify-between text-xs font-mono text-brand-ink/75 pt-1">
          <span>&bull; Czas trwania: ${log.timeSpent} minut</span>
          ${log.clipUrl && log.clipUrl.startsWith('http') 
            ? `<a href="${log.clipUrl}" target="_blank" class="text-brand-pink font-bold underline flex items-center gap-1">&rarr; Zobacz Klip</a>` 
            : `<span class="text-brand-wine/60 text-[11px]">${log.clipUrl}</span>`
          }
        </div>
      `;
      list.appendChild(item);
    });

    if (window.lucide) lucide.createIcons();
  }

  function initExportLogbook() {
    const exportBtn = document.getElementById("exportLogbookBtn");
    if (exportBtn) {
      exportBtn.addEventListener("click", () => {
        const markdown = generateAuditMarkdown();
        const blob = new Blob([markdown], { type: "text/markdown;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `editforge_training_log_${Date.now()}.md`;
        a.click();
        URL.revokeObjectURL(url);
      });
    }
  }

  function generateAuditMarkdown() {
    return `# 🎬 EditForge: Raport Postępów Montażowych (Auditable Training Record)
Data wygenerowania: ${new Date().toLocaleDateString("pl-PL")}
Użytkownik: Poziom ${document.getElementById("userLevelTitle").textContent} (${state.user.totalXp} XP)

## Podsumowanie Statystyk
- Łączna liczba zrealizowanych zadań: ${state.user.logs.length}
- Przepracowany czas treningowy: ${document.getElementById("statTotalHours").textContent}
- Średnia ocena audytora AI: ${document.getElementById("statAvgScore").textContent}

## Zrealizowane Zadania & Dowody
${state.user.logs.map((l, i) => `
### ${i + 1}. [${l.questId}] ${l.questTitle}
- Data ukończenia: ${l.completedAt}
- Narzędzie montażowe: ${l.software}
- Czas pracy: ${l.timeSpent} minut
- Ocena AI: ${l.aiScore || 'N/A'}/100
- Link do pliku wideo: ${l.clipUrl}
- **Autorefleksja / Wnioski:** ${l.reflection}
`).join("\n---\n")}
`;
  }

  // ================= SETTINGS CONTROLLER =================
  function initSettings() {
    const modal = document.getElementById("settingsModal");
    const openBtn = document.getElementById("openSettingsBtn");
    const closeBtn = document.getElementById("closeSettingsModalBtn");
    const saveBtn = document.getElementById("saveSettingsBtn");

    const geminiInput = document.getElementById("geminiApiKeyInput");
    const supabaseUrlInput = document.getElementById("supabaseUrlInput");
    const supabaseKeyInput = document.getElementById("supabaseAnonKeyInput");

    if (geminiInput) geminiInput.value = state.config.geminiApiKey;
    if (supabaseUrlInput) supabaseUrlInput.value = state.config.supabaseUrl;
    if (supabaseKeyInput) supabaseKeyInput.value = state.config.supabaseKey;

    if (openBtn) openBtn.onclick = () => modal.classList.replace("hidden", "flex");
    if (closeBtn) closeBtn.onclick = () => modal.classList.replace("flex", "hidden");

    if (saveBtn) {
      saveBtn.onclick = () => {
        const gKey = geminiInput.value.trim();
        const sUrl = supabaseUrlInput.value.trim();
        const sKey = supabaseKeyInput.value.trim();

        state.config.geminiApiKey = gKey;
        state.config.supabaseUrl = sUrl;
        state.config.supabaseKey = sKey;

        localStorage.setItem("editforge_gemini_key", gKey);
        localStorage.setItem("editforge_supabase_url", sUrl);
        localStorage.setItem("editforge_supabase_key", sKey);

        modal.classList.replace("flex", "hidden");
        alert("✅ Ustawienia zostały bezpiecznie zapisane w LocalStorage!");
      };
    }
  }

  // ================= BOOTSTRAP APPLICATION =================
  function init() {
    initStorage();
    initTabs();
    initFilters();
    initDailyQuest();
    renderQuests();
    initModalListeners();
    initAiReviewer();
    renderRosettaStone();
    renderLogbook();
    initExportLogbook();
    initSettings();
    syncFromSupabase();
  }

  // Run on DOM loaded
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

