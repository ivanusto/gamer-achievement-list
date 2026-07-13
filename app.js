// ====================================================================
// GAMER ACHIEVEMENT LIST — 遊戲玩家解鎖成就清單 (app.js)
// 核心互動邏輯：狀態管理、渲染、篩選、搜尋、自訂成就、粒子特效、分享卡
// ====================================================================

const SITE_URL = "gamer-achievement-list.pages.dev";

// --- 玩家稱號門檻系統 (Milestone / Badge System) ---
const milestones = [
  { count: 0,  icon: "🕹️", title: "遊戲初心者",    desc: "剛剛踏入遊戲世界的新手玩家，前方還有許多未知的冒險等待你探索。" },
  { count: 10, icon: "🎮", title: "遊戲愛好者",    desc: "已經體驗過不少遊戲，開始形成自己的遊戲品味與喜好。" },
  { count: 25, icon: "🏆", title: "遊戲達人",      desc: "對遊戲有深入的了解與經驗，在朋友眼中是可靠的遊戲顧問。" },
  { count: 50, icon: "👑", title: "遊戲大師",      desc: "橫跨多種遊戲類型與平台，已達到一般玩家難以企及的廣度與深度。" },
  { count: 100,icon: "💎", title: "傳奇玩家",      desc: "解鎖百項成就！你已經將遊戲視為生命中不可分割的一部分。" }
];

// --- 初始化資料結構 ---
let userChoices = { pa: {}, nickname: "無名玩家", avatar: "🕹️" };
let customAchievements = [];

// --- LocalStorage Key 名稱 ---
const LS_KEY = "gamer_achievement_data";
const CUSTOM_KEY = "gamer_custom_achievements";

// --- DOM References ---
const achievementsGrid = document.getElementById("achievementsGrid");
const customAchGrid = document.getElementById("customAchGrid");
const searchBar = document.getElementById("searchBar");
const categoryFilterContainer = document.getElementById("categoryFilterContainer");
const progressValA = document.getElementById("progressValA");
const progressBarA = document.getElementById("progressBarA");
const badgeIcon = document.getElementById("badgeIcon");
const badgeTitle = document.getElementById("badgeTitle");
const badgeDesc = document.getElementById("badgeDesc");
const customAchCountDisplay = document.getElementById("customAchCountDisplay");
const customAchEmpty = document.getElementById("customAchEmpty");

// --- Toast ---
function showToast(msg, isMatch = false) {
  const toast = document.getElementById("toast");
  const toastText = document.getElementById("toastText");
  toastText.innerText = msg;
  toast.classList.remove("show", "match-toast");
  if (isMatch) toast.classList.add("match-toast");
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3500);
}

// --- LocalStorage Operations ---
function saveLocalData() {
  localStorage.setItem(LS_KEY, JSON.stringify(userChoices));
}

function loadLocalData() {
  const saved = localStorage.getItem(LS_KEY);
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (parsed && parsed.pa) {
        userChoices = parsed;
        if (!userChoices.nickname) userChoices.nickname = "無名玩家";
        if (!userChoices.avatar) userChoices.avatar = "🕹️";
      }
    } catch (e) {
      console.warn("Failed to load local data, using defaults");
    }
  }
}

function loadCustomAchievements() {
  const saved = localStorage.getItem(CUSTOM_KEY);
  if (saved) {
    try {
      customAchievements = JSON.parse(saved) || [];
    } catch (e) {
      customAchievements = [];
    }
  }
}

function saveCustomAchievements() {
  localStorage.setItem(CUSTOM_KEY, JSON.stringify(customAchievements));
}

// --- 首次訪問彈窗 ---
function checkFirstVisit() {
  const visited = localStorage.getItem("gamer_first_visit_done");
  if (!visited) {
    document.getElementById("nicknameModal").style.display = "flex";
    // 預設選中第一個頭像
    const modalAvatars = document.querySelectorAll("#modalAvatarGrid .avatar-btn");
    modalAvatars.forEach(b => b.classList.remove("selected"));
    modalAvatars[0].classList.add("selected");
  }
}

window.confirmNickname = function () {
  const input = document.getElementById("modalNicknameInput");
  const nickname = input.value.trim() || "無名玩家";
  userChoices.nickname = nickname;

  const selectedAvatar = document.querySelector("#modalAvatarGrid .avatar-btn.selected");
  userChoices.avatar = selectedAvatar ? selectedAvatar.innerText : "🕹️";

  saveLocalData();
  document.getElementById("nicknameModal").style.display = "none";
  localStorage.setItem("gamer_first_visit_done", "true");
  syncProfileUI();
  showToast(`🎮 歡迎 ${userChoices.nickname} 加入遊戲成就世界！`);
};

