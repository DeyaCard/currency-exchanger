import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';
import Currency from './currency.js'

console.log(Currency)

function clearFields() {
  $('.showErrors').text(""); 
  $('.showExchange').text("");
}

function getElements(response, amount) {
    if(response) {
      //console.log(amount)
      const convertTo = (amount*response.conversion_rate);
      $('.showExchange').append(`The exchange rate is: ${convertTo}`);
    } else {
      $('.showErrors').text(`There was an error: ${response.message}`);
    }
  }


$(document).ready(function() {
  $('#exchangeForm').submit(function(event) {
    event.preventDefault();
    let amount = $('#amount').val();
    let currencyTo = $('#currencyTo').val();
    clearFields();
    Currency.currencyEx(amount, currencyTo) 
      .then(function(response) {
        getElements(response, amount);
      });
  });
}); 




