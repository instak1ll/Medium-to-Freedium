function createFreediumButton() {
  const button = document.createElement('button');
  button.id = 'freedium-button';
  button.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
    Read on Freedium
  `;
  
  button.addEventListener('click', () => {
    const currentUrl = window.location.href;
    const freediumUrl = `https://freedium.cfd/${currentUrl}`;
    window.open(freediumUrl, '_blank');
  });

  document.body.appendChild(button);
}

// Wait for the page to load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', createFreediumButton);
} else {
  createFreediumButton();
}