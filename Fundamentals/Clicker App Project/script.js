const counter = document.getElementById("counter");
let count = 0;

function increment() {
  count++;
  counter.textContent = count;
}

function decrement() {
  count--;
  counter.textContent = count;
}

function reset() {
  count = 0;
  counter.textContent = count;
}