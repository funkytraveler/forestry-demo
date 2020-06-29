var helpRequest = document.location.href; //assigns page URL to variable

//parses out query strings and compiles them into an object for use in
//help page requests and inapp status


var helpRequestObject = queryStringObject(helpRequest);

 inappFlag = helpRequestObject.inapp;
 
 browser = navigator.userAgent


 if (browser.indexOf("OpenFin") > -1 ){
    
    //document.addEventListener('contextmenu', event => event.preventDefault());
 
 }

 //adds a style element directly the page to hide elements not included inthe inapp view
if (inappFlag === "yes" || window.self !== window.top) { //checks for inapp Query String or iframe display for search page
  headTag = document.getElementsByTagName("head")[0];
  styleAdd = document.createElement("style");
  styleAdd.innerHTML = ".footer, .ttdoc-hero, .breadcrumb {display:none;} .ttdoc-widget-title-mobile {display:block;}  #ttdoc-help-library-link {display:none;} .ttdoc-sidebar-return-links-container span {text-transform: uppercase;} a#ttdoc-platform-link {font-family: 'Avenir Next Pro', Arial, Helvetica, sans-serif;font-size:13px;font-weight: 600;color: #66c9d0;} .ttdoc-nav-and-maincontent-container { max-width: 1200px; margin: 0 auto; padding-top: 2px;} .ttdoc-sidebar-return-links-container {display:block;font-family: 'Avenir Next Pro', Arial, Helvetica, sans-serif;font-size:11px;font-weight: 600;color: #6a6a6a;background-color: #ffffff;border:none;padding: 0px 15px;margin-right: 0px;} .ttdoc-sidebar-return-links-container.a:link, .ttdoc-sidebar-return-links-container.a:visited {color:#66c9d0; text-transform: underline; display:inline; padding-top:5px} #facets {display:none;} a[href='#videos'] {display: none;}";

  document.addEventListener('contextmenu', event => event.preventDefault());

  headTag.appendChild(styleAdd);

  window.onload = function(){ //adds inapp=yes to each of the outbound links on the page

    addInappToLinks();

    launchInNewURL = helpRequestObject.url;
    
    $("#launchInNew").click(function(){
      window.open(launchInNewURL,"_blank","height=600,width=900, menubar=yes, toolbar=yes");
    });

    $(document).on("click",".gsc-cursor-page", function(){ //".gsc-cursor"
          setTimeout(function(){ addInappToLinks();}, 3000);
    });

  };
};

  function queryStringObject(helpRequest){ 

    var currentURL = decodeURIComponent(helpRequest.split("?")[0]);
    var requestQueryString = decodeURIComponent(helpRequest.split("?")[1]);
    
    var objectBuild = {}
    if (requestQueryString !== undefined) { 

      if (requestQueryString.indexOf("Time") > -1 ) {
        requestQueryString = requestQueryString.replace("Time & Sales", "Time and Sales")
      }

      queryArray = requestQueryString.split("&")
     
      


      for (i = 0; i < queryArray.length; i++) {  
        currentPair = queryArray[i].split('=');
        keyStr = currentPair[0]
        valueStr = currentPair[1]
        
        if(typeof valueStr !== "undefined"){

          if(valueStr.indexOf("Edit") > -1 ){
            var value = value.split(":")[0];
          }

          if(valueStr.indexOf("#") > -1 ){
            var value = value.split("#")[0];
          }

          objectBuild[keyStr] = valueStr;
      
        }

      }

    }

    objectBuild["url"] = currentURL;
    //console.log(objectBuild)

    return objectBuild;
  }

  function addInappToLinks(){
    
   $('a').each(function(){ 

        address = this.href

        if (address.indexOf(".html") > -1 && address.indexOf("inapp") === -1) {
          this.href = this.href.replace(".html", ".html?inapp=yes") 
        };

        if (address === "https://www.tradingtechnologies.com/" ) {
          this.href = "";
        }
        
      });
  }


