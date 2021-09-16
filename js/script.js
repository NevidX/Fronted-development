class BurgerGroup {
	#contentWidth = [];
	#trigger;
	#body;
	#content;
	#style;
	constructor(BurgerTrigger, BurgerBody, BurgerContent, style) {
		this.#trigger = document.querySelectorAll(BurgerTrigger);
		this.#body = document.querySelectorAll(BurgerBody);
		this.#content = BurgerContent;
		this.#style = style || "none";
		this.init();
	}
	/*initialize Burgers (give them height, close them)*/
	init() {
		this.#contentWidth;
		this.#trigger.forEach((item, i) => {
			this.#body[i].style.height = "0";
			item.addEventListener("click", () => {
				if (!(this.#style === "none")) {
					item.classList.toggle(this.#style);
				}
				if ((item.classList.contains("active"))) {
					document.getElementById("body").style.overflow = "hidden"
				} else {
					document.getElementById("body").style.overflowY = "scroll"
				}
				if (this.#body[i].style.height === "0px") {
					this.#body[i].style.height = this.#contentWidth;
				} else {
					this.#body[i].style.height = "0";
				}
			});
			window.addEventListener("resize", () => {
				let pageWidth = document.documentElement.scrollWidth;
				if (pageWidth >= 1000) {
					this.#body[i].style.height = "0";
					item.classList.remove("active")
				}
				if (!(item.classList.contains("active"))) {
					document.getElementById("body").style.overflowY = "scroll"
				}
				// this.recalc();
			})
		});
	}
	// recalc height of elements*/
	// recalc() {
	// this.#body.forEach((item, i) => {
	// 	 this.#contentWidth[i] = item.querySelector(this.#content).offsetHeight + "px";
	// })
	// }
	/*close all Burgers*/
	close() {
		this.#body.forEach((item, i) => {
			this.#body[i].style.maxHeight = "0";
		})
	}
}
const myBurgerGroup = new BurgerGroup(".burger__trigger", ".burger__body", ".burger__content", "active")

class Slider {
	#slider;
	#slide;
	#slideWidth;
	#left_btn;
	#right_btn;
	#FIRST_SLIDE = 1;
	#LAST_SLIDE;
	#sliderPos = 0;
	#activeSliderIndex = 1;
	constructor(slider_id, slide_class, left_btn_id, right_btn_id) {
		this.#slider = document.getElementById(slider_id);
		this.#slide = document.getElementsByClassName(slide_class);
		this.#left_btn = document.getElementById(left_btn_id);
		this.#right_btn = document.getElementById(right_btn_id);
		this.#LAST_SLIDE = this.#slide.length;
		this.#slider.style.transform = "translateX(0%)";
		this.#left_btn.addEventListener("click", () => {
			if (this.#activeSliderIndex == this.#FIRST_SLIDE) {
				this.#activeSliderIndex = this.#LAST_SLIDE;
				this.#sliderPos = -100 * (this.#LAST_SLIDE - 1);
				this.#moveSlide(this.#sliderPos);
			} else {
				this.#activeSliderIndex -= 1;
				this.#sliderPos += 100;
				this.#moveSlide(this.#sliderPos);
			}
		});

		this.#right_btn.addEventListener("click", () => {
			if (this.#activeSliderIndex == this.#LAST_SLIDE) {
				this.#activeSliderIndex = this.#FIRST_SLIDE;
				this.#sliderPos = 0;
				this.#moveSlide(this.#sliderPos);
			} else {
				this.#activeSliderIndex += 1;
				this.#sliderPos -= 100;
				this.#moveSlide(this.#sliderPos);
			}
		});
	}
	#moveSlide(X) {
		this.#slider.style.transform = "translateX(" + X + "%)";
	}
	showSlide(id) {
		//показать определенный слайд
		if (id >= this.#FIRST_SLIDE && id <= this.#LAST_SLIDE) {
			this.#activeSliderIndex = id;
			this.#sliderPos = -100 * (this.#activeSliderIndex - 1);
			this.#moveSlide(this.#sliderPos);
		}
	}
}
const slider = new Slider("slider1", "slider__slide", "left", "right");


class SpoilerGroup {
	#contentWidth = [];
	#trigger;
	#body;
	#content;
	#accordeonType;
	#style;
	constructor(spoilerTrigger, spoilerBody, spoilerContent, accordeonType, style) {
		this.#trigger = document.querySelectorAll(spoilerTrigger);
		this.#body = document.querySelectorAll(spoilerBody);
		this.#content = spoilerContent;
		this.#accordeonType = accordeonType || "none";
		this.#style = style || "none";
		this.init();
	}
	/*initialize spoilers (give them height, close them, check accordeon type)*/
	init() {
		this.#contentWidth = [];
		this.#trigger.forEach((item, i) => {
			this.#contentWidth.push(this.#body[i].offsetHeight + "px");
			this.#body[i].style.maxHeight = "0"; //comment this if you want spoilers to be opened
			if (this.#accordeonType === "open") {
				this.#body[0].style.maxHeight = this.#contentWidth[0];
			}
			item.addEventListener("click", () => {
				if (!(this.#style === "none")) {
					item.classList.toggle(this.#style);
				}

				if (this.#accordeonType === "open") {
					this.close();
				}
				if (this.#body[i].style.maxHeight === "0px") {
					if (this.#accordeonType === "close") {
						this.close();
					}
					this.#body[i].style.maxHeight = this.#contentWidth[i];
				} else {
					this.#body[i].style.maxHeight = "0";
				}
			});
			window.addEventListener("resize", () => {
				this.recalc();
			})
		});
	}
	/*recalc height of elements*/
	recalc() {
		this.#body.forEach((item, i) => {
			this.#contentWidth[i] = item.querySelector(this.#content).offsetHeight + "px";
		})
	}
	/*close all spoilers*/
	close() {
		this.#body.forEach((item, i) => {
			this.#body[i].style.maxHeight = "0";
		})
	}
}
const mySpoilerGroup = new SpoilerGroup(".spoiler__trigger", ".spoiler__body", ".spoiler__content", "none", "spoiler__arrow-active");