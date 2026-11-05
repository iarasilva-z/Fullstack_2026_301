const canvas = document.getElementById("meuCanvas");
const ctx = canvas.getContext("2d");

const img = new Image();
img.src = "imagens/eu.png";

const imgLargura = 40;
const imgAltura = 40;

let posX = canvas.width / 2;
let posY = canvas.height / 2;

function desenhar() {
    ctx.fillStyle = "#eeeff1";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    let x = posX - imgLargura / 2;
    let y = posY - imgAltura / 2;

    if (x < 0) x = 0;
    if (y < 0) y = 0;
    if (x + imgLargura > canvas.width) x = canvas.width - imgLargura;
    if (y + imgAltura > canvas.height) y = canvas.height - imgAltura;

    if (img.complete) {
        ctx.drawImage(img, x, y, imgLargura, imgAltura);
    }

    requestAnimationFrame(desenhar);
}

canvas.addEventListener("mousemove", function (event) {
    const rect = canvas.getBoundingClientRect();
    posX = event.clientX - rect.left;
    posY = event.clientY - rect.top;
});

img.onload = function () {
    desenhar();
};

desenhar();