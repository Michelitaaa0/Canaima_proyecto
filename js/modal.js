
let infoLugares = {
    salto: {
        img: "img/salto.jpg",
        texto: "Salto Ángel — La cascada más alta del mundo, con una impresionante caída de 979 metros. Se llega por río y selva, y es uno de los paisajes más emblemáticos de Venezuela."
    },
    laguna: {
        img: "img/laguna.jpg",
        texto: "Laguna de Canaima — Un extenso lago de aguas rojizas debido a los minerales naturales, rodeado de playas y saltos."
    },
    tepuy: {
        img: "img/tepuyes.jpg",
        texto: "Tepuyes — Montañas formadas hace millones de años, que crean uno de los paisajes más misteriosos y espectaculares de Canaima."
    },
    kavak: {
        img: "img/kavak.jpg",
        texto: "Kavak — Una hermosa cascada con piscinas naturales de aguas cristalinas, rodeada de vegetación exuberante. Ideal para refrescarse y relajarse en plena selva."
    }
};


function openModal(lugar) {
    document.getElementById("modal-img").src = infoLugares[lugar].img;
    document.getElementById("modal-caption").innerHTML = infoLugares[lugar].texto;

    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}