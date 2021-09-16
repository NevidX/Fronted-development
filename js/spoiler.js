
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
	init() {
		this.#contentWidth = [];
		this.#trigger.forEach((item, i) => {
			this.#contentWidth.push(this.#body[i].offsetHeight + "px");
			this.#body[i].style.maxHeight = "0";
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
				this.resize();
			})
		});
	}
	resize() {
		this.#body.forEach((item, i) => {
			this.#contentWidth[i] = item.querySelector(this.#content).offsetHeight + "px";
		})
	}

	close() {
		this.#body.forEach((item, i) => {
			this.#body[i].style.maxHeight = "0";
		})
	}
}
const mySpoilerGroup = new SpoilerGroup(".spoiler__trigger", ".spoiler__body", ".spoiler__content", "none", "spoiler__arrow-active");