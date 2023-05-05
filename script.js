// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu diclik
document.querySelector("#hamburger-menu").onclik = () => {
  navbarNav.classList.toggle("activ");
};
// click diluar sildebar untuk menghilangkan tampilan
const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
