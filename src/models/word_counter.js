const PubSub = require('../helpers/pub_sub.js');

const WordCounter = function () {

};

WordCounter.prototype.bindEvents = function () {
  PubSub.subscribe("InputView:text-inputted", (event) => {
    const inputtedText = event.detail;
    const result = this.wordCount(inputtedText);
    // Logging the word count
    console.log(result);
    PubSub.publish("WordCounter:result", result);
  })
};

WordCounter.prototype.wordCount = function (text) {
  // return text.split(" ").length;
  return text.trim().split(' ').length;
};

module.exports = WordCounter;
