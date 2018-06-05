// Wait for page to load, then add button stuff
document.onreadystatechange = function() {
	if (document.readyState == "interactive") {
		// Load some stuff
		add.onclick = saveFoot; 
		loadSavedFeet();
	}
}

function saveFoot() {

	// Saves the contents of the form
	// to localStorage

	var name = document.getElementById('name');
	var favoriteFoot = document.getElementById('favoriteFoot');

	var list = JSON.parse(localStorage.getItem('list'));
	if (list == null) {
		list = {};
	}

	list[name.value] = favoriteFoot.value;

	localStorage.setItem('list', JSON.stringify(list));

	name.value = '';
	favoriteFoot.value = '';

	loadSavedFeet();

}

function loadSavedFeet() {

	// Pull from localStorage
	// and update the Saved Feet list on the page

	var list = JSON.parse(localStorage.getItem('list'));
	if (list == null) {
		list = {
			'Default': 'No feet have been saved.'
		};
	}

	var savedFeet = document.getElementById('savedFeet');
	savedFeet.innerHTML = '';

	for (var key in list) {
		if (list.hasOwnProperty(key)) {
			var node = document.createElement('li');
			var textnode = document.createTextNode(key + ' - ' + list[key]);
			node.appendChild(textnode);
			savedFeet.appendChild(node);
		}
	}

}