// 暱稱模態框的頭像點擊
document.querySelectorAll("#modalAvatarGrid .avatar-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("#modalAvatarGrid .avatar-btn").forEach(b => b.classList.remove("selected"));
    btn.classList.add("selected");
  });
});

// --- 同步設定頁 UI ---
function syncProfileUI() {
  const nameInput = document.getElementById("nicknameInput");
  if (nameInput) nameInput.value = userChoices.nickname;
  const avatarBtns = document.querySelectorAll(".avatar-btn");
  avatarBtns.forEach(btn => {
    btn.classList.remove("selected");
    if (btn.innerText === userChoices.avatar) btn.classList.add("selected");
  });
}

// --- 渲染分類過濾器 ---
function renderCategoryFilters() {
  categoryFilterContainer.innerHTML = '<button class="filter-btn active" data-category="all"><i class="bx bx-grid-alt"></i> 全部領域</button>';
  window.gameData.categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = "filter-btn";
    btn.dataset.category = cat.id;
    btn.innerHTML = `${cat.icon} ${cat.name.split(' (')[0]}`;
    categoryFilterContainer.appendChild(btn);
  });

  // 點擊過濾
  categoryFilterContainer.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      categoryFilterContainer.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderAchievements();
    });
  });
}

// --- 渲染成就清單 ---
function renderAchievements() {
  const activeCategory = categoryFilterContainer.querySelector(".filter-btn.active")?.dataset.category || "all";
  const searchText = searchBar.value.trim().toLowerCase();
  const activeStatus = document.querySelector(".status-filters .status-btn.active")?.dataset.filter || "all";

  let filtered = window.gameData.achievements.filter(item => {
    if (activeCategory !== "all" && item.category !== activeCategory) return false;
    if (searchText) {
      const haystack = `${item.title} ${item.description} ${item.tips}`.toLowerCase();
      if (!haystack.includes(searchText)) return false;
    }
    if (activeStatus !== "all") {
      const state = userChoices.pa[item.id] || "locked";
      if (state !== activeStatus) return false;
    }
    return true;
  });

  if (filtered.length === 0) {
    achievementsGrid.innerHTML = `<div style="text-align:center;padding:3rem;color:var(--text-muted);font-size:0.95rem;">沒有符合條件的成就項目 ✨</div>`;
    return;
  }

  let html = "";
  filtered.forEach(item => {
    const state = userChoices.pa[item.id] || "locked";
    const catObj = window.gameData.categories.find(c => c.id === item.category);
    const catIcon = catObj ? catObj.icon : "🎮";

    let extraClass = "";
    let badgeHTML = "";
    if (state === "unlocked") {
      extraClass = "matched";
      badgeHTML = `<div class="match-badge unlocked">${catIcon} 已解鎖</div>`;
    } else if (state === "want") {
      extraClass = "want-to-try";
      badgeHTML = `<div class="match-badge want">${catIcon} 想挑戰</div>`;
    }

    html += `
      <div class="glass-panel achievement-card ${extraClass}" data-id="${item.id}">
        ${badgeHTML}
        <div class="card-top">
          <span class="category-tag">${catIcon} ${catObj ? catObj.name.split(' (')[0] : "遊戲"}</span>
          <span class="difficulty-tag">${item.difficulty}</span>
        </div>
        <h3 class="card-title">${item.title}</h3>
        <p class="card-desc">${item.description}</p>
        <button class="card-tips-toggle" onclick="toggleTips('${item.id}')"><i class="bx bx-question-mark"></i> 查看攻略秘訣</button>
        <div class="card-tips-content" id="tips-${item.id}">${item.tips}</div>
        <div class="card-actions">
          <div class="couple-controls">
            <div class="action-select-wrapper">
              <button class="state-btn ${state === 'unlocked' ? 'active-unlocked' : ''}" onclick="setAchievementState('${item.id}','unlocked')"><i class="bx bx-check-circle"></i> 已解鎖</button>
              <button class="state-btn ${state === 'want' ? 'active-want' : ''}" onclick="setAchievementState('${item.id}','want')"><i class="bx bx-star"></i> 想挑戰</button>
            </div>
            <button class="state-btn ${state === 'locked' ? 'active-unlocked' : ''}" onclick="setAchievementState('${item.id}','locked')" style="border-color: rgba(255,255,255,0.05);"><i class="bx bx-x"></i> 清除狀態</button>
          </div>
        </div>
      </div>`;
  });

  achievementsGrid.innerHTML = html;
  calculateProgress();
}

