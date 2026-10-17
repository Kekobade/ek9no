let el = document.querySelector('.pic').parentElement;
while (el) {
  const s = getComputedStyle(el);
  if (s.transform !== 'none' || s.filter !== 'none' || s.willChange !== 'auto' ||
      s.contain !== 'none' || s.perspective !== 'none' || s.backdropFilter !== 'none') {
    console.log('culprit:', el);
  }
  el = el.parentElement;
}
