
const spoilerTrigger = document.querySelectorAll(".spoiler__trigger");
const spoilerBody = document.querySelectorAll(".spoiler__body");
const spoilerStyle = "spoiler__arrow-active" || "none";
const spoilerBodyStyle = "spoiler__body-active";
const spoilerContentWidth = [];
const spoilerBodyWidth = "350px";

spoilerTrigger.forEach((item, i) => {
	spoilerContentWidth.push(spoilerBody[i].offsetHeight + "px");
	let exactBody = (item.parentNode).nextElementSibling;
	exactBody.style.maxHeight = "0";
	item.addEventListener("click", () => {
		console.log(exactBody);
		if (!(spoilerStyle === "none")) {
			item.classList.toggle(spoilerStyle);
		}
		if ((exactBody.style.maxHeight === "0px")) {
			exactBody.style.maxHeight = spoilerBodyWidth
		} else {
			exactBody.style.maxHeight = "0px"
		}


	});
	window.addEventListener("resize", () => {
		resize();
	})
});