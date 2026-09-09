const html = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
const themeLabel = document.getElementById("themeLabel");
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const backdrop = document.getElementById("mobileMenuBackdrop");
const openIcon = document.getElementById("menuOpenIcon");
const closeIcon = document.getElementById("menuCloseIcon");

function updateThemeLabel() {
	if (themeLabel)
		themeLabel.textContent =
			html.dataset.theme === "dark" ? "$ theme --light" : "$ theme --dark";
}

themeToggle?.addEventListener("click", () => {
	const nextTheme = html.dataset.theme === "dark" ? "light" : "dark";
	html.dataset.theme = nextTheme;
	html.classList.toggle("dark", nextTheme === "dark");
	try {
		localStorage.setItem("theme", nextTheme);
	} catch {}
	updateThemeLabel();
});

function setMenuOpen(isOpen) {
	menuToggle?.setAttribute("aria-expanded", String(isOpen));
	menuToggle?.setAttribute(
		"aria-label",
		isOpen ? menuToggle.dataset.labelClose : menuToggle.dataset.labelOpen,
	);
	mobileMenu?.classList.toggle("hidden", !isOpen);
	backdrop?.classList.toggle("hidden", !isOpen);
	openIcon?.classList.toggle("hidden", isOpen);
	closeIcon?.classList.toggle("hidden", !isOpen);
	document.body.classList.toggle("overflow-hidden", isOpen);
	if (isOpen) {
		requestAnimationFrame(() => mobileMenu?.querySelector("a")?.focus());
	} else if (mobileMenu?.contains(document.activeElement)) {
		menuToggle?.focus();
	}
}

menuToggle?.addEventListener("click", () =>
	setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true"),
);
backdrop?.addEventListener("click", () => setMenuOpen(false));
for (const link of mobileMenu?.querySelectorAll("a") ?? []) {
	link.addEventListener("click", () => setMenuOpen(false));
}
document.addEventListener("keydown", (event) => {
	if (
		event.key === "Escape" &&
		menuToggle?.getAttribute("aria-expanded") === "true"
	)
		setMenuOpen(false);
	if (
		event.key !== "Tab" ||
		menuToggle?.getAttribute("aria-expanded") !== "true" ||
		!mobileMenu
	)
		return;
	const focusable = [...mobileMenu.querySelectorAll("a")];
	if (focusable.length === 0) return;
	const first = focusable[0];
	const last = focusable.at(-1);
	if (event.shiftKey && document.activeElement === first) {
		event.preventDefault();
		last?.focus();
	} else if (!event.shiftKey && document.activeElement === last) {
		event.preventDefault();
		first.focus();
	}
});
matchMedia("(min-width: 1024px)").addEventListener("change", (event) => {
	if (event.matches) setMenuOpen(false);
});
updateThemeLabel();
