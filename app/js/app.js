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
			loop: false,
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


	swiperSlider()

})
