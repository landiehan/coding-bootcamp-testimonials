const carousel = document.querySelector("#carousel");
const slides = document.querySelectorAll(".slide");
const ctrls = document.createElement("ul");
let index = 0;

// Create and add the buttons using JavaScript, 
// as they only work when JavaScript is available anyway.
ctrls.className = "controls";
ctrls.innerHTML = `
  <li>
    <button type="button" id="btn-prev" class="btn">
      <img src="images/icon-prev.svg" alt="Previous testimonial">
    </button>
  </li>

  <li>
    <button type="button" id="btn-next" class="btn">
      <img src="images/icon-next.svg" alt="Next testimonial">
    </button>
  </li>
`;

ctrls.querySelector("#btn-prev")
     .addEventListener("click", prevSlide);
ctrls.querySelector("#btn-next")
     .addEventListener("click", nextSlide);

carousel.append(ctrls);

function prevSlide() {
  slides[index].classList.remove('current');

  index = (index === 0 )
    ? slides.length - 1 
    : index - 1;

  slides[index].classList.add("current");
}

function nextSlide() {
  slides[index].classList.remove('current');

  index = (index === slides.length - 1)
    ? 0
    : index + 1;

  slides[index].classList.add("current");
}