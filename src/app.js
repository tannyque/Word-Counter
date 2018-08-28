const InputView = require('./views/input_view.js');
const WordCounter = require('./models/word_counter.js');
const ResultView = require('./views/result_view.js')

document.addEventListener('DOMContentLoaded', () => {
  // const form = document.querySelector('#wordcounter-form');
  // form.addEventListener('submit', handleFormSubmit);

  const inputView = new InputView();
  inputView.bindEvents();

  const wordCounter = new WordCounter();
  wordCounter.bindEvents();

  const resultView = new ResultView();
  resultView.bindEvents();
});
//
// const handleFormSubmit = function (event) {
//   event.preventDefault();
// };
