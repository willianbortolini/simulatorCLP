var inputs = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var outputs = [0, 1, 0, 0, 1, 1, 0];
var canvas = document.getElementById('canvaClp');
if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    desenhaClp(50, 100)

    for(i=0;i < outputs.length; i++){
        
        
        if(outputs[i] == 0){
            desenhaCirculo(126+i*29,370,10,'#0077aa');
        }else{
            desenhaCirculo(126+i*29,370,10,'#808080');
        }
        ctx.fillStyle = "#a6a6a6";
        ctx.fillRect(125+i*29, 350, 2, 9);
    }
    
    

    function desenhaEntradas() {

    }

    function desenhaCirculo(x,y,raio,cor){
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