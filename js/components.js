/**
 * 羌藏耕牧智护 - 公共组件
 * 包含：双语切换、治理端导航栏、经营端底部Tab栏、模态框、Toast、时间更新
 */

// ========== 双语切换 ==========
function initLanguageSwitch() {
  const btn = document.getElementById('lang-switch');
  if (!btn) return;

  let currentLang = localStorage.getItem('lang') || 'zh';

  function applyLang(lang) {
    document.querySelectorAll('[data-zh][data-bo]').forEach(el => {
      el.textContent = el.getAttribute(`data-${lang}`);
    });
    btn.textContent = lang === 'zh' ? '藏文' : '中文';
    localStorage.setItem('lang', lang);
  }

  applyLang(currentLang);

  btn.addEventListener('click', () => {
    currentLang = currentLang === 'zh' ? 'bo' : 'zh';
    applyLang(currentLang);
  });
}

// ========== 实时时间更新 ==========
function initClock() {
  const el = document.getElementById('live-clock');
  if (!el) return;

  function update() {
    const now = new Date();
    const str = now.toLocaleString('zh-CN', {
      year: 'numeric', month: '2-digit', day: '2-digit',
      hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false
    });
    el.textContent = str;
  }
  update();
  setInterval(update, 1000);
}

// ========== Toast 提示 ==========
function showToast(message, duration = 2000) {
  let toast = document.getElementById('global-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'global-toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), duration);
}

// ========== 模态框 ==========
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// 点击遮罩关闭模态框
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-overlay')) {
    e.target.classList.remove('active');
    document.body.style.overflow = '';
  }
});

// ========== 治理端侧边栏菜单定义 ==========
const GOV_SIDEBAR_MENU = [
  {
    key: 'dashboard',
    label: '监控总览',
    labelBo: 'ལྟ་ཞིབ་སྤྱི་བསྡོམས།',
    icon: 'layout-dashboard',
    href: 'dashboard.html'
  },
  {
    key: 'alerts',
    label: 'AI预警中心',
    labelBo: 'AI ཉེན་བརྡ་ལྟེ་གནས།',
    icon: 'bell-ring',
    href: 'alerts.html'
  },
  {
    key: 'analytics',
    label: '辖区数据分析',
    labelBo: 'ས་ཁུལ་གཞི་གྲངས་དབྱེ་ཞིབ།',
    icon: 'bar-chart-3',
    href: 'analytics.html'
  },
  {
    key: 'farmers',
    label: '农户管理',
    labelBo: 'ཞིང་པ་དོ་དམ།',
    icon: 'users',
    href: 'farmers.html'
  }
];

