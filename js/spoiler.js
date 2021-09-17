
const spoilerTrigger = document.querySelectorAll(".spoiler__trigger");
const spoilerBody = document.querySelectorAll(".spoiler__body");
const spoilerStyle = "spoiler__arrow-active" || "none";
const spoilerBodyStyle = "spoiler__body-active";
const spoilerContentWidth = [];

const spoilerHeader = (document.querySelector(".spoiler__trigger").parentNode).nextElementSibling;
spoilerTrigger.forEach((item) => {
	console.log((item.parentNode).nextElementSibling);
})

spoilerTrigger.forEach((item, i) => {
	spoilerContentWidth.push(spoilerBody[i].offsetHeight + "px");

	item.addEventListener("click", () => {
		let exactBody = (item.parentNode).nextElementSibling;
		console.log(exactBody);
		if (!(spoilerStyle === "none")) {
			item.classList.toggle(spoilerStyle);
		}
		if (!(exactBody.style.maxHeight === "0")) {
			console.log(exactBody.style.maxHeight);
			exactBody.style.maxHeight = "100%"
		} else {
			exactBody.style.maxHeight = "0"
		}


	});
	window.addEventListener("resize", () => {
		resize();
	})
});
function resize() {
	spoilerBody.forEach((item, i) => {
		spoilerContentWidth[i] = item.querySelector(".spoiler__content").offsetHeight + "px";
	})
}
function close() {
	spoilerBody.forEach((item, i) => {
		spoilerBody[i].style.maxHeight = "0";
	})
}