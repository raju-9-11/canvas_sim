var graphRep = document.getElementById("graphRep");
var graphRepContext = graphRep.getContext("2d");


max = 0
xAxisBuffer = [20];
yAxisBuffer = [2];
length = 1;

// Draws Line with Arrow Heads
function canvas_arrow(context, fromx, fromy, tox, toy) {
  var headlen = 10;
  var dx = tox - fromx;
  var dy = toy - fromy;
  var angle = Math.atan2(dy, dx);
  context.moveTo(fromx, fromy);
  context.lineTo(tox, toy);
  context.lineTo(
    tox - headlen * Math.cos(angle - Math.PI / 6),
    toy - headlen * Math.sin(angle - Math.PI / 6)
  );
  context.moveTo(tox, toy);
  context.lineTo(
    tox - headlen * Math.cos(angle + Math.PI / 6),
    toy - headlen * Math.sin(angle + Math.PI / 6)
  );
}

function drawAxis() {
  graphRepContext.beginPath();
  graphRepContext.moveTo(10, 10);
  canvas_arrow(graphRepContext, 100, 550, 100, 100);
  canvas_arrow(graphRepContext, 100, 550, 610, 550);
  canvas_arrow(graphRepContext, 160, 550, 610, 100);
  graphRepContext.stroke();
}

function drawLabels() {
  graphRepContext.beginPath();
  graphRepContext.moveTo(30, 30);
  graphRepContext.font = "15px monospace"
  graphRepContext.fillText("P-I Characteristics of PhotoDiode", 220, 60);
  graphRepContext.font = "10px monospace"
  graphRepContext.fillText("Output Light (mW)", 60, 90);
  graphRepContext.fillText("Forward Current If (mA)", 500, 540);
}

function makePlots(x, y, valueX, valueY) {
  graphRepContext.beginPath();
  graphRepContext.moveTo(x, y);
  graphRepContext.fillText(`( ${valueX} + x, ${valueY} )`, x, y);
  graphRepContext.stroke();
  graphRepContext.closePath();
}
function makeSinglePlotY(x, y, value) {
  graphRepContext.beginPath();
  graphRepContext.moveTo(x, y);
  graphRepContext.fillText(`${value}`, x, y);
  graphRepContext.stroke();
  graphRepContext.closePath();
}

function makeSinglePlotX(x, y, value) {
  graphRepContext.beginPath();
  graphRepContext.moveTo(x, y);
  graphRepContext.fillText(`${value} + x`, x, y);
  graphRepContext.stroke();
  graphRepContext.closePath();
}

function updatePlot() {
  var minLen = 475 / length;
  var len = minLen;
  graphRepContext.beginPath();
  for (var i = 0; i < length - 1; i++) {
    graphRepContext.moveTo(len + 160, 550 - len);
    graphRepContext.arc(len + 160, 550 - len, 2, 0, 2 * Math.PI, true);
    graphRepContext.moveTo(len + 160, 550);
    graphRepContext.arc(len + 160, 550, 2, 0, 2 * Math.PI, true);
    graphRepContext.moveTo(100, 550 - len);
    graphRepContext.arc(100, 550 - len, 2, 0, 2 * Math.PI, true);
    graphRepContext.stroke();
    makePlots(len + 180, 560 - len, xAxisBuffer[i], yAxisBuffer[i]);
    makeSinglePlotX(len + 155, 580, xAxisBuffer[i]);
    makeSinglePlotY(70, 555 - len, yAxisBuffer[i]);
    len = len + minLen;
  }
  if (length <= 15) {
    xAxisBuffer.push(xAxisBuffer[length - 1] + 2);
    yAxisBuffer.push(yAxisBuffer[length - 1] + 2);
  }
}

// Resursive Ploting
function loop() {
  graphRepContext.clearRect(0, 0, graphRep.width, graphRep.height);
  drawAxis();
  drawLabels();
  updatePlot();
  if (length <= max) {
    length += 1;
  }
  setTimeout(function () {
    requestAnimationFrame(loop);
  }, 1000);
}

loop();


function updateGraph() {
  graphRepContext.clearRect(0, 0, graphRep.width, graphRep.height);
  var vin = document.querySelector("#volt-in");
  var resistor = document.querySelector("#resistor");
  var curr = (vin.value/ resistor.value)* 64.019
  max = 5
    // if(resistor.value > 0) {
    //   max = (vin.value - 2) / resistor.value
    // }
  xAxisBuffer = [2];
  yAxisBuffer = [0.2];
  length = 1; 
  
} 
