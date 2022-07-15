//burger
let menuBtn = document.querySelector('.burger__button');
let menu = document.querySelector('.burger__menu');
let back = document.querySelector('body');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('burger_active');
	menu.classList.toggle('burger_active');
	back.classList.toggle('burger_lock');
})