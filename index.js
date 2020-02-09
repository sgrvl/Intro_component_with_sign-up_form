var input = document.getElementsByClassName('input');
var submit = document.getElementsByClassName('claim')[0];
var message = document.getElementsByClassName('message');

submit.addEventListener('click',function(){
	for(var i = 0; i<input.length; i++){
		if (input[i].value.length == 0) {
			input[i].setCustomValidity(' ');
			input[i].classList.add('invalid');
			input[i].placeholder = '';
			input[2].placeholder = 'email@example.com';
			message[i].style.display = 'flex';
		} else {
			input[i].classList.remove('invalid');
			message[i].style.display = 'none';
		}
	}
		
});
	



//invalid.style.backgroundImage = "url('images/icon-error.svg')";