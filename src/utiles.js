const main_sections = document.querySelectorAll(".main-section");

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
const SectionInView = () =>{
  let id;
  for (let i = 0; i < main_sections.length; i++) {
    if (elementInView(main_sections[i], window.innerHeight / 2))
      id = main_sections[i].id;
  }
  return id;
}
