$(function () {
console.log('Inside survey.js');
  /**
   * Get the form info from the page.
   * Clear the form. 
   * Send the data in a POST request.
   */
  const addEmployee = function (event) {
    event.preventDefault();
    // Here we grab the form elements
    const newEmployee = {
      name: $('#emp-name').val().trim(),
      scores: [
      $('#q1').val().trim(),
      $('#q2').val().trim(), 
      $('#q3').val().trim(),
      $('#q4').val().trim(),
      $('#q5').val().trim(),
      $('#q6').val().trim(),
      $('#q7').val().trim(),
      $('#q8').val().trim(),
      $('#q9').val().trim(),
      $('#q10').val().trim()
      ]
    };

    // Clear the form when submitting
    $('#emp-name').val('');
    $('#q1').val('');
    $('#q2').val('');
    $('#q3').val('');
    $('#q4').val('');
    $('#q5').val('');
    $('#q6').val('');
    $('#q7').val('');
    $('#q8').val('');
    $('#q9').val('');
    $('#q10').val('');

    $.ajax({
      method: 'POST',
      url: '/api/employees',
      data: newEmployee
    }).then(function(res){
      console.log(res);
      alert(res.name + " Is a Match!!");
    }).catch(function(error){
      console.log(error);
    });
    
  }

  $('.submit').on('click', addEmployee)
});