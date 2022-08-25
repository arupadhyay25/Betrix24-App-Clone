window.onscroll = function() {
    myLinkBar();
};

var linkBar = document.getElementById("link_bar");
var sticky = linkBar.offsetTop;

function myLinkBar() {
  if (window.pageYOffset > sticky) {
    linkBar.classList.add("sticky");
  
  } else {
    linkBar.classList.remove("sticky");

  }
  
}