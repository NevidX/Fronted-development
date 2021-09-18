
const spoilerTrigger = document.querySelectorAll(".spoiler__trigger");
const spoilerBody = document.querySelectorAll(".spoiler__body");
const spoilerActiveTrigger = "spoiler__arrow-active" || null;
const spoilerBodyStyle = "spoiler__body-active";
const spoilerBodyWidth = "350px";

spoilerTrigger.forEach((item, i) => {
	let curentBody = (item.parentNode).nextElementSibling;
	curentBody.style.maxHeight = "0";
	item.addEventListener("click", () => {
		if (!(spoilerActiveTrigger === null)) {
			item.classList.toggle(spoilerActiveTrigger);
		}
		if (item.classList.contains(spoilerActiveTrigger)) {
			if ((curentBody.style.maxHeight === "0px")) {
				curentBody.style.maxHeight = spoilerBodyWidth
			}
		} else {
			curentBody.style.maxHeight = "0px"
		}
	});
});