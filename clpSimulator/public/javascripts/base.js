var inputs = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var buttons = []
var outputs = [0, 0, 0, 0, 0, 0, 0];
let x = 0;
let y = 0;


for (i = 0; i < inputs.length; i++) {
    var undois = { x: 57 + i * 29, y: 69, largura: 21, comp: 30, id: "in" + i }
    buttons.push(undois)
}



var canvas = document.getElementById('canvaClp');
//clicado
canvas.addEventListener('click', e => {
    x = e.offsetX;
    y = e.offsetY;
    for (i = 0; i < buttons.length; i++) {
        if (x >= buttons[i].x && x <= buttons[i].largura + buttons[i].x && y >= buttons[i].y && y <= buttons[i].y + buttons[i].comp) {
            console.log(buttons[i].id);
            if (inputs[i] == 0) {
                inputs[i] = 1;
            } else {
                inputs[i] = 0;
            }
        }
    }
})

draw()
function draw() {

    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, 500, 500);
        desenhaClp(50, 100)


        desenhaEntradas();
        desenhaSaidas();

        function desenhaEntradas() {
            for (i = 0; i < inputs.length; i++) {
                if (inputs[i] == 0) {
                    desenhaCirculo(68 + i * 29, 80, 10, '#808080');
                } else {
                    desenhaCirculo(68 + i * 29, 80, 10, '#0077aa');
                }
                ctx.fillStyle = "#a6a6a6";
                ctx.fillRect(67 + i * 29, 91, 2, 9);
            }
        }
        function desenhaSaidas() {
            for (i = 0; i < outputs.length; i++) {
                if (outputs[i] == 0) {
                    desenhaCirculo(126 + i * 29, 370, 10, '#808080');
                } else {
                    desenhaCirculo(126 + i * 29, 370, 10, '#0077aa');
                }
                ctx.fillStyle = "#a6a6a6";
                ctx.fillRect(125 + i * 29, 350, 2, 9);
            }
        }

        function desenhaCirculo(x, y, raio, cor) {
            ctx.fillStyle = '#0077aa';
            ctx.beginPath();
            ctx.fillStyle = cor;
            ctx.strokeStyle = cor;
            ctx.lineWidth = 2;
            ctx.arc(x, y, raio, 0, 2 * Math.PI, false);
            ctx.fill();
            ctx.stroke();
        }
        function desenhaClp(x, y) {
            ctx.fillStyle = "#a6a6a6";
            let alturaClp = 250;
            ctx.fillRect(x, y, 265, alturaClp);
            ctx.font = "16px Arial";
            ctx.fillStyle = "#ffffff";
            let afastamentoLetra = 30;
            //entradas
            ctx.fillText("13", (x + 5 + (0 * afastamentoLetra)), y + 20);
            ctx.fillText("A0", (x + 5 + (1 * afastamentoLetra)), y + 20);
            ctx.fillText("A1", (x + 5 + (2 * afastamentoLetra)), y + 20);
            ctx.fillText("A2", (x + 5 + (3 * afastamentoLetra)), y + 20);
            ctx.fillText("A3", (x + 5 + (4 * afastamentoLetra)), y + 20);
            ctx.fillText("A6", (x + 5 + (5 * afastamentoLetra)), y + 20);
            ctx.fillText("A7", (x + 5 + (6 * afastamentoLetra)), y + 20);
            ctx.fillText("2 ", (x + 5 + (7 * afastamentoLetra)), y + 20);
            ctx.fillText("3 ", (x + 5 + (8 * afastamentoLetra)), y + 20);
            //saidas
            ctx.fillText(" +", (x + 5 + (0 * afastamentoLetra)), y + alturaClp - 10);
            ctx.fillText(" -", (x + 5 + (1 * afastamentoLetra)), y + alturaClp - 10);
            ctx.fillText("11", (x + 5 + (2 * afastamentoLetra)), y + alturaClp - 10);
            ctx.fillText("12", (x + 5 + (3 * afastamentoLetra)), y + alturaClp - 10);
            ctx.fillText("9 ", (x + 5 + (4 * afastamentoLetra)), y + alturaClp - 10);
            ctx.fillText("8 ", (x + 5 + (5 * afastamentoLetra)), y + alturaClp - 10);
            ctx.fillText("7 ", (x + 5 + (6 * afastamentoLetra)), y + alturaClp - 10);
            ctx.fillText("6 ", (x + 5 + (7 * afastamentoLetra)), y + alturaClp - 10);
            ctx.fillText("5 ", (x + 5 + (8 * afastamentoLetra)), y + alturaClp - 10);
        }
    }
}
setInterval(loop, 100);
//var lastStateA1 = 0
declaraVarr()
function declaraVarr() {
    eval("window.lastState10 = 0;window.state10 = 0;window.lastStateM10 = 0;window.stateM10 = 0;window.lastStateA1 = 0;window.stateA1 = 0;window.lastStateA2 = 0;window.stateA2 = 0;window.lastStateA3 = 0;window.stateA3 = 0;");
}

//var lastStateA1
var stateT0
function loop() {
    var millis = new Date().getTime(); var state11 = 0;
    var state9 = 0;
    var stateA1 = inputs[2];
    var stateA0 = inputs[1];
    var state13 = inputs[0];
    var stateA2 = inputs[3];
    var stateA3 = inputs[4];
    var pulseInA1 = 0;
    var pulseInA2 = 0;
    var pulseInA3 = 0;
    var tempoT0 = false;
    if (lastStateA1 != stateA1) {
        if (stateA1) {
            pulseInA1 = 1;
        }
    }
    if (lastStateA2 != stateA2) {
        if (stateA2) {
            pulseInA2 = 1;
        }
    }
    if (lastStateA3 != stateA3) {
        if (stateA3) {
            pulseInA3 = 1;
        }
    }
    if (pulseInA1 && !stateA0 && !state13) {
        state11 = 1;
    } if (outputs[0] && !stateA0 && !state13) {
        state11 = 1;
    } if (pulseInA2) {
        state10 = 1;
    } if (pulseInA3) {
        stateM10 = 0;
    } if (outputs[1]) {
        tempoT0 = 1;
    } else {
        tempocontT0 = millis + 1000;
    }
    if (stateT0) {
        state9 = 1;
    } if (state11) {
        outputs[0] = 1;
    } else {
        outputs[0] = 0;
    } if (state9) {
        outputs[2] = 1;
    } else {
        outputs[2] = 0;
    } if (state10) {
        outputs[1] = 1;
    } else {
        outputs[1] = 0;
    }
    lastStateA1 = stateA1;
    lastStateA2 = stateA2;
    lastStateA3 = stateA3;
    if (tempoT0) {
        if (tempocontT0 < millis) {
            stateT0 = 1;
        } else {
            stateT0 = 0;
        }
    } else {
        stateT0 = 0;
        stateT0 = 0;
    }

    draw()

}