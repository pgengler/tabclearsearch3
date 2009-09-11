var tabclearsearch =
{
	clearSearchBar: function()
	{
		var bar = document.getElementById("searchbar");
		var searchBar = document.getAnonymousElementByAttribute( bar, "type", "autocomplete" );
		searchBar.value = '';
	},

	init: function()
	{
		// Get tab container
		var container = gBrowser.tabContainer;
	
		// Add listener for when a new tab is opened
		container.addEventListener("TabOpen", tabclearsearch.clearSearchBar, false);
	}
};



