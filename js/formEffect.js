(function() {

	//section-reservation: funcionalidad del formulario
	const form = document.querySelector('.form');
	const headerForm = Array.from(document.querySelectorAll('.section-reservation__header-form p'));
	const inputs = Array.from(document.querySelectorAll('.form input'));
	const container_formBtn = document.querySelector('.section-reservation__container-form_btn');

	const selectStart = document.createElement('select');
	const selectEnd = document.createElement('select');

	const templeteSelectHotel = `
				<option value="">-- Select Hotel --</option> 
				<option value="Shagri-La">Shagri-La</option>
				<option value="Chatrium">Chatrium</option>
				<option value="Four Seassons">Four Seassons</option>
				<option value="Hilton">Hilton</option>`;

	const templeteSelectGuest = `<select name="select">
				<option value="">-- Guests --</option> 
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
				<option value="5">5+</option>
			</select>`;

	const templeteSelectModel = `<select name="select">
					<option value="">-- Select Model --</option> 
					<option value="BMW">BMW</option>
					<option value="Mercedes-Benz">Mercedes-Benz</option>
					<option value="Toyota">Toyota</option>
					<option value="Honda">Honda</option>
				</select>`;

	const templeteSelectOptions = `<select name="select">
				<option value="">-- Options --</option> 
				<option value="Child Seat">Child Seat</option>
				<option value="GPS Navigator">GPS Navigator</option>
				<option value="Insurance">Insurance</option>
			</select>`;

	//Valores de los selct para cuando se recarga la pagina
	selectStart.innerHTML = templeteSelectHotel;
	selectEnd.innerHTML = templeteSelectGuest;
	
	headerForm[1].addEventListener('click', () => {
		changeDataForm(1, 0, templeteSelectModel, templeteSelectOptions, 'Pickup Date', 'Return Time');
	})

	headerForm[0].addEventListener('click', () => {
		changeDataForm(0, 1, templeteSelectHotel, templeteSelectGuest, 'Check-in Date', 'Check-in Time');
	})
	
	//Cambia la informacion que contiene el formulario y agrega la animacion del opacity.

	const changeDataForm = (index1, index2, templete1, templete2, placeholder1, placeholder2) => {

		if (headerForm[index1].getAttribute('class') !== 'active') return;

		headerForm[index1].classList.remove('active');
		headerForm[index2].classList.add('active');

		container_formBtn.style.opacity = 0;
		
		setTimeout(() => container_formBtn.style.opacity = 1, 150);

		selectStart.innerHTML = templete1;
		selectEnd.innerHTML = templete2;

		form.prepend(selectStart);
		form.appendChild(selectEnd);

		inputs[0].setAttribute('placeholder', placeholder1);
		inputs[1].setAttribute('placeholder', placeholder2);
	}

	//Eventos de la pagina

	window.addEventListener('DOMContentLoaded', () => {
		form.prepend(selectStart);
		form.appendChild(selectEnd);
	});
}());