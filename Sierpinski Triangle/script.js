let input = document.getElementById("input");
let button = document.getElementById("button");

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let c = 400;
let p1X = c + 400 * Math.cos(-210 / (180 / Math.PI));
let p1Y = c + 400 * Math.sin(-210 / (180 / Math.PI));
let p2X = c + 400 * Math.cos(-90 / (180 / Math.PI));
let p2Y = c + 400 * Math.sin(-90 / (180 / Math.PI));
let p3X = c + 400 * Math.cos(30 / (180 / Math.PI));
let p3Y = c + 400 * Math.sin(30 / (180 / Math.PI));

p1Y += 100;
p2Y += 100;
p3Y += 100;

function f(n, x1, y1, x2, y2, x3, y3) {
    if (n == 0) return;
    
    let point1X = (x1 + x2) / 2;
    let point1Y = (y1 + y2) / 2;
    let point2X = (x2 + x3) / 2;
    let point2Y = (y2 + y3) / 2;
    let point3X = (x3 + x1) / 2;
    let point3Y = (y3 + y1) / 2;

    ctx.beginPath();
    ctx.moveTo(point1X, point1Y);
    ctx.lineTo(point2X, point2Y);
    ctx.lineTo(point3X, point3Y);
    ctx.lineTo(point1X, point1Y);
    ctx.fillStyle = "#111";
    ctx.fill();
    ctx.closePath();

    n -= 1;

    f(n, x1, y1, point1X, point2Y, point3X, point3Y);
    f(n, point1X, point1Y, x2, y2, point2X, point2Y);
    f(n, point3X, point3Y, point2X, point2Y, x3, y3);
}

function draw(n) {
	if (n >= 1 && n <= 6) {
		ctx.clearRect(0, 0, 800, 800);

		ctx.beginPath();
		ctx.moveTo(p1X, p1Y);
		ctx.lineTo(p2X, p2Y);
		ctx.lineTo(p3X, p3Y);
		ctx.lineTo(p1X, p1Y);
		ctx.fillStyle = "#00F";
		ctx.fill();
		ctx.closePath();

		f(n, p1X, p1Y, p2X, p2Y, p3X, p3Y);
	} else {
		alert("Invalid iterations count.");
	}
}

button.onclick = function() {
	let iterations = Number(input.value);

	draw(iterations);
}