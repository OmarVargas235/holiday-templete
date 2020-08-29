(function() {

	//Diseño movil, logica para el menu de mostrar o ocultar.
	const btn = document.querySelector('.navbar__container-icon');
	const list = document.querySelector('.navbar__list');

	const controlerBtnMenu = () => {
		let mediaQuery = window.matchMedia('(min-width: 768px').matches;

		list.style.display = 'flex'; // Valores por defecto para escritorio
		list.style.opacity = '1'; // Valores por defecto para escritorio

		if (mediaQuery) return;
				
		let estadoBtn = false; // Valores por defecto si es un dispositivo movil

		list.style.display = 'none'; // Valores por defecto si es un dispositivo movil
		
		/*Funcion que se encarga de cultar el menu*/
		const hiddenMenu = () => {
			list.style.opacity = 0;
			setTimeout(() => list.style.display = 'none', 400);

			estadoBtn = false; 	
		}
		
		/*Evento toggle para ocultar o mostrar el menu cada que se hace click en el boton con tres rayas*/
		btn.addEventListener('click', () => {
			estadoBtn = !estadoBtn;
			btn.id = estadoBtn ? 1 : 0;
		})
		
		window.addEventListener('click', e => {
			mediaQuery = window.matchMedia('(min-width: 768px').matches;

			if (mediaQuery) return;

			/*Si se hace click en cualquier lugar fuera de la etiqueta "NAV" ocurre esta condicion*/	
			if (e.path.length === 3) {
				hiddenMenu(); 

				return;
			};
			
			/*Si se hace click en el boton ocurre esta condicion*/	
			if (e.path[0].getAttribute('id') === '1' || e.path[1].getAttribute('id') === '1') {
				list.style.display = 'block';
				setTimeout(() => list.style.opacity = '1', 100);

			} else hiddenMenu(); /*Si se hace click en cualquier lugar dentro de la etiqueta "NAV" ocurre esta condicion*/	
		})
	}

	//Funcionalidad del Boton que hay sobre el slider
	const btnSlider = document.querySelector('.header__btn');
	const btnHeader = document.querySelector('#learn-more-btn');

	document.documentElement.style.scrollBehavior = 'smooth';

	btnSlider.addEventListener('click', () => {
		let mediaQuery = window.matchMedia('(min-width: 620px').matches,
			scrollto = btnHeader.getBoundingClientRect().top + window.scrollY - (mediaQuery ? 25 : 0);

		window.scrollTo(0, scrollto);
	})

	// Dando un tamaño dinamico a la etiqueta HEADER
	const header = document.querySelector('.header');
	const img = document.querySelector('.header__img');
	
	const controlerSlider = () => {
		const heightImg = window.getComputedStyle(img).height; //Obtiene el alto de la img en px
		const regex = /[\d.]/g; //Filtra solo numeros y el punto
		const height = Math.round(parseFloat(heightImg.match(regex).join(''))); //Altura redondeada

		header.style.height = height + 'px';
	}
	
	//Slider de la etiqueta HEADER
	const banner = Array.from(document.querySelectorAll('.header__banner')).reverse();
	const arrows = Array.from(document.querySelectorAll('.header__arrows i'));
	let numSlider = 0;

	window.setInterval(() => sliderNextPrev((banner.length - 1), 0, 1), 10000);

	arrows[0].addEventListener('click', () => sliderNextPrev(0, (banner.length - 1), -1) );
	
	arrows[1].addEventListener('click', () => sliderNextPrev((banner.length - 1), 0, 1) );

	const sliderNextPrev = (start_end, start_end_2, accountant) => {
		numSlider === start_end ? numSlider = start_end_2 : numSlider += accountant;

		banner[numSlider].style.opacity = 1;
		
		banner.forEach((element, index) => { if (index !== numSlider) element.style.opacity = 0 });
	}

	//Eventos de la pagina

	window.addEventListener('resize', () => {
		controlerBtnMenu();
		controlerSlider();
	});

	window.addEventListener('DOMContentLoaded', () => {
		controlerBtnMenu();
		controlerSlider();
	});
}());