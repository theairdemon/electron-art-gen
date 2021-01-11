function MakeArt() {
	var maxRows = 8;
	var maxColumns = 12;
	
	var i;
	var maxNumber = Math.floor(Math.random() * 5 + 5);
	for (i = 0; i < maxNumber; i++) {
		var rgb = "rgba(" + Math.floor(Math.random() * 255) +
		"," + Math.floor(Math.random() * 255) + 
		"," + Math.floor(Math.random() * 255) + ", 0.5)";
		var bgcolor = "background-color:" + rgb + ";";
		
		var startRow = Math.floor(Math.random() * (maxRows-2));
		var startColumn = Math.floor(Math.random() * (maxColumns-2));
		var endRow = Math.floor(Math.random() * (maxRows));
		while (endRow <= startRow) { endRow = Math.floor(Math.random() * (maxRows)); }
		var endColumn = Math.floor(Math.random() * (maxColumns));
		while (endColumn <= startColumn) { endColumn = Math.floor(Math.random() * (maxColumns)); }
		
		var gridArea = "grid-area:" + startRow + " / " + startColumn + " / " +
		endRow + " / " + endColumn + "; ";
		
		var style = 'style="' + gridArea + bgcolor + '"';
		
		var id = "item" + i;
		var tag = '<div class="item" id="' + id + '" ' + style + '></div>';
		var newItem = $(tag).text("");
		$('#main-grid').append(newItem);
	}	
}

$(document).ready(function() {
	MakeArt();
});