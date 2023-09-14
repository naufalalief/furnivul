const NavbarLinks = document.querySelector(".nav-links");

document.querySelector("#burgir").onclick = () => {
  NavbarLinks.classList.toggle("active");
};

const burgir = document.querySelector("#burgir");

document.addEventListener("click", function (e) {
  if (!burgir.contains(e.target) && !NavbarLinks.contains(e.target)) {
    NavbarLinks.classList.remove("active");
  }
});

window.addEventListener("scroll", reveal);
function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
