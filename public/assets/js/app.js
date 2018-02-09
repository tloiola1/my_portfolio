const Typed;
Typed.use(typed.js);

var typed = new Typed('.element', {
    stringsElement: '#typed-strings'
  });

// ********************************************************************
$(document).on("submit", ()=>{
    const name = $("#name").val().trim();
    const email = $("#email").val().trim();
    const message = $("#message").val().trim();

    const contact ={
        name,
        email,
        message
    };
    console.log(contact);
    $.ajax({
        url: "/apicontact",
        method: "POST",
        data: contact
    }).then((answer)=>{
        console.log("Thanks");
    });
});

// $("#portfolio").hide();
// $("#contact").hide();


// $("#btnPortfolio").on("click", function(){
// 	$("#about").hide();
// 	$("#contact").hide();
// 	$("#portfolio").show();
// });

// $("#btnAbout").on("click", function(){
// 	$("#portfolio").hide();
// 	$("#contact").hide();
// 	$("#about").show();
// });

// $("#btnContact").on("click", function(){
// 	$("#about").hide();
// 	$("#portfolio").hide();
// 	$("#contact").show();
// });


// $(window).resize(function() {
// 	var size = window.innerWidth;
	
// });

// $(".about-me").on("click", function(){

// $('.top').css('style', 'height: 0px');

// var items = document.querySelectorAll('.section-div .card');
//     var isMoved = true;


//     // toggle flag
//     isMoved = !isMoved;

//     for ( var i=0; i < items.length; i++ ) {
//         // get function in closure, so i can iterate
//         var toggleItemMove = getToggleItemMove( i );
//         // reverse stagger order
//         var delay = isMoved ? ( items.length - i - 1 ) : i;
//         delay *= 50;
//         // stagger transition with setTimeout
//         setTimeout( toggleItemMove, delay );
//     }

//     function getToggleItemMove( i ) {
//       var item = items[i];
//       return function() {
//         item.classList.toggle('is-moved-about');
//       }
//     }
// });