let menuBtn = document.querySelector("#menu");
let sitenav = document.querySelector(".sitenav");

menuBtn.onclick = () => {
  menuBtn.classList.toggle("bx-x");
  sitenav.classList.toggle("active");
};