// --- 切換 Tips 顯示 ---
window.toggleTips = function (id) {
  const tipsEl = document.getElementById(`tips-${id}`);
  if (tipsEl) {
    tipsEl.style.display = tipsEl.style.display === "block" ? "none" : "block";
  }
};

// --- 設定成就狀態 ---
window.setAchievementState = function (id, newState) {
  userChoices.pa[id] = newState;
  saveLocalData();
  renderAchievements();
  calculateProgress();
  showToast(`✅ 已更新成就狀態！`, newState === "unlocked");
  if (newState === "unlocked") triggerSparkles();
};

// --- 渲染目標清單頁 (Wishlist / Matcher) ---
function renderMatcher() {
  const wishes = window.gameData.achievements.filter(item => {
    return (userChoices.pa[item.id] || "locked") === "want";
  });
  const unlocked = window.gameData.achievements.filter(item => {
    return (userChoices.pa[item.id] || "locked") === "unlocked";
  });

  const matchedGrid = document.getElementById("matchedAchievementsGrid");
  let html = "";

  // 想挑戰列表
  if (wishes.length > 0) {
    html += `<h4 style="color:var(--accent-orange);margin:1rem 0;font-size:1.1rem;font-weight:800;">🎯 攻略目標（${wishes.length} 項）</h4>`;
    wishes.forEach(item => {
      const catObj = window.gameData.categories.find(c => c.id === item.category);
      const catIcon = catObj ? catObj.icon : "🎮";
      html += `
        <div class="glass-panel achievement-card want-to-try">
          <div class="card-top">
            <span class="category-tag">${catIcon} ${catObj ? catObj.name.split(' (')[0] : "遊戲"}</span>
            <span class="difficulty-tag">${item.difficulty}</span>
          </div>
          <h3 class="card-title">${item.title}</h3>
          <p class="card-desc">${item.description}</p>
          <div class="card-actions">
            <button class="action-btn matched-complete-btn" onclick="setAchievementState('${item.id}','unlocked');renderMatcher();" style="border-color:var(--accent-cyan);color:var(--accent-cyan);"><i class="bx bx-check-circle"></i> 標記為已解鎖！</button>
          </div>
        </div>`;
    });
  }

  // 已解鎖列表
  if (unlocked.length > 0) {
    html += `<h4 style="color:var(--accent-cyan);margin:1.5rem 0 1rem 0;font-size:1.1rem;font-weight:800;">🏆 已解鎖成就（${unlocked.length} 項）</h4>`;
    unlocked.slice(0, 15).forEach(item => {
      const catObj = window.gameData.categories.find(c => c.id === item.category);
      const catIcon = catObj ? catObj.icon : "🎮";
      html += `
        <div class="glass-panel achievement-card matched">
          <div class="match-badge unlocked">${catIcon} 已解鎖</div>
          <h3 class="card-title">${item.title}</h3>
          <p class="card-desc">${item.description}</p>
          <div class="card-actions">
            <span class="matched-wishes-label"><i class="bx bx-check-circle"></i> 已解鎖 ${item.difficulty}</span>
          </div>
        </div>`;
    });
    if (unlocked.length > 15) {
      html += `<div style="text-align:center;padding:1rem;color:var(--text-muted);font-size:0.85rem;">... 以及其他 ${unlocked.length - 15} 項已解鎖成就（請至清單挑戰頁瀏覽全部）</div>`;
    }
  }

  if (wishes.length === 0 && unlocked.length === 0) {
    html = `<div style="text-align:center;padding:3rem;color:var(--text-muted);font-size:0.95rem;">還沒有任何攻略目標或已解鎖成就！去清單挑戰頁面開始勾選吧 🎮</div>`;
  }

  matchedGrid.innerHTML = html;
}

