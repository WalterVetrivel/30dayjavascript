const root = document.querySelector(':root');
const inputs = document.querySelectorAll('input');

const changeVariable = function() {
	const name = this.name;
	let value = this.value;
	if (name === 'blur') {
		value /= 10;
	}
	if (name !== 'color') {
		value += 'px';
	}
	root.style.setProperty(`--${name}`, value);
};

inputs.forEach(input => input.addEventListener('change', changeVariable));
inputs.forEach(input => input.addEventListener('mousemove', changeVariable));
