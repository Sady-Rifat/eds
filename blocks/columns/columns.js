export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

  // Parse ratio from class name (e.g., class="columns 33-42-25 block ...")
  const ratioClass = [...block.classList].find((cls) => /^\d{2}-\d{2}-\d{2}$/.test(cls));
  if (ratioClass) {
    const ratios = ratioClass.split('-').map(Number);
    const row = block.firstElementChild;
    ratios.forEach((r, i) => {
      const col = row.children[i];
      if (col) col.style.flex = `0 0 ${r}%`;
    });
  }

  // existing image column detection logic
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const pic = col.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          picWrapper.classList.add('columns-img-col');
        }
      }
    });
  });
}

