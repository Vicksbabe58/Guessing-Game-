let range = 1;
let score = 0;
let gameLevel = 5;
let two = 2;

function guessingGame(range) {
  let userName = prompt("Enter your name");
  if (userName === null || userName === "") {
    return "Please put your name";
  }
  while (score != gameLevel) {
    let guess = prompt(
      `${userName}! guess a number between range of 1 and ${two}. NOTE! Range increases by 1 on a correct guess. Your score is ${score} `
    );
    let random = range;
    //return random
    console.log(random);

    if (random === guess) {
      score++;
      range++;
      two++;
      alert(
        `Your guess is correct! Your score is ${score}.
         Click Ok to go to the next level.
          NOTE your score is increased on every correct guess`
      );
    } else {
      alert("You Guessed Wrong");
      return;
    }
  }
}

guessingGame(range);
