//= require vendor/jquery
//= require_tree ./vendor/bootstrap4
//= require vendor/headroom
//= require vendor/stellar
//= require vendor/smooth-scroll


// disable mobile via: https://github.com/markdalgleish/stellar.js/issues/37
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};





$(document).ready(function(){

  smoothScroll.init();
  if( !isMobile.any() ){
  // grab an element
    var myElement = document.querySelector("#header-headroom");
    // construct an instance of Headroom, passing the element
    var headroom  = new Headroom(myElement);
    // initialise

    headroom.init();
    $.stellar({
        horizontalScrolling: false
    });
  }else{
    $(".animate-intro").removeClass('animate-intro');
    // disable animate
  }
})

