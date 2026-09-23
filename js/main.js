(function () {
  'use strict';

  var root = document.documentElement;

  // Collapse the mobile menu after a nav link is clicked.
  var menu = document.getElementById('navbarSupportedContent');
  document.querySelectorAll('#sideNav .nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      if (menu && menu.classList.contains('show') && window.bootstrap) {
        bootstrap.Collapse.getOrCreateInstance(menu).hide();
      }
    });
  });

  // Theme toggle (initial theme is set by the inline script in <head>).
  document.querySelectorAll('.theme-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var next = root.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-bs-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  });

  // Follow OS changes until the visitor picks a theme explicitly.
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
      var saved = null;
      try { saved = localStorage.getItem('theme'); } catch (err) {}
      if (!saved) root.setAttribute('data-bs-theme', e.matches ? 'dark' : 'light');
    });
  }

  // Footer year.
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
