// Sidebar Menu
const toggle = document.getElementById("menuToggle");
const menu = document.getElementById("sidebar");

toggle.onclick = function () {
   toggle.classList.toggle("active");
   menu.classList.toggle("active");
};

document.onclick = function (e) {
   if ((e.target.id !== "sidebar") & (e.target.id !== "menuToggle")) {
      toggle.classList.remove("active");
      menu.classList.remove("active");
   }
};
// Sidebar Menu

// Navbar Sticky
document.addEventListener("DOMContentLoaded", function () {
   window.addEventListener("scroll", function () {
      if (window.scrollY > 200) {
         document.getElementById("navbar_fixed").classList.add("sticky");
         // add padding top to show content behind navbar
         navbar_height = document.querySelector(".navbar").offsetHeight;
         document.body.style.paddingTop = navbar_height + "px";
      } else {
         document.getElementById("navbar_fixed").classList.remove("sticky");
         // remove padding top from body
         document.body.style.paddingTop = "0";
      }
   });
});
// Navbar Sticky

