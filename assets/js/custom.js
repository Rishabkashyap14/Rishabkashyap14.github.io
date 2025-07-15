document.addEventListener('click', e => {
    if (e.target.classList.contains('modal')) {
      window.location.hash = '';
    }
  });
  