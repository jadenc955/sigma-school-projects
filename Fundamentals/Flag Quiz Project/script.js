function startQuiz() {
  const guess = prompt('What does this ✅ stands for?');

  if (guess.toLowerCase() === 'tick') {
    alert('You guessed correctly!');
  } else {
    alert('Sorry, the correct answer was Tick.');
  }

  const guess2 = prompt('What does this 🍉 stands for?');
  if (guess2.toLowerCase() === 'watermelon') {
    alert('You guessed correctly again!');
  } else {
    alert('Sorry, the correct answer was Watermelon.');
  }
}