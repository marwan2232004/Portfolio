// ! Because  of mobiles and tablets can't handle this kind of continuous calling of this function to make the dot moving
// ! I will remove this animation from them so that the user gets a smooth experience
const mediaQuery = window.matchMedia("(max-width: 900px)");

//const closingWindowElements = document.querySelectorAll(".js-closing-window");
const main_sections = document.querySelectorAll(".main-section");
const buttons = Object.values(document.querySelectorAll(".button"));
const scroll_elements = document.querySelectorAll(".js-ordered-scroll");

const opacity_0 = (elements) => {
  elements.forEach((element) => {
    element.style.opacity = 0;
  });
};

const elementInView = (element, scrollOffset = 0) => {
  const distance_top = element.getBoundingClientRect().top;
  return (
    distance_top <=
    (window.innerHeight || document.documentElement.clientHeight) - scrollOffset
  );
};
const SectionInView = (offset) => {
  let id;
  for (let i = 0; i < main_sections.length; i++) {
    if (elementInView(main_sections[i], offset))
      id = main_sections[i].id;
  }
  return id;
};

function addClick(button) {
  button.style.animation = "click .8s ease-in-out";
  setTimeout(() => removeClick(button), 810);
}
function removeClick(button) {
  button.style.animation = "none";
}

buttons.forEach((button) => {
  button.addEventListener("mousedown", function () {
    addClick(this);
  });
});
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
    if (elementInView(closingWindowElements[i], 60)) {
      add_CWindow_Animation(closingWindowElements[i], i);
    } else {
      remove_CWindow_Animation(closingWindowElements[i]);
    }
  }
};
//window.addEventListener("scroll", handel_CWindow_Animation);
//handel_CWindow_Animation();

/*---------------------------Scroll Animation-------------------------*/
opacity_0(scroll_elements);
const add_Scroll_Animation = (element, i) => {
  element.style.animation = `slide-up ${1.2 + 0.2 * i}s ease-in-out both`;
};
const remove_Scroll_Animation = (element) => {
  element.style.animation = "none";
};
const handel_Scroll_Animation = () => {
  for (let i = 0; i < scroll_elements.length; i++) {
    if (elementInView(scroll_elements[i])) {
      add_Scroll_Animation(scroll_elements[i], i);
    } else {
      remove_Scroll_Animation(scroll_elements[i]);
    }
  }
};
window.addEventListener("scroll", handel_Scroll_Animation);
handel_Scroll_Animation();
