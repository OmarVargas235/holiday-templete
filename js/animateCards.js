(function() {
	const cardsAnimation = Array.from(document.querySelectorAll('.card-animation'));

	window.addEventListener('scroll', () => {
		cardsAnimation.forEach(el =>  {
			if (window.scrollY >= (el.offsetTop - el.offsetHeight) && 
				window.scrollY <= (Math.ceil(el.getBoundingClientRect().bottom + scrollY)) ) {
				el.classList.remove('card-out-md');
				el.classList.add('card-enter-md');

			} else {
				el.classList.remove('card-enter-md');
				el.classList.add('card-out-md');
			}
		});
	})
}())