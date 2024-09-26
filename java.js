

    $(".imgAnimate").mouseover(
        function()
        {

            $(this).attr("src","assets/gif/Sports_gif/"+$(this).attr("id")+".gif");
        });
    $(".imgAnimate").mouseout(function()
    {   
        let x = "assets/static/Sports/"+$(this).attr("id")+".png";
        $(this).attr("src", x);
    })


	$('.navTrigger').click(function () {
		$(this).toggleClass('active');
		console.log("Clicked menu");
		$("#mainListDiv").toggleClass("show_list");
		$("#mainListDiv").fadeIn();
	
	});

        $(window).scroll(function() {
            if($(document).scrollTop() > 50) {
                $('.nav').addClass('affix');
                console.log("OK");
            }else {
                $('.nav').removeClass('affix');
            }
        });

        var slideIndex = 1;
        showSlides(slideIndex);
        
        function plusSlides(n) {
          showSlides(slideIndex += n);
        }
        
        function currentSlide(n) {
          showSlides(slideIndex = n);
        }
        
        function showSlides(n) {
          var i;
          var slides = document.getElementsByClassName("mySlides");
          if (n > slides.length) {slideIndex = 1} 
          if (n < 1) {slideIndex = slides.length}
          for (i = 0; i < slides.length; i++) {
              slides[i].style.display = "none"; 
          }  
          slides[slideIndex-1].style.display = "block"; 
        }
        $(document).ready(function(){
            setInterval(function(){ plusSlides(1); },3000);
        });


    
        // $("svg").css("left","")
//  // ---------Responsive-navbar-active-animation-----------
// function test(){
// 	var tabsNewAnim = $('#navbarSupportedContent');
// 	var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
// 	var activeItemNewAnim = tabsNewAnim.find('.active');
// 	var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
// 	var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
// 	var itemPosNewAnimTop = activeItemNewAnim.position();
// 	var itemPosNewAnimLeft = activeItemNewAnim.position();
// 	$(".hori-selector").css({
// 		"top":itemPosNewAnimTop.top + "px", 
// 		"left":itemPosNewAnimLeft.left + "px",
// 		"height": activeWidthNewAnimHeight + "px",
// 		"width": activeWidthNewAnimWidth + "px"
// 	});
// 	$("#navbarSupportedContent").on("click","li",function(e){
// 		$('#navbarSupportedContent ul li').removeClass("active");
// 		$(this).addClass('active');
// 		var activeWidthNewAnimHeight = $(this).innerHeight();
// 		var activeWidthNewAnimWidth = $(this).innerWidth();
// 		var itemPosNewAnimTop = $(this).position();
// 		var itemPosNewAnimLeft = $(this).position();
// 		$(".hori-selector").css({
// 			"top":itemPosNewAnimTop.top + "px", 
// 			"left":itemPosNewAnimLeft.left + "px",
// 			"height": activeWidthNewAnimHeight + "px",
// 			"width": activeWidthNewAnimWidth + "px"
// 		});
// 	});
// }

// $(window).on('resize', function(){
// 	setTimeout(function(){ test(); }, 500);
// });
// $(".navbar-toggler").click(function(){
// 	$(".navbar-collapse").slideToggle(300);
// 	setTimeout(function(){ test(); });
// });



// // --------------add active class-on another-page move----------
// jQuery(document).ready(function($){
// 	// Get current path and find target link
// 	var path = window.location.pathname.split("/").pop();

// 	// Account for home page with empty path
// 	if ( path == '' ) {
// 		path = 'index.html';
// 	}

// 	var target = $('#navbarSupportedContent ul li a[href="'+path+'"]');
// 	// Add active class to target link
// 	target.parent().addClass('active');
// });

// fixed navbar
//window.onscroll = function() {myFunction()};

//var navbar = document.getElementById("navbar");
//var sticky = navbar.offsetTop;
/*
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
*/