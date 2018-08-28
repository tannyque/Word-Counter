const PubSub = require('../helpers/pub_sub.js');

const InputView = function () {

};

InputView.prototype.bindEvents = function () {
  const form = document.querySelector('#wordcounter-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputtedText = event.target.text.value;
    // Log to see if I got the text
    // console.log(inputtedText);
    PubSub.publish('InputView:text-inputted', inputtedText);
  })
};

module.exports = InputView;
