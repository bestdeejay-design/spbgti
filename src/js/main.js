document.addEventListener('DOMContentLoaded', function() {
  const countdownEl = document.querySelector('.countdown');
  if (countdownEl) {
    const target = countdownEl.dataset.target;
    const targetDate = new Date(target).getTime();
    
    function updateCountdown() {
      const now = Date.now();
      const diff = targetDate - now;
      
      if (diff <= 0) {
        countdownEl.innerHTML = '<p>Юбилей фонда уже наступил!</p>';
        return;
      }
      
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      document.getElementById('countdown-days').textContent = days;
      document.getElementById('countdown-hours').textContent = hours;
      document.getElementById('countdown-minutes').textContent = minutes;
      document.getElementById('countdown-seconds').textContent = seconds;
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  var hamburger = document.querySelector('.hamburger');
  var nav = document.querySelector('.nav');
  var overlay = document.querySelector('.nav-overlay');

  function closeNav() {
    hamburger.classList.remove('active');
    nav.classList.remove('open');
    if (overlay) overlay.classList.remove('open');
  }

  if (hamburger && nav) {
    hamburger.addEventListener('click', function() {
      if (nav.classList.contains('open')) { closeNav(); }
      else { hamburger.classList.add('active'); nav.classList.add('open'); if (overlay) overlay.classList.add('open'); }
    });
    if (overlay) overlay.addEventListener('click', closeNav);
  }

  var dropdownToggle = document.querySelector('.dropdown-item > a');
  if (dropdownToggle) {
    dropdownToggle.addEventListener('click', function(e) {
      e.preventDefault();
      var menu = this.nextElementSibling;
      if (menu) {
        menu.style.display = menu.style.display === 'block' ? '' : 'block';
      }
    });
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.dropdown-item')) {
        document.querySelectorAll('.dropdown-menu').forEach(function(m) {
          m.style.display = '';
        });
      }
    });
  }

  document.querySelectorAll('.nav-links a').forEach(function(link) {
    link.addEventListener('click', closeNav);
  });

  var lightbox = document.querySelector('.lightbox');
  if (lightbox) {
    var lbImg = lightbox.querySelector('img');
    var lbClose = lightbox.querySelector('.close');
    document.querySelectorAll('.news-gallery img').forEach(function(img) {
      img.addEventListener('click', function() {
        if (lbImg) lbImg.src = this.src;
        lightbox.classList.add('open');
      });
    });
    if (lbClose) lbClose.addEventListener('click', function() { lightbox.classList.remove('open'); });
    lightbox.addEventListener('click', function(e) { if (e.target === lightbox) lightbox.classList.remove('open'); });
    document.addEventListener('keydown', function(e) { if (e.key === 'Escape') lightbox.classList.remove('open'); });
  }

  /*
  if (window.location.search.includes('debug')) {
    var bar = document.createElement('div');
    bar.id = 'debug-bar';
    bar.style.cssText = 'position:fixed;bottom:0;left:0;right:0;z-index:9999;background:rgba(0,0,0,0.85);color:#0f0;font:12px monospace;padding:6px 12px;display:flex;gap:20px;flex-wrap:wrap;pointer-events:none';
    document.body.appendChild(bar);

    function updateDebug() {
      var w = window.innerWidth;
      var h = window.innerHeight;
      var dpr = window.devicePixelRatio || 1;
      var bp = w >= 1024 ? 'desktop' : w >= 768 ? 'tablet' : 'mobile';
      var headerH = document.querySelector('header')?.offsetHeight || 0;
      var headerW = document.querySelector('.header-inner')?.offsetWidth || 0;
      var navW = document.querySelector('.nav-links')?.offsetWidth || 0;
      bar.innerHTML = [
        'vp:' + w + 'x' + h,
        'dpr:' + dpr.toFixed(1),
        'bp:' + bp,
        'hdr:' + headerW + 'x' + headerH,
        'nav:' + navW + 'px'
      ].join(' | ');
    }
    updateDebug();
    window.addEventListener('resize', updateDebug);
  }
  */
});