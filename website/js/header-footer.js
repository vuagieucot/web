$(document).ready(function() {    
  /* get the main menu element to constantly check if user scroll down */  
  var menu = document.getElementById("menu");
  var checkpoint = menu.offsetTop;
  setFixedMenu(menu, checkpoint)
  window.onscroll = function() {setFixedMenu(menu, checkpoint)};
  /* prevent user from reload page when hit enter in the input form */
  $(window).keydown(function(event){
      if(event.keyCode == 13) {
        event.preventDefault();
        return false;
      }
  });
}); 

function setFixedMenu(menu, checkpoint) {
  /* if the main menu was scroll across the top of the page, it will stick to the top */
    if (window.pageYOffset > checkpoint) {
        menu.classList.add("fixed-menu");
        menu.classList.remove("nonfixed-menu"); 
      } else {
        menu.classList.remove("fixed-menu"); 
        menu.classList.add("nonfixed-menu");
      }
}