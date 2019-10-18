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

	$('.btn-sony').click(function(){
		hideAll();
		$('.sony').removeClass('hide')
	});


	$('.btn-nintendo').click(function(){
		hideAll();
		$('.nintendo').removeClass('hide')
	});

	$('.btn-microsoft').click(function(){
		hideAll();
		$('.microsoft').removeClass('hide')
	});

	$('.btn-misc').click(function(){
		hideAll();
		$('.misc').removeClass('hide')
	});

	$('.btn-goback').click(function(){
		hideAll();
		$('.goback').removeClass('hide')
	});

	$('.btn-resume').click(function(){
		hideAll();
		$('.resume').removeClass('hide')
	});

	$('.btn-nextlevel').click(function(){
		hideAll();
		$('.nextlevel').removeClass('hide')
	});

	$('.btn-handheld').click(function(){
		hideAll();
		$('.handheld').removeClass('hide')
	});

	$('.btn-stationary').click(function(){
		hideAll();
		$('.stationary').removeClass('hide')
	});



	// button all
	$(".btn-all").click(function(){
		$('.research-item').removeClass('hide');
	});

});