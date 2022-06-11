const openMenuIcon = document.querySelector(".fa-bars");
const closeMenuIcon = document.querySelector(".fa-xmark");
const navs = document.querySelector(".navs");

// open and close menu functionality ========>>>>>

openMenuIcon.addEventListener("click", function () {
  navs.style.right = "0%";
  openMenuIcon.style.display = "none";
  closeMenuIcon.style.right = "5%";
});

closeMenuIcon.addEventListener("click", function () {
  navs.style.right = "-40%";
  closeMenuIcon.style.right = "-20%";
  openMenuIcon.style.display = "block";
});
