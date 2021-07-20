// Choosing elements
var el_amount_in_UZS = document.querySelector('.amount_in_UZS');
var el_amount_in_any_currency = document.querySelector('.amount-input');

var elCurrencySelect = document.querySelector('.currency-select');
var elFormBtn = document.querySelector('.form-btn');

// Currency calculator function
elFormBtn.addEventListener('click', function(evt) {
  evt.preventDefault();

  var amount = el_amount_in_any_currency.value.trim();
  var currency = parseFloat(elCurrencySelect.value, 10);

  if (amount !== '') {
    amount = parseFloat(el_amount_in_any_currency.value.trim(), 10);

    if (!isNaN(amount)) {
      if (amount > 0) {
        var amount_in_UZS_result = (amount * currency).toFixed(2);
        el_amount_in_UZS.value = amount_in_UZS_result;

        el_amount_in_any_currency.value = el_amount_in_any_currency.value.trim();
      } else {
        alert('Narxni musbat sonda kiriting!');
        el_amount_in_any_currency.value = '';
      }
    } else {
      alert('Narxni raqamda kiriting!');
      el_amount_in_any_currency.value = '';
    }
  } else {
    alert('Narxni kiriting!');
    el_amount_in_any_currency.value = '';
  }

  el_amount_in_any_currency.focus();
});
