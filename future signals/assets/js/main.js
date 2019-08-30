$(document).ready(function(){
	console.log("The page is ready!");

	// toggle large class on research item

	$('.research-item').click(function(){
		$(this).toggleClass('large');
	});

	// toggle nav class on active item

	$('.nav-item').click(function(){
		$('.nav-item').removeClass('active');
		$(this).addClass('active');
	})

	var hideAll  = function() {
		$('.research-item').addClass('hide');
	}

	// button filters

	$('.btn-car').click(function(){
		hideAll();
		$('.car').removeClass('hide')

	});


	$('.btn-nintendo').click(function(){
		hideAll();
		$('.nintendo').removeClass('hide')
	});

	$('.btn-tracking').click(function(){
		hideAll();
	});

	// button all
	$(".btn-all").click(function(){
		$('.research-item').removeClass('hide');
	});

});