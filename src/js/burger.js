export let burgerFunction = function () {
  const burgerMenuBtn = document.querySelector("#burger-button");
  const burgerMenuWrapper = document.querySelector("#burger-menu");
  const burgerNavigationList = burgerMenuWrapper.querySelectorAll(
    ".burger-menu__navigation-item"
  );
  const burgerMenu = document.querySelector(".burger-menu__body");

  document.addEventListener("scroll", () => {
    let currentScrollPosition = window.scrollY;
    burgerMenuWrapper.style.top = `${currentScrollPosition}px`;
  });

  function toggleBurgerMenu() {
    burgerMenuBtn.classList.toggle("burger-button_active");
    burgerMenuWrapper.classList.toggle("burger-menu_active");
    burgerMenu.classList.toggle("burger-menu__body_active");

    if (burgerMenuWrapper.classList.contains("burger-menu_active")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }

  burgerMenuBtn.addEventListener("click", (e) => {
    toggleBurgerMenu(e);
  });

  burgerMenuWrapper.addEventListener("click", (e) => {
    if (e.target === burgerMenuWrapper) {
      toggleBurgerMenu(e);
    }
  });

  burgerNavigationList.forEach((item) => {
    item.addEventListener("click", () => {
      toggleBurgerMenu();
    });
  });
};
