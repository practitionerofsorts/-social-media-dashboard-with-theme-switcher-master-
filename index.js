const toggleButton = document.querySelector(".toggle-button");
const toggleCase = document.querySelector(".toggle-case");
const toggleText = document.querySelector(".toggle-text");
const body = document.querySelector("body");
let i = 0;
toggleButton.addEventListener("click", () => {
  i += 1;
  console.log(i);
  if (i % 2 === 0) {
    toggleCase.style.justifyContent = "flex-start";
    toggleText.innerHTML = "Dark Mode";
    body.classList.remove("active");
  } else {
    toggleCase.style.justifyContent = "flex-end";
    toggleText.innerHTML = "Light Mode";
    body.classList.add("active");
  }
});
