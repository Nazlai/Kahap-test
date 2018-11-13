(function(){
  'use strict';
  
  const handleToggle = function handleToggle(event){
    const mobileToggle = document.getElementById("js-toggle");
    const listToggle = document.getElementById("js-list");

    if (event.target.closest("#js-hamburger")){
      mobileToggle.classList.toggle("mobile__toggle--active");
      listToggle.classList.toggle("nav__list--active");
    }

    if (event.target.matches(".item__link")){
      mobileToggle.classList.remove("mobile__toggle--active");
      listToggle.classList.remove("nav__list--active");
    }
   }

  document.addEventListener("click", handleToggle); 
})();