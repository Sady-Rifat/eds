// eslint-disable-next-line import/no-unresolved
import { toClassName } from '../../scripts/aem.js';

/**
 * Initializes a tabs block with sliding indicator
 * @param {HTMLElement} block The tabs block element
 */
export default async function decorate(block) {
  block.classList.add('tabs');

  // Create content wrapper
  const content = document.createElement('div');
  content.className = 'tabs-content';

  // Process tabs
  const tabs = [...block.children].map((child) => child.firstElementChild);
  tabs.forEach((tab, i) => {
    const id = toClassName(tab.textContent);

    // Create tab item
    const li = document.createElement('li');
    li.className = 'tabs-nav-item';
    li.setAttribute('role', 'tab');
    li.id = `tab-${id}`;
    li.innerHTML = tab.innerHTML;
    li.setAttribute('aria-controls', `tabpanel-${id}`);
    li.setAttribute('aria-selected', !i);
    if (i === 0) li.classList.add('active');
    tablist.appendChild(li);

    // Setup panel
    const panel = block.children[i];
    panel.className = `tabs-panel${i === 0 ? ' active' : ''}`;
    panel.id = `tabpanel-${id}`;
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('aria-labelledby', `tab-${id}`);
    content.appendChild(panel);

    // Remove original tab
    tab.remove();
  });

  // Handle clicks and indicator
  function updateIndicator(activeTab) {
    if (!activeTab) return;
    const tabRect = activeTab.getBoundingClientRect();
    const navRect = tablist.getBoundingClientRect();
    tablist.style.setProperty('--indicator-width', `${tabRect.width}px`);
    tablist.style.setProperty('--indicator-left', `${tabRect.left - navRect.left}px`);
  }

  // Set initial indicator position
  const activeTab = tablist.querySelector('.tabs-nav-item.active');
  if (activeTab) updateIndicator(activeTab);

  // Update indicator on resize
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      updateIndicator(tablist.querySelector('.tabs-nav-item.active'));
    }, 100);
  });

  tablist.addEventListener('click', (e) => {
    const tab = e.target.closest('.tabs-nav-item');
    if (!tab) return;

    const index = Array.from(tablist.children).indexOf(tab);
    
    // Update tabs
    tablist.querySelectorAll('.tabs-nav-item').forEach((t, i) => {
      t.classList.toggle('active', i === index);
      t.setAttribute('aria-selected', i === index);
    });

    // Update panels
    content.querySelectorAll('.tabs-panel').forEach((p, i) => {
      p.classList.toggle('active', i === index);
    });

    // Update indicator and scroll
    updateIndicator(tab);
    tab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
  });

  // Add to DOM
  block.innerHTML = '';
  block.appendChild(tablist);
  block.appendChild(content);
};
