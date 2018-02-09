var test = ['Full Stack Developer, ', 'JavaScript Developer', 'Proficient in Node, ', 'Express, ', 'MongoDB, ', 'and mySQL', 'React is the Front-End Framework I am Currently Working With.', 'And I Love Everything about it!'];
let i = 0;
let j = 0;
$(document).ready(function(){
    function timeout(i,j){
        console.log(i, j); 
        if(i < test.length){
            setTimeout(() => {
                $('#typed').append(test[i][j]);
                if(j < test[i].length)timeout(i, j+1);
                if(j === test[i].length){
                    $('#typed').append(' '); i++; j = 0; timeout(i, j);
                    if(i === 2 || i === 6 || i === 7)$('#typed').append('<p class="remove">');
                }
                
            }, 100);
        }
        else{
            setTimeout(() => {
                $('#typed').html(function(){
                    return $(this).children()
                });
                $('.remove').remove();
                i = 0; j = 0;  timeout(i, j);
                $('#typed').append('');
            }, 1000);
        }

    }
    timeout(i,j);
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