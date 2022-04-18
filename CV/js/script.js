function openMenu() {
	menu.classList.toggle('open');
	button.classList.toggle('active');
}

	hljs.initHighlightingOnLoad();
	let menu = document.querySelector(".nav-list");
	let button = document.querySelector(".hamburger");
	button.addEventListener("click", openMenu, false);

