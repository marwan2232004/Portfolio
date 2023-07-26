const scroll_elements = document.querySelectorAll(".js-ordered-scroll");
const closingWindowElements = document.querySelectorAll(".js-closing-window");
const submit_button = document.querySelector(".submit");
const inputs = document.querySelectorAll(".input-control");
const textarea = document.querySelector("textarea");
scroll_elements.forEach((element) => {
  element.style.opacity = 0;
});
const elementInview = (element, scrollOffset = 0) => {
  const distance_top = element.getBoundingClientRect().top;
  console.log(
    scrollOffset,
    distance_top,
    window.innerHeight,
    distance_top <=
      (window.innerHeight || document.documentElement.clientHeight) -
        scrollOffset
  );
  return (
    distance_top <=
    (window.innerHeight || document.documentElement.clientHeight) - scrollOffset
  );
};
/*---------------------------Scroll Animation-------------------------*/
const add_Scroll_Animation = () => {
  for (let i = 0; i < scroll_elements.length; i++) {
    scroll_elements[i].style.animation = `slide-up ${
      1.2 + 0.6 * i
    }s ease-in-out `;
    scroll_elements[i].style.opacity = 1;
  }
};
const remove_Scroll_Animation = () => {
  scroll_elements.forEach((element) => {
    element.style.animation = "none";
    element.style.opacity = 0;
  });
};
const handel_Scroll_Animation = () => {
  scroll_elements.forEach((element) => {
    if (elementInview(element, 60)) {
      add_Scroll_Animation();
    } else {
      remove_Scroll_Animation();
    }
  });
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
   for(let i = 0; i < inputs.length; i++) {  
        inputs[i].value="";
   } 
   textarea.value=""; 
  }
};
const Waitforsubmission=() => {
  setTimeout(clear_input, 10);
};
/* --------------------------------------EventListeners-------------------------------------------- */
window.addEventListener("scroll", handel_Scroll_Animation);
window.addEventListener("scroll", handel_CWindow_Animation);
submit_button.addEventListener("click", Waitforsubmission);
