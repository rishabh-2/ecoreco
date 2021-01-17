// JavaScript Document
$(document).ready(function(){
	// set up hover panels
            // although this can be done without JavaScript, we've attached these events
            // because it causes the hover to be triggered when the element is tapped on a touch device
            $('.hover').hover(function(){
                $(this).addClass('flip');
            },function(){
                $(this).removeClass('flip');
            });
	
$('#slider3').plusSlider({
sliderEasing: 'easeInOutExpo', // Anything other than 'linear' and 'swing' requires the easing plugin
displayTime: 2500, // The amount of time the slide waits before automatically moving on to the next one. This requires 'autoPlay: true'
fullWidth: true,
autoPlay: true, 
sliderType: 'slider' // Choose whether the carousel is a 'slider' or a 'fader'
});
		//	Scrolled by user interaction
		$('#foo2').carouFredSel({
			auto: false,
			prev: '#prev2',
			next: '#next2',
			mousewheel: true,
			swipe: {
				onMouse: true,
				onTouch: true
			}
	});
		});
