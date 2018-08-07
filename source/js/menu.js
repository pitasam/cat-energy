;(function() {
  var menuButton = document.querySelector(".header__menu-button"),
    menu = document.querySelector(".menu");

  if (window.innerWidth <= 768) {
    menu.style.position = "absolute";
    menuButton.style.display = "block";
  } else {
    menu.style.position = "relative";
    menuButton.style.display = "none";
  }

  window.addEventListener("resize", function() {
    if (window.innerWidth < 768) {
      menu.style.position = "absolute";
      menuButton.style.display = "block";
    } else {
      menu.style.position = "relative";
      menuButton.style.display = "none";
    }
  });

  menuButton.addEventListener("click", function() {
    var menuHeight = menu.style.height;

    if (menuHeight) {
      menu.style.height = null;
      menuButton.style.backgroundImage = "url(img/icon-mobile-menu.svg)";
    } else {
      menu.style.height = menu.scrollHeight + "px";
      menuButton.style.backgroundImage = "url(img/icon-close.svg)";
    }
  });
})();
