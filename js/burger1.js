
// #contentWidth;
// #trigger;
// #body;
// #style;
const trigger = document.querySelectorAll(".burger__trigger");
const body = document.querySelectorAll(".burger__body");
const style = "active";
init();
init() {
	const contentWidth = 100 + "vh";
	trigger.forEach((item, i) => {
		body[i].style.height = "0";
		item.addEventListener("click", () => {
			if (!(style === "none")) {
				item.classList.toggle(style);
			}
			if ((item.classList.contains("active"))) {
				document.getElementById("body").style.overflow = "hidden"
			} else {
				document.getElementById("body").style.overflowY = "scroll"
			}
			if (body[i].style.height === "0px") {
				body[i].style.height = contentWidth;
			} else {
				body[i].style.height = "0";
			}
		});
		window.addEventListener("resize", () => {
			let pageWidth = document.documentElement.scrollWidth;
			if (pageWidth >= 1000) {
				body[i].style.height = "0";
				item.classList.remove("active")
			}
			if (!(item.classList.contains("active"))) {
				document.getElementById("body").style.overflowY = "scroll"
			}
		})
	});
}
close() {
	body.forEach((item, i) => {
		body[i].style.maxHeight = "0";
	})
}

