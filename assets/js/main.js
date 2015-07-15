$(document).ready(function(){
// grab an element
  var myElement = document.querySelector("#header-headroom");
  // construct an instance of Headroom, passing the element
  var headroom  = new Headroom(myElement);
  // initialise
  headroom.init();
})



// hacky code to remove example-page constraints of p-wrapped image tags
$(document).ready(function(){
  $('.example-content p > img').wrap("<div class='imgwrap'></div>");
})
