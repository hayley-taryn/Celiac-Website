function toggleParagraph() {
	$("p").slideToggle(500);
}

function start() {
	$("h1").click(toggleParagraph());
}

$(document).ready(start);