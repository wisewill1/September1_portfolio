// $(function() {
  // jQuery goes here...

  // Uncomment this line to fade out the red box on page load
  // $(".red-box").fadeOut(2000);
  // $(".green-box").fadeOut(2000);
  // $(".red-box").fadeIn(1000);
  // $(".red-box").fadeTo(1000, 0.2);
  // $(".green-box").fadeOut(4500);
  // $(".red-box").fadeOut(2000);
  // $(".red-box").fadeIn(1000);
  // $(".red-box").fadeTo(1000, 0.2);
  // $(".green-box").fadeOut(2000);
  // $(".green-box").fadeIn(1000);
  // $(".green-box").fadeTo(1000, 0.5);
  // $(".blue-box").fadeOut(2000);
  // $(".blue-box").fadeIn(1000);
  // $(".blue-box").fadeTo(1000, 0.5);
  // $(".blue-box").fadeToggle(1000);
  // $(".blue-box").fadeToggle(1000);
  // $(".green-box").fadeOut(1000);
  // $(".green-box").fadeIn(1000, 0);
  // $(".blue-box").hide(1000);
  // $(".blue-box").fadeIn(1000);
  // $(".blue-box2").fadeTo(1000);
  // $(".blue-box").hide(1000);
  // $(".blue-box").slideUp(2000);
  // $(".blue-box").slideToggle(2000);
  // $("p").hide();
  // $("p").slideToggle(2000);

// });
// $(function(){
// $(".blue-box").animate({
// 	"margin-left": "+=200px"
//  }, 1000);
// $(".blue-box").animate({
// "margin-top": "-=200px"
// }, 1000);
// $(".blue-box").animate({
// "margin-left": "-=200px"
// }, 1000);
// $(".blue-box").animate({
// "margin-top": "+=400px"
// }, 1000);
// $(".blue-box").animate({
// "margin-left": "+=200px"
// }, 1000);
// $(".blue-box").animate({
// "margin-top": "-=200px"
// }, 1000);
// $(".blue-box").animate({
// "margin-left": "-=200px"
// }, 1000);
// });
// $(function(){
// $(".blue-box").animate({
// marginLeft: "+=200px" ,
// opacity: "0",
// height: "50px",
// width: "50px",
// marginTop: "25px",

// "margin-left": "-=200px",
// "opacity": "5",
// "width": "100px",
// }, 1000);

// $("#element").animate({
// 	fontSize: "50px",
// }, 1000);

// $("p").animate({
// 	fontSize: "30px", 
// }, 2500);


// });

// $(function(){
// $("#element").animate({
// 	fontSize: "50px";
// }, 1000);
// });
// $(function(){
// $(".red-box").fadeTo(10000, 0.2);
// $(".green-box").delay(1000).fadeTo(1000, 0.5);
// $(".blue-box").delay(2000).fadeTo(1000, 0.8).fadeOut().delay(500).fadeIn();
// $("#goat").fadeTo(1000, 0.9),
// $("#goat").animate({

// height: "300px",
// width: "250px",
// }, 1000);
// });
// $(function(){
// $(".red-box").fadeTo(1000, 0, function(){
// prompt("have you been to goat yoga before?");
// if(input === yes){console.log("Okay Newbie");

// $("#goat").animate({
// 	height:"350px",
// 	width: "250px";

	

// }, 1000);
// };
// });
// // });
// $(function(){
// $("p, .red-box").css("background-color", "rgba(180,180,30,0.8)");
// $("li:last").css("background-color", "rgba(180,180,30,0.8)");
// $("li:even").css("background-color", "rgba(180,180,30,0.8)");
// });
// $(function(){
// $("#list").find("li").css("background-color", "rgba(180,180,30,0.8)");

// });

// $(function(){
// $("<li>I'm going to try this one more time</li>").appendTo($("ul ul:first"))
// $(".red-box").after("<div class='green-box'>last green</div>");
// $(".green-box").after("<div class='blue-box'>last blue</div>");
// $(".blue-box").after("<div class='red-box'>last red</div>");

// });
// $(function(){
// 	$("li").replaceWith("<li>Replace.</li>")
// });
$(function(){
 var MoreGreen = $("<div class='green-box'>More green</div>")
 $(".red-box , .blue-box").replaceWith(MoreGreen);
});