// --- 渲染自訂成就 ---
function renderCustomAchievements() {
  customAchGrid.innerHTML = "";
  customAchCountDisplay.innerText = customAchievements.length;

  if (customAchievements.length === 0) {
    customAchEmpty.style.display = "block";
    return;
  }
  customAchEmpty.style.display = "none";

  let html = "";
  customAchievements.forEach((ca, idx) => {
    const stateClass = ca.unlocked ? "matched" : "";
    html += `
      <div class="glass-panel achievement-card ${stateClass}">
        <div class="card-top">
          <span class="category-tag">🎮 自訂成就</span>
          <span class="difficulty-tag">★☆☆☆☆</span>
        </div>
        <h3 class="card-title">${ca.title}</h3>
        <p class="card-desc">${ca.desc || "（無說明）"}</p>
        <div class="card-actions">
          <div class="action-select-wrapper">
            <button class="state-btn ${ca.unlocked ? 'active-unlocked' : ''}" onclick="toggleCustomAch(${idx})"><i class="bx bx-check-circle"></i> ${ca.unlocked ? '已解鎖' : '標記解鎖'}</button>
            <button class="state-btn" onclick="deleteCustomAch(${idx})"><i class="bx bx-trash"></i> 刪除</button>
          </div>
        </div>
      </div>`;
  });
  customAchGrid.innerHTML = html;
  calculateProgress();
}

window.toggleCustomAch = function (idx) {
  customAchievements[idx].unlocked = !customAchievements[idx].unlocked;
  saveCustomAchievements();
  renderCustomAchievements();
  calculateProgress();
  showToast("📌 自訂成就狀態已更新！");
};

window.deleteCustomAch = function (idx) {
  customAchievements.splice(idx, 1);
  saveCustomAchievements();
  renderCustomAchievements();
  calculateProgress();
  showToast("🗑️ 自訂成就已刪除");
};

// --- 自訂成就 Modal ---
window.openCustomAchModal = function () {
  if (customAchievements.length >= 10) {
    showToast("⚠️ 自訂成就已達上限 10 個，請刪除後再新增");
    return;
  }
  document.getElementById("customAchModal").style.display = "flex";
  document.getElementById("customAchName").value = "";
  document.getElementById("customAchDesc").value = "";
};

window.closeCustomAchModal = function () {
  document.getElementById("customAchModal").style.display = "none";
};

window.saveCustomAchievement = function () {
  const name = document.getElementById("customAchName").value.trim();
  const desc = document.getElementById("customAchDesc").value.trim();
  if (!name) { showToast("⚠️ 請輸入成就名稱"); return; }
  if (customAchievements.length >= 10) { showToast("⚠️ 已達上限"); return; }
  customAchievements.push({ title: name, desc: desc || "（無說明）", unlocked: false });
  saveCustomAchievements();
  renderCustomAchievements();
  calculateProgress();
  closeCustomAchModal();
  showToast("✅ 自訂成就已新增！");
};

// --- 進度計算 ---
function calculateProgress() {
  const total = window.gameData.achievements.length + customAchievements.length;
  let unlocked = 0;
  window.gameData.achievements.forEach(item => {
    if ((userChoices.pa[item.id] || "locked") === "unlocked") unlocked++;
  });
  customAchievements.forEach(ca => { if (ca.unlocked) unlocked++; });

  const pct = total === 0 ? 0 : Math.round((unlocked / total) * 100);
  progressValA.innerText = `${pct}% (${unlocked}/${total})`;
  progressBarA.style.width = `${pct}%`;

  // 稱號系統
  let activeMilestone = milestones[0];
  for (let i = milestones.length - 1; i >= 0; i--) {
    if (unlocked >= milestones[i].count) {
      activeMilestone = milestones[i];
      break;
    }
  }
  badgeIcon.innerText = activeMilestone.icon;
  badgeTitle.innerText = activeMilestone.title;
  badgeDesc.innerText = activeMilestone.desc;
}

// --- 抽卡邏輯 (Gamer Cards) ---
const drawCategorySelect = document.getElementById("drawCategory");
const drawBtn = document.getElementById("drawBtn");
const gameCardScene = document.getElementById("gameCardScene");
const gameCardInner = document.getElementById("gameCardInner");
const drawnCategory = document.getElementById("drawnCategory");
const drawnTitle = document.getElementById("drawnTitle");
const drawnDesc = document.getElementById("drawnDesc");
const drawnTips = document.getElementById("drawnTips");

function initDrawDropdown() {
  drawCategorySelect.innerHTML = '<option value="all">任意主題</option>';
  window.gameData.categories.forEach(cat => {
    const opt = document.createElement("option");
    opt.value = cat.id;
    opt.innerText = cat.name.split(' (')[0];
    drawCategorySelect.appendChild(opt);
  });
}

