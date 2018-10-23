var url = 'http://api.icndb.com/jokes/random';

getJoke();
var $button = $('#get-joke').click(function() {
	getJoke();
});

var $paragraph = $('#joke');


function getJoke() {
$.ajax({
	method: 'GET',
	url: url, // lewa - nazwa param. , prawa - zmienna
	success: function(res) {
		$paragraph.text(res.value.joke);
	}
});
}