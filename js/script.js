var switcher = document.querySelector(".switcher");
var circle = document.querySelector(".circle");
var body = document.getElementById("body");

circle.addEventListener("click", () => {
  body.classList.toggle("night");
  circle.classList.toggle("active");
  switcher.classList.toggle("active");
});
