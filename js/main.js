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