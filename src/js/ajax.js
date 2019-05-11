// test.js
'use strict';
import $ from 'jquery';
window.jQuery = window.$ = $;

$('.btnGo').on('click', function () {
	fetch('http://jsonplaceholder.typicode.com/todos/1')
		.then(
			function (response) {
				if (response.status !== 200) {
					console.log('Looks like there was a problem. Status Code: ' +
						response.status);
					return;
				}
				response.json().then(function (data) {
					var text = $('#console').html();
					$('#console').html(text + '<div class="alert alert-success" role="alert">4: Обмен завершен!</div>');
					$("#printResult").html("<b>Прибыли данные: </b>" + JSON.stringify(data));
					console.log(data);
				});
			})
		.catch(function (err) {
			console.log('Fetch Error :-S', err);
		});
});