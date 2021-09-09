class BurgerGroup {
	#contentWidth = 100 + "vh";
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
				}
				if (!(item.classList.contains("active"))) {
					document.getElementById("body").style.overflow = "auto"
				}
				if (this.#body[i].style.height === "0px") {
					this.#body[i].style.height = this.#contentWidth;
				} else {
					this.#body[i].style.height = "0";
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
	/*close all Burgers*/
	close() {
		this.#body.forEach((item, i) => {
			this.#body[i].style.maxHeight = "0";
		})
	}
}
const myBurgerGroup = new BurgerGroup(".burger__trigger", ".burger__body", ".burger__content", "active")