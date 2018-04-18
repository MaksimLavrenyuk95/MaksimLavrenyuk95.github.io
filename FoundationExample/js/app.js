"use strict"
var s = document.forms.Sum,
    d = s.querySelectorAll('input[type="checkbox"]:not([value]), input[type="checkbox"][value=""]');
  for (var i = 0; i < d.length; i++) 
    d[i].disabled = true;
  $(document).ready(function() {
    TweenMax.to( $('#meterClock'), 1, {rotation:81, transformOrigin:"right center"});
  });

