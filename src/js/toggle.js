export default (anything => {
  let dropdown = document.querySelector('.dropdown');
  dropdown.onclick = function () {
    dropdown.classList.toggle('active');
  };
})();
