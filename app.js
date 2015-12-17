var cohortArray = [ "scott", "kristy", "natalie", "charlie", "sam", "zach", "nathan", "paul", "anthony", "liz", "eric", "jeremy", "chris", "brooks", "altamir", "amber", "joe", "kenzie", "matthew", "robby", "mark","scott"];
​
​
$(document).ready(function(){
	// When the page loads, have a button on the DOM that says 
	// 'generate'.
	for (var i = 2; i < cohortArray.length/2; i++) {
	
		$(".numbers").append("<button>" + i + "</button>");
	}
​
$('.numbers').on('click', 'button',  numberClick)
$('.buttonContainer').on('click', '.randomizer', genGroup)
​
});
	
​
var num = 0;
​
function numberClick () {
	num = $(this).text();
	console.log(num)
}
​
​
function genGroup () {
	
​
	var groupMembers = cohortArray.length/num;
	var selected = [];
	for (var i = 0; i < cohortArray.length; i++) {
		selected[i]=cohortArray[i];
​
	}
	console.log(selected);
	$(".container").children().remove();
	for (var i = 1; i <= num; i++) {
​
		$(".container").append("<div class='group' id=" + i + ">Group " + i + "</div>");
		for (var j = 1; j < groupMembers; j++) {
			var person = randomNumber(0, selected.length);
			if (selected[person]) { 
				$("#"+i).append("<p>" + selected[person] + "</p>");
			selected.splice(person, 1);
			console.log("selected: " , selected);
			console.log("cohort ", cohortArray);
			}
			
		}
​
	}
	//console.log("selected: " , selected);
		
}
​
function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}