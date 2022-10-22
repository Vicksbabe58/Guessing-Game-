let range = 2;
let score = 0;
let gameLevel = 5;
let two = 2;
let guessLimit = 3;
let guessCount = 0;
function randomNo(range) {
  let username = prompt("Enter your name to being the Game");
  if (username === null || username === "") {
    return;
  }
  while (score != gameLevel) {
    let guess = prompt(` ${username}! guess a number between
      the range of 1 and ${two}. NOTE! Range increases by
       1 on a correct guess.Your score is ${score}`);
    if (guess === null || guess === "") {
      return;
    }
    let random = range;
    // return random
    console.log(random);
    if (random == guess) {
      score++;
      range++;
      two++;
      guessCount = 0;
      alert(`Your guess is correct! your score is ${score}.
     Click OK to go to the next Level. NOTE your score
     is increased on every correct guess`);
    } else if (random != guess) {
      if (guessCount < guessLimit) {
        alert("Guess again");
        guessCount++;
      } else {
        alert("You lose");
        return;
      }
    }
  }
}
randomNo(range);
