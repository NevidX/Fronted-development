
const spoilerHeader = document.querySelectorAll(".spoiler__header");
const spoilerTrigger = document.querySelectorAll(".spoiler__trigger");
const spoilerBody = document.querySelectorAll(".spoiler__body");
const spoilerActiveTrigger = "spoiler__header-active" || null;
const spoilerBodyStyle = "spoiler__body-active";
const spoilerBodyWidth = "350px";

spoilerHeader.forEach((item, i) => {
	let curentBody = item.nextElementSibling;
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