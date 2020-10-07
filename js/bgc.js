/***
 * `getRandomBg` function to get a random rgb number
 ***/
function getRandomBg() {
	let randomBg;
	for (var i = 1; i <= 100; i += 1) {
		red = Math.floor(Math.random() * 256);
		green = Math.floor(Math.random() * 256);
		blue = Math.floor(Math.random() * 256);
		randomBg = 'rgb(' + red + ',' + green + ',' + blue + ')';
	}
	return randomBg;
}
/***
 * `changeRandomBg` function to use that number and change the body background
 ***/
function changeRandomBg() {
	let randomBgc = getRandomBg();
	document.body.style.backgroundColor = randomBgc;
}
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE OF CODE BELOW!!
 ***/
document.getElementById('load-quote').addEventListener("click", changeRandomBg, false);
/***
 * `setInterval` function to change randomly the bg every 30 seconds
 ***/
setInterval(changeRandomBg, 30000);