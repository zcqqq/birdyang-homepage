function sectionHeader(label, title) {
  return '<div class="section-label">' + label + '</div><h2 class="section-title">' + title + '</h2>';
}

function sectionAbout(label, text, opts) {
  opts = opts || {};
  var pMargin = opts.pMargin || '';
  var containerStyle = opts.style || '';
  var styleAttr = containerStyle ? ' style="' + containerStyle + '"' : '';
  var parts = String(text).split('</p><p>');
  var pStyle = pMargin ? ' style="margin-bottom:' + pMargin + '"' : '';
  var paragraphs = parts.map(function(part, i) {
    var isLast = i === parts.length - 1;
    var s = isLast ? '' : pStyle;
    return '<p' + s + '>' + part + '</p>';
  }).join('');
  return '<div class="section-label">' + label + '</div><div class="about-text"' + styleAttr + '>' + paragraphs + '</div>';
}
