$(document).ready(function(){
	$('form').submit(function(e){
		e.preventDefault();

		if($('#name').val() == ""){
			$(".nameError").text("Please enter you name");
		}

		if($('#email').val() == ""){
			$('.emailError').text("Please enter your email");
		}

		if($('#password').val() !== $('#confirmPassword').val()){
			$('.passwordError').text('Your passwords do not match');
		}
		return false;
	});

});


