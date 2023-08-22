const main_sections = document.querySelectorAll(".main-section");
const buttons = Object.values(document.querySelectorAll(".button"));
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
const SectionInView = () => {
  let id;
  for (let i = 0; i < main_sections.length; i++) {
    if (elementInView(main_sections[i], window.innerHeight / 2))
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
