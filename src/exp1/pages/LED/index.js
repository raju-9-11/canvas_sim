var cc = new Circuit("circuit",100, 100);
cc.ctx.lineWidth = 2;
var rd = 878.258


function paint() {
  cc.clear('red');
  cc.ctx.beginPath();
  cc.ctx.strokeStyle = 'black'
  canvas_arrow(cc.ctx, 150, 180, 200, 180);
  cc.ctx.stroke();
  cc.ctx.beginPath();
  cc.ctx.strokeStyle = 'teal'
  canvas_arrow(cc.ctx, 260, 310, 280, 290);
  canvas_arrow(cc.ctx, 260, 290, 280, 270);
  cc.ctx.stroke();
  cc.ctx.font = "11px Monospace";
  cc.ctx.strokeStyle = 'black'
  cc.ctx.fillText("Current",145, 170)
  if(!cc.colour) {
    cc.ctx.fillStyle = "red"
    cc.ctx.beginPath();
    cc.ctx.rect(243,273, 15, 44)
    cc.ctx.fill()
    cc.ctx.strokeStyle = "red"
    cc.ctx.fillStyle = "black"
  }
  cc.ctx.font = "10px Monospace";
  cc.start(100, 200);
  cc.wire();
  cc.resistor(50, 6,"")
  cc.ctx.fillText("Resistor (Rs)",145, 225)
  cc.ctx.moveTo(200, 100);
  cc.wire();
  cc.turnClockwise();
  cc.wire(70);
  cc.diode(50, 5, "Diode (Vd = 2v)")
  cc.wire(70);
  cc.turnClockwise();
  cc.wire(150);
  cc.turnClockwise();
  cc.wire(70);
  cc.power(50, 2, "")
  cc.ctx.fillText("Vs",120,300)
  cc.ctx.fillText("+",80,280)
  cc.ctx.font = "15px Monospace";
  cc.ctx.fillText("-",80,320)
  cc.ctx.font = "10px Monospace";
  cc.finish();
  setTimeout(function () {
    requestAnimationFrame(paint);
  }, 1000);
}

paint();

  
function updateCircuit() {
  var vin = document.querySelector("#volt-in");
  var resistor = document.querySelector("#resistor");
  var ledvolt = document.querySelector("#volt-out");
  var optpow = document.querySelector("#diode-out");
  var currout = vin.value/ resistor.value
  if(resistor.value > 0) {
    var outputCurrent = document.querySelector("#curr-out");
    outputCurrent.value = "Ir: " + currout + " mA";
    ledvolt.value = "Vd:" + (currout)* 64.019 + " V" ;
    var oppower =0.0143087 * currout
    optpow.value = oppower
  }
} 

