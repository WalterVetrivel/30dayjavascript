const root = document.querySelector(':root');

const spaceSlider = document.getElementById('space');
const blurSlider = document.getElementById('blur');
const colorPicker = document.getElementById('color');

spaceSlider.addEventListener('change', event => {
	const selectedSpace = event.target.value;
	root.style.setProperty('--space', `${selectedSpace}px`);
});

blurSlider.addEventListener('change', event => {
	const selectedBlur = event.target.value / 10;
	root.style.setProperty('--blur', `${selectedBlur}px`);
});

colorPicker.addEventListener('change', event => {
	const selectedColor = event.target.value;
	root.style.setProperty('--color', selectedColor);
});
