

$(document).ready(function(){
	
	var helpRequest = document.location.href //assigns page URL to variable

	//parses out query strings and compiles them into an object for use in  
	//help page requests, inapp status, and history overwirte issue
    function queryStringObject(helpRequest){ 

      var requestQueryString = decodeURIComponent(helpRequest.split("?")[1]);

      if (requestQueryString.indexOf("Time") > -1 ) {
        requestQueryString = requestQueryString.replace("Time & Sales", "Time and Sales")
      }

      queryArray = requestQueryString.split("&")
      
      var objectBuild = {}
      
      for (i = 0; i < queryArray.length; i++) {  
        currentPair = queryArray[i].split('=');
        key = currentPair[0]
        value = currentPair[1]

        if(value.indexOf("Edit") > -1 ){
          var value = value.split(":")[0];
        }

        objectBuild[key] = value;
      }

      return objectBuild;
    }

    //adds destination page as query string to departure page's URL in the browser page's history.
   /* function historian(trail){ 
     	
	    var stateObject = { name : "yarn"};
	    currentUrl = document.location.href
	    if(currentUrl.indexOf("?") > -1 ) {
	    	newHelpRequest = currentUrl.replace("?", "?seenGoingTo=" + trail + "&");
	    } else {
	    	newHelpRequest = currentUrl.replace(".html", ".html?seenGoingTo=" + trail)
	    }

	    console.log(newHelpRequest);
	    window.history.replaceState(stateObject, "NewSrc", newHelpRequest  );

  	};*/

  	


   var helpRequestObject = queryStringObject(helpRequest);

   inappFlag = helpRequestObject.inapp;

   if(inappFlag === "yes") {

   		$("#ttdoc-help-library-link, .footer, .ttdoc-hero, .breadcrumb").css("display", "none");
      $(".ttdoc-sidebar-return-links-container").css("display", "");
      //$(".ttdoc-sidebar-return-links-container, .ttdoc-sidebar-return-links").css("display", "block");

   		$('a').each(function(){ //address.indexOf("?") === -1 && 

   			address = this.href

   			if (address.indexOf(".html") > -1 && address.indexOf("inapp") === -1) {
   				this.href = this.href.replace(".html", ".html?inapp=yes") //find right one, seenGoingTo may have .html in the QS
   			}
   		});

	   /*	$('a').not(".list-group-item-success").click(function(event) {
		  	event.preventDefault();
			var trail = this.href;
		  	historian(trail);

		  	window.location=trail
		});*/

   }




  });


