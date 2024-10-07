const observer = new MutationObserver(() => {
  removeTargetBlank();
});

function removeTargetBlank() {
  document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.removeAttribute('target');
  });
}

const config = {
  childList: true,
  subtree: true
};

document.addEventListener('DOMContentLoaded', () => {
  observer.observe(document.body, config);
});
