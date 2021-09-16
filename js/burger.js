class BurgerGroup {
	#contentWidth;
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
	init() {
		this.#contentWidth = 100 + "vh";
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
			})
		});
	}
	close() {
		this.#body.forEach((item, i) => {
			this.#body[i].style.maxHeight = "0";
		})
	}
}
const myBurgerGroup = new BurgerGroup(".burger__trigger", ".burger__body", ".burger__content", "active")