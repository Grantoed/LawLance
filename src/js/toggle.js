export default (() => {
  const dropdown = document.querySelector('.dropdown');
  dropdown.onclick = function () {
    dropdown.classList.toggle('active');
  };

  const dropdownMob = document.querySelector('.dropdown--mobile');
  dropdownMob.onclick = function () {
    dropdownMob.classList.toggle('active');
  };
})();