let isDrawing = false;
drawBtn.addEventListener("click", () => {
  if (isDrawing) return;
  isDrawing = true;

  const selectedCat = drawCategorySelect.value;
  let pool = window.gameData.achievements;
  if (selectedCat !== "all") {
    pool = pool.filter(item => item.category === selectedCat);
  }

  if (pool.length === 0) {
    showToast("此分類下暫無卡片可抽");
    isDrawing = false;
    return;
  }

  const randomItem = pool[Math.floor(Math.random() * pool.length)];

  gameCardInner.classList.remove("flipped");
  setTimeout(() => {
    const catObj = window.gameData.categories.find(c => c.id === randomItem.category);
    drawnCategory.innerText = catObj ? catObj.name.split(' (')[0] : "遊戲卡";
    drawnTitle.innerText = randomItem.title;
    drawnDesc.innerText = randomItem.description;
    drawnTips.innerText = `攻略秘訣：${randomItem.tips}`;
    gameCardInner.classList.add("flipped");
    isDrawing = false;
  }, 350);
});

gameCardScene.addEventListener("click", (e) => {
  if (e.target.closest(".draw-controls") || isDrawing) return;
  if (!gameCardInner.classList.contains("flipped")) {
    drawBtn.click();
  } else {
    gameCardInner.classList.remove("flipped");
  }
});

// --- Q&A 真心話邏輯 ---
const qaCardInner = document.getElementById("qaCardInner");
const qaCardScene = document.getElementById("qaCardScene");
const qaQuestionText = document.getElementById("qaQuestionText");
const nextQaBtn = document.getElementById("nextQaBtn");

function drawRandomQuestion() {
  const qList = window.gameData.questions;
  if (!qList || qList.length === 0) return;
  const randQ = qList[Math.floor(Math.random() * qList.length)];
  qaQuestionText.innerText = randQ;
}

nextQaBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  qaCardInner.classList.remove("flipped");
  setTimeout(() => {
    drawRandomQuestion();
    qaCardInner.classList.add("flipped");
  }, 350);
});

qaCardScene.addEventListener("click", () => {
  if (!qaCardInner.classList.contains("flipped")) {
    drawRandomQuestion();
    qaCardInner.classList.add("flipped");
  } else {
    qaCardInner.classList.remove("flipped");
  }
});

// --- 設定分頁互動 ---
const nameInput = document.getElementById("nicknameInput");
nameInput.addEventListener("input", (e) => {
  userChoices.nickname = e.target.value.trim() || "無名玩家";
  saveLocalData();
});

const avatarBtns = document.querySelectorAll(".avatar-btn");
avatarBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    avatarBtns.forEach(b => b.classList.remove("selected"));
    btn.classList.add("selected");
    userChoices.avatar = btn.innerText;
    saveLocalData();
    showToast(`頭像已更新為 ${userChoices.avatar}`);
  });
});

// --- 備份還原 ---
const backupDataTextarea = document.getElementById("backupData");
const exportBtn = document.getElementById("exportBtn");
const importBtn = document.getElementById("importBtn");
const resetBtn = document.getElementById("resetBtn");

exportBtn.addEventListener("click", () => {
  const encrypted = btoa(encodeURIComponent(JSON.stringify(userChoices)));
  backupDataTextarea.value = encrypted;
  showToast("💾 備份金鑰已成功複製/生成，請妥善保存！");
});

importBtn.addEventListener("click", () => {
  const rawVal = backupDataTextarea.value.trim();
  if (!rawVal) {
    showToast("⚠️ 請先貼上要還原的進度金鑰！");
    return;
  }
  try {
    const decoded = JSON.parse(decodeURIComponent(atob(rawVal)));
    if (decoded && decoded.pa) {
      userChoices = decoded;
      if (!userChoices.nickname) userChoices.nickname = "無名玩家";
      if (!userChoices.avatar) userChoices.avatar = "🕹️";
      saveLocalData();
      syncProfileUI();
      showToast("🎮 遊戲成就進度還原成功！", true);
      backupDataTextarea.value = "";
      renderAchievements();
      renderMatcher();
      renderCustomAchievements();
    } else {
      showToast("⚠️ 貼上的資料格式有誤，請確認是否完整複製！");
    }
  } catch (e) {
    showToast("⚠️ 解析失敗，請檢查金鑰字串是否正確！");
  }
});

resetBtn.addEventListener("click", () => {
  if (confirm("⚠️ 確定要清除所有本地遊戲成就解鎖紀錄與設定嗎？此動作將無法還原！")) {
    userChoices = { pa: {}, nickname: "無名玩家", avatar: "🕹️" };
    saveLocalData();
    syncProfileUI();
    showToast("🗑️ 所有本地數據已重置清除！");
    renderAchievements();
    renderMatcher();
    renderCustomAchievements();
  }
});

