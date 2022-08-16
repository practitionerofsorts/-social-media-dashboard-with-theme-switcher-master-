const toggleButton = document.querySelector(".toggle-button");
const toggleCase = document.querySelector(".toggle-case");
const body = document.querySelector("body");
let i = 0;
toggleButton.addEventListener("click", () => {
  i += 1;
  console.log(i);
  if (i % 2 === 0) {
    toggleCase.style.justifyContent = "flex-start";
    body.classList.remove("active");
  } else {
    toggleCase.style.justifyContent = "flex-end";
    body.classList.add("active");
  }
});
