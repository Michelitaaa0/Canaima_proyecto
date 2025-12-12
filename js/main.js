/* ===========================
   MENÚ RESPONSIVE
=========================== */

function openMenu() {
    document.querySelector(".menu-items").style.left = "0";
}

function closeMenu() {
    document.querySelector(".menu-items").style.left = "-100%";
}


   //OPACIDAD DEL MENÚ AL HACER SCROLL//


window.onscroll = function () {
    let scroll = window.scrollY;
    let menu = document.getElementById("menu");

    if (scroll > 50) {
        menu.style.backgroundColor = "rgba(0,0,0,0.6)";
    } else {
        menu.style.backgroundColor = "transparent";
    }
};
document.getElementById("modal").addEventListener("click", function(e) {
    if (e.target === this) {
        closeModal();
    }
});