// ========== 治理端页面布局（顶部导航栏 + 左侧菜单 + 主内容区）==========
function renderGovNavbar(activeKey, breadcrumb) {
  return `
    <!-- 顶部导航栏 -->
    <header class="fixed top-0 left-0 right-0 bg-white border-b border-gray-100 z-50" style="height:56px">
      <div class="flex items-center justify-between h-full px-6">
        <div class="flex items-center gap-3">
          <button id="sidebar-toggle" class="lg:hidden w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition text-gray-500">
            <i data-lucide="menu" class="w-5 h-5"></i>
          </button>
          <a href="dashboard.html" class="flex items-center gap-2 text-primary hover:opacity-80 transition">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M14 4L4 12l3 2v8h6v-6h2v6h6v-8l3-2L14 4z" fill="#1A6B42"/>
              <circle cx="20" cy="8" r="3" fill="#1A6B42" opacity="0.3"/>
              <path d="M20 5.5v5M17.5 8h5" stroke="#1A6B42" stroke-width="1" stroke-linecap="round"/>
            </svg>
            <span class="font-semibold text-gray-800">羌藏耕牧智护</span>
          </a>
          <span class="text-gray-300 hidden sm:inline">|</span>
          <nav class="text-sm text-gray-500 hidden sm:block">${breadcrumb}</nav>
        </div>
        <div class="flex items-center gap-4">
          <button id="lang-switch" class="lang-switch">藏文</button>
          <span id="live-clock" class="text-sm text-gray-500 tabular-nums hidden sm:inline"></span>
          <div class="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center">
            <i data-lucide="user" class="w-4 h-4 text-primary"></i>
          </div>
        </div>
      </div>
    </header>
    <!-- 顶部占位 -->
    <div style="height:56px"></div>

    <!-- 主体：左侧菜单 + 右侧内容 -->
    <div class="gov-layout">
      <!-- 侧边栏遮罩（移动端） -->
      <div id="sidebar-overlay" class="sidebar-overlay"></div>

      <!-- 左侧菜单 -->
      <aside id="gov-sidebar" class="gov-sidebar">
        <nav class="py-4 px-3 space-y-1">
          ${GOV_SIDEBAR_MENU.map(item => `
            <a href="${item.href}" class="gov-nav-item flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition ${item.key === activeKey ? 'gov-nav-item-active' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'}">
              <i data-lucide="${item.icon}" class="w-5 h-5 flex-shrink-0"></i>
              <span data-zh="${item.label}" data-bo="${item.labelBo}">${item.label}</span>
            </a>
          `).join('')}
        </nav>

        <!-- 底部用户信息 -->
        <div class="mt-auto px-3 py-4 border-t border-gray-100">
          <div class="flex items-center gap-3 px-3 py-2">
            <div class="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center flex-shrink-0">
              <i data-lucide="user" class="w-4 h-4 text-primary"></i>
            </div>
            <div class="min-w-0 flex-1">
              <p class="text-sm font-medium text-gray-800 truncate">基层治理员</p>
              <p class="text-xs text-gray-400 truncate">admin@abazhou.gov</p>
            </div>
          </div>
          <a href="../login.html" class="flex items-center gap-2 px-3 py-2 mt-1 text-xs text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-50 transition">
            <i data-lucide="log-out" class="w-4 h-4"></i>
            <span>退出登录</span>
          </a>
        </div>
      </aside>

      <!-- 右侧主内容区 -->
      <main class="gov-main">`;
}

// ========== 治理端页面尾部闭合标签（配合 renderGovNavbar 使用）==========
function renderGovFooter() {
  return `
      </main>
    </div>
  `;
}

// ========== 初始化治理端侧边栏交互 ==========
function initGovSidebar() {
  const toggleBtn = document.getElementById('sidebar-toggle');
  const sidebar = document.getElementById('gov-sidebar');
  const overlay = document.getElementById('sidebar-overlay');

  if (!sidebar) return;

  function openSidebar() {
    sidebar.classList.add('open');
    if (overlay) overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeSidebar() {
    sidebar.classList.remove('open');
    if (overlay) overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (sidebar.classList.contains('open')) {
        closeSidebar();
      } else {
        openSidebar();
      }
    });
  }

  if (overlay) {
    overlay.addEventListener('click', closeSidebar);
  }
}

// ========== 经营端底部Tab栏 ==========
function renderFarmingTabBar(activeTab) {
  const tabs = [
    { key: 'home', label: '首页', icon: 'home', href: 'farm-home.html', labelBo: 'འཛུགས་ཤོག' },
    { key: 'bot', label: '助手', icon: 'bot', href: 'ai-assistant.html', labelBo: 'རོགས་རམ' },
    { key: 'heart', label: '认养', icon: 'heart', href: 'adoption.html', labelBo: 'གློག་སྐྱེས་གསོག' },
    { key: 'image', label: '营销', icon: 'image', href: 'marketing.html', labelBo: 'ཚོང་གཉེར' },
    { key: 'user', label: '我的', icon: 'user', href: 'yak-profile.html', labelBo: 'ང་' }
  ];

  return `
    <nav class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 z-40" style="height:60px">
      <div class="farming-container flex items-center justify-around h-full">
        ${tabs.map(tab => `
          <a href="${tab.href}" class="flex flex-col items-center gap-0.5 ${tab.key === activeTab ? 'text-primary' : 'text-gray-400'} transition" data-zh="${tab.label}" data-bo="${tab.labelBo}">
            <i data-lucide="${tab.icon}" class="w-5 h-5"></i>
            <span class="text-[10px]">${tab.label}</span>
          </a>
        `).join('')}
      </div>
    </nav>
  `;
}

