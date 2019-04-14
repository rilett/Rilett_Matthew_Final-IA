# Rilett_Matthew_Final-IA

Here is the JavaScript I tried including in the final for the gear slideshow and I would have implmented the same code (with the changes in other divs for other pages)
The issue was that the code itself wouldnt work, the idea was to have a mini slideshow showcasing the merch and a photo gallery on the about page. Show the first image, fade out, second image appears etc. But it kept on breaking and not working, even after research and trying to find other ways to make it work.

(() => {


var i = 0;
var images = [];
var time = 3000;

// list

images[0] = 'traa_shorts.png';
images[1] = 'traa_hat.png';
images[2] = 'traa_shirt.png';

function changeImg(){
  document.slide.src = images[1]
  i++
} else {
  i = 0;
}
setTimeout("changeImg()", time);
}
window.onload= changeImg;




