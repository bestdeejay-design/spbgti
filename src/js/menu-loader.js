// Автоматическая генерация меню из navigation-config.js
(function() {
  if (typeof siteNav === 'undefined') return;

  var path = window.location.pathname;
  function isActive(url) {
    return path === url || path.startsWith(url) && url !== '/spbgti/';
  }
  function makeLink(item) {
    var cls = isActive(item.url) ? ' class="active"' : '';
    return '<a href="' + item.url + '"' + cls + '>' + item.name + '</a>';
  }

  // --- Главное меню (шапка) ---
  var headerNav = document.getElementById('header-nav');
  if (headerNav) {
    var h = '<ul class="nav-links">';
    siteNav.primary.forEach(function(item) {
      var sub = siteNav.dropdowns[item.id];
      if (sub && sub.length) {
        h += '<li class="dropdown-item"><a href="' + item.url + '"' + (isActive(item.url) ? ' class="active"' : '') + '>' + item.name + ' ▾</a><ul class="dropdown-menu">';
        sub.forEach(function(s) {
          h += '<li>' + makeLink(s) + '</li>';
        });
        h += '</ul></li>';
      } else {
        h += '<li>' + makeLink(item) + '</li>';
      }
    });
    h += '</ul>';
    headerNav.innerHTML = h;
  }

  // --- Боковое меню (только утверждённые разделы) ---
  var sidebarNav = document.getElementById('sidebar-nav');
  if (sidebarNav) {
    var s = '<ul class="quick-links">';
    siteNav.primary.forEach(function(item) {
      s += '<li>' + makeLink(item) + '</li>';
    });
    s += '</ul>';
    sidebarNav.innerHTML = s;
  }
})();
