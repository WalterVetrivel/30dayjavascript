let keys = [];
for (key of document.querySelectorAll('.key')) {
	keys.push(key);
}

window.addEventListener('keypress', event => {
	const index = keys.findIndex(
		key => key.innerHTML[0].toLowerCase() === event.key.toLowerCase()
	);
	if (index > -1) {
		new Audio(
			`sounds/${keys[index].innerText.split('\n')[1].toLowerCase()}.wav`
		).play();
		keys[index].classList.add('playing');
		/* setTimeout(() => {
			keys[index].classList.remove('playing');
		}, 100); */
		keys[index].addEventListener('transitionend', event => {
			keys[index].classList.remove('playing');
		});
	}
});
