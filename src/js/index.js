import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
import Currency from './currency.js'

//Input from browser
function clearFields() {
  $('.showErrors').text(""); 
  $('.showAmount').text("");
}

function getElements(response, amountEntered) {
  for (let i = 0; i < response.length; i++) {
    if(response[i]) {
      
      $('.showExchange').append(`The exchange rate is equal to ${response[i]}`);
      $('.showExchange').append('<br></br>');
    } else {
      $('.showErrors').text(`There was an error: ${response.message}`);
    }
  }
}

$(document).ready(function() {
  $('#exchangeCurrency').click(function() {
    let amount = $('#amount').val();
    clearFields();
    // makeApiCall
    currencyExchange.currencyEx(currency, amount) 
      .then(function(response) {
        console.log(response)
        getElements(response, amount);
      });
  });
}); 




