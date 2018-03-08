// Create new content for the sidebar element that will update when the user clicks a button
const $asideContent = $('#asideContent')
const button = document.querySelector('.container aside .refresh')
const refreshButton = () => {
	$asideContent.load('../sidebar.html')
}
button.addEventListener('click', refreshButton); 

// Use the Star Wars API to create HTML elements out
// of character information and add it to the main element


var xhr = new XMLHttpRequest(); 
xhr.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		const res = JSON.parse(xhr.responseText); 
		document.querySelector('main').innerHTML = "<p>" + res.name + "</p>";
	}
};
xhr.open("GET", "https://swapi.co/api/people/1/", true);
xhr.send();

// Create a new CSS sheet with new style rules and
// update elements on the page 10 seconds after the page loads

// Find another public API to get data from and use it to add content to your page

// Use an event listener on some element of your page to request new data
// from some location when the user interacts with the element in some way
