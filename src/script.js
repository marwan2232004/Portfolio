const scroll_elements = document.querySelectorAll(".js-ordered-scroll");
const closingWindowElements = document.querySelectorAll(".js-closing-window");
const submit_button = document.querySelector(".submit");
const inputs = document.querySelectorAll(".input-control");
const textarea = document.querySelector("textarea");
const navigation_elements = document.querySelectorAll(".navi-elements");
const main_sections = document.querySelectorAll(".main-section");
scroll_elements.forEach((element) => {
  element.style.opacity = 0;
});
const elementInview = (element, scrollOffset = 0) => {
  const distance_top = element.getBoundingClientRect().top;
  return (
    distance_top <=
    (window.innerHeight || document.documentElement.clientHeight) - scrollOffset
  );
};
/*---------------------------Scroll Animation-------------------------*/
const add_Scroll_Animation = (element, i) => {
  element.style.animation = `slide-up ${1.2 + 0.6 * i}s ease-in-out both`;
};
const remove_Scroll_Animation = (element) => {
  element.style.animation = "none";
};
const handel_Scroll_Animation = () => {
  for (let i = 0; i < scroll_elements.length; i++) {
    if (elementInview(scroll_elements[i])) {
      add_Scroll_Animation(scroll_elements[i], i);
    } else {
      remove_Scroll_Animation(scroll_elements[i]);
    }
  }
};
/*---------------------------Closing-Window Animation-------------------------*/
const add_CWindow_Animation = (element, i) => {
  element.style.animation = `${
    !(i % 2) ? "closing-window-left" : "closing-window-right"
  } 1.2s ease-in-out`;
  element.style.opacity = 1;
};
const remove_CWindow_Animation = (element) => {
  element.style.animation = "none";
  element.style.opacity = 0;
};
const handel_CWindow_Animation = () => {
  for (let i = 0; i < closingWindowElements.length; i++) {
    if (elementInview(closingWindowElements[i], 60)) {
      add_CWindow_Animation(closingWindowElements[i], i);
    } else {
      remove_CWindow_Animation(closingWindowElements[i]);
    }
  }
};
/*---------------------------Clear Contact Form-------------------------*/
const IsFilled = () => {
  let flag = true;
  inputs.forEach((element) => {
    if (element.hasAttribute("required") && element.value == "") {
      flag = false;
    }
  });
  return flag;
};
const clear_input = () => {
  if (IsFilled()) {
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
    }
    textarea.value = "";
  }
};
const Waitforsubmission = () => {
  setTimeout(clear_input, 10);
};
/*---------------------------Navigation Scroll -------------------------*/
let normal,
  hover_color = "#6606BE",
  hovered = "";
const New = "#460483";
function Select(exception = "") {
  let id;
  for (let i = 0; i < main_sections.length; i++) {
    if (elementInview(main_sections[i], window.innerHeight / 2))
      id = main_sections[i].id;
  }
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
window.addEventListener("scroll", handel_Scroll_Animation);
window.addEventListener("scroll", handel_CWindow_Animation);
window.addEventListener("scroll", Select);
submit_button.addEventListener("click", Waitforsubmission);
for (let i = 0; i < navigation_elements.length; i++) {
  normal = navigation_elements[i].style.color;
  navigation_elements[i].addEventListener("mouseover", Hover);
  navigation_elements[i].addEventListener("mouseleave", anti_Hover);
}
Select();
handel_Scroll_Animation();
handel_CWindow_Animation();
