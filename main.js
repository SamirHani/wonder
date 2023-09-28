let megaMenu = document.querySelector(".mega-menu");
let megaLink = document.querySelector(".mega");

function opacity() {
 megaMenu.style.opacity = "1";
 megaMenu.style.zIndex = "100";
 megaMenu.style.top="calc(100% + 1px)";
 megaMenu.style.transition="top var(--transition-dur) , opacity var(--transition-dur)";
}
console.log("hello world");

