$(document).ready(function(){
  $('#registration-form input').on('input', function(){
    var input = $(this);
    var type = input.attr('type');
    var val = input.val();
    var parentFormGroup = input.parent('.form-group');
    parentFormGroup.removeClass('has-error has-success');
    parentFormGroup.find('.error-message').text('');

    if(type === 'text' && val !== '') {
      parentFormGroup.addClass('has-success');
    } else if(type === 'email' && isValidEmail(val)) {
      parentFormGroup.addClass('has-success');
    } else if(type === 'password' && val.length >= 6) {
      parentFormGroup.addClass('has-success');
    } else {
      parentFormGroup.addClass('has-error');
      if(type === 'email') {
        parentFormGroup.find('.error-message').text('Email is not valid');
      } else if(type === 'password') {
        parentFormGroup.find('.error-message').text('Password is too short');
      }
    }
  });

  $('#registration-form').on('submit', function(e){
    e.preventDefault();
    var isFormValid = true;
    $('#registration-form input').each(function(){
      var input = $(this);
      if(input.parent('.form-group').hasClass('has-error')) {
        isFormValid = false;
      }
    });

    var password = $('#password').val();
    var confirmPassword = $('#confirm-password').val();
    if(password !== confirmPassword) {
      isFormValid = false;
      var parentFormGroup = $('#confirm-password').parent('.form-group');
      parentFormGroup.addClass('has-error');
      parentFormGroup.find('.error-message').text('Passwords do not match');
    }

    if(isFormValid) {
      // Submit the form or do AJAX call here
      alert('Form is valid and ready to be submitted!');
    }
  });
});

function isValidEmail(email) {
  var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return pattern.test(email);
}
