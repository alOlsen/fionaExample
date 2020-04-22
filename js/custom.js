$(document).ready(function(){

    var isLightOn = false; //boolean
    //select an element using ID;

    $('#lightSwitch').click(function(){
        //debugging tools
        console.log("Hello button was clicked");

        if(isLightOn){
            $('body').css('background','black');

            $("#pinkBox").fadeIn(5000);

            $("#pinkBox").html("<h2>Good Bye</h2>");

            isLightOn = false;
        }else{
            $('body').css('background','yellow');

            $("#pinkBox").fadeOut(5000);

            $("#pinkBox").html("<h1 style=''>Hello</h1>");
            isLightOn = true;
        }
    });
});

// //brake it down
// $(); //step 1
// $(obj) //step 2 : select object
// $(obj).method()
// $(obj).method(function(){})



//Notes:
//Javascript is a object oriented programming language for the web
//jQuery is a Javascript library.

//Javascript
// variable : holds information
  // var x = 10;
  // Datatypes: Strings ( human text ), Numbers, Booleans
// Arrays : Lists and the hold elements, first elements starts at 0.

// Conditions : If / Else
// Loops : Iterative script.
// Functions : Encapsulated scripts.
