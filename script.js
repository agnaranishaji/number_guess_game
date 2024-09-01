// console.log(document.querySelector('.message').textContent); //.message hence message belongs to class of it belongs to id then it would be #message.
// //DOM=Document Object Model it alows javascript to access and manipulate html elements and styles to manipulate them.
// document.querySelector('.message').textContent = 'Correct Number🥳';
// document.querySelector('.number').textContent = 23;
// document.querySelector('.score').textContent = 13;
// document.querySelector('.guess').value = 5;
//Game Logisc:
var secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMsg = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
  if (!guess) {
    displayMsg('No Number🔴');
  } else if (guess == secretNum) {
    document.querySelector('.number').textContent = secretNum;
    // document.querySelector('.message').textContent = 'Correct Number🥳';
    displayMsg('Correct Number🥳');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess != secretNum) {
    //After applying DRY(Dont Repeat Yourself Principle)
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNum ? 'Too high📈' : 'Too low📉';
      displayMsg(guess > secretNum ? 'Too high📈' : 'Too low📉');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You lost the game😥';
      displayMsg('You lost the game😥');
      document.querySelector('.score').textContent = 0;
    }
  }
  //   else if (guess > secretNum) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too high📈';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game😥';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else if (guess < secretNum) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too low📉';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game😥';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMsg('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#333';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
