export default (() => {
  const refs = {
    menuBtnRef: document.querySelector('[data-menu-button]'),
    mobileMenuRef: document.querySelector('[data-menu]'),
    containerRef: document.querySelector('.header__container'),
  };

  const menuClassList = [
    'mobile-menu mobile-menu--is-open',
    'mobile-menu__nav',
    'mobile-menu__list',
    'mobile-menu__item',
    'mobile-menu__link',
    'nav__btn-menu',
  ];

  refs.menuBtnRef.addEventListener('click', onMenuClick);

  function onMenuClick() {
    const menuIsOpen = refs.containerRef.classList.contains('menu-open');

    if (!menuIsOpen) {
      openMenu();
    } else {
      closeMenu();
    }
  }

  function openMenu() {
    refs.containerRef.classList.add('menu-open');

    document.body.classList.add('menu-open');
    refs.menuBtnRef.classList.add('nav__btn-menu--is-open');
    refs.menuBtnRef.setAttribute('aria-expanded', true);

    refs.mobileMenuRef.classList.add('mobile-menu--is-open');
  }

  function closeMenu() {
    setTimeout(() => refs.containerRef.classList.remove('menu-open'), 250);
    document.body.classList.remove('menu-open');

    refs.menuBtnRef.classList.remove('nav__btn-menu--is-open');
    refs.menuBtnRef.setAttribute('aria-expanded', false);

    refs.mobileMenuRef.classList.remove('mobile-menu--is-open');
  }
})();
