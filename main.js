// Wait for page to load, then add button stuff
document.onreadystatechange = function() {
	if (document.readyState == "interactive") {
		// Load some stuff
		add.onclick = saveFoot; 
		loadSavedFeet();

		var cheese = "Cheddar";
		var cheeses = [ 'Cheddar', 'Gouda', 'American' ];
		var number_of_cheeses = cheeses.length;
		var cheese_winners = {
			'first': 'Gouda',
			'second': 'Cheddar',
			'third': 'American',
			'runner-ups': [ 'Brie', 'Colby', 'Bleu' ]
		};

		// Working with a string.
		localStorage.setItem('my_cheese', cheese);
		console.log(localStorage.getItem('my_cheese'));

		// Working with a number.
		localStorage.setItem('my_number_of_cheeses', number_of_cheeses);
		console.log(localStorage.getItem('my_number_of_cheeses'));

		// Working with an array.
		// This doesn't work - array is squashed down into a string!
		// localStorage.setItem('my_cheeses', cheeses);
		// console.log(localStorage.getItem('my_cheeses'));
		// console.log(cheeses);

		// Working with an array, correctly.
		localStorage.setItem('my_cheeses', JSON.stringify(cheeses));
		console.log(JSON.parse(localStorage.getItem('my_cheeses')));

		// Working with an object.
		localStorage.setItem('my_cheese_winners', JSON.stringify(cheese_winners));
		console.log(JSON.parse(localStorage.getItem('my_cheese_winners')));

		// Clean up our mess.
		localStorage.removeItem('my_cheese');
		localStorage.removeItem('my_number_of_cheeses');
		localStorage.removeItem('my_cheeses');
		localStorage.removeItem('my_cheese_winners');

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