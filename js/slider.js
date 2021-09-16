class Slider {
	#slider;
	#slide;
	#left_btn;
	#right_btn;
	#firstSlide = 1;
	#lastSlide;
	#sliderPos = 0;
	#activeSliderIndex = 1;
	constructor(slider_id, slide_class, left_btn_id, right_btn_id) {
		this.#slider = document.getElementById(slider_id);
		this.#slide = document.getElementsByClassName(slide_class);
		this.#left_btn = document.getElementById(left_btn_id);
		this.#right_btn = document.getElementById(right_btn_id);
		this.#lastSlide = this.#slide.length;
		this.#slider.style.transform = "translateX(0%)";
		this.#left_btn.addEventListener("click", () => {
			if (this.#activeSliderIndex == this.#firstSlide) {
				this.#activeSliderIndex = this.#lastSlide;
				this.#sliderPos = -100 * (this.#lastSlide - 1);
				this.#moveSlide(this.#sliderPos);
			} else {
				this.#activeSliderIndex -= 1;
				this.#sliderPos += 100;
				this.#moveSlide(this.#sliderPos);
			}
		});

		this.#right_btn.addEventListener("click", () => {
			if (this.#activeSliderIndex == this.#lastSlide) {
				this.#activeSliderIndex = this.#firstSlide;
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
}
const slider = new Slider("slider1", "slider__slide", "left", "right");