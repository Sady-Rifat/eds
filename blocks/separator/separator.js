export default function decorate(block) {
  const type = block.textContent.trim() || 'default';
  block.innerHTML = '';

  const hr = document.createElement('hr');
  hr.classList.add('separator-line', `separator-${type.toLowerCase()}`);
  block.append(hr);
}
