window.addEventListener('load', () => {
  const modalTrigger = document.getElementById('open-modal');
  const modalTitle = document.getElementById('modal-title');
  const mainContent = document.getElementById('main-content');

  const modal = document.getElementById('modal');
  const close = document.getElementById('modal-close');

  modalTrigger.addEventListener('click', openModal);
  close.addEventListener('click', closeModal);
  window.addEventListener('click', closeModal);

  function openModal() {
    modal.classList.remove('hidden');
    mainContent.setAttribute('aria-hidden', 'true');
    modal.setAttribute('aria-hidden', 'false');
    modalTitle.focus();
  }
  function closeModal({ target }) {
    if (target == modal || target == close) {
      mainContent.setAttribute('aria-hidden', 'false');
      modal.classList.add('hidden');
      modal.setAttribute('aria-hidden', 'true');
    }
  }
});
