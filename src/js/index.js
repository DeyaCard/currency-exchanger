import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';
import Currency from './currency.js'

function clearFields() {
  $('.showErrors').text(""); 
  $('.showExchange').text("");
}

function getElements(response) {
    if(response) {
      const amount = (response.usdAmount);
      const convertTo = (response.usdConversion);
      $('.showExchange').append(`The exchange rate is: ${convertTo}`);
    } else {
      $('.showErrors').text(`There was an error: ${response.message}`);
    }
  }


$(document).ready(function() {
  $('#exchangeCurrency').click(function() {
    let amount = $('#amount').val();
    clearFields();
    currencyExchange.currencyEx(amount, currencyTo) 
      .then(function(response) {
        getElements(response, currencyTo);
      });
  });
}); 




