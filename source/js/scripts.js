var navMain = document.querySelector(".main-navigation");
var navToggle = document.querySelector(".main-navigation__toggle");
var pageHeader = document.querySelector(".page-header");

navMain.classList.remove("main-navigation--nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-navigation--closed") && pageHeader.classList.contains("page-header--nav-closed")) {
    pageHeader.classList.remove("page-header--nav-closed");
    pageHeader.classList.add("page-header--nav-opened");
    navMain.classList.remove("main-navigation--closed");
    navMain.classList.add("main-navnavigation--opened");
  } else {
    pageHeader.classList.add("page-header--nav-closed");
    pageHeader.classList.remove("page-header--nav-opened");
    navMain.classList.add("main-navigation--closed");
    navMain.classList.remove("main-navigation--opened");
  }
});
