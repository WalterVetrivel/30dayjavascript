const galleryItems = document.querySelectorAll('.gallery-item');

const clickHandler = function(event) {
	event.target.classList.toggle('expand');
	event.target.classList.toggle('darken');
};

galleryItems.forEach(item => {
	item.addEventListener('click', clickHandler);
});
