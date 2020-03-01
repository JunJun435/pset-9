var canvas = document.getElementById("canvas_for_game");
	var ctx = canvas.getContext("2d");
  var paddleHeight = 10;
	var paddleWidth = 75;
	var paddleX = (canvas.width-paddleWidth)/2;
	var rightPressed = false;
	var leftPressed = false;
	var brickRowCount = 4;
	var brickColumnCount = 9;
	var brickWidth = 70;
	var brickHeight = 20;
	var brickPadding = 15;
	var brickOffsetTop = 30;
	var brickOffsetLeft = 30;
	var brickColor = "blue";
	var ballRadius = 10;
	var ballColor = "black"
	var speed = 10;
	var x = canvas.width/2;
	var y = canvas.height-30;
	var dx = 2;
	var dy = -2;
	var px = 7;

	var bricks = [];
	for(c = 0; c < brickColumnCount; c++) {
		bricks[c] = [];
		for(r=0; r<brickRowCount; r++) {
			bricks[c][r] = { x: 0, y: 0, status: 1 };
		}
	}

	var score = 0;
	var scoreFont = "18px Georgia";
	var scoreFillStyle = "black";

	document.addEventListener("keydown", keyDownHandler, false);
	document.addEventListener("keyup", keyUpHandler, false);

	function drawBall() {
		ctx.beginPath();
		ctx.arc(x, y, ballRadius, 0, Math.PI*2);
		ctx.fillStyle = ballColor;
		ctx.fill();
		ctx.closePath();
	}

	function drawPaddle() {
		ctx.beginPath();
		ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
		ctx.fillStyle = "black";
		ctx.fill();
		ctx.closePath();
	}

	
