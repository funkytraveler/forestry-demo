$('document').ready(function(){

var delayMillis = 1000; //1 second

setTimeout(function() {
  //your code to be executed after 1 second



	var tabsToHide = ["All", "7.x Help", "Release Notes", "Community", "Advisories"];
	//console.log(tabsToHide);
	for (i = 0; i < tabsToHide.length; i++ ) {
		findAndHideTab(tabsToHide[i]);
	}


	function findAndHideTab(tabName) {
		$("div.gsc-tabHeader").each(function(){
			if($(this).text().indexOf(""+tabName+"") > -1) {
			console.log(this);
			$(this).css( "display", "none" );	
			}
		});
		$("span").each(function() { 
			if($(this).text().indexOf(""+tabName+"") > -1) {
				//console.log(this);
				$(this).parent().css( "display", "none" );
			}
		});
	}

	

}, delayMillis);


});
