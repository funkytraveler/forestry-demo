function setSearchValue(){ // Parses query strong from URL, sets value of input element to execute search

var helpRequest = document.location.href

var currentURL = decodeURIComponent(helpRequest.split("?")[0]);
var requestQueryString = helpRequest.split("?")[1];

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
        objectBuild[keyStr] = valueStr;
    }

    }

}

objectBuild["url"] = currentURL;

searchQuery = objectBuild.q;
searchQuery = decodeURIComponent(searchQuery);
document.getElementById('query').setAttribute("value", searchQuery.replace(/\+/g, " "));

return objectBuild;
}
      
function hndlr(response) {
var resultsHtml = "";
if (response.items == null || response.items.length == 0) {
    resultsHtml = '<div class="snippet">No results.</div>';
}
else {
    for (var i = 0; i < response.items.length; i++) {
    var item = response.items[i];
    var img = "";
    //if (item.pagemap.cse_thumbnail != undefined) {
        // ===============================
        // THUMBNAIL IMAGES
        // ===============================
        //img = '<div class="thumbnail"><img src="' + item.pagemap.cse_thumbnail[0].src + '" /></div>'
    //}
        // ===============================
        // SEARCH RESULTS
        // ===============================

    resultsHtml += '<div class="result">' +
                    //img +
                    '<div class="title"><a href="' + item.link + '">' + item.htmlTitle.replace("| Trading Technologies", " ") +'</a></div>' +
                    '<div class="url">' + item.formattedUrl + '</div>' +
                    '<div class="snippet">' + item.htmlSnippet.replace("<br>"," ") + '</div>' +
                    '</div>';
    }
    if (response.context != null && response.context.facets != null) {
        // ===============================
        // FACET TABS
        // ===============================
    var facetsHtml = '<ul><li><a href="#" class="' + (facet == '' ? 'selected' : 'not-selected') + '" onclick="SetFacet(\'\')";>All</li>';
    for (var x = 0; x < response.context.facets.length; x++) {
        var searchFacet = response.context.facets[x][0].label_with_op;
        var facetSelect = searchFacet == facet ? "selected" : "not-selected";
        facetsHtml += '<li><a href="#" class="' + facetSelect + '" onclick="SetFacet(\'' + response.context.facets[x][0].label_with_op + '\')";>' + response.context.facets[x][0].anchor + '</li>';
    }
    facetsHtml += '</ul>'
    //<php if ($facet == "") { ?>
        document.getElementById("facets").innerHTML = facetsHtml;
    //<php } ?>
    }
    // ===============================
    // PAGING
    // ===============================
    var pagingHtml = '<ul>' +
                    '<li><a href="#" onclick="Search(1);">1</a></li>';
    if (response.queries != null && response.queries.request != null) {
    var actualPages = (response.queries.request[0].totalResults / 10);
        var total = actualPages > 10 ? 10 : actualPages;
        for (c = 2; c <= total; c++) {
            pagingHtml += '<li><a href="#" onclick="Search(' + c + ');">' + c + '</a></li>';
        }
        pagingHtml += '</ul>';

        document.getElementById("paging").innerHTML = pagingHtml;
    }
}
document.getElementById("content").innerHTML = resultsHtml;
}
  


var queryString = setSearchValue();
var inappFlag = queryString.inapp

var _prevIndex = 0;
var _nextIndex = 0;
var _resultsPerPage = 10;
var _pageNumber = 1;
var key = "AIzaSyC7dpcOyBLoXI9Xd6auEBUOsA2tMiBeLIY"; // Main Site Search API key, replace with Help Search API key
var cx = "015187332546500242916:5ekteakcyuu"; // Help Search Engine ID
var facet = "";

      

jQuery(function () {
    jQuery('#searchBtn').show().click(function () { setSearchValue(); Search(1);});
    jQuery('#query').keyup(function(e) {
    if(e.keyCode == 13 || e.which == 13) { setSearchValue(); Search(1); };});
    Search(1);
});


     function SetFacet(value) {
        facet = value;
        Search(1);
      }

      if (inappFlag == "yes" || window.self !== window.top) {
        SetFacet('more:Trading');
        document.getElementById("facets").style.display = "none";

      }

      function Search(page) {

          var queryVal = jQuery("#query").val().trim();
          if (queryVal != undefined && queryVal != "") {
                var term = queryVal + " " + facet;
                var startIndex = ((page - 1) * 10) + 1;
                var url = "https://www.googleapis.com/customsearch/v1?key="
                + key + "&num=10&cx=" + cx + "&start=" + startIndex + "&q=" + escape(term) + "&callback=?";

                jQuery.getJSON(url, '', hndlr);
          }
      }

      /*
  captures subsequent search strings from results of initial search, 
  truncates strings longer than 200 charaters to avoid overflow 
  and updates page headline with new search string
  */
  var displaySearchString = function() {
    var newqstring = jQuery("#query").val().trim();
    if ( newqstring.length > 200) {
      newqstring = "" + newqstring.substr(0, 195) + "..."
    }

    jQuery("#queryText").innerHTML = newqstring;

  }
   


/*<script type="text/javascript">
 (function() {
    var cx = '015187332546500242916:wfmpksmkl0e';//015187332546500242916:5ekteakcyuu
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
        '//www.google.com/cse/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);


  })();

</script>


<script>

if (window.self !== window.top) {
   
   $(".helpSearch").append("<gcse:search gname='searchstring' defaultToRefinement='Trading'></gcse:search>");

} else {
   $(".helpSearch").append("<gcse:search gname='searchstring'></gcse:search>");
}
    

</script>*/