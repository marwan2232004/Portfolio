const mobile_icon = document.getElementsByClassName("mobile-nav-icon");
const mobile_nav = document.getElementsByClassName("mobile-nav");
const mobile_links = Object.values(
  document.getElementsByClassName("mobile-nav-link")
);

const open_mobile_nav = () => {
  mobile_nav[0].style.display =
    mobile_nav[0].style.display === "none" ? "flex" : "none";
};
const check = () => {
  if (
    mobile_icon[0].style.display === "none" ||
    mobile_icon[0].style.display === ""
  ) {
    mobile_nav[0].style.display = "none";
  }
};

function mobile_select() {
  mobile_links.forEach((link) => (link.style.color = normal));
  this.style.color = New;
}

function mobile_select_scroll() {
  let id = SectionInView();
  for (let i = 0; i < mobile_links.length; i++) {
    mobile_links[i].style.color = normal;
    if (id.toLowerCase() == mobile_links[i].innerHTML.toLowerCase()) {
      mobile_links[i].style.color = New;
    }
  }
}

mobile_icon[0].addEventListener("click", open_mobile_nav);
window.addEventListener("resize", check);
window.addEventListener("scroll", mobile_select_scroll);
mobile_links.forEach((link) => link.addEventListener("click", mobile_select));
