$.oathkite = function() {
	this.setWave = function() {
		$('#content_base').css({
			width: $(window).width(),
			minHeight: $(window).height()
		});
		$('.layer').width($(window).width() + 100);
	}
	
	this.setWave();
}

$(function() {
	var oathkite = new $.oathkite();
	
	$(window).on('resize', function() {
		oathkite.setWave();
	});
});