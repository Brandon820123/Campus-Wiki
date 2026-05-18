const resources = [
  {
    title: "校园论坛热门讨论",
    desc: "本周热门话题：期末复习经验分享、社团招新、校园活动推荐",
    year: 2026,
    category: "论坛",
    type: "论坛",
    image: "",
    media: false
  },
  {
    title: "CAS项目库使用指南",
    desc: "如何使用CAS系统进行统一身份认证，访问校园各类资源",
    year: 2026,
    category: "CAS",
    type: "资源",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80",
    media: true,
    duration: "5:32"
  },
  {
    title: "学术讲座精彩回顾",
    desc: "诺贝尔奖得主校园讲座：人工智能与未来科技发展",
    year: 2026,
    category: "学习资源",
    type: "资源",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80",
    media: true,
    duration: "45:20"
  },
  {
    title: "校园生活照片集",
    desc: "记录美好时光：春季运动会、文化节、毕业典礼精彩瞬间",
    year: 2026,
    category: "校园生活",
    type: "资源",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
    media: false
  },
  {
    title: "图书馆资源导览",
    desc: "电子图书、学术期刊、研究数据库使用教程",
    year: 2025,
    category: "学习资源",
    type: "资源",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80",
    media: false
  },
  {
    title: "社团活动视频集锦",
    desc: "舞蹈社、话剧社、音乐社年度汇演精彩表演",
    year: 2025,
    category: "校园生活",
    type: "资源",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80",
    media: true,
    duration: "12:45"
  }
];

const photos = [
  {
    activity: "春季运动会",
    year: 2026,
    images: [
      ["开幕式", "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=700&q=80"],
      ["接力赛", "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=700&q=80"],
      ["领奖时刻", "https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=700&q=80"]
    ]
  },
  {
    activity: "校园文化节",
    year: 2026,
    images: [
      ["舞台演出", "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=700&q=80"],
      ["社团展位", "https://images.unsplash.com/photo-1515169067865-5387ec356754?auto=format&fit=crop&w=700&q=80"],
      ["合影留念", "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=700&q=80"]
    ]
  },
  {
    activity: "毕业典礼",
    year: 2026,
    images: [
      ["拨穗礼", "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=700&q=80"],
      ["毕业合照", "https://images.unsplash.com/photo-1627556704302-624286467c65?auto=format&fit=crop&w=700&q=80"],
      ["校园告别", "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=700&q=80"]
    ]
  },
  {
    activity: "新生迎新会",
    year: 2025,
    images: [
      ["签到现场", "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=700&q=80"],
      ["志愿服务", "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=700&q=80"],
      ["校园导览", "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=700&q=80"]
    ]
  },
  {
    activity: "艺术展览",
    year: 2025,
    images: [
      ["展厅", "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=700&q=80"],
      ["作品墙", "https://images.unsplash.com/photo-1545989253-02cc26577f88?auto=format&fit=crop&w=700&q=80"],
      ["观展交流", "https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=700&q=80"]
    ]
  }
];

const navButtons = document.querySelectorAll("[data-page]");
const pagePanels = document.querySelectorAll("[data-page-panel]");
const resourceGrid = document.querySelector("#resource-grid");
const resourceSearch = document.querySelector("#resource-search");
const resourceYear = document.querySelector("#resource-year");
const resourceSort = document.querySelector("#resource-sort");
const photoGrid = document.querySelector("#photo-grid");
const photoIntro = document.querySelector("#photo-intro");
const photoSearch = document.querySelector("#photo-search");
const photoYear = document.querySelector("#photo-year");
const photoSort = document.querySelector("#photo-sort");

let resourceCategory = "all";
let selectedActivity = "";

function showPage(pageName) {
  pagePanels.forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.pagePanel === pageName);
  });

  document.querySelectorAll(".nav-link").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.page === pageName);
  });
}

function resourceIcon(type) {
  if (type === "论坛") {
    return '<svg viewBox="0 0 24 24"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/></svg>';
  }
  return '<svg viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5z"/></svg>';
}

function renderResources() {
  const keyword = resourceSearch.value.trim().toLowerCase();
  const year = resourceYear.value;
  const sort = resourceSort.value;

  const filtered = resources
    .filter((item) => resourceCategory === "all" || item.category === resourceCategory)
    .filter((item) => year === "all" || String(item.year) === year)
    .filter((item) => {
      const source = `${item.title} ${item.desc} ${item.category}`.toLowerCase();
      return source.includes(keyword);
    })
    .sort((a, b) => (sort === "new" ? b.year - a.year : a.year - b.year));

  if (!filtered.length) {
    resourceGrid.innerHTML = '<div class="empty-state">没有找到匹配的资源</div>';
    return;
  }

  resourceGrid.innerHTML = filtered.map((item) => {
    const thumb = item.image
      ? `<img src="${item.image}" alt="${item.title}">`
      : '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.5-3.5L9 20"/></svg>';
    const media = item.media ? `<span class="play" aria-hidden="true"></span><span class="duration">${item.duration}</span>` : "";

    return `
      <article class="resource-card">
        <div class="thumb ${item.image ? "" : "empty"}">
          ${thumb}
          <span class="pill">${item.category === "学习资源" ? "学术" : item.category}</span>
          ${media}
        </div>
        <div class="resource-body">
          <h2>${item.title}</h2>
          <p>${item.desc}</p>
          <div class="meta-row">
            <span>${item.year}</span>
            <span>${resourceIcon(item.type)}${item.type}</span>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function renderPhotos() {
  const keyword = photoSearch.value.trim().toLowerCase();
  const year = photoYear.value;
  const sort = photoSort.value;

  const available = photos
    .filter((item) => !selectedActivity || item.activity === selectedActivity)
    .filter((item) => year === "all" || String(item.year) === year)
    .filter((item) => item.activity.toLowerCase().includes(keyword))
    .sort((a, b) => (sort === "new" ? b.year - a.year : a.year - b.year));

  if (!selectedActivity) {
    photoIntro.textContent = "请从左侧选择一个活动查看照片";
    photoGrid.innerHTML = "";
    return;
  }

  if (!available.length) {
    photoIntro.textContent = `${selectedActivity} 暂无匹配照片`;
    photoGrid.innerHTML = "";
    return;
  }

  const current = available[0];
  photoIntro.innerHTML = `<h1>${current.activity}</h1><p>${current.year} 年活动照片</p>`;
  photoGrid.innerHTML = current.images.map(([title, src]) => `
    <article class="photo-item">
      <img src="${src}" alt="${title}">
      <strong>${title}</strong>
    </article>
  `).join("");
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
  });
});

document.querySelectorAll("[data-photo-activity]").forEach((button) => {
  button.addEventListener("click", () => {
    selectedActivity = button.dataset.photoActivity;
    document.querySelectorAll("[data-photo-activity]").forEach((item) => {
      item.classList.toggle("is-selected", item === button);
    });
    renderPhotos();
  });
});

[resourceSearch, resourceYear, resourceSort].forEach((control) => {
  control.addEventListener("input", renderResources);
});

[photoSearch, photoYear, photoSort].forEach((control) => {
  control.addEventListener("input", renderPhotos);
});

renderResources();
renderPhotos();
