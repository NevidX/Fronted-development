
const spoilerTrigger = document.querySelectorAll(".spoiler__trigger");
const spoilerBody = document.querySelectorAll(".spoiler__body");
const content = document.querySelectorAll(".spoiler__content");
const spoilerStyle = "spoiler__arrow-active" || "none";
const spoilerContentWidth = [];


spoilerTrigger.forEach((item, i) => {
	spoilerContentWidth.push(spoilerBody[i].offsetHeight + "px");
	spoilerBody.forEach((item, i) => {
		spoilerBody[i].style.maxHeight = "0";
	})
	item.addEventListener("click", () => {
		if (!(spoilerStyle === "none")) {
			item.classList.toggle(spoilerStyle);
		}

		if (spoilerBody[i].style.maxHeight === "0px") {
			spoilerBody[i].style.maxHeight = spoilerContentWidth[i];
		} else {
			spoilerBody[i].style.maxHeight = "0px";
		}
	});
	window.addEventListener("resize", () => {
		spoilerBody.forEach((item, i) => {
			spoilerContentWidth[i] = item.querySelector(content).offsetHeight + "px";
		})
	})
});