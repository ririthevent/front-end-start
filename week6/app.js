var box = document.querySelectorAll('.box')[0];
var x = 10;
var score = 0;

function randomNumber(endNum){
	return Math.floor(Math.random() * endNum) +1;
}

function moveBox(){

	x = x + randomNumber(10);
	box.style.left = x + 'px';
}

function startMove(){
	window.setInterval(moveBox, 200);
}

box.addEventListener('click', startMove);