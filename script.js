const resources = [
  {
    title: "2026 校园 Yearbook",
    desc: "收录年度班级合影、活动纪实、社团风采和校园大事记。",
    year: 2026,
    category: "yearbook",
    label: "Yearbook",
    type: "年鉴",
    hot: 96,
    downloads: 820,
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "春季运动会照片集",
    desc: "开幕式、接力赛、领奖瞬间等活动照片，支持按活动继续查看。",
    year: 2026,
    category: "photos",
    label: "活动照片",
    type: "照片",
    hot: 91,
    downloads: 642,
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "校园文化节影像资料",
    desc: "舞台演出、社团展位和合影留念等精选照片资源。",
    year: 2026,
    category: "photos",
    label: "活动照片",
    type: "照片",
    hot: 88,
    downloads: 591,
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "CAS 使用指南",
    desc: "统一身份认证、常见问题、账号找回和校内系统访问说明。",
    year: 2026,
    category: "other",
    label: "其他资源",
    type: "文档",
    hot: 79,
    downloads: 734,
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "2025 毕业纪念册",
    desc: "毕业典礼、班级寄语、校园告别和年度人物记录。",
    year: 2025,
    category: "yearbook",
    label: "Yearbook",
    type: "年鉴",
    hot: 83,
    downloads: 506,
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "图书馆资源导览",
    desc: "电子图书、学术期刊、研究数据库和馆藏检索教程。",
    year: 2025,
    category: "other",
    label: "其他资源",
    type: "文档",
    hot: 70,
    downloads: 488,
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=80"
  }
];

const photos = [
  {
    activity: "春季运动会",
    year: 2026,
    hot: 98,
    images: [
      ["开幕式", "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=85"],
      ["接力赛", "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1200&q=85"],
      ["领奖时刻", "https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=1200&q=85"],
      ["操场看台", "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=85"]
    ]
  },
  {
    activity: "校园文化节",
    year: 2026,
    hot: 92,
    images: [
      ["舞台演出", "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=1200&q=85"],
      ["社团展位", "https://images.unsplash.com/photo-1515169067865-5387ec356754?auto=format&fit=crop&w=1200&q=85"],
      ["合影留念", "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=85"],
      ["音乐现场", "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=85"]
    ]
  },
  {
    activity: "毕业典礼",
    year: 2026,
    hot: 89,
    images: [
      ["拨穗仪式", "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=85"],
      ["毕业合照", "https://images.unsplash.com/photo-1627556704302-624286467c65?auto=format&fit=crop&w=1200&q=85"],
      ["校园告别", "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=85"]
    ]
  },
  {
    activity: "新生迎新会",
    year: 2025,
    hot: 76,
    images: [
      ["签到现场", "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=85"],
      ["志愿服务", "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=85"],
      ["校园导览", "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=85"]
    ]
  },
  {
    activity: "艺术展览",
    year: 2025,
    hot: 72,
    images: [
      ["展厅", "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1200&q=85"],
      ["作品墙", "https://images.unsplash.com/photo-1545989253-02cc26577f88?auto=format&fit=crop&w=1200&q=85"],
      ["观展交流", "https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=1200&q=85"]
    ]
  }
];

const navButtons = document.querySelectorAll("[data-page]");
const pagePanels = document.querySelectorAll("[data-page-panel]");
const resourceGrid = document.querySelector("#resource-grid");
const resourceSearch = document.querySelector("#resource-search");
const resourceYear = document.querySelector("#resource-year");
const resourceSort = document.querySelector("#resource-sort");
const resourceFilterCard = document.querySelector("#resources-page .filter-card");
const mainColumn = document.querySelector("#resources-page .main-column");
const photoGrid = document.querySelector("#photo-grid");
const photoIntro = document.querySelector("#photo-intro");
const photoSearch = document.querySelector("#photo-search");
const photoYear = document.querySelector("#photo-year");
const photoSort = document.querySelector("#photo-sort");
const activityList = document.querySelector("#activity-list");
const photoModal = document.querySelector("#photo-modal");
const modalTitle = document.querySelector("#modal-title");
const modalMeta = document.querySelector("#modal-meta");
const modalImage = document.querySelector("#modal-image");
const modalDownload = document.querySelector("#modal-download");