// --- Canvas 繪製個人分享名片 ---
const openShareBtn = document.getElementById("openShareBtn");
const shareModalBackdrop = document.getElementById("shareModalBackdrop");
const previewCanvas = document.getElementById("sharingPreviewCanvas");
const previewImg = document.getElementById("sharingPreviewImg");
const downloadShareCardBtn = document.getElementById("downloadShareCardBtn");

openShareBtn.addEventListener("click", () => {
  generateShareCard();
});

function getAchievementTotals() {
  const total = window.gameData.achievements.length + customAchievements.length;
  let unlocked = 0;
  let wishes = 0;
  window.gameData.achievements.forEach(item => {
    const state = userChoices.pa[item.id] || "locked";
    if (state === "unlocked") unlocked++;
    if (state === "want") wishes++;
  });
  customAchievements.forEach(ca => { if (ca.unlocked) unlocked++; });
  return { total, unlocked, wishes };
}

function generateShareCard() {
  const canvasElement = previewCanvas;
  const ctx = canvasElement.getContext("2d");

  // 1. 背景 (暗色賽博龐克漸層)
  const grad = ctx.createLinearGradient(0, 0, 0, 1200);
  grad.addColorStop(0, '#05080f');
  grad.addColorStop(0.5, '#0f1a2f');
  grad.addColorStop(1, '#05080f');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 800, 1200);

  // 裝飾性發光圓
  ctx.fillStyle = 'rgba(0, 229, 255, 0.10)';
  ctx.beginPath();
  ctx.arc(150, 250, 280, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = 'rgba(16, 185, 129, 0.08)';
  ctx.beginPath();
  ctx.arc(680, 880, 280, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = 'rgba(168, 85, 247, 0.06)';
  ctx.beginPath();
  ctx.arc(380, 600, 220, 0, Math.PI * 2);
  ctx.fill();

  // 2. 標題
  ctx.textAlign = 'center';
  ctx.font = 'bold 50px sans-serif';
  ctx.fillStyle = '#00e5ff';
  ctx.shadowBlur = 20;
  ctx.shadowColor = 'rgba(0, 229, 255, 0.6)';
  ctx.fillText("G A M E R", 400, 120);
  ctx.shadowBlur = 0;

  ctx.font = 'bold 22px sans-serif';
  ctx.fillStyle = '#10b981';
  ctx.fillText("✦ 遊戲玩家解鎖成就探索卡 ✦", 400, 175);

  ctx.beginPath();
  ctx.moveTo(80, 205);
  ctx.lineTo(720, 205);
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
  ctx.lineWidth = 1.5;
  ctx.stroke();

  // 3. 個人資訊面板
  ctx.textAlign = 'left';
  ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
  ctx.strokeStyle = 'rgba(0, 229, 255, 0.2)';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.roundRect(80, 235, 640, 140, 20);
  ctx.fill();
  ctx.stroke();

  ctx.font = '75px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(userChoices.avatar, 160, 330);

  const stats = getAchievementTotals();
  const pct = Math.round((stats.unlocked / stats.total) * 100) || 0;
  const level = Math.floor(stats.unlocked / 10) + 1;

  let activeMilestone = milestones[0];
  for (let i = milestones.length - 1; i >= 0; i--) {
    if (stats.unlocked >= milestones[i].count) {
      activeMilestone = milestones[i];
      break;
    }
  }

  ctx.textAlign = 'left';
  ctx.font = 'bold 26px sans-serif';
  ctx.fillStyle = '#fff';
  ctx.fillText(userChoices.nickname, 240, 290);

  ctx.font = 'bold 18px sans-serif';
  ctx.fillStyle = '#00e5ff';
  ctx.fillText(`等級 LV.${level} - ${activeMilestone.title} ${activeMilestone.icon}`, 240, 328);

  ctx.font = '14px sans-serif';
  ctx.fillStyle = '#9ca3af';
  ctx.fillText(activeMilestone.desc.substring(0, 25) + "...", 240, 355);

  // 4. 進度數據盒
  ctx.textAlign = 'center';
  ctx.fillStyle = 'rgba(16, 185, 129, 0.04)';
  ctx.strokeStyle = 'rgba(16, 185, 129, 0.2)';
  ctx.beginPath();
  ctx.roundRect(80, 400, 640, 110, 15);
  ctx.fill();
  ctx.stroke();

  ctx.font = 'bold 18px sans-serif';
  ctx.fillStyle = '#10b981';
  ctx.fillText("個人遊戲解鎖進度", 240, 442);

  ctx.font = 'bold 36px sans-serif';
  ctx.fillStyle = '#fff';
  ctx.fillText(`${pct}%`, 240, 488);

  ctx.font = 'bold 18px sans-serif';
  ctx.fillStyle = '#f59e0b';
  ctx.fillText("累積解鎖成就", 560, 442);

  ctx.font = 'bold 36px sans-serif';
  ctx.fillStyle = '#fff';
  ctx.fillText(`${stats.unlocked} / ${stats.total}`, 560, 488);

  // 5. 亮點想挑戰的願望清單
  ctx.textAlign = 'center';
  ctx.font = 'bold 20px sans-serif';
  ctx.fillStyle = '#f59e0b';
  ctx.fillText("🎮 我的遊戲攻略目標 🎮", 400, 565);

  ctx.beginPath();
  ctx.moveTo(80, 585);
  ctx.lineTo(720, 585);
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
  ctx.stroke();

  const wishesList = window.gameData.achievements.filter(item => {
    return (userChoices.pa[item.id] || "locked") === "want";
  });

  ctx.textAlign = 'center';
  if (wishesList.length === 0) {
    ctx.font = 'italic 18px sans-serif';
    ctx.fillStyle = '#4b5563';
    ctx.fillText("尚無特別想挑戰的項目，快去勾選您感興趣的清單吧！", 400, 690);
    ctx.fillText("在清單頁面中，點擊項目底部的『想挑戰』即可在此亮起 🎯", 400, 725);
  } else {
    let startY = 635;
    const drawCount = Math.min(wishesList.length, 5);

    for (let i = 0; i < drawCount; i++) {
      const item = wishesList[i];
      const catObj = window.gameData.categories.find(c => c.id === item.category);
      const catIcon = catObj ? catObj.icon : "🎮";

      ctx.fillStyle = 'rgba(255, 255, 255, 0.02)';
      ctx.beginPath();
      ctx.roundRect(80, startY - 30, 640, 50, 10);
      ctx.fill();

      ctx.textAlign = 'left';
      ctx.font = 'bold 16px sans-serif';
      ctx.fillStyle = '#00e5ff';
      ctx.fillText(`${catIcon}  ${item.title}`, 110, startY + 2);

      ctx.textAlign = 'right';
      ctx.font = 'bold 13px sans-serif';
      ctx.fillStyle = '#f59e0b';
      ctx.fillText("TARGET 🎯", 690, startY + 2);

      startY += 62;
    }

    if (wishesList.length > 5) {
      ctx.textAlign = 'center';
      ctx.font = 'bold 15px sans-serif';
      ctx.fillStyle = '#9ca3af';
      ctx.fillText(`... 以及其他共 ${wishesList.length - 5} 個已勾選目標 ...`, 400, startY + 2);
    }
  }

  // 6. 金句
  ctx.textAlign = 'center';
  ctx.font = 'italic 16px sans-serif';
  ctx.fillStyle = '#9ca3af';
  ctx.fillText("「遊戲的感動，是我們無悔的青春與信仰。」", 400, 980);

  // 7. 二維碼與底欄
  ctx.fillStyle = "#ffffff";
  ctx.beginPath();
  ctx.roundRect(575, 1015, 140, 140, 10);
  ctx.fill();

  const qrContainer = document.createElement("div");
  new QRCode(qrContainer, {
    text: window.location.href || "https://gamer-achievement.pages.dev",
    width: 130,
    height: 130,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.M
  });

  setTimeout(() => {
    const qrCanvas = qrContainer.querySelector("canvas");
    if (qrCanvas) {
      ctx.drawImage(qrCanvas, 580, 1020, 130, 130);
    }
    ctx.strokeStyle = "#00e5ff";
    ctx.lineWidth = 2;
    ctx.strokeRect(575, 1015, 140, 140);
  }, 50);

  ctx.textAlign = 'left';
  ctx.font = 'bold 24px sans-serif';
  ctx.fillStyle = '#f59e0b';
  ctx.fillText("GAMER 遊戲解鎖成就清單", 80, 1052);

  ctx.font = 'bold 15px sans-serif';
  ctx.fillStyle = '#00e5ff';
  ctx.fillText(window.location.host || "gamer-achievement.pages.dev", 80, 1088);

  ctx.font = '14px sans-serif';
  ctx.fillStyle = '#9ca3af';
  ctx.fillText("掃描右側二維碼，挑戰你的遊戲玩家等級", 80, 1120);

  ctx.font = '12px sans-serif';
  ctx.fillStyle = '#4b5563';
  ctx.fillText("100% 瀏覽器本地安全隱私保護 • 網頁參考自動漫成就清單", 80, 1150);

  ctx.font = 'bold 13px sans-serif';
  ctx.fillStyle = '#00e5ff';
  ctx.fillText(SITE_URL, 80, 1175);

  setTimeout(() => {
    previewImg.src = canvasElement.toDataURL("image/png");
    shareModalBackdrop.style.display = "flex";
  }, 150);
}

downloadShareCardBtn.addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = `gamer_achievements_${userChoices.nickname}.png`;
  link.href = previewCanvas.toDataURL("image/png");
  link.click();
});

