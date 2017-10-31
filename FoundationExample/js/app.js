PartClockOne.onclick = function() {
	document.getElementById("ClockNumber").textContent = "15%";
	meterClock.style.transform = 'rotate(-60deg)';
 }
PartClockTwo.onclick = function() {
	document.getElementById("ClockNumber").textContent = "50%";
	meterClock.style.transform = 'rotate(0deg)';
 }
PartClockThree.onclick = function() {
	document.getElementById("ClockNumber").textContent = "75%";
	meterClock.style.transform = 'rotate(60deg)';
 }