let resourceCategory = "all";
let selectedActivity = photos[0].activity;
let activePhotoItems = [];

function showPage(pageName) {
  pagePanels.forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.pagePanel === pageName);
  });

  document.querySelectorAll(".nav-link").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.page === pageName);
  });
}

function resourceIcon(category) {
  const icons = {
    yearbook: '<svg viewBox="0 0 24 24"><path d="M6 4.5A2.5 2.5 0 0 1 8.5 2H20v18H8.5A2.5 2.5 0 0 0 6 22V4.5z"/><path d="M6 4.5A2.5 2.5 0 0 0 3.5 2H3v18h.5A2.5 2.5 0 0 1 6 22"/><path d="M10 7h6"/><path d="M10 11h4"/></svg>',
    photos: '<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="8.5" cy="10" r="1.5"/><path d="m21 15-5-5L5 19"/></svg>',
    other: '<svg viewBox="0 0 24 24"><path d="M3 7h7l2 2h9v9a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z"/><path d="M3 7V6a3 3 0 0 1 3-3h4l2 4"/></svg>'
  };
  return icons[category] || icons.other;
}

function sortResources(a, b, sort) {
  if (sort === "new") return b.year - a.year;
  if (sort === "old") return a.year - b.year;
  if (sort === "download") return b.downloads - a.downloads;
  return b.hot - a.hot;
}

function renderResources() {
  updateResourceMode();

  const keyword = resourceSearch.value.trim().toLowerCase();
  const year = resourceYear.value;
  const sort = resourceSort.value;

  const filtered = resources
    .filter((item) => resourceCategory === "all" || item.category === resourceCategory)
    .filter((item) => year === "all" || String(item.year) === year)
    .filter((item) => {
      const source = `${item.title} ${item.desc} ${item.label} ${item.type}`.toLowerCase();
      return source.includes(keyword);
    })
    .sort((a, b) => sortResources(a, b, sort));

  if (!filtered.length) {
    resourceGrid.innerHTML = '<div class="empty-state">没有找到匹配的资源</div>';
    return;
  }

  resourceGrid.innerHTML = filtered.map((item) => `
    <article class="resource-card">
      <div class="thumb">
        <img src="${item.image}" alt="${item.title}">
        <span class="pill">${item.label}</span>
        <span class="resource-icon" aria-hidden="true">${resourceIcon(item.category)}</span>
      </div>
      <div class="resource-body">
        <h2>${item.title}</h2>
        <p>${item.desc}</p>
        <div class="meta-row">
          <span>${item.year}</span>
          <span>${resourceIcon(item.category)} 热度 ${item.hot}</span>
          <span>下载 ${item.downloads}</span>
        </div>
      </div>
    </article>
  `).join("");
}

function updateResourceMode() {
  const isPhotoMode = resourceCategory === "photos";
  resourceFilterCard.classList.toggle("is-photo-mode", isPhotoMode);
  mainColumn.classList.toggle("is-photo-mode", isPhotoMode);
}

function sortActivities(a, b, sort) {
  if (sort === "new") return b.year - a.year;
  if (sort === "old") return a.year - b.year;
  if (sort === "photoCount") return b.images.length - a.images.length;
  return b.hot - a.hot;
}

function getFilteredActivities() {
  const keyword = photoSearch.value.trim().toLowerCase();
  const year = photoYear.value;
  const sort = photoSort.value;

  return photos
    .filter((item) => year === "all" || String(item.year) === year)
    .filter((item) => item.activity.toLowerCase().includes(keyword))
    .sort((a, b) => sortActivities(a, b, sort));
}

