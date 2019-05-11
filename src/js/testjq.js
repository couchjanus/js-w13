// test.js
'use strict';
import $ from 'jquery';
window.jQuery = window.$ = $;


$('.btnGo').on('click', function () {
	// ==============Создаём запрос====================
	$.ajax({
			url: 'http://jsonplaceholder.typicode.com/todos/1',
			beforeSend: function () {
				$('#console').html('<div class="alert alert-secondary" role="alert">1: Подготовка к отправке...</div>');
			}
		})
		.fail(function (xhr, statusText) {
			$('#console').html('<div class="alert alert-danger" role="alert">Ошибка: сервер вернул статус: ' + statusText + '</div>');
			$("#printResult").html("<b>Error: " + statusText + "</b>");
		})
		.done(function (data) {
			var text = $('#console').html();
			$('#console').html(text + '<div class="alert alert-success" role="alert">4: Обмен завершен!</div>');
			
		})
		.always(function (data) {
			var text = $('#console').html();
			$('#console').html(text + '<div class="alert alert-success" role="alert">5: All Done!</div>');
			$("#printResult").html("<b>Прибыли данные: </b>" + JSON.stringify(data));
			if (console && console.log) {
				console.log("Sample of data:", data);
			}
		});

});
