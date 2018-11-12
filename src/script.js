(function(){
  'use strict';

  const handleToggle = function handleToggle(event){
    const mobileToggle = document.getElementById("js-toggle");

    if (event.target.closest("#js-hamburger")){
      mobileToggle.classList.toggle("mobile__toggle--active");
    }
   }

  document.addEventListener("click", handleToggle); 
})();