document.getElementById("shareThreadsBtn").addEventListener("click", () => {
  const text = encodeURIComponent(`我已在 GAMER 解鎖了遊戲成就！我的玩家等級是 LV.${Math.floor(getAchievementTotals().unlocked / 10) + 1} 🚀 快來挑戰你的遊戲解鎖成就清單 🔓\n👉 ${window.location.href}`);
  window.open(`https://threads.net/intent/post?text=${text}`, "_blank");
});
document.getElementById("shareFacebookBtn").addEventListener("click", () => {
  const url = encodeURIComponent(window.location.href);
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank");
});
document.getElementById("shareTwitterBtn").addEventListener("click", () => {
  const text = encodeURIComponent(`我已在 GAMER 解鎖了遊戲成就！我的玩家等級是 LV.${Math.floor(getAchievementTotals().unlocked / 10) + 1} 🚀 快來挑戰你的遊戲解鎖成就清單 🔓\n👉 ${window.location.href}`);
  window.open(`https://twitter.com/intent/tweet?text=${text}`, "_blank");
});

// --- Sparkle Particles (Canvas 粒子特效) ---
const canvas = document.getElementById("sparkleCanvas");
let sparkleCtx, particles = [], sparkleAnimId;

function initSparkles() {
  if (!canvas) return;
  sparkleCtx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}

