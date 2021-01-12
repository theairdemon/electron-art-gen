$(document).ready(function() {
	$("#back-button").click(function(e) {
		window.location = "../pages/index.html"; 
	});
	$("#new-button").click(function(e) {
		location.reload(true);
	});
	
	$("#test-button").click(function(e) {
		window.location = "../pages/example.html"; 
	});
	$("#happy-button").click(function(e) {
		window.location = "../pages/happy.html"; 
	});
	$("#calm-button").click(function(e) {
		window.location = "../pages/calm.html"; 
	});
	$("#love-button").click(function(e) {
		window.location = "../pages/love.html"; 
	});
	$("#empty-button").click(function(e) {
		window.location = "../pages/empty.html"; 
	});
});