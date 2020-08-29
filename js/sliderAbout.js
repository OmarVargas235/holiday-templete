(function() {
	const cardContainer = document.querySelector('.abot-section_slider__container-card');
	const buttons = Array.from(document.querySelectorAll('.btn__slider'));
	let cards = Array.from(document.querySelectorAll('.abot-section_slider__card'));
	
	//Dar tamaño al contenedor del slider
	cardContainer.style.height = (cards[1].offsetHeight + 30) + "px";
	
	buttons.forEach((btn, key) => {
		
		btn.getAttribute('class').split(' ')[1] === 'active' ? buttonActive = btn : null;
		
		btn.addEventListener('click', () => {
			let buttonsActive = Array.from(document.querySelectorAll('.btn__slider'));

			const btnActive = buttonsActive.find(el => el.getAttribute('class').split(' ')[1] === 'active');

			let moveCard = key * -1;

			for (let i = 0; i < cards.length; i++) { 	
				cards[i].style.left = `${100 * moveCard}%`;

				moveCard++;
			}
			
			btnActive.classList.remove('active');
			buttons[key].classList.add('active');
		})
	});

	//Eventos

	window.addEventListener('resize', () => {
		let mediaQuery = window.matchMedia('(max-width: 991px').matches;

		mediaQuery 
		? cardContainer.style.height = cards[1].offsetHeight + "px"
		: cardContainer.style.height = 380 + "px" ;
	});
}());

