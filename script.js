let counter = 0;

const counterValue = document.getElementById('counter-value');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.querySelector('#reset');

// To increment the value of counter
incrementBtn.addEventListener('click', () => {
	counter++;
	counterValue.innerHTML = counter;
});

// To decrement the value of counter
decrementBtn.addEventListener('click', () => {
	counter--;
	counterValue.innerHTML = counter;
});

// To reset the counter to zero
resetBtn.addEventListener('click', () => {
	counter = 0;
	counterValue.innerHTML = counter;
}
);

