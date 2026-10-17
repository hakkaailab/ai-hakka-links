(() => {
  const messages = [
    '你好，𠊎係阿知牯',
    '歡迎來到智慧客家實驗室',
    '這位有當多个客語智慧人工智慧應用',
    '當歡喜認識你'
  ];
  const stage = document.querySelector('.azhi-stage');
  if (!stage) return;
  const frames = [...stage.querySelectorAll('.azhi-frame')];
  const dots = [...stage.querySelectorAll('.azhi-progress i')];
  const message = stage.querySelector('#azhi-message');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  let elapsed = 0, last = 0, raf = 0, visible = true, ready = false;
  let shownMessage = -1, shownFrame = -1;
  const cycle = 5000;
  function render() {
    const index = Math.floor(elapsed / cycle) % messages.length;
    const phase = elapsed % cycle;
    if (shownMessage !== index) {
      message.textContent = messages[index];
      dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
      shownMessage = index;
    }
    let frame = 0;
    if (!reduced.matches) {
      // A short wave, a speaking expression, then a relaxed rest.
      if (phase < 1800) frame = Math.floor(phase / 300) % 2 ? 2 : 1;
      else if (phase < 4400) frame = Math.floor((phase - 1800) / 340) % 2 ? 0 : 3;
    }
    if (frame !== shownFrame) {
      frames.forEach((image, i) => image.classList.toggle('active', i === frame));
      shownFrame = frame;
    }
  }
  function tick() {
    const now = Date.now();
    if (last) elapsed += now - last;
    last = now;
    render();
    raf = requestAnimationFrame(tick);
  }
  function sync() {
    cancelAnimationFrame(raf);
    last = 0;
    if (ready && visible && !document.hidden) raf = requestAnimationFrame(tick);
  }
  document.addEventListener('visibilitychange', sync);
  reduced.addEventListener('change', () => { shownFrame = -1; render(); });
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      visible = entries[0].isIntersecting;
      sync();
    }, { threshold: 0 }).observe(stage);
  }
  // Decode all poses before cycling so the first greeting never flashes blank.
  Promise.all(frames.map(image => image.decode().catch(() => {}))).then(() => {
    ready = true;
    render();
    sync();
  });
})();
