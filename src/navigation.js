const navigation_elements = document.querySelectorAll(".navi-elements");
// const bar = document.querySelector(".bar");
/*---------------------------Navigation Scroll -------------------------*/
let normal,
  hover_color = "#6606BE",
  hovered = "";
const New = "#460483";
function Select(exception = "") {
  let id = SectionInView(window.innerHeight-10);
  // bar.style.backgroundImage = id !== "about" ?  `linear-gradient(
  //   rgba(0,0,0,.5),#E1B6FD
  //  )`: "none";
  for (let i = 0; i < navigation_elements.length; i++) {
    if (exception != navigation_elements[i].innerHTML) {
      navigation_elements[i].style.color = normal;
    }
    if (navigation_elements[i].innerHTML == hovered) {
      navigation_elements[i].style.color = hover_color;
    }
    if (id.toLowerCase() == navigation_elements[i].innerHTML.toLowerCase()) {
      navigation_elements[i].style.color = New;
    }
  }
}
function Hover() {
  hovered = this.innerHTML;
  this.style.color = hover_color;
  Select(hovered);
}
function anti_Hover() {
  hovered = "";
  this.style.color = normal;
  Select(this.innerHTML);
}
/* --------------------------------------EventListeners-------------------------------------------- */
window.addEventListener("scroll", Select);
for (let i = 0; i < navigation_elements.length; i++) {
  normal = navigation_elements[i].style.color;
  navigation_elements[i].addEventListener("mouseover", Hover);
  navigation_elements[i].addEventListener("mouseleave", anti_Hover);
}
Select();
