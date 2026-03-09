
(() => {
  const page = document.body.dataset.page || 'home';
  const pageConfigs = {
    home: {
      brandSub: 'receipt homepage',
      note: '左键抓住小票就能拖，鼠标滑过去会轻微浮动。现在先做成静态多页站，后面如果你想上框架，也能继续迁。',
      receipt: {
        title: 'DUANG / HOME',
        subtitle: 'PERSONAL RECEIPT PAGE',
        header: [
          ['NAME', 'Duang'],
          ['STATUS', 'building quietly'],
          ['MODE', 'interactive paper UI'],
          ['VIBE', 'clean, weird, memorable'],
        ],
        sectionTitle: 'START HERE',
        items: [
          ['01', 'About me'],
          ['02', 'Selected projects'],
          ['03', 'Writing & notes'],
          ['04', 'Contact / links'],
          ['05', 'Things I am learning'],
        ],
        total: 'CURRENT FOCUS ............ personal site / output',
        footer: [
          'A homepage should be useful, not just loud.',
          'This receipt is the front door, not the whole house.',
        ],
        stamp: 'HOME'
      }
    },
    about: {
      brandSub: 'about',
      note: '这一页我先收成简洁介绍，不再把那些技术说明写在页面外面。页面的内容，尽量都落回 receipt 本体里。',
      receipt: {
        title: 'ABOUT / DUANG',
        subtitle: 'PERSONAL PROFILE',
        header: [
          ['NAME', 'Duang'],
          ['LAST YEAR', 'computer science retaker'],
          ['NOW', 'building, learning, shipping'],
          ['HELPER', 'a lobster assistant online'],
        ],
        sectionTitle: 'SHORT INTRO',
        items: [
          ['A', 'Likes making things that can actually run'],
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
      brandSub: 'projects',
      note: '项目页我先做成精选清单，不会塞太满。之后你有真实项目名字和链接，我再替换成正式版本。',
      receipt: {
        title: 'PROJECTS / SELECTED',
        subtitle: 'WORK / EXPERIMENTS / BUILDS',
        header: [
          ['TYPE', 'personal experiments'],
          ['STYLE', 'lean but intentional'],
          ['STACK', 'web / content / automation'],
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
        total: 'PROJECT COUNT ............ 05 visible / more hidden',
        footer: [
          'Better to show a few real things than ten fake case studies.',
          'This section will grow with actual work, not decoration.',
        ],
        stamp: 'WORK'
      }
    },
    contact: {
      brandSub: 'contact',
      note: '联系页先保持轻一点。后面如果你要表单、留言板、邮箱投递，我再给你接动态服务。',
      receipt: {
        title: 'CONTACT / LINKS',
        subtitle: 'WAYS TO REACH OUT',
        header: [
          ['CHANNEL', 'GitHub Pages for now'],
          ['FORMAT', 'simple static site'],
          ['NEXT', 'custom domain optional'],
          ['NOTE', 'can expand later'],
        ],
        sectionTitle: 'AVAILABLE NOW',
        items: [
          ['GH', 'GitHub / repository links'],
          ['XS', 'Xiaohongshu content identity'],
          ['PG', 'Personal homepage updates'],
          ['ML', 'Email / form can be added later'],
          ['DM', 'More channels on request'],
        ],
        total: 'CONTACT STATUS ........... open to expansion',
        footer: [
          'No need to overbuild contact before the site itself is ready.',
          'Simple first, then useful, then fancy if needed.',
        ],
        stamp: 'CONTACT'
      }
    }
  };

  const config = pageConfigs[page] || pageConfigs.home;

  const brandSubEl = document.querySelector('[data-brand-sub]');
  const noteEl = document.querySelector('[data-corner-note]');
  if (brandSubEl) brandSubEl.textContent = config.brandSub;
  if (noteEl) noteEl.textContent = config.note;

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
    new THREE.MeshBasicMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0.06,
      depthWrite: false
    })
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
      const y = x % (notch * 2) === 0 ? 30 : 12;
      ctx.lineTo(x, y);
    }
    ctx.stroke();

    ctx.fillStyle = '#1d1a16';
    ctx.textAlign = 'left';
    ctx.font = '900 88px "Courier New", monospace';
    ctx.fillText(pageData.title, 84, 178);

    ctx.font = '700 32px "Courier New", monospace';
    ctx.fillStyle = '#6b645a';
    ctx.fillText(pageData.subtitle, 86, 232);

    ctx.fillStyle = '#24211d';
    ctx.font = '700 42px "Courier New", monospace';
    let y = 356;
    for (const [label, value] of pageData.header) {
      ctx.fillText((label + ' .........').padEnd(16, ' ') + ' ' + value, 86, y);
      y += 58;
    }

    ctx.fillStyle = '#7c7368';
    ctx.font = '600 28px "Courier New", monospace';
    ctx.fillText('---------------------------------------------', 86, y + 26);
    ctx.fillText(pageData.sectionTitle, 86, y + 80);
    ctx.fillText('---------------------------------------------', 86, y + 128);

    ctx.fillStyle = '#21201d';
    ctx.font = '700 36px "Courier New", monospace';
    y += 220;
    for (const [code, label] of pageData.items) {
      ctx.fillText(code, 90, y);
      ctx.fillText(label, 220, y);
      y += 70;
    }

    ctx.fillStyle = '#7c7368';
    ctx.font = '600 28px "Courier New", monospace';
    ctx.fillText('---------------------------------------------', 86, y + 8);

    ctx.fillStyle = '#22201d';
    ctx.font = '900 42px "Courier New", monospace';
    ctx.fillText(pageData.total, 86, y + 92);

    ctx.fillStyle = '#6d665e';
    ctx.font = '700 28px "Courier New", monospace';
    let fy = y + 170;
    for (const line of pageData.footer) {
      ctx.fillText(line, 86, fy);
      fy += 48;
    }

    ctx.save();
    ctx.translate(936, fy + 120);
    ctx.rotate(-0.08);
    ctx.strokeStyle = 'rgba(255, 120, 108, 0.85)';
    ctx.lineWidth = 7;
    ctx.strokeRect(-144, -56, 288, 112);
    ctx.fillStyle = 'rgba(255, 120, 108, 0.14)';
    ctx.fillRect(-144, -56, 288, 112);
    ctx.fillStyle = '#ff6f62';
    ctx.font = '900 42px "Courier New", monospace';
    ctx.textAlign = 'center';
    ctx.fillText(pageData.stamp, 0, 14);
    ctx.restore();

    ctx.strokeStyle = 'rgba(0,0,0,0.03)';
    ctx.lineWidth = 2;
    for (let line = 0; line < 20; line++) {
      const lineY = 760 + line * 72;
      ctx.beginPath();
      ctx.moveTo(86, lineY + 18);
      ctx.lineTo(canvas.width - 86, lineY + 18);
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
    map: createReceiptTexture(config.receipt),
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
  requestAnimationFrame(animate);

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
})();
