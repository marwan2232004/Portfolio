const ProjectGrid = document.querySelector(".project-grid");
const projectButtons = Object.values(
  document.querySelectorAll(".project-button")
);
function CreateItem(name, field, url, description) {
  return ` <div class="box js-ordered-scroll">
  <div class="container2">
    <div class="image">
    <img
        src="${url}"
        alt="${name}"
        title="${name}"
        class="project-images"
        loading="lazy"
    />
    </div>
    <div class="layer">
        <div class="link-container">
            <a
            href="https://github.com/marwan2232004/DS-project/tree/main"
            target="_blank"
            class="preview" >
                <div class="bottom-model">
                    <span class="preview-text">Preview </span>
                    <img
                    src="images/Projects/external-link.svg"
                    alt="${name}"
                    title="${name}"
                    class="external-link-icon"
                    loading="lazy"
                    />
                </div>
            </a>
        </div>
            <div class="description">
              ${description}
            </div>
    </div>
</div>
 <div class="project-name">${name}</div>
 <div class="project-field ">${field}</div>
</div>`;
}
function AddItems() {
  let grid = "";
  for (let i = 0; i < projectsData.length; i++) {
    grid += CreateItem(
      projectsData[i].name,
      projectsData[i].field,
      projectsData[i].imgUrl,
      projectsData[i].description
    );
  }
  ProjectGrid.innerHTML = grid;
}

function filter(button) {
  let grid = "";
  for (let i = 0; i < projectsData.length; i++) {
    let fields = projectsData[i].field.split(",");
    for (let j = 0; j < fields.length; j++) {
      if (button.innerHTML === fields[j] || button.innerHTML === "All") {
        grid += CreateItem(
          projectsData[i].name,
          projectsData[i].field,
          projectsData[i].imgUrl,
          projectsData[i].description
        );
        break;
      }
    }
  }
  ProjectGrid.innerHTML = grid;
}

AddItems();
projectButtons.forEach((button) => {
  button.addEventListener("mousedown", function () {
    filter(this);
  });
});
