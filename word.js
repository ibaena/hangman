var Letter = require('./letter.js');

module.exports = function (wrd){
  this.word = wrd;
  this.lets = [];
  this.found = false;
  this.getLets=function(){
    for (i = 0; i < this.word.length; i++) {
      var wordLetter = Letter(this.charac);
      this.lets.push(wordLetter);
    }
      console.log(this.lets);
  }
  this.checkIfLetterFound = function(guessLetter){
    var whatToReturn = 0;
    for (j = 0; j <this.lets.length; j++){
      if(Letter.charac = guessLetter){
        Letter.appear = true;
        whatToReturn ++;
      }
        return whatToReturn;
    }
  }
  this.didWeFindTheWord= function(){
    this.lets.every = function(curLet){
      if(curLet.appear === true){
        this.found = true;
      }
    }
  }
  this.wordRender=function(){
    var str = "";
    for (var i = 0; i < this.lets.length; i++) {
      var currentLetter = Letter.letterRender;
      str += currentLetter;
    }
  }
}
