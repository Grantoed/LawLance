!function(){var e;(e={menuBtnRef:document.querySelector("[data-menu-button]"),mobileMenuRef:document.querySelector("[data-menu]"),containerRef:document.querySelector(".header__container")}).menuBtnRef.addEventListener("click",(function(){e.containerRef.classList.contains("menu-open")?(setTimeout((function(){return e.containerRef.classList.remove("menu-open")}),250),document.body.classList.remove("menu-open"),e.menuBtnRef.classList.remove("nav__btn-menu--is-open"),e.menuBtnRef.setAttribute("aria-expanded",!1),e.mobileMenuRef.classList.remove("mobile-menu--is-open")):(e.containerRef.classList.add("menu-open"),document.body.classList.add("menu-open"),e.menuBtnRef.classList.add("nav__btn-menu--is-open"),e.menuBtnRef.setAttribute("aria-expanded",!0),e.mobileMenuRef.classList.add("mobile-menu--is-open"))})),function(){var e={form:document.querySelector(".form"),policyBox:document.getElementById("policy"),submitBtn:document.querySelector('[type="submit"]')};e.form.addEventListener("submit",(function(e){e.preventDefault()})),e.policyBox.addEventListener("change",(function(){e.policyBox.checked?(e.submitBtn.removeAttribute("disabled"),e.submitBtn.classList.remove("submit-button--inactive")):(e.submitBtn.setAttribute("disabled","disabled"),e.submitBtn.classList.add("submit-button--inactive"))}))}(),function(){var e={backdrop:document.querySelector(".backdrop"),openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function t(){document.body.classList.toggle("modal-open"),e.modal.classList.toggle("backdrop--is-hidden")}e.backdrop.addEventListener("click",(function(e){e.target.classList.contains("backdrop")&&t()})),e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)}()}();
//# sourceMappingURL=index.e191eff6.js.map