// ========== 经营端子页面导航（F6/F7/F8）==========
function renderSubPageHeader(title, backUrl) {
  return `
    <header class="sticky top-0 bg-white border-b border-gray-100 z-30 px-4 py-3 flex items-center gap-3">
      <a href="${backUrl}" class="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition">
        <i data-lucide="arrow-left" class="w-5 h-5 text-gray-600"></i>
      </a>
      <h1 class="text-base font-semibold text-gray-800 flex-1">${title}</h1>
      <button onclick="logoutConfirm()" class="w-8 h-8 flex items-center justify-center rounded-full hover:bg-red-50 transition text-gray-400 hover:text-red-500" title="退出登录">
        <i data-lucide="log-out" class="w-4.5 h-4.5"></i>
      </button>
    </header>
  `;
}

// ========== 退出登录确认 ==========
function logoutConfirm() {
  openModal('logout-modal');
}

// ========== 退出登录执行 ==========
function logoutAction() {
  closeModal('logout-modal');
  showToast('已安全退出');
  setTimeout(() => { window.location.href = '../login.html'; }, 500);
}

// ========== 经营端确认退出登录模态框（放在 body 末尾用）==========
function renderLogoutModal() {
  return `
    <div id="logout-modal" class="modal-overlay" onclick="if(event.target===this) closeModal('logout-modal')">
      <div class="bg-white rounded-2xl shadow-xl mx-4 p-6 w-full max-w-sm" onclick="event.stopPropagation()">
        <div class="text-center mb-4">
          <div class="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-3">
            <i data-lucide="log-out" class="w-7 h-7 text-red-500"></i>
          </div>
          <h3 class="text-lg font-semibold text-gray-800" data-zh="确认退出" data-bo="ཐོན་པར་བཀག་འདོད">确认退出</h3>
          <p class="text-sm text-gray-500 mt-1" data-zh="退出后需要重新登录才能使用" data-bo="ཐོན་པར་དང་གསར་དུ་ཐོ་འགོད་བྱེད་དགོས།">退出后需要重新登录才能使用</p>
        </div>
        <div class="flex gap-3">
          <button onclick="closeModal('logout-modal')" class="flex-1 py-2.5 rounded-lg border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 transition text-sm">
            <span data-zh="取消" data-bo="བཀག་སྤོང་">取消</span>
          </button>
          <button onclick="logoutAction()" class="flex-1 py-2.5 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 transition text-sm">
            <span data-zh="确定退出" data-bo="ཐོན་པར་ངོས་ལེན་">确定退出</span>
          </button>
        </div>
      </div>
    </div>
  `;
}

// ========== 手风琴组件 ==========
function initAccordion(containerId, defaultOpen = 0) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const headers = container.querySelectorAll('.accordion-header');
  const contents = container.querySelectorAll('.accordion-content');

  headers.forEach((header, index) => {
    if (index === defaultOpen) {
      header.classList.add('active');
      contents[index].classList.add('open');
    }

    header.addEventListener('click', () => {
      const isOpen = header.classList.contains('active');

      // 关闭所有
      headers.forEach(h => h.classList.remove('active'));
      contents.forEach(c => c.classList.remove('open'));

      // 如果之前不是打开状态，则打开
      if (!isOpen) {
        header.classList.add('active');
        contents[index].classList.add('open');
      }
    });
  });
}

// ========== 初始化公共功能 ==========
function initCommon() {
  initLanguageSwitch();
  initClock();
  // 初始化 Lucide 图标
  if (window.lucide) {
    lucide.createIcons();
  }
}

// ========== Favicon ==========
function setFavicon() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="#1A6B42"/><path d="M16 6L6 14l3 2v8h5v-5h4v5h5v-8l3-2L16 6z" fill="white" opacity="0.9"/></svg>`;
  const link = document.createElement('link');
  link.rel = 'icon';
  link.type = 'image/svg+xml';
  link.href = 'data:image/svg+xml,' + encodeURIComponent(svg);
  document.head.appendChild(link);
}

// 页面加载时自动执行
document.addEventListener('DOMContentLoaded', () => {
  setFavicon();
});
