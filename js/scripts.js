AOS.init();

const btnHome = document.getElementById('btnHome');

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    btnHome.classList.add("show");
  } else {
    btnHome.classList.remove("show");
  }
});


// window.addEventListener('scroll', function () {
//     const navbar = document.getElementById('navbar');
//     if (window.scrollY > 100) {
//         navbar.classList.add('sticky-navbar');
//     } else {
//         navbar.classList.remove('sticky-navbar');
//     }
// });
