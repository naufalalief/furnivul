//
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
//
function scrollHeader() {
  const navbar = document.getElementById("navbar");
  if (this.scrollY >= 150) navbar.classList.add("scroll-header");
  else navbar.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);
//
const sections = document.querySelectorAll("section[id]");
function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 100;
    const sectionId = current.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      const activeLink = document.querySelector(
        ".navbar .nav-links a[href*=" + sectionId + "]"
      );
      activeLink.classList.add("active-link");
      activeLink.style.backgroundColor = "white";
      activeLink.style.color = "transparent";
      activeLink.style.WebkitBackgroundClip = "text";
      activeLink.style.backgroundClip = "text";
    } else {
      const inactiveLink = document.querySelector(
        ".navbar .nav-links a[href*=" + sectionId + "]"
      );
      inactiveLink.style.backgroundColor = "";
      inactiveLink.style.color = "var(--primary)";
    }
  });
}
window.addEventListener("scroll", scrollActive);
//
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
//
document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
});
function contactNotification() {
  const x = document.getElementById("notification");
  const name = document.querySelector('input[name="name"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const message = document.querySelector('input[name="message"]').value;

  if (name.trim() !== "" && email.trim() !== "" && message.trim() !== "") {
    x.className = "show";
    setTimeout(() => {
      x.className = x.className.replace("show", "");
    }, 3000);
  }
}

const btn = document.getElementById("btnSnack");
btn.addEventListener("click", contactNotification);
//
document.getElementById("regis").addEventListener("submit", function (e) {
  e.preventDefault();
});
function regisNotification() {
  const y = document.getElementById("register-notification");
  const email = document.querySelector('input[name="register-email"]').value;
  if (email.trim() !== "") {
    y.className = "show";
    setTimeout(() => {
      y.className = y.className.replace("show", "");
    }, 3000);
  }
}
const reg = document.getElementById("regisSnack");
reg.addEventListener("click", regisNotification);
// 