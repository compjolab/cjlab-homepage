//= require vendor/jquery
//= require_tree ./vendor/bootstrap4
//= require vendor/headroom
//= require vendor/stellar
//= require vendor/console.message
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
    $(".item").each(function(){
        if($(this).attr('data-href')){
            var thishref = $(this).attr('data-href');
            $(this).addClass('clickable').click(function(){
                window.location = thishref;
            });
        }
    })
})



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

$(document).ready(function(){

    var _basestyle = {fontFamily: "'Gill Sans', Helvetica, sans-serif",
        color: 'rgb(156, 10, 10)',
        fontSize: 20};

    var _linkstyle = {fontFamily: "Menlo, Monaco, Consolas, 'Courier New', monospace, Helvetica, sans-serif",
        color: 'rgb(19, 10, 200)',
        fontSize: 16};

    var _fancystyle = {
        fontSize: 42,
        color: 'hsl(295, 100%, 50%)',
        fontFamily: '\'Permanent Marker\', cursive'
    };

    var _smallfancystyle = {
        fontSize: 26,
        color: 'hsl(342, 100%, 50%)',
        fontFamily: '\'Permanent Marker\', cursive'
    };

    console.message().text("So you like to hack?", _fancystyle).print();
    console.message().text("                       ...We like that!", _smallfancystyle).print();
    console.message().text("- Check out our Github:", _basestyle).print();
    console.message().text("     https://github.com/compjolab/cjlab-homepage", _linkstyle).print();
    console.message().text("- Here's a dev tools tutorial from the Computational Journalism class:", _basestyle).print();
    console.message().text("     http://www.compjour.org/tutorials/intro-to-the-web-inspector/", _linkstyle).print();
    console.message().text("- Here's a fun real-world journlaism use for the network panel:", _basestyle).print();
    console.message().text("     https://www.propublica.org/nerds/item/reading-flash-data", _linkstyle).print();

});
