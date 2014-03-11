$.oathkite = function() {
	this.setWave = function() {
		$('.layer').width($(window).width() + 40);
	}
	
	this.setWave();
}

$(function() {
	var oathkite = new $.oathkite();
	
	$(window).on('resize', function() {
		oathkite.setWave();
	});
});