var canvas = documnet.getElementById("bboard");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.rect(40, 80, 100, 100);
ctx.fillStyle = "#FF0000"
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI*2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeSty;e = "#000000"
ctx.stroke();
