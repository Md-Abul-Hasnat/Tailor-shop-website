const openMenuIcon = document.querySelector(".fa-bars");
const closeMenuIcon = document.querySelector(".fa-xmark");
const navs = document.querySelector(".navs");

// open and close menu functionality ========>>>>>

openMenuIcon.addEventListener("click", function () {
  navs.style.right = "0px";
  openMenuIcon.style.display = "none";
});

closeMenuIcon.addEventListener("click", function () {
  navs.style.right = "-500px";
  openMenuIcon.style.display = "block";
});
