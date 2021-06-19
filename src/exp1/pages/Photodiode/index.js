
var cc2 = new Circuit("circuitRep", 100, 100);
cc2.ctx.lineWidth = 2;

function paint2 () {

    cc2.clear('teal');
    cc2.ctx.font = "10px Monospace";
    cc2.start(50, 200);
    cc2.wire(50);
    cc2.power(50, 2, "Bias Voltage");
    cc2.wire(250);
    cc2.ctx.arc(400, 200, 3, 0, 2 * Math.PI, true);
    cc2.ctx.moveTo(400, 200);
    cc2.ctx.lineTo(450, 200, 500, 500);
    cc2.ctx.arc(450, 200, 3, 0, 2 * Math.PI, true);
    cc2.turnClockwise();
    cc2.wire(20);
    cc2.resistor(50, 6, "RL");
    cc2.wire();
    cc2.ctx.arc(400, 320, 3, 0, 2 * Math.PI, true);
    cc2.ctx.lineTo(450, 320, 500, 500);
    cc2.ctx.arc(450, 320, 3, 0, 2 * Math.PI, true);
    cc2.turnClockwise();
    cc2.wire(50);
    cc2.turnClockwise();
    cc2.ctx.moveTo(350, 320);
    cc2.ctx.lineTo(350, 370, 500, 500);
    cc2.ctx.lineTo(100, 370, 500, 500);
    cc2.ctx.lineTo(100, 320, 500, 500);
    cc2.ctx.moveTo(150, 370);
    cc2.ctx.lineTo(150, 270, 500, 500);
    cc2.ctx.moveTo(300, 370);
    cc2.ctx.lineTo(300, 270, 500, 500);
    cc2.ctx.moveTo(270, 330);
    cc2.ctx.arc(260, 330, 10, 0, 2 * Math.PI, true);
    cc2.ctx.font = "30px Arial";
    cc2.ctx.fillText("-", 255, 337);
    cc2.ctx.font = "13px Arial";
    cc2.ctx.fillText("Electron", 240, 310);
    cc2.ctx.moveTo(200, 330);
    cc2.ctx.arc(190, 330, 10, 0, 2 * Math.PI, true);
    cc2.ctx.font = "30px Arial";
    cc2.ctx.fillText("+", 181, 340);
    cc2.ctx.font = "13px Arial";
    cc2.ctx.fillText("Hole", 177, 310);
    cc2.ctx.font = "18px Arial";
    cc2.ctx.fillText("i", 220, 295);
    cc2.ctx.font = "15px Arial";
    cc2.ctx.fillText("Photodiode", 185, 260);
    cc2.ctx.font = "15px Arial";
    cc2.ctx.fillText("p", 120, 295);
    cc2.ctx.font = "15px Arial";
    cc2.ctx.fillText("n", 320, 295);
    cc2.ctx.font = "12px Arial";
    cc2.ctx.fillText("Load Resistor", 410, 220);
    cc2.ctx.font = "17px Arial";
    cc2.ctx.fillText("Output", 410, 290);
    canvas_arrow(cc2.ctx, 195, 400, 225, 350);
    cc2.ctx.font = "12px Arial";
    cc2.ctx.fillText("hv", 215, 390);
    cc2.ctx.fillText("Photon", 175, 420); 
    cc2.ctx.fillText("+",140,195)
    cc2.ctx.font = "15px Monospace";
    cc2.ctx.fillText("-",100,195)
    cc2.ctx.font = "10px Monospace";
    canvas_arrow(cc2.ctx, 220, 330, 205, 330);
    canvas_arrow(cc2.ctx, 230, 330, 245, 330);
    canvas_arrow(cc2.ctx, 380, 260, 380, 305);
    cc2.ctx.fillText("Ip", 360, 280);
    cc2.wire(50);
    cc2.turnCounterClockwise();
    cc2.wire(250);
    cc2.turnCounterClockwise();
    cc2.wire(50);
    cc2.turnClockwise();
    cc2.wire();
    cc2.finish();
    setTimeout(function () {
        requestAnimationFrame(paint2);
    }, 1000);
} 

paint2();

  
function updateCircuit() {
  var vin = document.querySelector("#volt-in");
  var resistor = document.querySelector("#resistor");

  if(resistor.value > 0) {
    var outcurr = 0.5847098 * vin.value
    var vs = (outcurr) * resistor.value/100
    document.querySelector("#curr-out").value = outcurr + " mA";
    document.querySelector("#volt-out").value = vs + " V"
  }
  

} 
