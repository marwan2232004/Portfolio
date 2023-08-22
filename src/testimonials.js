const testimonialsGrid = document.querySelector(".testimonials-grid");

function createCard(rating, name, url, text, position) {
  let ratingCollection = "";
  for (let i = 0; i < rating[0]; i++) {
    ratingCollection += ` <img src="images/Testimonials/star.png" alt="star" title="star" class="star" />`;
  }
  for (let i = 0; i < rating[1]; i++) {
    ratingCollection += ` <img src="images/Testimonials/half-star.png" alt="half-star" title="half-star" class="half-star" />`;
  }
  return `
    <div class="card">
        <div class="rating">${ratingCollection}</div>
        <div class="opinion">${text}</div>
        <div class="person-info">
        <img src="${url}" alt="${name}" title="${name}" class="person-img" />
            <div class="person-data">
                <div class="person-name">${name}</div>
                <div class="person-position">${position}</div>
            </div>
        </div>
    </div>
 `;
}
function createTestimonialsGrid() {
  let Grid = "";
  for (let i = 0; i < testimonialsData.length; i++) {
    Grid += createCard(
      testimonialsData[i].rating,
      testimonialsData[i].name,
      testimonialsData[i].url,
      testimonialsData[i].text,
      testimonialsData[i].position
    );
  }
  testimonialsGrid.innerHTML=Grid;
}
createTestimonialsGrid();