function renderActivityList(activities) {
  const title = '<h3>选择活动</h3>';
  if (!activities.length) {
    activityList.innerHTML = `${title}<div class="empty-state">暂无活动</div>`;
    return;
  }

  if (!activities.some((item) => item.activity === selectedActivity)) {
    selectedActivity = activities[0].activity;
  }

  activityList.innerHTML = title + activities.map((item) => `
    <button class="filter-option ${item.activity === selectedActivity ? "is-selected" : ""}" type="button" data-photo-activity="${item.activity}">
      <span>${item.activity}</span>
      <span class="activity-count">${item.images.length} 张 · 热度 ${item.hot}</span>
    </button>
  `).join("");

  activityList.querySelectorAll("[data-photo-activity]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedActivity = button.dataset.photoActivity;
      renderPhotos();
    });
  });
}

function renderPhotos() {
  const activities = getFilteredActivities();
  renderActivityList(activities);

  const current = activities.find((item) => item.activity === selectedActivity);
  if (!current) {
    photoIntro.innerHTML = '<div><h1>活动照片</h1><p>没有找到匹配的活动，请调整筛选条件。</p></div>';
    photoGrid.innerHTML = "";
    activePhotoItems = [];
    return;
  }

  activePhotoItems = current.images.map(([title, src], index) => ({
    title,
    src,
    activity: current.activity,
    year: current.year,
    index
  }));

  photoIntro.innerHTML = `
    <div>
      <h1>${current.activity}</h1>
      <p>${current.images.length} 张照片</p>
    </div>
    <button class="download-button" type="button" data-download-activity>下载整个活动</button>
  `;

  photoGrid.innerHTML = activePhotoItems.map((item, index) => `
    <article class="photo-item" tabindex="0" role="button" data-photo-index="${index}" aria-label="查看 ${item.title}">
      <img src="${item.src}" alt="${item.title}">
    </article>
  `).join("");

  photoIntro.querySelector("[data-download-activity]").addEventListener("click", downloadCurrentActivity);

  photoGrid.querySelectorAll("[data-photo-index]").forEach((item) => {
    const open = () => openPhotoModal(Number(item.dataset.photoIndex));
    item.addEventListener("click", open);
    item.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open();
      }
    });
  });
}

function openPhotoModal(index) {
  const item = activePhotoItems[index];
  if (!item) return;

  modalTitle.textContent = item.title;
  modalMeta.textContent = `${item.activity} · ${item.year}`;
  modalImage.src = item.src;
  modalImage.alt = item.title;
  modalDownload.href = item.src;
  modalDownload.setAttribute("download", `${item.activity}-${item.title}.jpg`);
  photoModal.classList.add("is-open");
  photoModal.setAttribute("aria-hidden", "false");
}

function downloadCurrentActivity() {
  activePhotoItems.forEach((item, index) => {
    const link = document.createElement("a");
    link.href = item.src;
    link.download = `${item.activity}-${String(index + 1).padStart(2, "0")}-${item.title}.jpg`;
    document.body.appendChild(link);
    link.click();
    link.remove();
  });
}

function closePhotoModal() {
  photoModal.classList.remove("is-open");
  photoModal.setAttribute("aria-hidden", "true");
  modalImage.src = "";
}

navButtons.forEach((button) => {
  button.addEventListener("click", () => showPage(button.dataset.page));
});

document.querySelectorAll("[data-resource-category]").forEach((button) => {
  button.addEventListener("click", () => {
    resourceCategory = button.dataset.resourceCategory;
    document.querySelectorAll("[data-resource-category]").forEach((item) => {
      item.classList.toggle("is-selected", item === button);
    });
    renderResources();
    if (resourceCategory === "photos") {
      renderPhotos();
    }
  });
});

[resourceSearch, resourceYear, resourceSort].forEach((control) => {
  control.addEventListener("input", renderResources);
});

[photoSearch, photoYear, photoSort].forEach((control) => {
  control.addEventListener("input", renderPhotos);
});

document.querySelectorAll("[data-close-modal]").forEach((item) => {
  item.addEventListener("click", closePhotoModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && photoModal.classList.contains("is-open")) {
    closePhotoModal();
  }
});

renderResources();
renderPhotos();
