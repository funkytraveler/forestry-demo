$('document').ready(function(){
	
	//Learning Guides are single page resources. All lessons are hidden with the exception of the active lesson

	//shows or hides lessons on mouse click
	$('.lg-link').click(function(){
		//show or hide content
		$('.content-item').addClass("hidden")
		var showId = '.'+this.id+'';
		$(""+showId+"").removeClass("hidden");
		//made nav item active
		$('.lg-link').removeClass("active")
		var navId = '#'+this.id+'';
		$(""+navId+"").addClass("active");
	});

	//Removes YAML header content
	oldhtml = $('#lessonSpace').html();
	//console.log(oldhtml);
	var newhtml = oldhtml.replace(/([\s\S]*?)\-\-\-[\s\S]*?\-\-\-/g, '$1');
	$('#lessonSpace').html(newhtml);

	//adds target=_blank to links in articles
	$('#lessonSpace a').each(function(){
		$(this).attr('target', '_blank');

	});

	
});