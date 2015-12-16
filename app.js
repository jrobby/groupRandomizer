

$(document).ready(function(){
	
	
	// When the page loads, have a button on the DOM that says 
	// 'generate'.
	$('#container').append("<button class = 'generate-click'>Generate</button>");

	//click handlers is what I think these are called
	$('#container').on('click','.generate-click',generateClick);
	$('#container').on('click', '.delete-click', deleteClick);
	$('#container').on('click', '.change-click', changeClick);

});
//Upon clicking on that button, append a new container onto the DOM.

//Additionally, 


// To keep track of how many times the Generate button is clicked
var counter = 0;


function generateClick() {
	// To keep track of how many times the Generate button is clicked
	counter++;

	//append a new container to the dom. There should be text that provides a number.
 	//The number should be the number of times the 'generate row' button has been clicked.
	$('#container').append("<div class='normal'> <p>" + counter + 

		//That container should have two buttons, one that reads 'delete', the other that reads 'change'. 
		"</p><button class = 'delete-click'> Delete </button>" +
		"<button class='change-click'> Change </button></div>");

};


// The delete button should delete JUST the container that the button is in. 
function deleteClick() {
	$(this).parent().remove();
}

// The change button should change the background-color of the container to red. 
// The default or 'normal' state of the background-color should be yellow. Clicking 
// the button a second time should change it back to yellow, 3rd time red, 4th time yellow, etc. 

function changeClick() {
	$(this).parent().toggleClass("active");
}



// Once you are complete, check your work into a new repo and post it on GitHub. 
// Then head over to this form and fill in the info:
// http://goo.gl/forms/hCGLfyz8YK




