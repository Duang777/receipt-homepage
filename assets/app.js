
(() => {
  const initialPage = document.body.dataset.page || 'home';
  const PREFERRED_LANG_KEY = 'duang-site-lang';
  const defaultLang = 'en';

  const copy = {
    en: {
      htmlLang: 'en',
      brandName: 'Duang',
      navLabel: 'Primary',
      nav: { home: 'Home', about: 'About', projects: 'Projects', logs: 'Logs', collection: 'Collection', contact: 'Contact' },
      pager: {
        prev: 'Previous',
        next: 'Next',
        prevAria: 'Go to previous page',
        nextAria: 'Go to next page',
      },
      pages: {
        home: {
          title: 'Duang — Home',
          brandSub: 'receipt homepage',
          note: 'Left click to grab the receipt. Hovering adds a light paper response. English is the default now, but Chinese can be switched on from the top right.',
          receipt: {
            title: 'DUANG / HOME',
            subtitle: 'PERSONAL RECEIPT PAGE',
            header: [
              ['NAME', 'Duang'],
              ['STATUS', 'building quietly'],
              ['MODE', 'interactive paper ui'],
              ['VIBE', 'clean, weird, memorable'],
            ],
            sectionTitle: 'START HERE',
            items: [
              ['01', 'About me'],
              ['02', 'Selected projects'],
              ['03', 'Writing and notes'],
              ['04', 'Contact links'],
              ['05', 'Things I am learning'],
            ],
            total: 'CURRENT FOCUS ............ personal site and output',
            footer: [
              'A homepage should be useful, not just loud.',
              'This receipt is the front door, not the whole house.',
            ],
            stamp: 'HOME'
          }
        },
        about: {
          title: 'Duang — About',
          brandSub: 'about',
          note: 'This page is intentionally short. The point is to feel personal, not over-explain itself like a design assignment submission.',
          receipt: {
            title: 'ABOUT / DUANG',
            subtitle: 'PERSONAL PROFILE',
            header: [
              ['NAME', 'Duang'],
              ['RECENTLY', 'rebuilding and moving forward'],
              ['NOW', 'building, learning, shipping'],
              ['HELPER', 'a lobster assistant online'],
            ],
            sectionTitle: 'SHORT INTRO',
            items: [
              ['A', 'Likes making things that actually run'],
              ['B', 'Prefers direct writing over fake polish'],
              ['C', 'Still figuring things out, but doing it in public'],
              ['D', 'Interested in code, content, interaction, systems'],
              ['E', 'Wants a site that feels personal, not templated'],
            ],
            total: 'CURRENT IDENTITY ......... still evolving',
            footer: [
              'No fake founder energy, no startup cosplay.',
              'Just trying to make solid things and get better.',
            ],
            stamp: 'ABOUT'
          }
        },
        projects: {
          title: 'Duang — Projects',
          brandSub: 'projects',
          note: 'This is a selected list for now. Better to show a few real things than ten fake case studies dressed up as productivity.',
          receipt: {
            title: 'PROJECTS / SELECTED',
            subtitle: 'WORK / EXPERIMENTS / BUILDS',
            header: [
              ['TYPE', 'personal experiments'],
              ['STYLE', 'lean but intentional'],
              ['STACK', 'web, content, automation'],
              ['RULE', 'ship first, polish after'],
            ],
            sectionTitle: 'CURRENT LIST',
            items: [
              ['01', 'Interactive receipt homepage'],
              ['02', 'Xiaohongshu account workflow'],
              ['03', 'AI-assisted content drafts'],
              ['04', 'Personal site system in progress'],
              ['05', 'More real work coming soon'],
            ],
            total: 'PROJECT COUNT ............ 05 visible and growing',
            footer: [
              'This section will grow with actual work, not decoration.',
              'Real projects first. Better copy later.',
            ],
            stamp: 'WORK'
          }
        },
        logs: {
          title: 'Duang — Logs',
          brandSub: 'logs',
          note: 'A running page for changes, learnings, and small progress. Not polished essays — more like useful traces left on paper.',
          receipt: {
            title: 'LOGS / GROWTH',
            subtitle: 'UPDATES / NOTES / PROGRESS',
            header: [
              ['TYPE', 'ongoing notes'],
              ['FORMAT', 'short paper updates'],
              ['GOAL', 'leave visible traces'],
              ['RULE', 'document while moving'],
            ],
            sectionTitle: 'RECENT STRIPS',
            items: [
              ['01', 'Built an interactive receipt homepage'],
              ['02', 'Made hover and drag feel less broken'],
              ['03', 'Turned a single page into a small site'],
              ['04', 'Added EN / 中文 switching'],
              ['05', 'Still refining layout and content system'],
            ],
            total: 'CURRENT TRAJECTORY ....... keep building in public',
            footer: [
              'Logs are where the site starts feeling alive.',
              'A good archive beats fake consistency.',
            ],
            stamp: 'LOGS'
          }
        },
        collection: {
          title: 'Duang — Collection',
          brandSub: 'collection',
          note: 'This page is for references worth keeping: visuals, websites, ideas, textures, and anything that quietly shapes taste.',
          receipt: {
            title: 'COLLECTION / SAVED',
            subtitle: 'REFERENCES / TASTE / KEEPERS',
            header: [
              ['TYPE', 'saved references'],
              ['MOOD', 'quiet but sharp'],
              ['USE', 'inspiration, not imitation'],
              ['FILTER', 'worth keeping only'],
            ],
            sectionTitle: 'CURRENT SAVES',
            items: [
              ['01', 'Sites with strong editorial rhythm'],
              ['02', 'Interfaces that feel tactile and warm'],
              ['03', 'Typography pairings worth studying'],
              ['04', 'Motion that teaches without shouting'],
              ['05', 'Design references that age well'],
            ],
            total: 'COLLECTION STATUS ........ small, curated, still growing',
            footer: [
              'Not everything inspiring needs to become a project.',
              'Keeping references is part of building taste.',
            ],
            stamp: 'SAVE'
          }
        },
        logs: {
          title: 'Duang — 成长轨迹',
          brandSub: '成长轨迹',
          note: '这一页是用来放更新、记录和阶段性变化的，不走长文路线，更像一张张留下痕迹的小票。',
          receipt: {
            title: 'LOGS / GROWTH',
            subtitle: '更新 / 记录 / 进展',
            header: [
              ['类型', '持续更新的记录'],
              ['形式', '小票式短更新'],
              ['目的', '把变化留下来'],
              ['原则', '边做边记'],
            ],
            sectionTitle: '最近几条',
            items: [
              ['01', '搭好了交互式小票主页'],
              ['02', '把 hover / 拖拽手感继续修顺'],
              ['03', '从单页扩成了一个小站'],
              ['04', '补上了中英文切换'],
              ['05', '还在继续打磨排版和内容系统'],
            ],
            total: '当前轨迹 ............... 继续做，继续留痕',
            footer: [
              '成长轨迹这页会让站点开始像活人。',
              '有记录，比假稳定更重要。',
            ],
            stamp: '记录'
          }
        },
        collection: {
          title: 'Duang — 收藏',
          brandSub: '收藏',
          note: '这一页收的不是杂物，是值得留下来的参考：网站、排版、气质、想法，还有一些暂时还没变成作品的东西。',
          receipt: {
            title: 'COLLECTION / SAVED',
            subtitle: '参考 / 审美 / 留存',
            header: [
              ['类型', '收藏的参考'],
              ['气质', '安静，但要有锋利度'],
              ['用途', '拿来启发，不照抄'],
              ['筛选', '只留值得留下的'],
            ],
            sectionTitle: '当前收藏',
            items: [
              ['01', '有编辑感的网站节奏'],
              ['02', '摸起来有温度的界面风格'],
              ['03', '值得研究的字体搭配'],
              ['04', '不吵但很准的动效'],
              ['05', '看得久也不容易过时的参考'],
            ],
            total: '收藏状态 ............... 先小而准，再慢慢长',
            footer: [
              '不是所有喜欢的东西都要立刻做出来。',
              '会收藏，也是建立判断的一部分。',
            ],
            stamp: '收藏'
          }
        },
        contact: {
          title: 'Duang — Contact',
          brandSub: 'contact',
          note: 'Keeping contact simple for now. The project repo is available directly on GitHub, so at least this part should not pretend to be mysterious.',
          actions: [
            { label: 'GitHub Repo', href: 'https://github.com/Duang777/receipt-homepage' },
            { label: 'GitHub Profile', href: 'https://github.com/Duang777' },
          ],
          receipt: {
            title: 'CONTACT / LINKS',
            subtitle: 'WAYS TO REACH OUT',
            header: [
              ['CHANNEL', 'github available now'],
              ['FORMAT', 'simple static site'],
              ['REPO', 'Duang777/receipt-homepage'],
              ['NOTE', 'can expand later'],
            ],
            sectionTitle: 'AVAILABLE NOW',
            items: [
              ['GH', 'github.com/Duang777'],
              ['RP', 'receipt-homepage repository'],
              ['XS', 'Xiaohongshu content identity'],
              ['PG', 'Personal homepage updates'],
              ['ML', 'Email or form can be added later'],
            ],
            total: 'CONTACT STATUS ........... repo link restored',
            footer: [
              'Simple first, then useful, then fancy if needed.',
              'At least the GitHub link is back where it belongs.',
            ],
            stamp: 'CONTACT'
          }
        }
      }
    },
    zh: {
      htmlLang: 'zh-CN',
      brandName: 'Duang',
      navLabel: '主导航',
      nav: { home: '首页', about: '关于', projects: '项目', logs: '成长轨迹', collection: '收藏', contact: '联系' },
      pager: {
        prev: '上一页',
        next: '下一页',
        prevAria: '前往上一页',
        nextAria: '前往下一页',
      },
      pages: {
        home: {
          title: 'Duang — 首页',
          brandSub: '小票主页',
          note: '左键抓住小票就能拖，鼠标滑过去会有轻微纸张反馈。默认是英文版，现在也支持切到中文。',
          receipt: {
            title: 'DUANG / HOME',
            subtitle: '个人主页小票',
            header: [
              ['名字', 'Duang'],
              ['状态', '正在慢慢搭站'],
              ['模式', '可交互纸张界面'],
              ['气质', '干净、古怪、但有记忆点'],
            ],
            sectionTitle: '从这里开始',
            items: [
              ['01', '关于我'],
              ['02', '精选项目'],
              ['03', '写作与记录'],
              ['04', '联系方式'],
              ['05', '最近在学什么'],
            ],
            total: '当前重点 ............... 个人网站与持续输出',
            footer: [
              '个人主页应该有用，不只是看起来响亮。',
              '这张小票只是门口，不是全部。',
            ],
            stamp: '首页'
          }
        },
        about: {
          title: 'Duang — 关于',
          brandSub: '关于',
          note: '这一页故意收得比较短，重点是像个人，不像一份为了显得专业而写过头的模板材料。',
          receipt: {
            title: 'ABOUT / DUANG',
            subtitle: '个人简介',
            header: [
              ['名字', 'Duang'],
              ['近况', '在重新整理方向，继续往前走'],
              ['现在', '一边做一边学一边发'],
              ['助手', '一只在线龙虾助理'],
            ],
            sectionTitle: '简短介绍',
            items: [
              ['A', '喜欢做真正能跑起来的东西'],
              ['B', '比起假精致，更偏爱直接表达'],
              ['C', '很多东西还在摸索，但愿意公开做'],
              ['D', '对代码、内容、交互和系统都感兴趣'],
              ['E', '想做一个不像模板拼出来的网站'],
            ],
            total: '当前状态 ............... 还在成型中',
            footer: [
              '不装创业神话，也不演什么少年天才。',
              '就是在慢慢把东西做出来。',
            ],
            stamp: '关于'
          }
        },
        projects: {
          title: 'Duang — 项目',
          brandSub: '项目',
          note: '项目页目前先放精选，不往里硬塞。先把真的东西摆出来，胜过用十个假案例凑热闹。',
          receipt: {
            title: 'PROJECTS / SELECTED',
            subtitle: '作品 / 实验 / 搭建中',
            header: [
              ['类型', '个人实验为主'],
              ['风格', '克制，但有想法'],
              ['栈', '网页、内容、自动化'],
              ['原则', '先做出来，再慢慢抛光'],
            ],
            sectionTitle: '当前清单',
            items: [
              ['01', '交互式小票个人主页'],
              ['02', '小红书账号运营流程'],
              ['03', 'AI 协作文案草稿系统'],
              ['04', '个人站结构继续搭建中'],
              ['05', '后面会放更多真实项目'],
            ],
            total: '当前可见项目 ........... 05 个，后续继续长',
            footer: [
              '这块会跟着真实项目一起长，不拿装饰凑数。',
              '先有真东西，再谈漂亮包装。',
            ],
            stamp: '项目'
          }
        },
        logs: {
          title: 'Duang — Logs',
          brandSub: 'logs',
          note: 'A running page for changes, learnings, and small progress. Not polished essays — more like useful traces left on paper.',
          receipt: {
            title: 'LOGS / GROWTH',
            subtitle: 'UPDATES / NOTES / PROGRESS',
            header: [
              ['TYPE', 'ongoing notes'],
              ['FORMAT', 'short paper updates'],
              ['GOAL', 'leave visible traces'],
              ['RULE', 'document while moving'],
            ],
            sectionTitle: 'RECENT STRIPS',
            items: [
              ['01', 'Built an interactive receipt homepage'],
              ['02', 'Made hover and drag feel less broken'],
              ['03', 'Turned a single page into a small site'],
              ['04', 'Added EN / 中文 switching'],
              ['05', 'Still refining layout and content system'],
            ],
            total: 'CURRENT TRAJECTORY ....... keep building in public',
            footer: [
              'Logs are where the site starts feeling alive.',
              'A good archive beats fake consistency.',
            ],
            stamp: 'LOGS'
          }
        },
        collection: {
          title: 'Duang — Collection',
          brandSub: 'collection',
          note: 'This page is for references worth keeping: visuals, websites, ideas, textures, and anything that quietly shapes taste.',
          receipt: {
            title: 'COLLECTION / SAVED',
            subtitle: 'REFERENCES / TASTE / KEEPERS',
            header: [
              ['TYPE', 'saved references'],
              ['MOOD', 'quiet but sharp'],
              ['USE', 'inspiration, not imitation'],
              ['FILTER', 'worth keeping only'],
            ],
            sectionTitle: 'CURRENT SAVES',
            items: [
              ['01', 'Sites with strong editorial rhythm'],
              ['02', 'Interfaces that feel tactile and warm'],
              ['03', 'Typography pairings worth studying'],
              ['04', 'Motion that teaches without shouting'],
              ['05', 'Design references that age well'],
            ],
            total: 'COLLECTION STATUS ........ small, curated, still growing',
            footer: [
              'Not everything inspiring needs to become a project.',
              'Keeping references is part of building taste.',
            ],
            stamp: 'SAVE'
          }
        },
        contact: {
          title: 'Duang — 联系',
          brandSub: '联系',
          note: '联系页现在先保持轻一点，不过 GitHub 仓库还是得老老实实挂出来，不然就显得我像失忆了。',
          actions: [
            { label: '项目仓库', href: 'https://github.com/Duang777/receipt-homepage' },
            { label: 'GitHub 主页', href: 'https://github.com/Duang777' },
          ],
          receipt: {
            title: 'CONTACT / LINKS',
            subtitle: '当前可用的联系入口',
            header: [
              ['渠道', 'GitHub 现在可直接访问'],
              ['形式', '轻量静态站'],
              ['仓库', 'Duang777/receipt-homepage'],
              ['说明', '后续还能继续扩展'],
            ],
            sectionTitle: '现在能用的',
            items: [
              ['GH', 'github.com/Duang777'],
              ['RP', 'receipt-homepage 项目仓库'],
              ['XS', '小红书账号内容'],
              ['PG', '个人主页后续更新'],
              ['ML', '邮箱或表单可后接'],
            ],
            total: '联系状态 ............... GitHub 仓库已挂回',
            footer: [
              '先简单，再实用，再看要不要做得更花。',
              '至少 GitHub 这次已经放回该放的位置了。',
            ],
            stamp: '联系'
          }
        }
      }
    }
  };

  const brandSubEl = document.querySelector('[data-brand-sub]');
  const noteEl = document.querySelector('[data-corner-note]');
  const navEl = document.querySelector('[data-nav]');
  const siteUiEl = document.querySelector('.site-ui');
  const pageOrder = ['home', 'about', 'projects', 'logs', 'collection', 'contact'];
  const pageFiles = {
    home: './index.html',
    about: './about.html',
    projects: './projects.html',
    logs: './logs.html',
    collection: './collection.html',
    contact: './contact.html',
  };
  const pageFileToName = Object.fromEntries(Object.entries(pageFiles).map(([name, path]) => [path.replace('./', ''), name]));
  const quickLinksEl = document.createElement('div');
  quickLinksEl.className = 'quick-links';
  quickLinksEl.hidden = true;
  const sidePagerEl = document.createElement('div');
  sidePagerEl.className = 'side-pager';
  const prevPageLinkEl = document.createElement('a');
  prevPageLinkEl.className = 'page-rail is-prev';
  const prevPageCopyEl = document.createElement('span');
  prevPageCopyEl.className = 'page-rail-copy';
  const prevPageMetaEl = document.createElement('span');
  prevPageMetaEl.className = 'page-rail-kicker';
  const prevPageLabelEl = document.createElement('span');
  prevPageLabelEl.className = 'page-rail-label';
  prevPageCopyEl.append(prevPageMetaEl, prevPageLabelEl);
  const prevPageArrowEl = document.createElement('span');
  prevPageArrowEl.className = 'page-rail-arrow';
  prevPageArrowEl.textContent = '←';
  prevPageLinkEl.append(prevPageArrowEl, prevPageCopyEl);
  const nextPageLinkEl = document.createElement('a');
  nextPageLinkEl.className = 'page-rail is-next';
  const nextPageCopyEl = document.createElement('span');
  nextPageCopyEl.className = 'page-rail-copy';
  const nextPageMetaEl = document.createElement('span');
  nextPageMetaEl.className = 'page-rail-kicker';
  const nextPageLabelEl = document.createElement('span');
  nextPageLabelEl.className = 'page-rail-label';
  nextPageCopyEl.append(nextPageMetaEl, nextPageLabelEl);
  const nextPageArrowEl = document.createElement('span');
  nextPageArrowEl.className = 'page-rail-arrow';
  nextPageArrowEl.textContent = '→';
  nextPageLinkEl.append(nextPageCopyEl, nextPageArrowEl);
  sidePagerEl.append(prevPageLinkEl, nextPageLinkEl);
  if (siteUiEl) {
    siteUiEl.appendChild(quickLinksEl);
    siteUiEl.appendChild(sidePagerEl);
  }
  const navLinks = {
    home: document.querySelector('[data-nav-home]'),
    about: document.querySelector('[data-nav-about]'),
    projects: document.querySelector('[data-nav-projects]'),
    logs: document.querySelector('[data-nav-logs]'),
    collection: document.querySelector('[data-nav-collection]'),
    contact: document.querySelector('[data-nav-contact]'),
  };
  const langButtons = Array.from(document.querySelectorAll('[data-lang-btn]'));

  function getInitialLang() {
    const stored = localStorage.getItem(PREFERRED_LANG_KEY);
    if (stored && copy[stored]) return stored;
    return defaultLang;
  }

  let currentLang = getInitialLang();
  let currentPage = initialPage;
  let currentConfig = copy[currentLang].pages[currentPage] || copy.en.pages.home;

  const pageThemes = {
    home: {
      css: {
        '--bg': '#ffffff',
        '--bg-top': '#ffffff',
        '--bg-mid': '#ffffff',
        '--bg-bottom': '#ffffff',
        '--chip': 'rgba(255,255,255,0.84)',
      },
      sceneBg: 0xffffff,
    },
    about: {
      css: {
        '--bg': '#f7f5f1',
        '--bg-top': '#fbfaf8',
        '--bg-mid': '#f5f2ee',
        '--bg-bottom': '#f0ece7',
        '--chip': 'rgba(255,255,255,0.82)',
      },
      sceneBg: 0xf7f5f1,
    },
    projects: {
      css: {
        '--bg': '#f8f6f2',
        '--bg-top': '#fcfbf8',
        '--bg-mid': '#f6f2ec',
        '--bg-bottom': '#efe9e1',
        '--chip': 'rgba(255,255,255,0.82)',
      },
      sceneBg: 0xf8f6f2,
    },
    logs: {
      css: {
        '--bg': '#f6f3ee',
        '--bg-top': '#faf7f1',
        '--bg-mid': '#f2ede6',
        '--bg-bottom': '#ece5dc',
        '--chip': 'rgba(255,255,255,0.8)',
      },
      sceneBg: 0xf6f3ee,
    },
    collection: {
      css: {
        '--bg': '#f8f4ee',
        '--bg-top': '#fcf8f2',
        '--bg-mid': '#f4eee5',
        '--bg-bottom': '#ede4da',
        '--chip': 'rgba(255,255,255,0.8)',
      },
      sceneBg: 0xf8f4ee,
    },
    contact: {
      css: {
        '--bg': '#f7f4ef',
        '--bg-top': '#fbf8f4',
        '--bg-mid': '#f3eee7',
        '--bg-bottom': '#ece5dc',
        '--chip': 'rgba(255,255,255,0.8)',
      },
      sceneBg: 0xf7f4ef,
    },
  };

  const container = document.body;
  const scene = new THREE.Scene();
  scene.background = new THREE.Color((pageThemes[currentPage] || pageThemes.home).sceneBg);

  const camera = new THREE.PerspectiveCamera(32, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.set(0, 0.25, 6.2);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  container.appendChild(renderer.domElement);

  const hemi = new THREE.HemisphereLight(0xffffff, 0xece4db, 1.42);
  scene.add(hemi);

  const key = new THREE.DirectionalLight(0xffffff, 1.3);
  key.position.set(2.8, 5.5, 5.2);
  key.castShadow = true;
  key.shadow.mapSize.set(2048, 2048);
  key.shadow.camera.near = 0.1;
  key.shadow.camera.far = 20;
  key.shadow.camera.left = -5;
  key.shadow.camera.right = 5;
  key.shadow.camera.top = 5;
  key.shadow.camera.bottom = -5;
  scene.add(key);

  const fill = new THREE.PointLight(0xfff3e8, 0.55, 12, 2);
  fill.position.set(-2.8, 1.2, 3.5);
  scene.add(fill);

  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(20, 20),
    new THREE.ShadowMaterial({ color: 0x000000, opacity: 0.08 })
  );
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = -2.12;
  floor.receiveShadow = true;
  scene.add(floor);

  const contactShadow = new THREE.Mesh(
    new THREE.PlaneGeometry(3.6, 4.8),
    new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.06, depthWrite: false })
  );
  contactShadow.rotation.x = -Math.PI / 2;
  contactShadow.position.set(0, -2.08, 0.15);
  contactShadow.scale.set(1, 0.76, 1);
  scene.add(contactShadow);

  const cols = 20;
  const rows = 40;
  const receiptWidth = 1.72;
  const receiptHeight = 3.28;
  const gravity = new THREE.Vector3(0, -14.5, 0);
  const damping = 0.992;
  const constraintIterations = 8;
  const maxStep = 1 / 60;
  let interactionEnergy = 0;
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  const dragPlane = new THREE.Plane();
  const dragTarget = new THREE.Vector3();
  const tmpVec = new THREE.Vector3();
  const tmpVec2 = new THREE.Vector3();

  function idx(x, y) { return y * cols + x; }

  function createReceiptTexture(pageData) {
    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 2400;
    const ctx = canvas.getContext('2d');

    const LEFT = 86;
    const RIGHT_SAFE = 980;
    const CONTENT_WIDTH = RIGHT_SAFE - LEFT;

    const setMono = (weight, size, color = '#1d1a16', align = 'left') => {
      ctx.font = `${weight} ${size}px "SFMono-Regular", "JetBrains Mono", "IBM Plex Mono", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", monospace`;
      ctx.fillStyle = color;
      ctx.textAlign = align;
      ctx.textBaseline = 'alphabetic';
    };

    const fitText = (text, maxWidth, startSize, minSize, weight = 700) => {
      let size = startSize;
      while (size > minSize) {
        setMono(weight, size);
        if (ctx.measureText(text).width <= maxWidth) break;
        size -= 1;
      }
      return size;
    };

    const wrapText = (text, maxWidth, startSize, minSize, weight = 700) => {
      let size = startSize;
      let lines = [];
      while (size >= minSize) {
        setMono(weight, size);
        const words = String(text).split(' ');
        lines = [];
        let current = '';
        for (const word of words) {
          const next = current ? `${current} ${word}` : word;
          if (ctx.measureText(next).width <= maxWidth) {
            current = next;
          } else {
            if (current) lines.push(current);
            current = word;
          }
        }
        if (current) lines.push(current);
        if (lines.length <= 2) break;
        size -= 2;
      }
      return { size, lines };
    };

    ctx.fillStyle = '#fbf7ee';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const verticalTone = ctx.createLinearGradient(0, 0, 0, canvas.height);
    verticalTone.addColorStop(0, 'rgba(255,255,255,0.02)');
    verticalTone.addColorStop(0.2, 'rgba(255,249,241,0.02)');
    verticalTone.addColorStop(0.58, 'rgba(0,0,0,0.018)');
    verticalTone.addColorStop(1, 'rgba(0,0,0,0.045)');
    ctx.fillStyle = verticalTone;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const sideTone = ctx.createLinearGradient(0, 0, canvas.width, 0);
    sideTone.addColorStop(0, 'rgba(110,92,70,0.05)');
    sideTone.addColorStop(0.16, 'rgba(255,255,255,0.024)');
    sideTone.addColorStop(0.5, 'rgba(255,255,255,0.012)');
    sideTone.addColorStop(0.84, 'rgba(255,255,255,0.02)');
    sideTone.addColorStop(1, 'rgba(110,92,70,0.065)');
    ctx.fillStyle = sideTone;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const centerBulge = ctx.createRadialGradient(canvas.width * 0.5, canvas.height * 0.48, canvas.width * 0.08, canvas.width * 0.5, canvas.height * 0.5, canvas.width * 0.62);
    centerBulge.addColorStop(0, 'rgba(255,255,255,0.055)');
    centerBulge.addColorStop(0.32, 'rgba(255,255,255,0.025)');
    centerBulge.addColorStop(0.7, 'rgba(0,0,0,0.012)');
    centerBulge.addColorStop(1, 'rgba(0,0,0,0.03)');
    ctx.fillStyle = centerBulge;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < 9500; i++) {
      const alpha = Math.random() * 0.035;
      const shade = 234 + Math.random() * 17;
      ctx.fillStyle = `rgba(${shade}, ${shade - 4}, ${shade - 8}, ${alpha})`;
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const r = Math.random() * 1.7;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }

    for (let i = 0; i < 1300; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const w = 8 + Math.random() * 32;
      const h = 1 + Math.random() * 2;
      const alpha = 0.012 + Math.random() * 0.02;
      ctx.fillStyle = `rgba(255,255,255,${alpha})`;
      ctx.fillRect(x, y, w, h);
    }

    ctx.strokeStyle = '#e7ddcd';
    ctx.lineWidth = 3;
    ctx.beginPath();
    const notch = 18;
    for (let x = 0; x <= canvas.width + notch; x += notch) {
      const py = x % (notch * 2) === 0 ? 30 : 12;
      ctx.lineTo(x, py);
    }
    ctx.stroke();

    ctx.save();
    ctx.globalAlpha = 0.42;
    for (let y = 80; y < canvas.height - 48; y += 20) {
      const offset = (y / 20) % 2 === 0 ? 0 : 8;
      ctx.strokeStyle = 'rgba(176,160,140,0.46)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(24 + offset, y);
      ctx.lineTo(36 - offset * 0.18, y + 10);
      ctx.lineTo(24 + offset, y + 20);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(canvas.width - 24 - offset, y);
      ctx.lineTo(canvas.width - 36 + offset * 0.18, y + 10);
      ctx.lineTo(canvas.width - 24 - offset, y + 20);
      ctx.stroke();
    }
    ctx.restore();

    const edgeShade = ctx.createLinearGradient(0, 0, canvas.width, 0);
    edgeShade.addColorStop(0, 'rgba(112,94,72,0.095)');
    edgeShade.addColorStop(0.06, 'rgba(112,94,72,0.02)');
    edgeShade.addColorStop(0.12, 'rgba(255,255,255,0.01)');
    edgeShade.addColorStop(0.88, 'rgba(255,255,255,0.01)');
    edgeShade.addColorStop(0.94, 'rgba(112,94,72,0.02)');
    edgeShade.addColorStop(1, 'rgba(112,94,72,0.105)');
    ctx.fillStyle = edgeShade;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const titleSize = fitText(pageData.title, CONTENT_WIDTH - 140, 72, 44, 900);
    setMono(900, titleSize, '#1d1a16');
    ctx.fillText(pageData.title, LEFT, 178);

    const subtitleSize = fitText(pageData.subtitle, CONTENT_WIDTH - 200, 28, 20, 700);
    setMono(700, subtitleSize, '#6b645a');
    ctx.fillText(pageData.subtitle, LEFT, 232);

    const labelX = LEFT;
    const valueX = 410;
    const valueMaxWidth = RIGHT_SAFE - valueX - 24;
    let y = 356;
    for (const [label, value] of pageData.header) {
      const labelSize = fitText(`${label} .........`, valueX - labelX - 24, 34, 24, 700);
      setMono(700, labelSize, '#24211d');
      ctx.fillText(`${label} .........`, labelX, y);
      const valueSize = fitText(value, valueMaxWidth, 34, 24, 700);
      setMono(700, valueSize, '#24211d');
      ctx.fillText(value, valueX, y);
      y += 54;
    }

    ctx.save();
    ctx.globalAlpha = 0.2;
    ctx.strokeStyle = 'rgba(0,0,0,0.05)';
    ctx.lineWidth = 1;
    for (let ruleY = 286; ruleY < canvas.height - 120; ruleY += 26) {
      ctx.beginPath();
      ctx.moveTo(54, ruleY);
      ctx.lineTo(canvas.width - 54, ruleY);
      ctx.stroke();
    }
    ctx.restore();

    setMono(600, 26, '#7c7368');
    ctx.fillText('---------------------------------------------', LEFT, y + 22);
    const sectionSize = fitText(pageData.sectionTitle, CONTENT_WIDTH - 180, 24, 18, 700);
    setMono(700, sectionSize, '#7c7368');
    ctx.fillText(pageData.sectionTitle, LEFT, y + 72);
    setMono(600, 26, '#7c7368');
    ctx.fillText('---------------------------------------------', LEFT, y + 118);

    y += 188;
    for (const [code, label] of pageData.items) {
      setMono(700, 28, '#21201d');
      ctx.fillText(code, LEFT + 2, y);
      const wrapped = wrapText(label, RIGHT_SAFE - 240, 28, 20, 700);
      setMono(700, wrapped.size, '#21201d');
      const lineHeight = wrapped.size + 10;
      wrapped.lines.forEach((line, idx) => ctx.fillText(line, 196, y + idx * lineHeight));
      y += wrapped.lines.length > 1 ? lineHeight * wrapped.lines.length + 18 : 56;
    }

    setMono(600, 26, '#7c7368');
    ctx.fillText('---------------------------------------------', LEFT, y + 4);

    const totalWrapped = wrapText(pageData.total, CONTENT_WIDTH - 140, 32, 23, 900);
    setMono(900, totalWrapped.size, '#22201d');
    let totalY = y + 76;
    const totalLineHeight = totalWrapped.size + 10;
    totalWrapped.lines.forEach((line, idx) => ctx.fillText(line, LEFT, totalY + idx * totalLineHeight));

    let fy = totalY + totalWrapped.lines.length * totalLineHeight + 28;
    for (const line of pageData.footer) {
      const wrappedFooter = wrapText(line, CONTENT_WIDTH - 140, 22, 18, 700);
      setMono(700, wrappedFooter.size, '#6d665e');
      const footerLineHeight = wrappedFooter.size + 10;
      wrappedFooter.lines.forEach((row, idx) => ctx.fillText(row, LEFT, fy + idx * footerLineHeight));
      fy += wrappedFooter.lines.length * footerLineHeight + 14;
    }

    ctx.save();
    ctx.translate(852, Math.min(fy + 74, 2140));
    ctx.rotate(-0.08);
    ctx.strokeStyle = 'rgba(255, 120, 108, 0.85)';
    ctx.lineWidth = 7;
    ctx.strokeRect(-128, -50, 256, 100);
    ctx.fillStyle = 'rgba(255, 120, 108, 0.14)';
    ctx.fillRect(-128, -50, 256, 100);
    setMono(900, 36, '#ff6f62', 'center');
    ctx.fillText(pageData.stamp, 0, 12);
    ctx.restore();

    ctx.save();
    ctx.globalAlpha = 0.16;
    for (let line = 0; line < 44; line++) {
      const lineY = 706 + line * 36;
      const jitter = (Math.random() - 0.5) * 2.4;
      ctx.strokeStyle = line % 2 === 0 ? 'rgba(110,92,70,0.11)' : 'rgba(255,255,255,0.045)';
      ctx.lineWidth = line % 2 === 0 ? 1.2 : 0.7;
      ctx.beginPath();
      ctx.moveTo(LEFT, lineY + jitter);
      ctx.lineTo(canvas.width - 120, lineY + jitter);
      ctx.stroke();
    }
    ctx.restore();

    ctx.save();
    ctx.globalAlpha = 0.08;
    ctx.translate(0, canvas.height * 0.42);
    ctx.rotate(-0.06);
    const wrinkleA = ctx.createLinearGradient(0, 0, canvas.width, 0);
    wrinkleA.addColorStop(0, 'rgba(255,255,255,0)');
    wrinkleA.addColorStop(0.46, 'rgba(255,255,255,0.5)');
    wrinkleA.addColorStop(0.5, 'rgba(0,0,0,0.4)');
    wrinkleA.addColorStop(0.54, 'rgba(255,255,255,0.18)');
    wrinkleA.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = wrinkleA;
    ctx.fillRect(0, 0, canvas.width, 54);
    ctx.restore();

    ctx.save();
    ctx.globalAlpha = 0.06;
    ctx.translate(0, canvas.height * 0.58);
    ctx.rotate(0.045);
    const wrinkleB = ctx.createLinearGradient(0, 0, canvas.width, 0);
    wrinkleB.addColorStop(0, 'rgba(255,255,255,0)');
    wrinkleB.addColorStop(0.48, 'rgba(0,0,0,0.32)');
    wrinkleB.addColorStop(0.52, 'rgba(255,255,255,0.26)');
    wrinkleB.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = wrinkleB;
    ctx.fillRect(0, 0, canvas.width, 42);
    ctx.restore();

    const texture = new THREE.CanvasTexture(canvas);
    texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.needsUpdate = true;
    return texture;
  }

  function createPaperNormalTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    const img = ctx.createImageData(canvas.width, canvas.height);
    for (let y = 0; y < canvas.height; y++) {
      for (let x = 0; x < canvas.width; x++) {
        const i = (y * canvas.width + x) * 4;
        const grain = 128 + (Math.random() - 0.5) * 24;
        const fiber = Math.sin(y * 0.22 + x * 0.03) * 6;
        const crease = Math.sin(y * 0.05) * 3;
        img.data[i] = grain + fiber;
        img.data[i + 1] = 128 + (Math.random() - 0.5) * 18 + crease;
        img.data[i + 2] = 255;
        img.data[i + 3] = 255;
      }
    }
    ctx.putImageData(img, 0, 0);
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(7, 16);
    return texture;
  }

  function createPagerPaperDataUrl({ direction = 'prev', kicker = '', label = '' } = {}) {
    const canvas = document.createElement('canvas');
    canvas.width = 420;
    canvas.height = 220;
    const ctx = canvas.getContext('2d');

    const setMono = (weight, size, color = '#1d1a16', align = 'left') => {
      ctx.font = `${weight} ${size}px "SFMono-Regular", "JetBrains Mono", "IBM Plex Mono", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", monospace`;
      ctx.fillStyle = color;
      ctx.textAlign = align;
      ctx.textBaseline = 'alphabetic';
    };

    const fitText = (text, maxWidth, startSize, minSize, weight = 700) => {
      let size = startSize;
      while (size > minSize) {
        setMono(weight, size);
        if (ctx.measureText(text).width <= maxWidth) break;
        size -= 1;
      }
      return size;
    };

    ctx.fillStyle = '#fbf7ee';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const paperGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    paperGradient.addColorStop(0, 'rgba(255,255,255,0.00)');
    paperGradient.addColorStop(0.55, 'rgba(0,0,0,0.015)');
    paperGradient.addColorStop(1, 'rgba(0,0,0,0.04)');
    ctx.fillStyle = paperGradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < 1800; i++) {
      const alpha = Math.random() * 0.03;
      const shade = 236 + Math.random() * 15;
      ctx.fillStyle = `rgba(${shade}, ${shade - 4}, ${shade - 8}, ${alpha})`;
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const r = Math.random() * 1.75;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.strokeStyle = '#e7ddcd';
    ctx.lineWidth = 2;
    ctx.beginPath();
    const notch = 14;
    if (direction === 'prev') {
      for (let y = 0; y <= canvas.height + notch; y += notch) {
        const px = y % (notch * 2) === 0 ? canvas.width - 12 : canvas.width - 26;
        ctx.lineTo(px, y);
      }
    } else {
      for (let y = 0; y <= canvas.height + notch; y += notch) {
        const px = y % (notch * 2) === 0 ? 12 : 26;
        ctx.lineTo(px, y);
      }
    }
    ctx.stroke();

    ctx.strokeStyle = 'rgba(0,0,0,0.03)';
    ctx.lineWidth = 1;
    for (let y = 28; y < canvas.height; y += 26) {
      ctx.beginPath();
      ctx.moveTo(16, y);
      ctx.lineTo(canvas.width - 16, y);
      ctx.stroke();
    }

    setMono(600, 16, '#7c7368');
    ctx.fillText(kicker.toUpperCase(), 28, 48);

    const labelSize = fitText(label, 230, 44, 26, 900);
    setMono(900, labelSize, '#1f1b17');
    ctx.fillText(label, 28, 122);

    setMono(600, 18, '#6f685f');
    ctx.fillText(direction === 'prev' ? 'RECEIPT STRIP' : 'THERMAL TAB', 28, 182);

    setMono(900, 58, '#2b2621', 'center');
    ctx.fillText(direction === 'prev' ? '←' : '→', canvas.width - 70, 136);

    return canvas.toDataURL('image/png');
  }

  function applyPagerPaperTextures(langCopy, prevPage, nextPage) {
    const prevDataUrl = createPagerPaperDataUrl({
      direction: 'prev',
      kicker: langCopy?.pager?.prev || 'Previous',
      label: langCopy?.nav?.[prevPage] || prevPage,
    });
    const nextDataUrl = createPagerPaperDataUrl({
      direction: 'next',
      kicker: langCopy?.pager?.next || 'Next',
      label: langCopy?.nav?.[nextPage] || nextPage,
    });
    prevPageLinkEl.style.backgroundImage = `url("${prevDataUrl}")`;
    nextPageLinkEl.style.backgroundImage = `url("${nextDataUrl}")`;
  }

  const receiptGeometry = new THREE.BufferGeometry();
  const positions = new Float32Array(cols * rows * 3);
  const uvs = new Float32Array(cols * rows * 2);
  const indices = [];
  const particles = [];
  const locked = new Set();
  const constraints = [];

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const px = (x / (cols - 1) - 0.5) * receiptWidth;
      const py = (0.5 - y / (rows - 1)) * receiptHeight;
      const i = idx(x, y);
      const current = new THREE.Vector3(px, py, 0);
      particles.push({ current, previous: current.clone(), origin: current.clone() });
      if (y === 0) locked.add(i);
      const p = i * 3;
      positions[p] = px; positions[p + 1] = py; positions[p + 2] = 0;
      const uv = i * 2;
      uvs[uv] = x / (cols - 1);
      uvs[uv + 1] = 1 - y / (rows - 1);
      if (x < cols - 1 && y < rows - 1) {
        const a = idx(x, y), b = idx(x + 1, y), c = idx(x, y + 1), d = idx(x + 1, y + 1);
        indices.push(a, c, b, b, c, d);
      }
    }
  }

  function addConstraint(a, b, stiffness) {
    constraints.push({ a, b, rest: particles[a].origin.distanceTo(particles[b].origin), stiffness });
  }
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const i = idx(x, y);
      if (x < cols - 1) addConstraint(i, idx(x + 1, y), y === 0 ? 1 : 0.95);
      if (y < rows - 1) addConstraint(i, idx(x, y + 1), 0.93);
      if (x < cols - 1 && y < rows - 1) addConstraint(i, idx(x + 1, y + 1), 0.22);
      if (x > 0 && y < rows - 1) addConstraint(i, idx(x - 1, y + 1), 0.22);
      if (x < cols - 2) addConstraint(i, idx(x + 2, y), y === 0 ? 1 : 0.18);
      if (y < rows - 2) addConstraint(i, idx(x, y + 2), 0.18);
    }
  }

  receiptGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  receiptGeometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
  receiptGeometry.setIndex(indices);
  receiptGeometry.computeVertexNormals();

  const receiptMaterial = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color(0xfbf6ed),
    map: createReceiptTexture(currentConfig.receipt),
    normalMap: createPaperNormalTexture(),
    normalScale: new THREE.Vector2(0.38, 0.5),
    roughness: 0.985,
    metalness: 0,
    sheen: 0.32,
    sheenColor: new THREE.Color(0xfff1e4),
    clearcoat: 0.01,
    clearcoatRoughness: 1,
    side: THREE.DoubleSide,
  });

  const receiptMesh = new THREE.Mesh(receiptGeometry, receiptMaterial);
  receiptMesh.castShadow = true;
  scene.add(receiptMesh);

  const transitionState = {
    phase: 'idle',
    direction: 1,
    startedAt: 0,
    duration: 760,
    pendingPage: null,
    swapped: false,
    historyMode: 'push',
    progress: 0,
    strength: 0,
    uiOpacity: 1,
    uiOffsetX: 0,
    meshX: 0,
    meshRotation: 0,
    meshZ: 0,
    shadowFactor: 1,
  };

  function applyPageTheme(pageName) {
    const theme = pageThemes[pageName] || pageThemes.home;
    Object.entries(theme.css).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
    scene.background = new THREE.Color(theme.sceneBg);
  }

  function renderQuickLinks(actions = []) {
    if (!quickLinksEl) return;
    quickLinksEl.innerHTML = '';
    if (!actions.length) {
      quickLinksEl.hidden = true;
      return;
    }
    actions.forEach(({ label, href }) => {
      const link = document.createElement('a');
      link.href = href;
      link.textContent = label;
      link.target = '_blank';
      link.rel = 'noreferrer';
      quickLinksEl.appendChild(link);
    });
    quickLinksEl.hidden = false;
  }

  function renderSidePager(lang) {
    const langCopy = copy[lang] || copy[defaultLang];
    const pageIndex = pageOrder.indexOf(currentPage);
    if (pageIndex === -1) {
      sidePagerEl.hidden = true;
      return;
    }
    const prevPage = pageOrder[(pageIndex - 1 + pageOrder.length) % pageOrder.length];
    const nextPage = pageOrder[(pageIndex + 1) % pageOrder.length];

    prevPageLinkEl.href = pageFiles[prevPage];
    prevPageLinkEl.dataset.pageTarget = prevPage;
    prevPageLinkEl.setAttribute('aria-label', `${langCopy.pager.prevAria}: ${langCopy.nav[prevPage]}`);
    prevPageMetaEl.textContent = langCopy.pager.prev;
    prevPageLabelEl.textContent = langCopy.nav[prevPage];

    nextPageLinkEl.href = pageFiles[nextPage];
    nextPageLinkEl.dataset.pageTarget = nextPage;
    nextPageLinkEl.setAttribute('aria-label', `${langCopy.pager.nextAria}: ${langCopy.nav[nextPage]}`);
    nextPageMetaEl.textContent = langCopy.pager.next;
    nextPageLabelEl.textContent = langCopy.nav[nextPage];

    applyPagerPaperTextures(langCopy, prevPage, nextPage);
    sidePagerEl.hidden = false;
  }

  function getPageNameFromHref(href) {
    if (!href) return null;
    try {
      const url = new URL(href, window.location.href);
      if (url.origin !== window.location.origin) return null;
      const fileName = url.pathname.split('/').pop() || 'index.html';
      return pageFileToName[fileName] || null;
    } catch {
      return null;
    }
  }

  function getDirectionForTarget(targetPage) {
    const currentIndex = pageOrder.indexOf(currentPage);
    const targetIndex = pageOrder.indexOf(targetPage);
    if (currentIndex === -1 || targetIndex === -1 || currentIndex === targetIndex) return 1;
    const forwardSteps = (targetIndex - currentIndex + pageOrder.length) % pageOrder.length;
    const backwardSteps = (currentIndex - targetIndex + pageOrder.length) % pageOrder.length;
    return forwardSteps <= backwardSteps ? 1 : -1;
  }

  function updateRoute(pageName, { replace = false } = {}) {
    const nextPath = pageFiles[pageName];
    if (!nextPath) return;
    const nextUrl = new URL(nextPath, window.location.href);
    const currentUrl = new URL(window.location.href);
    if (currentUrl.pathname === nextUrl.pathname) return;
    const state = { page: pageName };
    if (replace) {
      history.replaceState(state, '', nextUrl.pathname);
    } else {
      history.pushState(state, '', nextUrl.pathname);
    }
  }

  function applyCurrentPage({ updateHistory = false, replaceHistory = false } = {}) {
    document.body.dataset.page = currentPage;
    updateNavAndCopy(currentLang);
    Object.entries(navLinks).forEach(([name, link]) => {
      if (!link) return;
      if (name === currentPage) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
    if (updateHistory) {
      updateRoute(currentPage, { replace: replaceHistory });
    }
  }

  window.addEventListener('popstate', () => {
    const pathPage = getPageNameFromHref(window.location.href) || initialPage;
    if (pathPage && pathPage !== currentPage) {
      startPageTransition(pathPage, getDirectionForTarget(pathPage), { historyMode: 'none', duration: 700 });
    }
  });

  function easeOutQuint(t) {
    return 1 - Math.pow(1 - t, 5);
  }

  function setTransitionPose(progress, direction, phase) {
    const xDistance = window.innerWidth <= 980 ? 1.75 : 2.25;
    const zLift = 0.22;
    const rotation = window.innerWidth <= 980 ? 0.12 : 0.18;
    const uiShift = window.innerWidth <= 980 ? 24 : 56;
    const eased = phase === 'enter' ? 1 - easeOutQuint(progress) : easeOutQuint(progress);
    transitionState.meshX = direction * xDistance * eased;
    transitionState.meshRotation = direction * rotation * eased;
    transitionState.meshZ = zLift * eased;
    transitionState.uiOffsetX = direction * uiShift * eased;
    transitionState.uiOpacity = phase === 'enter' ? 1 - 0.7 * eased : 1 - 0.78 * eased;
    transitionState.shadowFactor = phase === 'enter' ? 1 - 0.28 * eased : 1 - 0.36 * eased;

    receiptMesh.position.x = transitionState.meshX;
    receiptMesh.position.z = transitionState.meshZ;
    receiptMesh.rotation.z = transitionState.meshRotation;
    contactShadow.position.x = transitionState.meshX * 0.9;
    if (siteUiEl) {
      siteUiEl.style.opacity = String(transitionState.uiOpacity);
      siteUiEl.style.transform = `translate3d(${transitionState.uiOffsetX}px, 0, 0)`;
    }
  }

  function clearTransitionPose() {
    transitionState.meshX = 0;
    transitionState.meshRotation = 0;
    transitionState.meshZ = 0;
    transitionState.uiOffsetX = 0;
    transitionState.uiOpacity = 1;
    transitionState.shadowFactor = 1;
    receiptMesh.position.x = 0;
    receiptMesh.position.z = 0;
    receiptMesh.rotation.z = 0;
    contactShadow.position.x = 0;
    if (siteUiEl) {
      siteUiEl.style.opacity = '1';
      siteUiEl.style.transform = 'translate3d(0, 0, 0)';
    }
  }

  function getTransitionWave(time, columnNorm, rowNorm) {
    const strength = transitionState.strength;
    if (strength <= 0.0001) return { x: 0, y: 0, z: 0 };
    const dir = transitionState.direction;
    const phaseProgress = transitionState.progress;
    const travel = transitionState.phase === 'leave' ? phaseProgress : 1 - phaseProgress;
    const edgeLead = dir > 0 ? columnNorm : 1 - columnNorm;
    const crest = Math.exp(-Math.pow(edgeLead - Math.min(1, travel * 1.1), 2) / 0.022);
    const wake = Math.exp(-Math.pow(edgeLead - Math.max(0, travel * 0.82), 2) / 0.08);
    const rowInfluence = Math.pow(rowNorm, 0.88);
    const baseRipple = Math.sin(time * 14 + columnNorm * 12 - rowNorm * 9 + dir * 0.9);
    const trailingRipple = Math.sin(time * 8.5 + edgeLead * 19 + rowNorm * 10.5);
    const foldLift = Math.sin(Math.min(1, rowNorm * 1.1) * Math.PI) * 0.018 * strength;
    const z = (crest * 0.34 + wake * trailingRipple * 0.06 + baseRipple * 0.03) * rowInfluence * strength;
    const x = dir * (crest * 0.06 + wake * 0.02 + baseRipple * 0.006) * rowInfluence * strength;
    const y = foldLift + Math.sin((columnNorm * 0.9 + rowNorm * 0.8) * Math.PI) * 0.01 * strength;
    return { x, y, z };
  }

  function startPageTransition(targetPage, explicitDirection, options = {}) {
    if (!targetPage || !pageFiles[targetPage] || targetPage === currentPage) return;
    if (transitionState.phase !== 'idle') return;
    const direction = explicitDirection || getDirectionForTarget(targetPage);
    transitionState.phase = 'leave';
    transitionState.direction = direction;
    transitionState.duration = options.duration || 760;
    transitionState.startedAt = performance.now();
    transitionState.pendingPage = targetPage;
    transitionState.swapped = false;
    transitionState.historyMode = options.historyMode || 'push';
    if (transitionState.historyMode === 'push') {
      updateRoute(targetPage);
    } else if (transitionState.historyMode === 'replace') {
      updateRoute(targetPage, { replace: true });
    }
    document.body.classList.add('is-page-transitioning');
  }

  function swapToPendingPage() {
    if (!transitionState.pendingPage) return;
    currentPage = transitionState.pendingPage;
    currentConfig = copy[currentLang].pages[currentPage] || copy.en.pages.home;
    applyCurrentPage();
  }

  function handleInternalPageLink(event) {
    const anchor = event.currentTarget;
    const targetPage = anchor.dataset.pageTarget || getPageNameFromHref(anchor.getAttribute('href') || anchor.href);
    if (!targetPage || targetPage === currentPage) return;
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    startPageTransition(targetPage);
  }

  const dragState = { active: false, index: -1, point: new THREE.Vector3(), radius: 2.25 };
  const hoverState = { active: false, index: -1, strength: 0 };

  function updateNavAndCopy(lang) {
    const langCopy = copy[lang];
    const pageCopy = langCopy.pages[currentPage] || copy.en.pages.home;
    currentConfig = pageCopy;
    document.documentElement.lang = langCopy.htmlLang;
    document.title = pageCopy.title;
    if (brandSubEl) brandSubEl.textContent = pageCopy.brandSub;
    if (noteEl) noteEl.textContent = pageCopy.note;
    if (navEl) navEl.setAttribute('aria-label', langCopy.navLabel);
    renderQuickLinks(pageCopy.actions || []);
    renderSidePager(lang);
    applyPageTheme(currentPage);
    if (navLinks.home) navLinks.home.textContent = langCopy.nav.home;
    if (navLinks.about) navLinks.about.textContent = langCopy.nav.about;
    if (navLinks.projects) navLinks.projects.textContent = langCopy.nav.projects;
    if (navLinks.logs) navLinks.logs.textContent = langCopy.nav.logs;
    if (navLinks.collection) navLinks.collection.textContent = langCopy.nav.collection;
    if (navLinks.contact) navLinks.contact.textContent = langCopy.nav.contact;
    langButtons.forEach(btn => btn.classList.toggle('is-active', btn.dataset.langBtn === lang));
    receiptMaterial.map.dispose();
    receiptMaterial.map = createReceiptTexture(pageCopy.receipt);
    receiptMaterial.needsUpdate = true;
  }

  function setLanguage(lang) {
    currentLang = copy[lang] ? lang : defaultLang;
    localStorage.setItem(PREFERRED_LANG_KEY, currentLang);
    updateNavAndCopy(currentLang);
  }

  langButtons.forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.langBtn));
  });

  Object.values(navLinks).forEach(link => {
    if (link) link.addEventListener('click', handleInternalPageLink);
  });
  prevPageLinkEl.addEventListener('click', handleInternalPageLink);
  nextPageLinkEl.addEventListener('click', handleInternalPageLink);

  window.addEventListener('keydown', (event) => {
    if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.altKey) return;
    const activeTag = document.activeElement?.tagName;
    if (activeTag === 'INPUT' || activeTag === 'TEXTAREA' || document.activeElement?.isContentEditable) return;
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      startPageTransition(prevPageLinkEl.dataset.pageTarget, -1);
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      startPageTransition(nextPageLinkEl.dataset.pageTarget, 1);
    }
  });

  function updatePointer(event) {
    pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
  }
  function pickParticle(intersection) {
    if (!intersection || !intersection.uv) return -1;
    const x = Math.round(intersection.uv.x * (cols - 1));
    const y = Math.round((1 - intersection.uv.y) * (rows - 1));
    return idx(THREE.MathUtils.clamp(x, 0, cols - 1), THREE.MathUtils.clamp(y, 1, rows - 1));
  }

  function onPointerDown(event) {
    if (event.button !== 0 || transitionState.phase !== 'idle') return;
    updatePointer(event);
    raycaster.setFromCamera(pointer, camera);
    const hit = raycaster.intersectObject(receiptMesh, true)[0];
    if (!hit) return;
    const chosen = pickParticle(hit);
    if (chosen < 0) return;
    dragState.active = true;
    dragState.index = chosen;
    dragState.point.copy(hit.point);
    dragPlane.setFromNormalAndCoplanarPoint(camera.getWorldDirection(tmpVec).clone(), hit.point);
    interactionEnergy = 1.0;
    document.body.style.cursor = 'grabbing';
  }
  function onPointerMove(event) {
    updatePointer(event);
    if (transitionState.phase !== 'idle') return;
    if (!dragState.active) return;
    raycaster.setFromCamera(pointer, camera);
    if (raycaster.ray.intersectPlane(dragPlane, dragTarget)) {
      dragState.point.copy(dragTarget);
      interactionEnergy = 1.0;
    }
  }
  function onPointerUp() {
    if (dragState.active) interactionEnergy = 0.85;
    dragState.active = false;
    dragState.index = -1;
    document.body.style.cursor = 'default';
  }

  window.addEventListener('pointerdown', onPointerDown);
  window.addEventListener('pointermove', onPointerMove);
  window.addEventListener('mousemove', (event) => {
    if (dragState.active || transitionState.phase !== 'idle') return;
    updatePointer(event);
    raycaster.setFromCamera(pointer, camera);
    const hit = raycaster.intersectObject(receiptMesh, true)[0];
    if (hit) {
      hoverState.active = true;
      hoverState.index = pickParticle(hit);
      hoverState.strength = Math.min(1, hoverState.strength + 0.22);
    } else {
      hoverState.active = false;
    }
    document.body.style.cursor = hit ? 'grab' : 'default';
  });
  window.addEventListener('pointerup', onPointerUp);
  window.addEventListener('pointercancel', onPointerUp);
  window.addEventListener('contextmenu', (e) => e.preventDefault());

  function integrate(dt, time) {
    const dtSq = dt * dt;
    interactionEnergy = Math.max(0, interactionEnergy - dt * 0.7);
    const ambientWind = Math.sin(time * 0.6) * 0.03 * interactionEnergy;
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      if (locked.has(i)) {
        p.current.copy(p.origin);
        p.previous.copy(p.origin);
        continue;
      }
      const velocity = tmpVec.copy(p.current).sub(p.previous).multiplyScalar(damping);
      p.previous.copy(p.current);
      const row = Math.floor(i / cols) / (rows - 1);
      const flutter = Math.sin(time * 2.2 + row * 7.4 + (i % cols) * 0.25) * 0.006 * interactionEnergy;
      p.current.add(velocity);
      p.current.addScaledVector(gravity, dtSq);
      p.current.x += ambientWind * dtSq * (0.35 + row * 0.75);
      p.current.z += flutter * (0.4 + row * 1.15);
      p.current.z += (p.origin.z - p.current.z) * 0.028;
      p.current.x += (p.origin.x - p.current.x) * (0.008 + row * 0.004);
    }
  }

  function solveConstraints() {
    for (let iter = 0; iter < constraintIterations; iter++) {
      for (let i = 0; i < constraints.length; i++) {
        const c = constraints[i];
        const a = particles[c.a].current;
        const b = particles[c.b].current;
        tmpVec2.subVectors(b, a);
        const dist = tmpVec2.length() || 0.0001;
        const diff = (dist - c.rest) / dist;
        const correction = tmpVec2.multiplyScalar(0.5 * c.stiffness * diff);
        const aLocked = locked.has(c.a);
        const bLocked = locked.has(c.b);
        if (aLocked && bLocked) continue;
        if (aLocked) b.sub(correction.multiplyScalar(2));
        else if (bLocked) a.add(correction.multiplyScalar(2));
        else { a.add(correction); b.sub(correction); }
      }
      for (let x = 0; x < cols; x++) {
        const top = particles[idx(x, 0)];
        top.current.copy(top.origin);
        top.previous.copy(top.origin);
      }
    }
  }

  function applyDrag() {
    if (!dragState.active || dragState.index < 0) return;
    const picked = particles[dragState.index];
    picked.current.lerp(dragState.point, 0.92);
    picked.previous.copy(picked.current);
    const cx = dragState.index % cols;
    const cy = Math.floor(dragState.index / cols);
    const maxRadius = dragState.radius + 1.2;
    for (let y = Math.max(1, Math.floor(cy - maxRadius)); y <= Math.min(rows - 1, Math.ceil(cy + maxRadius)); y++) {
      for (let x = Math.max(0, Math.floor(cx - maxRadius)); x <= Math.min(cols - 1, Math.ceil(cx + maxRadius)); x++) {
        const i = idx(x, y);
        if (i === dragState.index || locked.has(i)) continue;
        const gridDist = Math.hypot(x - cx, (y - cy) * 1.05);
        if (gridDist > maxRadius) continue;
        const influence = Math.pow(1 - gridDist / maxRadius, 1.85) * 0.34;
        particles[i].current.lerp(dragState.point, influence);
      }
    }
  }

  function applyHover(time) {
    hoverState.strength *= 0.92;
    if (!hoverState.active || hoverState.index < 0 || hoverState.strength < 0.01) return;
    const cx = hoverState.index % cols;
    const cy = Math.floor(hoverState.index / cols);
    const radius = 3.6;
    for (let y = Math.max(1, Math.floor(cy - radius)); y <= Math.min(rows - 1, Math.ceil(cy + radius)); y++) {
      for (let x = Math.max(0, Math.floor(cx - radius)); x <= Math.min(cols - 1, Math.ceil(cx + radius)); x++) {
        const i = idx(x, y);
        if (locked.has(i)) continue;
        const particle = particles[i];
        const dx = x - cx;
        const dy = (y - cy) * 1.1;
        const dist = Math.hypot(dx, dy);
        if (dist > radius) continue;
        const falloff = Math.pow(1 - dist / radius, 1.8) * hoverState.strength;
        const swirl = Math.sin(time * 8 + dx * 0.7 + dy * 0.45) * 0.0035;
        particle.current.z += falloff * 0.022 + swirl;
        particle.current.x += dx * falloff * 0.0018;
      }
    }
  }

  function updateGeometry(time) {
    const positionAttr = receiptGeometry.attributes.position;
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i].current;
      const columnNorm = (i % cols) / (cols - 1);
      const rowNorm = Math.floor(i / cols) / (rows - 1);
      const wave = getTransitionWave(time, columnNorm, rowNorm);
      positionAttr.setXYZ(i, p.x + wave.x, p.y + wave.y, p.z + wave.z);
    }
    positionAttr.needsUpdate = true;
    receiptGeometry.computeVertexNormals();
  }

  let accumulator = 0;
  let lastTime = performance.now();
  function animate(now) {
    requestAnimationFrame(animate);
    const elapsed = (now - lastTime) / 1000;
    lastTime = now;
    accumulator += Math.min(elapsed, 0.03);
    const time = now * 0.001;
    while (accumulator >= maxStep) {
      integrate(maxStep, time);
      applyDrag();
      applyHover(time);
      solveConstraints();
      accumulator -= maxStep;
    }

    if (transitionState.phase !== 'idle') {
      const progress = Math.min(1, (now - transitionState.startedAt) / transitionState.duration);
      transitionState.progress = progress;
      transitionState.strength = Math.sin(progress * Math.PI);
      setTransitionPose(progress, transitionState.direction, transitionState.phase);
      if (transitionState.phase === 'leave' && !transitionState.swapped && progress >= 0.5) {
        transitionState.swapped = true;
        swapToPendingPage();
        transitionState.phase = 'enter';
        transitionState.startedAt = now;
      } else if (transitionState.phase === 'enter' && progress >= 1) {
        transitionState.phase = 'idle';
        transitionState.pendingPage = null;
        transitionState.swapped = false;
        transitionState.progress = 0;
        transitionState.strength = 0;
        clearTransitionPose();
        document.body.classList.remove('is-page-transitioning');
      }
    }

    updateGeometry(time);
    const baseShadowOpacity = 0.06 + Math.min(0.06, Math.abs(particles[idx(Math.floor(cols / 2), rows - 1)].current.z) * 0.12);
    contactShadow.material.opacity = baseShadowOpacity * transitionState.shadowFactor;
    renderer.render(scene, camera);
  }

  applyCurrentPage({ updateHistory: true, replaceHistory: true });
  clearTransitionPose();
  requestAnimationFrame(animate);

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
})();
