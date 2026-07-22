function renderFooter(opts) {
  opts = opts || {};
  var lang = opts.lang || 'en';
  var isZh = lang === 'zh';

  var pages = { home:'index.html', legal:'legal.html', accounting:'accounting.html', consulting:'consulting.html', why:'why.html', contact:'contact.html' };

  var brand, tagline, subline, navTitle, navLinks, contactTitle, addressTitle, copyright, bottomRight;

  if (isZh) {
    brand = '德 扬';
    tagline = '法务 | 会计 | 咨询';
    subline = '融汇法税财保，守护安居乐业';
    navTitle = '导航';
    navLinks = '<a href="' + pages.home + '">首页</a><a href="' + pages.legal + '">法务</a><a href="' + pages.accounting + '">会计</a><a href="' + pages.consulting + '">咨询</a><a href="' + pages.why + '">关于德扬</a><a href="' + pages.contact + '">联系我们</a>';
    contactTitle = '联系方式';
    addressTitle = '办公地址';
    copyright = '&copy; 2026 德扬集团 Bird &amp; Yang Group. All rights reserved.';
    bottomRight = '融汇法税财保，守护安居乐业';
  } else {
    brand = 'BIRD &amp; YANG';
    tagline = 'Together for Growth';
    subline = '';
    navTitle = 'Navigation';
    navLinks = '<a href="' + pages.home + '">Home</a><a href="' + pages.legal + '">Legal</a><a href="' + pages.accounting + '">Accounting</a><a href="' + pages.consulting + '">Consulting</a><a href="' + pages.why + '">Why Bird &amp; Yang</a><a href="' + pages.contact + '">Contact</a>';
    contactTitle = 'Contact';
    addressTitle = 'Address';
    copyright = '&copy; 2026 Bird &amp; Yang Group. All rights reserved.';
    bottomRight = 'Integrated in Expertise, Together for Growth';
  }

  var html = '' +
    '<footer>' +
      '<div class="footer-grid">' +
        '<div class="footer-col">' +
          '<img src="' + (isZh ? '../' : '') + 'assets/icons/Logo_0722.png" alt="Bird &amp; Yang" style="height:88px;margin-bottom:12px">' +
          '<p>' + tagline + '</p>' +
          '<p style="margin-top:6px;font-size:.75rem">' + subline + '</p>' +
        '</div>' +
        '<div class="footer-col">' +
          '<h4>' + navTitle + '</h4>' +
          navLinks +
        '</div>' +
        '<div class="footer-col">' +
          '<h4>' + contactTitle + '</h4>' +
          '<p>info@birdyang.co.nz</p>' +
          '<p>+64 9 217 6231</p>' +
        '</div>' +
        '<div class="footer-col">' +
          '<h4>' + addressTitle + '</h4>' +
          '<p>520 Mt Albert Road<br>Three Kings, Auckland 1042<br>New Zealand</p>' +
        '</div>' +
      '</div>' +
      '<div class="footer-bottom">' +
        '<span>' + copyright + '</span>' +
        '<span>' + bottomRight + '</span>' +
      '</div>' +
    '</footer>';

  document.getElementById('site-footer').innerHTML = html;
}
