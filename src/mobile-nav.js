const mobile_icon = document.getElementsByClassName("mobile-nav-icon");
const mobile_nav = document.getElementsByClassName("mobile-nav");
const open_mobile_nav = () => {
  mobile_nav[0].style.display =
    mobile_nav[0].style.display == "none" ? "flex" : "none";
};
const check = () => {
  if (
    mobile_icon[0].style.display == "none" ||
    mobile_icon[0].style.display == ""
  ) {
    mobile_nav[0].style.display = "none";
  }
};
mobile_icon[0].addEventListener("click", open_mobile_nav);
window.addEventListener("resize", check);