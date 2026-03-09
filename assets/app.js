
(() => {
  const page = document.body.dataset.page || 'home';
  const PREFERRED_LANG_KEY = 'duang-site-lang';
  const defaultLang = 'en';

  const copy = {
    en: {
      htmlLang: 'en',
      brandName: 'Duang',
      navLabel: 'Primary',
      nav: { home: 'Home', about: 'About', projects: 'Projects', contact: 'Contact' },
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
        contact: {
          title: 'Duang — Contact',
          brandSub: 'contact',
          note: 'Keeping contact simple for now. If the site keeps growing, forms, email delivery, or a small backend can be added later.',
          receipt: {
            title: 'CONTACT / LINKS',
            subtitle: 'WAYS TO REACH OUT',
            header: [
              ['CHANNEL', 'github pages for now'],
              ['FORMAT', 'simple static site'],
              ['NEXT', 'custom domain optional'],
              ['NOTE', 'can expand later'],
            ],
            sectionTitle: 'AVAILABLE NOW',
            items: [
              ['GH', 'GitHub and repository links'],
              ['XS', 'Xiaohongshu content identity'],
              ['PG', 'Personal homepage updates'],
              ['ML', 'Email or form can be added later'],
              ['DM', 'More channels on request'],
            ],
            total: 'CONTACT STATUS ........... open to expansion',
            footer: [
              'Simple first, then useful, then fancy if needed.',
              'No need to overbuild contact before the site is ready.',
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
      nav: { home: '首页', about: '关于', projects: '项目', contact: '联系' },
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
        contact: {
          title: 'Duang — 联系',
          brandSub: '联系',
          note: '联系页现在先保持轻一点。之后如果你真要表单、邮箱投递或者留言板，再接动态能力也不迟。',
          receipt: {
            title: 'CONTACT / LINKS',
            subtitle: '当前可用的联系入口',
            header: [
              ['渠道', '目前先挂 GitHub Pages'],
              ['形式', '轻量静态站'],
              ['下一步', '可再接独立域名'],
              ['说明', '后续还能继续扩展'],
            ],
            sectionTitle: '现在能用的',
            items: [
              ['GH', 'GitHub 与仓库链接'],
              ['XS', '小红书账号内容'],
              ['PG', '个人主页后续更新'],
              ['ML', '邮箱或表单可后接'],
              ['DM', '需要的话还能继续加入口'],
            ],
            total: '联系状态 ............... 正在逐步补齐',
            footer: [
              '先简单，再实用，再看要不要做得更花。',
              '在网站主体没稳之前，联系页没必要过度施工。',
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
  const navLinks = {
    home: document.querySelector('[data-nav-home]'),
    about: document.querySelector('[data-nav-about]'),
    projects: document.querySelector('[data-nav-projects]'),
    contact: document.querySelector('[data-nav-contact]'),
  };
  const langButtons = Array.from(document.querySelectorAll('[data-lang-btn]'));

  function getInitialLang() {
    const stored = localStorage.getItem(PREFERRED_LANG_KEY);
    if (stored && copy[stored]) return stored;
    return defaultLang;
  }

  let currentLang = getInitialLang();
  let currentConfig = copy[currentLang].pages[page] || copy.en.pages.home;

  const container = document.body;
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xf7f5f1);

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

    const paperGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    paperGradient.addColorStop(0, 'rgba(255,255,255,0.00)');
    paperGradient.addColorStop(0.55, 'rgba(0,0,0,0.015)');
    paperGradient.addColorStop(1, 'rgba(0,0,0,0.04)');
    ctx.fillStyle = paperGradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < 8000; i++) {
      const alpha = Math.random() * 0.03;
      const shade = 236 + Math.random() * 15;
      ctx.fillStyle = `rgba(${shade}, ${shade - 4}, ${shade - 8}, ${alpha})`;
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const r = Math.random() * 1.8;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
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

    ctx.strokeStyle = 'rgba(0,0,0,0.03)';
    ctx.lineWidth = 2;
    for (let line = 0; line < 22; line++) {
      const lineY = 760 + line * 72;
      ctx.beginPath();
      ctx.moveTo(LEFT, lineY + 18);
      ctx.lineTo(canvas.width - 120, lineY + 18);
      ctx.stroke();
    }

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
    for (let i = 0; i < img.data.length; i += 4) {
      const grain = 128 + (Math.random() - 0.5) * 20;
      img.data[i] = grain;
      img.data[i + 1] = 128 + (Math.random() - 0.5) * 20;
      img.data[i + 2] = 255;
      img.data[i + 3] = 255;
    }
    ctx.putImageData(img, 0, 0);
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(6, 12);
    return texture;
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
    normalScale: new THREE.Vector2(0.25, 0.25),
    roughness: 0.96,
    metalness: 0,
    sheen: 0.25,
    sheenColor: new THREE.Color(0xfff3e7),
    clearcoat: 0.02,
    clearcoatRoughness: 0.9,
    side: THREE.DoubleSide,
  });

  const receiptMesh = new THREE.Mesh(receiptGeometry, receiptMaterial);
  receiptMesh.castShadow = true;
  scene.add(receiptMesh);

  const dragState = { active: false, index: -1, point: new THREE.Vector3(), radius: 2.25 };
  const hoverState = { active: false, index: -1, strength: 0 };

  function updateNavAndCopy(lang) {
    const langCopy = copy[lang];
    const pageCopy = langCopy.pages[page] || copy.en.pages.home;
    currentConfig = pageCopy;
    document.documentElement.lang = langCopy.htmlLang;
    document.title = pageCopy.title;
    if (brandSubEl) brandSubEl.textContent = pageCopy.brandSub;
    if (noteEl) noteEl.textContent = pageCopy.note;
    if (navEl) navEl.setAttribute('aria-label', langCopy.navLabel);
    if (navLinks.home) navLinks.home.textContent = langCopy.nav.home;
    if (navLinks.about) navLinks.about.textContent = langCopy.nav.about;
    if (navLinks.projects) navLinks.projects.textContent = langCopy.nav.projects;
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
    if (event.button !== 0) return;
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
    if (dragState.active) return;
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

  function updateGeometry() {
    const positionAttr = receiptGeometry.attributes.position;
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i].current;
      positionAttr.setXYZ(i, p.x, p.y, p.z);
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
    updateGeometry();
    contactShadow.material.opacity = 0.06 + Math.min(0.06, Math.abs(particles[idx(Math.floor(cols / 2), rows - 1)].current.z) * 0.12);
    renderer.render(scene, camera);
  }

  setLanguage(currentLang);
  requestAnimationFrame(animate);

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
})();
