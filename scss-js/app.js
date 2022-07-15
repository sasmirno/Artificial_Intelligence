import * as flsFunctions from "./modules/functions.js";
import * as burger from "./modules/burger.js";
import * as accordion from "./modules/accordion.js";

flsFunctions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper('.swiper', {
	modules: [Navigation, Pagination],
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	slidesPerView: 'auto',
	spaceBetween: 30,
	loopedSlides: 0,
});