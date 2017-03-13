//Celiac Javascript//

function toggleParagraph() {
	$("#appetizercontent").slideToggle(500);
}

function start() {
	$("h2#appetizer").click(toggleParagraph);
}

$(document).ready(start);



function toggleParagraph() {
	$("#entreecontent").slideToggle(500);
}

function start() {
	$("h2#entree").click(toggleParagraph);
}

$(document).ready(start);




function toggleParagraph() {
	$("#dessertcontent").slideToggle(500);
}

function start() {
	$("h2#dessert").click(toggleParagraph);
}

$(document).ready(start);