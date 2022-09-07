export default (() => {
  const refs = {
    form: document.querySelector('.form'),
    policyBox: document.getElementById('policy'),
    submitBtn: document.querySelector('[type="submit"]'),
  };

  refs.form.addEventListener('submit', onSubmit);
  refs.policyBox.addEventListener('change', onPolicyTick);

  function onSubmit(evt) {
    evt.preventDefault();
  }

  function onPolicyTick() {
    if (refs.policyBox.checked) {
      refs.submitBtn.removeAttribute('disabled');
      refs.submitBtn.classList.remove('submit-button--inactive');
    } else {
      refs.submitBtn.setAttribute('disabled', 'disabled');
      refs.submitBtn.classList.add('submit-button--inactive');
    }
  }

  // function displayModal() {}
})();
