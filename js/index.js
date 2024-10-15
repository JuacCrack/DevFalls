//AL CARGAR LA PAGINA
document.addEventListener("DOMContentLoaded", function () {
  preloader();
});

function preloader() {
    let section_preloader = document.querySelector(".section-preloader");
    
    section_preloader.classList.add("invert-animation");
  
    setTimeout(() => {
      section_preloader.classList.add("fade-out");
      
      setTimeout(() => {
        section_preloader.style.display = 'none';
        document.body.style.overflow = 'auto'; 
      }, 1000);
    }, 2000);
  }
  