import $ from 'jquery'
window.jQuery = $
window.$ = $

import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination } from 'swiper/modules';

Swiper.use([Navigation, Pagination]);

document.addEventListener('DOMContentLoaded', () => {
	
	function swiperSlider() {
		new Swiper('.swiper', {
			direction: 'horizontal',
			loop: true,
			slidesPerView: 1,
			spaceBetween: 0,
			clickable: true,
			pagination: {
			  el: '.swiper-pagination',
			  type: 'fraction',
			  renderFraction: function (currentClass, totalClass) {
				return `<span>0</span><span class="${currentClass}"></span>`;
				},
			},
			navigation: {
			  nextEl: '.swiper-button-next',
			  prevEl: '.swiper-button-prev',
			},
		  });
	}

	function form() {
		let phoneWrapper = document.querySelector('.phone_wrapper');
		let formAnswer = document.querySelector('.subscribe-main-form-answer');
		let phoneInput = document.getElementById('phone_input');
	
		$('#form').submit(function(event) {
			event.preventDefault();
			let phoneInputValue = phoneInput.value.trim();
	
			// Валидация телефонного номера
			if (validatePhone(phoneInputValue)) {
				// Успешная валидация
				var form_data = $(this).serialize();
				$.ajax({
					type: 'POST',
					url: './send.php',
					data: form_data,
					success: function(data) {
						formAnswer.innerHTML = 'Sending successful';
						formAnswer.classList.add('success');
						$('#form')[0].reset();
						setTimeout(() => {
							formAnswer.classList.remove('success');
						}, 1000);
					},
					error: function(data) {
						formAnswer.classList.add('active');
						formAnswer.innerHTML = 'Error';
					}
				});
			} else {
				// Ошибка валидации
				console.log('Validation error');
				phoneWrapper.classList.add('error');
				formAnswer.classList.add('active');
				formAnswer.innerHTML = 'Please enter a valid phone number';
			}
		});
	
		phoneInput.addEventListener('input', () => {
			formAnswer.classList.remove('active');
			phoneWrapper.classList.remove('error');
		});
	
		function validatePhone(phone) {
			// Проверка на пустоту и формат номера
			const re = /^\d+$/;
			return re.test(phone);
		}
	}

	form()
	swiperSlider()

})
