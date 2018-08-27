const PubSub = require('../helpers/pub_sub.js');

const WordCounter = function () {

};

WordCounter.prototype.bindEvents = function () {
  PubSub.subscribe("InputView:words-inputted", (event) => {
    const inputtedWords = event.detail;
    const result = this.wordCount(inputtedWords);
    PubSub.publish("WordCounter:result", result);
  })
};

WordCounter.prototype.wordCount = function (words) {
  return words.split(" ").length;
};

module.exports = WordCounter;
