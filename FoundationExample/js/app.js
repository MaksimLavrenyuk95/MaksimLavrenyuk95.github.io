TweenMax.to( $('#meterClock'), 1, {rotation:-73, transformOrigin:"bottom center"}, "+=1");
PartClockOne.onclick = function() {
	TweenMax.to( $('#meterClock'), 1, {rotation:-60, transformOrigin:"bottom center"}, "+=1");
	document.getElementById("ClockNumber").textContent = "15%";
	
 }
PartClockTwo.onclick = function() {
	TweenMax.to( $('#meterClock'), 1, {rotation:0, transformOrigin:"bottom center"}, "+=1");
	document.getElementById("ClockNumber").textContent = "50%";
 }
PartClockThree.onclick = function() {
	TweenMax.to( $('#meterClock'), 1, {rotation:60, transformOrigin:"bottom center"}, "+=1");
	document.getElementById("ClockNumber").textContent = "75%";
	
 }

