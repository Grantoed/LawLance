export default (() => {
  const refs = {
    backdrop: document.querySelector('.backdrop'),
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.backdrop.addEventListener('click', evt => {
    if (evt.target.classList.contains('backdrop')) {
      toggleModal();
    }
  });

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('backdrop--is-hidden');
  }
})();
