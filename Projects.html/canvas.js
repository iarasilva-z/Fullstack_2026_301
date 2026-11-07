function desenhar_quadrado(ctx, x, y, largura, altura, cor) {
    ctx.fillStyle = cor;
    ctx.fillRect(x, y, largura, altura);
}

function desenhar_linha(ctx, x1, y1, x2, y2, cor, largura = 1) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = cor;
    ctx.lineWidth = largura;
    ctx.stroke();
}

function desenhar_arco(ctx, x, y, raio, anguloInicial, anguloFinal, cor, preencher = false) {
    ctx.beginPath();
    ctx.arc(x, y, raio, anguloInicial, anguloFinal);

    if (preencher) {
        ctx.fillStyle = cor;
        ctx.fill();
    } else {
        ctx.strokeStyle = cor;
        ctx.lineWidth = 1.2;
        ctx.stroke();
    }
}

function escrever(ctx, texto, x, y, cor, fonte) {
    ctx.fillStyle = cor;
    ctx.font = fonte;
    ctx.textAlign = "center";
    ctx.fillText(texto, x, y);
}

const quadra = document.getElementById("quadra");
const ctx1 = quadra.getContext("2d");

desenhar_quadrado(ctx1, 0, 0, 300, 300, "white");

desenhar_quadrado(ctx1, 0, 0, 50, 50, "blue");
desenhar_quadrado(ctx1, 250, 0, 50, 50, "red");

escrever(ctx1, "Canvas", 150, 47, "#444444", "20px Arial");

desenhar_linha(ctx1, 50, 50, 150, 150, "blue", 1.5);
desenhar_linha(ctx1, 250, 50, 150, 150, "red", 1.5);

desenhar_arco(ctx1, 150, 150, 60, Math.PI, 2 * Math.PI, "#4caf50");
desenhar_arco(ctx1, 150, 150, 78, Math.PI, 2 * Math.PI, "#4caf50");

desenhar_arco(ctx1, 150, 116, 15, 0, 2 * Math.PI, "cyan", true);
desenhar_arco(ctx1, 150, 116, 15, 0, 2 * Math.PI, "blue");

desenhar_quadrado(ctx1, 0, 120, 30, 30, "cyan");
desenhar_quadrado(ctx1, 270, 135, 30, 15, "cyan");

desenhar_linha(ctx1, 0, 150, 300, 150, "#4caf50", 1.5);

desenhar_quadrado(ctx1, 120, 150, 30, 30, "red");

desenhar_linha(ctx1, 150, 180, 150, 300, "gray", 1.5);

desenhar_arco(ctx1, 70, 205, 12, 0, 2 * Math.PI, "yellow", true);
desenhar_arco(ctx1, 230, 205, 12, 0, 2 * Math.PI, "yellow", true);

desenhar_arco(ctx1, 70, 205, 12, 0, 2 * Math.PI, "#4caf50");
desenhar_arco(ctx1, 230, 205, 12, 0, 2 * Math.PI, "#4caf50");

desenhar_arco(ctx1, 150, 300, 70, Math.PI, 2 * Math.PI, "#4caf50");
desenhar_arco(ctx1, 150, 300, 55, Math.PI, 2 * Math.PI, "#4caf50");

desenhar_arco(ctx1, 150, 300, 35, Math.PI, 2 * Math.PI, "cyan", true);

desenhar_quadrado(ctx1, 0, 240, 30, 60, "yellow");
desenhar_quadrado(ctx1, 0, 270, 60, 30, "yellow");

desenhar_quadrado(ctx1, 270, 240, 30, 60, "black");
desenhar_quadrado(ctx1, 240, 270, 60, 30, "black");

const paisagem = document.getElementById("paisagem");
const ctx2 = paisagem.getContext("2d");

desenhar_quadrado(ctx2, 0, 0, 300, 300, "#8df5d2");

desenhar_arco(ctx2, 225, 75, 38, 0, 2 * Math.PI, "#ffff00", true);

desenhar_quadrado(ctx2, 0, 225, 300, 75, "gray");

ctx2.beginPath();
ctx2.moveTo(0, 188);
ctx2.arc(0, 225, 37, -Math.PI / 2, Math.PI / 2);
ctx2.lineTo(112, 262);
ctx2.arc(112, 300, 38, -Math.PI / 2, 0);
ctx2.lineTo(0, 300);
ctx2.closePath();
ctx2.fillStyle = "#4285f4";
ctx2.fill();

desenhar_quadrado(ctx2, 112, 150, 76, 75, "#85451c");

ctx2.beginPath();
ctx2.moveTo(112, 150);
ctx2.lineTo(150, 112);
ctx2.lineTo(188, 150);
ctx2.closePath();
ctx2.fillStyle = "#f56850";
ctx2.fill();

desenhar_quadrado(ctx2, 112, 150, 76, 15, "#85451c");

desenhar_quadrado(ctx2, 143, 165, 15, 60, "#654321");

desenhar_quadrado(ctx2, 120, 165, 22, 23, "#40bdf2");
desenhar_quadrado(ctx2, 158, 165, 22, 23, "#40bdf2");

desenhar_quadrado(ctx2, 38, 195, 15, 30, "#85451c");
desenhar_quadrado(ctx2, 262, 210, 15, 40, "#85451c");

desenhar_arco(ctx2, 45, 173, 23, 0, 2 * Math.PI, "#288b28", true);
desenhar_arco(ctx2, 270, 210, 23, 0, 2 * Math.PI, "#288b28", true);