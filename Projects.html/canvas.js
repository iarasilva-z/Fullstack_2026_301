const canvas = document.getElementById("meuCanvas");
const ctx = canvas.getContext("2d");

function desenhar_quadrado(x, y, largura, altura, cor) {
    ctx.fillStyle = cor;
    ctx.fillRect(x, y, largura, altura);
}

function desenhar_linha(x1, y1, x2, y2, cor, larguraLinha = 1) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = cor;
    ctx.lineWidth = larguraLinha;
    ctx.stroke();
}

function desenhar_arco(x, y, raio, anguloInicial, anguloFinal, cor, preencher = false) {
    ctx.beginPath();
    ctx.arc(x, y, raio, anguloInicial, anguloFinal);
    if (preencher) {
        ctx.fillStyle = cor;
        ctx.fill();
    } else {
        ctx.strokeStyle = cor;
        ctx.lineWidth = 1.5;
        ctx.stroke();
    }
}

function escrever(texto, x, y, cor = "#1a1c20", fonte = "16px Poppins") {
    ctx.fillStyle = cor;
    ctx.font = fonte;
    ctx.textAlign = "center";
    ctx.fillText(texto, x, y);
}

let offset = 0;

function desenharCena(deslocamento) {
    desenhar_quadrado(0, 0, 300, 300, "#4fc3f7");
    desenhar_quadrado(0, 220, 300, 80, "#66bb6a");
    desenhar_arco(240, 60, 30, 0, 2 * Math.PI, "#ffeb3b", true);
    desenhar_quadrado(135, 140, 30, 90, "#795548");
    desenhar_arco(150, 130, 55, 0, 2 * Math.PI, "#2e7d32", true);
    desenhar_arco(110 + deslocamento, 100, 6, 0, 2 * Math.PI, "#ab47bc", true);
    desenhar_arco(190 - deslocamento, 120, 6, 0, 2 * Math.PI, "#ab47bc", true);
    desenhar_arco(140 + deslocamento, 80, 5, 0, 2 * Math.PI, "#ab47bc", true);
    escrever("Natureza", 150, 30, "#ffffff", "16px Poppins");
}

function animar() {
    offset = Math.sin(Date.now() / 200) * 4;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    desenharCena(offset);
    requestAnimationFrame(animar);
}

animar();