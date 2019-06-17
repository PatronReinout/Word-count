function wordCount(str) {
	var str = document.getElementById("input").value;
	array = str.split(" ");
	// splitsen in een array na elke spatie
	console.log(array.length);
	// telt elk ding in je array

	document.getElementById("showResult1").innerHTML =
		"Deze zin bevat: " + array.length + " Woord(en)"; //stuurt het naar html
}
