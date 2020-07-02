const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e=> {
	e.preventDefault();
	
	
	hideError(name);
	hideError(email);
	hideError(password);
	
	const nameValue= name.value.trim();
	const emailValue= email.value.trim();
	const passwordValue= password.value.trim();

	
	if(nameValue){
	}
	else{
		showError(name,'Name Required');
	}
	if(emailValue){
	}
	else{
		showError(email,'Email Required');
	}
	if(passwordValue){
		if(passwordValue.length<6){
			showError(password,'Password should be minimum 6 characters');
			return;
		}
	}
	else{
		showError(password,'Password Required');
	}
	if(nameValue&& emailValue&& passwordValue){
		console.log(nameValue,emailValue,passwordValue);
		alert('Registration Successful');
	}
	/*if(nameValue== 'empty' && emailValue =='empty' && passwordValue == 'empty'){
		if(passwordValue.length<6){
			showError(password,'Password should be minimum 6 characters');
			return;
		}
		console.log(nameValue,emailValue,passwordValue);
		alert('Registration Successful');
	} else{
		switch(''){
			case nameValue:
				showError(name,'Name Required');
			case passwordValue:
				showError(password,'Password Required');
			case emailValue:
				showError(email,'Email Required');
			//case passwordValue:
				//showError(password,'Password Required');
		}
	}*/
});

function showError(input,message){
	const formControl =input.parentElement;
	const errorMsg = formControl.querySelector('.error-msg');
	formControl.className = 'form-control error';
	errorMsg.innerText = message;
}

function hideError(input){
	const formControl =input.parentElement;
	const errorMsg = formControl.querySelector('.error-msg');
	formControl.className = 'form-control ';
	errorMsg.innerText = '';
}