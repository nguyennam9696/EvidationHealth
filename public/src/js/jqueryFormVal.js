$(document).ready(function () {

  var button = $('#btn-valid')

  button.attr('disabled', 'disabled');
  button.attr('value', 'Complete the form to continue enrollment');

  $('#consent').change(function () {
    if (this.checked) {
      // Remove disabled attribute, so now the button is clickable
      // Change the value of the button text
      button.removeAttr('disabled');
      button.attr('value', 'I understand and wish to continue with enrollment');
    } else {
      // Remove the input button value to refresh the string
      // Disable the button
      // Add back the input button value to complete the form
      button.removeAttr('value');
      button.attr('disabled', 'disabled');
      button.attr('value', 'Complete the form to continue enrollment');
    }
  });
});

