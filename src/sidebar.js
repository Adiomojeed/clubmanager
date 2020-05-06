/** @format */


const open = document.querySelector("#open");
const nav = document.getElementById("nav");
const close = document.querySelector("#close");
const siderow = document.querySelector(".siderow");
const navitem = document.querySelector(".nav-list");
const mq = window.matchMedia("(min-width: 992px)");
open.addEventListener("click", function () {
	nav.classList.add("animenav");
	nav.style.display = "block";
	siderow.classList.add("siderownav");
	console.log("success");
});

close.addEventListener("click", function () {
	nav.classList.remove("animenav");
	siderow.classList.remove("siderownav");
	nav.classList.add("closeanime");
	siderow.classList.add("closesiderow");
	setTimeout(() => {
		nav.classList.remove("closeanime");
		siderow.classList.remove("closesiderow");
		nav.style.display = "none";
	}, 500);
});

window.addEventListener("click", function (e) {
	if (e.target === nav) {
		nav.classList.remove("animenav");
		siderow.classList.remove("siderownav");
		nav.classList.add("closeanime");
		siderow.classList.add("closesiderow");
		setTimeout(() => {
			nav.classList.remove("closeanime");
			siderow.classList.remove("closesiderow");
			nav.style.display = "none";
		}, 500);
	}
});

if (mq.matches) {
} else {
	navitem.addEventListener("click", function () {
		nav.classList.remove("animenav");
		siderow.classList.remove("siderownav");
		nav.classList.add("closeanime");
		siderow.classList.add("closesiderow");
		setTimeout(() => {
			nav.classList.remove("closeanime");
			siderow.classList.remove("closesiderow");
			nav.style.display = "none";
		}, 500);
	});
}
