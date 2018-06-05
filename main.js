// Wait for page to load, then add button stuff
document.onreadystatechange = function() {
	if (document.readyState == "interactive") {
		// Load some stuff
		add.onclick = saveFoot; 
	}
}

function saveFoot() {

	var name = document.getElementById('name');
	var favoriteFoot = document.getElementById('favoriteFoot');

	var savedFeet = document.getElementById('savedFeet');

	console.log('[' + savedFeet.innerHTML + ']');
	console.log(name.value);

	if (savedFeet.innerHTML.indexOf("<li>No feet have been saved.</li>") > -1) {
		savedFeet.innerHTML = '';
	}

	savedFeet.innerHTML = savedFeet.innerHTML + '<li>' + name.value + ' - ' + favoriteFoot.value + '</li>';

	name.value = '';
	favoriteFoot.value = '';




	localStorage.setItem('test', '123');
	localStorage.setItem('test2', 'lalalalalalalala');

	var test = localStorage.getItem('test');

	savedFeet.innerHTML = savedFeet.innerHTML + '<li>TEST: ' + test + '</li>';

	localStorage.removeItem('test2');

}