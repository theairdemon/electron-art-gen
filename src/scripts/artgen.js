// document controller
$(document).ready(function() {
	if ($('#example-grid').length > 0) {
		EmotionArt('#example-grid', 200, 200, 200, 20, 5);
	}
	else if ($('#happy-grid').length > 0) {
		EmotionArt('#happy-grid', 0, 250, 15, 25, 10);
	}
	else if ($('#calm-grid').length > 0) {
		EmotionArt('#calm-grid', 0, 150, 250, 7, 3);
	}		
	else if ($('#love-grid').length > 0) {
		EmotionArt('#love-grid', 255, 0, 100, 14, 6);
	}
	else if ($('#empty-grid').length > 0) {
		EmotionArt('#empty-grid', 10, 10, 10, 10, 5);
	}
});

/* ART GEN FUNCTIONS */

// make art based on emotional parameters
function EmotionArt(emotionID, baseRed, baseGreen, baseBlue, max, min) {
	var i;
	var randMax = Math.floor(Math.random() * (max-min)) + min;
	
	for (i = 0; i < randMax; i++) {
		var newRed = (Math.floor(Math.random() * 255) + baseRed) / 2;
		var newGreen = (Math.floor(Math.random() * 255) + baseGreen) / 2;
		var newBlue = (Math.floor(Math.random() * 255) + baseBlue) / 2;
		
		if ('#empty-grid' == emotionID) { newGreen = newRed; newBlue = newRed; }
		else if ('#love-grid' == emotionID) { newRed = 255; }
		
		var rgb = "rgba(" + newRed + "," + newGreen + "," + newBlue + ", 0.5)";
		
		var bgcolor = "background-color:" + rgb + ";";
		
		var gridArea = makeGridArea();
		
		var style = 'style="' + gridArea + bgcolor + '"';
		
		var id = "item" + i;
		var tag = '<div class="item" id="' + id + '" ' + style + '></div>';
		var newItem = $(tag).text("");
		$(emotionID).append(newItem);
	}	
}

/* HELPER FUNCTION */
function makeGridArea() {
	var maxRows = 10;
	var maxColumns = 16;
	
	var startRow = Math.floor(Math.random() * (maxRows-1));
	var startColumn = Math.floor(Math.random() * (maxColumns-1));
	var endRow = Math.floor(Math.random() * (maxRows));
	while (endRow <= startRow) { endRow = Math.floor(Math.random() * (maxRows)); }
	var endColumn = Math.floor(Math.random() * (maxColumns));
	while (endColumn <= startColumn) { endColumn = Math.floor(Math.random() * (maxColumns)); }
	
	var gridArea = "grid-area:" + startRow + " / " + startColumn + " / " +
	endRow + " / " + endColumn + "; ";
	
	return gridArea;
}