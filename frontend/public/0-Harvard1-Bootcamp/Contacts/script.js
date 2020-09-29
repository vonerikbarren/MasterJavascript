$(document).ready(function() {
  $('#submitForm').click(function(event) {
    
    const firstName = $('#firstName').val().trim(); // gets first name from input
    const lastName =  $('#lastName').val().trim();
    const phoneNumber =  $('#phoneNumber').val().trim();
    const company = $('#company').val().trim();
    const email =  $('#email').val().trim();
    const description = $('#description').val().trim();
    const rowObj = {firstName, lastName, phoneNumber, company, email, description};
    const row = generateRow(rowObj); 
  });

  function generateRow(rowLikeObject) { // return HTML row
    const keys = Object.keys(rowLikeObject); // return an array of keys
    let tr = '<tr>';
    
      for(let i = 0; i < keys.length; i++) {
        tr += '<td>' + rowLikeObject[keys[i]] + '</td>';
      }

      tr += '<td>Actions</td>' +
    '</tr>';

    $('tbody').append(tr);
  }
});