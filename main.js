const bgs = (parts => parts.flatMap(r => parts.flatMap(g => parts.map(b => [r,g,b])))
  .sort((a,b) => a[2] === b[2] ? (a[1] === b[1] ? a[0].localeCompare(b[0]) : a[1].localeCompare(b[1])) : a[2].localeCompare(b[2]))
  .map(([r,g,b]) => `#${r}${g}${b}`))(['0','F']);

const fonts = ['#000', '#888', '#fff', '#0f0'];
const filters = [
  'none',
  'blur(1px)',
  'blur(2px)',
  'drop-shadow(2px 2px 2px red)',
  'brightness(0.25)',
  'brightness(2)',
  'contrast(0.25)',
  'contrast(2)',
  'grayscale(.25)',
  'grayscale(1)',
  'hue-rotate(90deg)',
  'hue-rotate(180deg)',
  'hue-rotate(270deg)',
  'invert(0.25)',
  'invert(1)',
  'opacity(0.5)',
  'saturate(0)',
  'saturate(0.5)',
  'saturate(2)',
  'sepia(0.5)',
  'sepia(1)',
  'invert(1) grayscale(1) contrast(9)',
  'invert(1) grayscale(1) contrast(1)',
  'contrast(30)',
  'invert(1) contrast(30) grayscale(1) contrast(30)',
  'contrast(30) invert(1) grayscale(1) contrast(30) contrast(.25)',
  'contrast(30) invert(1) grayscale(1) contrast(30) saturate(.75)',
  'invert(1) grayscale(1)',
  'invert(1) grayscale(1) contrast(9)',
  'invert(1) grayscale(1) contrast(9) brightness(2)',
  'invert(1) grayscale(1) contrast(9) brightness(.5)',
  'contrast(30) invert(1) ',
  'invert(1)',
  'contrast(30) grayscale(1) invert(1)',
  'grayscale(1) contrast(30) invert(1)',
  'grayscale(.75)',
  'invert(1) grayscale(.75)',
];

window.result.innerHTML = filters.map(filter => `<div class="test">
  <div>${filter}</div>
  <div class="group">
  ${fonts.flatMap(font => bgs.map(bg => `<div class="bg" style="background-color:${bg}"><div class="text" style="color:${font};filter:${filter}"></div></div>`)).join('')}
  </div>
</div>`).join('');
