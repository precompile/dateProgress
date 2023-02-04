const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");
const xenLogoWhite = document.querySelector(".xen-logo-white");
const xenLogoBlack = document.querySelector(".xen-logo-black");
const progressBars = document.querySelectorAll(".progress-bar");

const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

const iconToggle = () => {
	moonIcon.classList.toggle("display-none");
	sunIcon.classList.toggle("display-none");
	xenLogoBlack.classList.toggle("display-none");
	xenLogoWhite.classList.toggle("display-none");
};

const themeCheck = () => {
	if (userTheme === "dark" || (!userTheme && systemTheme)) {
		document.documentElement.classList.add("dark");
		moonIcon.classList.add("display-none");
		xenLogoBlack.classList.add("display-none");
		progressBars.forEach((bar) => bar.classList.add("custom-shadow-dark"));
		return;
	}
	sunIcon.classList.add("display-none");
	xenLogoWhite.classList.add("display-none");
	progressBars.forEach((bar) => bar.classList.add("custom-shadow-white"));
};

const themeSwitch = () => {
	if (document.documentElement.classList.contains("dark")) {
		document.documentElement.classList.remove("dark");
		localStorage.setItem("theme", "light");
		iconToggle();
		progressBars.forEach((bar) => bar.classList.toggle("custom-shadow-dark"));
		progressBars.forEach((bar) => bar.classList.toggle("custom-shadow-white"));
		return;
	}
	document.documentElement.classList.add("dark");
	localStorage.setItem("theme", "dark");
	iconToggle();
	progressBars.forEach((bar) => bar.classList.toggle("custom-shadow-dark"));
	progressBars.forEach((bar) => bar.classList.toggle("custom-shadow-white"));
};

sunIcon.addEventListener("click", () => {
	themeSwitch();
});
moonIcon.addEventListener("click", () => {
	themeSwitch();
});

themeCheck();
