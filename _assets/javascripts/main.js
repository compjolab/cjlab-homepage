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
    if(myElement){
        // construct an instance of Headroom, passing the element
        var headroom  = new Headroom(myElement);
        // initialise

        headroom.init();
        $.stellar({
            horizontalScrolling: false
        });

    }
  }else{
    $(".animate-intro").removeClass('animate-intro');
    // disable animate
  }
})


$(document).ready(function(){
        var _heystyle = {fontFamily: "Menlo, Monaco, Consolas, 'Courier New', monospace, Helvetica, sans-serif",
        color: 'rgb(200, 32, 32)',
        fontSize: 20};
        console.log("hello world!")
                console.message().text("-------------------------------").print();
        console.log("bye world!")
        console.log("testing new branch 2015-10-01")
        console.log("todo change new tag after testing new branch in README txt")
         console.log("remove old version of jquery (no IE support)")
         console.log("testing bootstrap alpha 4!")
         console.log("[todo remove old bootstrap 3.x before moving to prodeuction")
        console.log("[todo: disable admin mode before pushing to production]");
        console.log("todo dbl check pages/.gitignore")
        console.log("tod remove old version of konami code (didn't work)")
        console.log("testing post removal of  branch 2015-10-01")
        console.log("hello world again")
        console.log('-30-')
        console.log("main.js: hello world again")
       console.log("main.js: end of file bye world")
       console.log("todo REMOVE console.info calls")

                console.message().text("------------------------\n-------\n\n").print();

        console.log("hello world again?")
                console.message().text("-------------------------------").print();

        console.message().text("console testing (remove before publishing site!", _heystyle).print();
        console.message().text("testing JS").print();
        console.message().text("hello world").print();
        console.message().text("testing jquery ").print();
        console.message().text("hello world 10").print();
        console.message().text("testing jekyll assets").print();
        console.message().text("HELLO JEKKYL").print();
        console.message().text("testing document ready loop:").print();
        console.message().text("loop 0").print();
        console.message().text("loop 1").print();
        console.message().text("loop 2").print();
        console.message().text("loop 3").print();
        console.message().text("loop 4").print();
        console.message().text("loop 5").print();
        console.message().text("loop 6").print();
        console.message().text("loop 7").print();
        console.message().text("loop 8").print();
        console.message().text("loop DONE !").print();
        console.message().text("testing bootstrap.js ready loop:").print();
        console.message().text("loop 0").print();
        console.message().text("loop 1").print();
        console.message().text("loop 2").print();
        console.message().text("loop 3").print();
        console.message().text("loop 4").print();
        console.message().text("loop 5").print();
        console.message().text("loop 6").print();
        console.message().text("loop 7").print();


        console.message().text('end script tag').print();
        console.message().text("END OF MAIN.JS [WHEW!!! ]", {fontWeight: 'bold'}).print();
                console.message().text("-------------------------------").print();

console.log(" _____________________________ ");
console.log("< MOOO. The Javascript works! >");
console.log(" ----------------------------- ");
console.log("        \\   ^__^");
console.log("         \\  (oo)\\_______");
console.log("            (__)\\       )\\/\\");
console.log("                ||----w |");
console.log("                ||     ||");
console.log("TODO add Konami code JS and do a cool easter egg thing!")
debugMe();
});


function debugMe(){
        var _basestyle = {fontFamily: "'Gill Sans', Helvetica, sans-serif",
        color: 'rgb(156, 10, 10)',
        fontSize: 20};

    var _linkstyle = {fontFamily: "Menlo, Monaco, Consolas, 'Courier New', monospace, Helvetica, sans-serif",
        color: 'rgb(19, 10, 200)',
        fontSize: 16};

    var _fancystyle = {
        fontSize: 50,
        color: 'hsl(330, 100%, 50%)',
        textShadow: '0 2px 0 hsl(330, 100%, 25%), 0 3px 2px hsla(330, 100%, 15%, 0.5), /* next */ 0 3px 0 hsl(350, 100%, 50%), 0 5px 0 hsl(350, 100%, 25%), 0 6px 2px hsla(350, 100%, 15%, 0.5), /* next */ 0 6px 0 hsl(20, 100%, 50%), 0 8px 0 hsl(20, 100%, 25%), 0 9px 2px hsla(20, 100%, 15%, 0.5), /* next */ 0 9px 0 hsl(50, 100%, 50%), 0 11px 0 hsl(50, 100%, 25%), 0 12px 2px hsla(50, 100%, 15%, 0.5), /* next */ 0 12px 0 hsl(70, 100%, 50%), 0 14px 0 hsl(70, 100%, 25%), 0 15px 2px hsla(70, 100%, 15%, 0.5), /* next */ 0 10px 0 hsl(90, 100%, 50%), 0 10px 0 hsl(90, 100%, 25%), 0 10px 2px hsla(90, 100%, 15%, 0.5)',
        fontFamily: "Menlo, Monaco, Consolas, 'Courier New', cursive",
        backgroundColor: '#43FF43',
        textDecoration: 'blink'
    };

    var _smallfancystyle = {
        fontSize: 26,
        color: '#FF408C',
        fontFamily: "cursive, Helvetica"
    };



    console.message().text("So you like to hack?", _fancystyle).print();
    console.message().text("                                    ...We like that!", _smallfancystyle).print();
    console.message().text("This site's Github repo:", _basestyle).print();
    console.message().text("   https://github.com/compjolab/cjlab-homepage", _linkstyle).print();
    console.message().text("Here's a dev tools tutorial from the Computational Journalism class:", _basestyle).print();
    console.message().text("   http://www.compjour.org/tutorials/intro-to-the-web-inspector/", _linkstyle).print();
    console.message().text("Here's a fun real-world journalism use for the network panel:", _basestyle).print();
    console.message().text("   https://www.propublica.org/nerds/item/reading-flash-data", _linkstyle).print();

}
