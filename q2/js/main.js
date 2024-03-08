$("document").ready(function() {
	$(".socials-icon").hover(function() {
		$(this).attr("src", "img/" + this.id + "-hover.svg");
	}, function() {
		$(this).attr("src", "img/" + this.id + ".svg");
	});

	$("#menu").hover(function() {
		$(this).attr("src", "img/" + this.id + "-hover.png");
	}, function() {
		$(this).attr("src", "img/" + this.id + ".png");
	});
});