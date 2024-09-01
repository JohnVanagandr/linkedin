const profileMenu = document.querySelector("#profielMenu");
const profile = document.querySelector(".navigation__profile");

profile.addEventListener("click", () => {
  profileMenu.classList.toggle("open-menu");
});