window.triggerSparkles = function () {
  const count = 40;
  const colors = ["#00e5ff", "#10b981", "#f59e0b", "#a855f7", "#ef4444", "#ffffff"];
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height * 0.5 + canvas.height * 0.3,
      size: Math.random() * 4 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      speedX: (Math.random() - 0.5) * 3,
      speedY: -Math.random() * 5 - 2,
      life: 1,
      decay: Math.random() * 0.03 + 0.02
    });
  }
  if (!sparkleAnimId) animateSparkles();
};

function animateSparkles() {
  if (particles.length === 0) {
    sparkleAnimId = null;
    return;
  }
  sparkleCtx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.x += p.speedX;
    p.y += p.speedY;
    p.life -= p.decay;
    if (p.life <= 0) { particles.splice(i, 1); continue; }
    sparkleCtx.globalAlpha = p.life;
    sparkleCtx.beginPath();
    sparkleCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    sparkleCtx.fillStyle = p.color;
    sparkleCtx.fill();
  }
  sparkleCtx.globalAlpha = 1;
  sparkleAnimId = requestAnimationFrame(animateSparkles);
}

// --- Bottom Navigation Tab Switching ---
document.querySelectorAll(".nav-item").forEach(item => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".nav-item").forEach(n => n.classList.remove("active"));
    item.classList.add("active");
    const tab = item.dataset.tab;
    document.querySelectorAll(".tab-content").forEach(t => t.classList.remove("active"));
    const target = document.getElementById(`${tab}Tab`);
    if (target) target.classList.add("active");

    // 切換到特定分頁時重新渲染
    if (tab === "matcher") renderMatcher();
    if (tab === "card-draw") initDrawDropdown();
    if (tab === "settings") syncProfileUI();
  });
});

// --- Search & Filter 監聽 ---
searchBar.addEventListener("input", () => renderAchievements());

document.querySelectorAll(".status-filters .status-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".status-filters .status-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderAchievements();
  });
});

// --- 初始化 ---
loadLocalData();
loadCustomAchievements();
renderCategoryFilters();
renderAchievements();
renderCustomAchievements();
initDrawDropdown();
initSparkles();
calculateProgress();
checkFirstVisit();
syncProfileUI();
