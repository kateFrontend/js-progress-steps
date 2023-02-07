// bring elements from the DOM
const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;

  if (currentActive > circles.length) {   //if it gets to the end, it doesn't go past four
    currentActive = circles.length;
  }

  update();
});

prev.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) {     // not to go under into zero negative
    currentActive = 1;
  }

  update();
});

function update() {
  circles.forEach((circle, ind) => {
    if (ind < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");

  // handle the progress bar

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
