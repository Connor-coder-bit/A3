
(function($) {

	var $window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Nav.

		// Title Bar.
			$(
				'<div id="titleBar">' +
					'<a href="#navPanel" class="toggle"></a>' +
					'<span class="title">' + $('#logo').html() + '</span>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

})(jQuery);

//SlideShow
let slideIndex = 1;
showSlides(slideIndex);

//Next/previous controls
function plusSlides(n){
	showSlides(slideIndex += n)
}

//Thumbnail image controls
function currentSlide(n){
	showSlides(slideIndex = n);
}

function showSlides(n){
	let i;
	let slides = document.getElementsByClassName("mySlides");
	let dots = document.getElementsByClassName("dot");

	if(n > slides.length){
		slideIndex = 1
	}

	if(n < 1){
		slideIndex = slides.length
	}

	for(i = 0; i < slides.length; i++){
		slides[i].style.display = "none";
	}

	for(i = 0; i < dots.length; i++){
		dots[i].className = dots[i].className.replace(" active", "");
	}

	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";
}

//User rating

//Star Rating
let stars = document.getElementsByClassName("star");

let output = document.getElementById("output");

function gfg(n){
	remove();
	for (let i=0; i<n; i++){
		if(n == 1) 
			cls = "one";
		else if(n == 2)
			cls = "two";
		else if(n == 3)
			cls = "three";
		else if(n == 4)
			cls = "four";
		else if(n == 5)
			cls = "five";
		stars[i].className = "star " + cls;
	}
	output.innerText = "Rating is: " + n + "/5";
}

function remove(){
	let i = 0;
	while(i < 5){
		stars[i].className = "star";
		i++;
	}
}