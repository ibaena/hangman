var prompt = require('prompt');
var Word = require('./word.js');

//start prompt
prompt.start();

var game = {
  wordBank: ['chip', 'hip', 'trip'],
  guessesRemaining: 10,
  currentWrd: null,

  // startGame method: Gets random string from wordbank array and creates new word object
  startGame: function(wrd){
    this.currentWrd = new Word(this.wordBank[Math.floor(Math.random() * this.wordBank.length)]);
    this.currentWrd.getLets();
    this.keepPromptingUser();
  },
  keepPromptingUser: function(){
    var self = this;
    prompt.get(['guessLetter'], function(err, result){
      console.log('The Letter you picked is'+ result.guessLetter);
      var findHowManyOfUserGuess = self.currentWrd.checkIfLetterFound(result.guessLetter);
      if (findHowManyOfUserGuess === 0){
        console.log('You guess wrong');
        self.guessesRemaining = --;
      }
      else{
        console.log(‘You guessed right!’);
          if(self.current.didWeFindTheWord() === true){
            console.console.log('You won!');
            return 1;
          }
      }
      console.log('Guesses remaining:' + guessesRemaining);
      console.log(self.currentWrd.wordRender());

      if(self.guessesRemaining > 0 && self.currentWrd.found === false){
        keepPromptingUser();
      }
      else if(self.guessesRemaining === 0) {
        console.log('Gameover');
      }
      else{
        console.log(self.currentWrd.wordRender());
      }
    });
  }
}
game.startGame()
