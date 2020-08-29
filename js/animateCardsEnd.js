(function() {
	const cardsAnimation = Array.from(document.querySelectorAll('.animation-popular-packages'));
	
	const heightArr = cardsAnimation.map(el => el.offsetTop - el.offsetHeight + 130);

	window.addEventListener('scroll', () => {
		heightArr.forEach((element, index) =>  {
			if (window.scrollY >= element) {
				cardsAnimation[index].classList.remove('animation-popular-packages_out');
				cardsAnimation[index].classList.add('animation-popular-packages_enter');

			} else {
				cardsAnimation[index].classList.remove('animation-popular-packages_enter');
				cardsAnimation[index].classList.add('animation-popular-packages_out');
			}
		});
	})

	//Logica para la animacion para el archivo tours.html
	const cardsAnimation2 = Array.from(document.querySelectorAll('.animation'));

	const heightArr2 = cardsAnimation2.map(el => el.offsetTop - el.offsetHeight + 200);

	window.addEventListener('scroll', () => {
		heightArr2.forEach((element, index) =>  {
			if (window.scrollY >= element) {
				cardsAnimation2[index].classList.add(`animation-special-packages-enter-${index + 1}`);

			} else {
				cardsAnimation2[index].classList.remove(`animation-special-packages-enter-${index +1}`);
			}
		});
	})
}())