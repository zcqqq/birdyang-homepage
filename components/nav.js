function renderNav(opts) {
  opts = opts || {};
  var active = opts.active || 'home';
  var lang = opts.lang || 'en';
  var transparent = opts.transparent || false;
  var isZh = lang === 'zh';
  var prefix = isZh ? '../' : '';

  var labels = isZh
    ? { home:'首页', legal:'法务', accounting:'会计', consulting:'咨询', why:'关于德扬', contact:'联系我们' }
    : { home:'Home', legal:'Legal', accounting:'Accounting', consulting:'Consulting', why:'Why B&Y', contact:'Contact' };

  var pages = { home:'index.html', legal:'legal.html', accounting:'accounting.html', consulting:'consulting.html', why:'why.html', contact:'contact.html' };

  var enToggle = isZh
    ? '<a href="' + prefix + pages[active] + '">EN</a>'
    : '<a href="#" class="active-lang">EN</a>';
  var zhToggle = isZh
    ? '<a href="#" class="active-lang">中文</a>'
    : '<a href="zh/' + pages[active] + '">中文</a>';

  var navLinks = '';
  var mobileLinks = '';
  for (var key in labels) {
    var cls = (key === active) ? ' class="active"' : '';
    var href = isZh ? pages[key] : pages[key];
    navLinks += '<a href="' + href + '"' + cls + '>' + labels[key] + '</a>';
    mobileLinks += '<a href="' + href + '" onclick="this.parentElement.classList.remove(\'open\')">' + labels[key] + '</a>';
  }

  var html = '' +
    '<nav' + (transparent ? ' class="transparent"' : '') + '>' +
      '<a href="' + pages.home + '" class="logo"><img src="' + prefix + 'assets/svg/logo.svg" alt="' + (isZh ? '德扬' : 'Bird &amp; Yang') + '"></a>' +
      '<div class="nav-links">' + navLinks + '</div>' +
      '<div class="nav-extras">' +
        '<span class="lang-toggle">' + enToggle + ' | ' + zhToggle + '</span>' +
        '<span class="search-icon"><svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></span>' +
      '</div>' +
      '<div class="hamburger" onclick="document.querySelector(\'.mobile-menu\').classList.add(\'open\')"><span></span><span></span><span></span></div>' +
    '</nav>' +
    '<div class="mobile-menu">' +
      '<button class="mobile-close" onclick="this.parentElement.classList.remove(\'open\')">&times;</button>' +
      mobileLinks +
    '</div>';

  document.getElementById('site-nav').innerHTML = html;
}
