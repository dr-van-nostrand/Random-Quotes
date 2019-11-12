  /***
 * `getRandomBg` function to get a random rg b number
***/


function getRandomBg(){
    let randomBg;
    for (var i = 1; i <= 100; i += 1) {
       red = Math.floor(Math.random() * 256 );
       green = Math.floor(Math.random() * 256 );
       blue = Math.floor(Math.random() * 256 );
       randomBg = 'rgb(' + red + ',' + green + ',' + blue + ')';
    } return randomBg;
 }
 
  /***
 * `changeRandomBg` function to use that number and change the body background
***/

 function changeRandomBg() {
    let randomBgc = getRandomBg();
    document.body.style.backgroundColor = randomBgc;
    console.log(randomBgc);

 }

 
 document.getElementById('load-quote').addEventListener("click", changeRandomBg, false);