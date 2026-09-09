const html = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
const themeLabel = document.getElementById("themeLabel");
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const backdrop = document.getElementById("mobileMenuBackdrop");
const openIcon = document.getElementById("menuOpenIcon");
const closeIcon = document.getElementById("menuCloseIcon");

function updateThemeLabel() {
	if (themeLabel) themeLabel.textContent = html.dataset.theme === "dark" ? "$ theme --light" : "$ theme --dark";
}

themeToggle?.addEventListener("click", () => {
	const nextTheme = html.dataset.theme === "dark" ? "light" : "dark";
	html.dataset.theme = nextTheme;
	html.classList.toggle("dark", nextTheme === "dark");
	localStorage.setItem("theme", nextTheme);
	updateThemeLabel();
});

function setMenuOpen(isOpen) {
	menuToggle?.setAttribute("aria-expanded", String(isOpen));
	menuToggle?.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
	mobileMenu?.classList.toggle("hidden", !isOpen);
	backdrop?.classList.toggle("hidden", !isOpen);
	openIcon?.classList.toggle("hidden", isOpen);
	closeIcon?.classList.toggle("hidden", !isOpen);
	document.body.classList.toggle("overflow-hidden", isOpen);
}

menuToggle?.addEventListener("click", () => setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true"));
backdrop?.addEventListener("click", () => setMenuOpen(false));
updateThemeLabel();
