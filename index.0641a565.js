!function(){var e;(e={menuBtnRef:document.querySelector("[data-menu-button]"),mobileMenuRef:document.querySelector("[data-menu]"),containerRef:document.querySelector(".header__container")}).menuBtnRef.addEventListener("click",(function(){e.containerRef.classList.contains("menu-open")?(setTimeout((function(){return e.containerRef.classList.remove("menu-open")}),250),document.body.classList.remove("menu-open"),e.menuBtnRef.classList.remove("nav__btn-menu--is-open"),e.menuBtnRef.setAttribute("aria-expanded",!1),e.mobileMenuRef.classList.remove("mobile-menu--is-open")):(e.containerRef.classList.add("menu-open"),document.body.classList.add("menu-open"),e.menuBtnRef.classList.add("nav__btn-menu--is-open"),e.menuBtnRef.setAttribute("aria-expanded",!0),e.mobileMenuRef.classList.add("mobile-menu--is-open"))}))}();
//# sourceMappingURL=index.0641a565.js.map