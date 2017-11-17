use strict 
var s = document.forms.Sum,
    d = s.querySelectorAll('input[type="checkbox"]:not([value]), input[type="checkbox"][value=""]');
  for (var i = 0; i < d.length; i++) // чтобы не было написано NaN, убираем в disabled пункты, где не прописаны значения
    d[i].disabled = true;
		$(document).ready(function() {
			TweenMax.to( $('#meterClock'), 1, {rotation:45, transformOrigin:"right center"}, );
 		});

			$('input[type="checkbox"]').click(function(){
			if( $(this).is(':checked') ) {
				s.onchange = function() { // начало работы функции сложения
				  var n = s.querySelectorAll('[type="checkbox"]'),
				      itog = 0;
				  for(var j=0; j<n.length; j++)
				    n[j].checked ? itog += parseFloat(n[j].value) : itog;
				    document.getElementById('ClockNumber').innerHTML =  itog + '%';
						TweenMax.to( $('#meterClock'), 1, {rotation:itog*1.8, transformOrigin:"right center"}, );
				}
			} else {
				s.onchange = function() { // начало работы функции сложения
					var n = s.querySelectorAll('[type="checkbox"]'),
							itog = 0;
					for(var j=0; j<n.length; j++)
						n[j].checked ? itog += parseFloat(n[j].value) : itog;
						document.getElementById('ClockNumber').innerHTML =  itog + '%';
						TweenMax.to( $('#meterClock'), 1, {rotation:itog*1.8, transformOrigin:"right center"}, );
				}
			}
			});
