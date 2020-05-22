let mycanvas = document.getElementById("mycanvas");
let ctx = mycanvas.getContext("2d");
let tank = document.getElementById("tank");
// ctx.fillStyle = "pink";
// ctx.arc(60, 60, 30, 0, 2 * Math.PI);
// ctx.fill();

// let area = (Math.PI * 30 * 30).toFixed(2);
// ctx.fillStyle = "blue";
// ctx.fillText(`Dien Tich: ${area}`, 510, 20);

function Circle(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;

  this.speedX = 2;
}

function Tank(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;

  // this.speedX = 2;
}

let cir1 = new Circle(50, 50, 30, "green");
let tankObj = new Tank(280, 360, 40, 40);
let shoot = '';

function drawCircle() {
  ctx.beginPath();
  ctx.fillStyle = cir1.color;
  ctx.arc(cir1.x, cir1.y, cir1.radius, 0, 2 * Math.PI);
  ctx.fill();
}

function drawTank() {
  ctx.drawImage(tank, tankObj.x, tankObj.y, tankObj.width, tankObj.height);
}

function drawShoot() {
    if(shoot == '') return;
    ctx.fillRect(shoot.x, shoot.y, shoot.width, shoot.height);
    shoot.y -= 2;
  }

function update() {
  // console.log(mycanvas.width);
  ctx.clearRect(0, 0, 600, 400);
  ctx.fillStyle = "white";
  cir1.x += cir1.speedX;
  drawCircle();

  if (cir1.x + cir1.radius > mycanvas.width || cir1.x - cir1.radius < 0) {
    cir1.speedX *= -1;
  }

  drawTank();
  console.log(shoot)
  drawShoot();

  requestAnimationFrame(update);
}

function moveRight() {
  tankObj.x += 2;
}

function moveLeft() {
  tankObj.x -= 2;
}

function shootCircle() {
    shoot = new Tank(tankObj.x + 15, tankObj.y - 10, 10, 10)
}

function keyDown(e) {
  console.log("keyDown -> e", e)
  switch (e.key) {
    case "ArrowRight":
      moveRight();
      break;
    case "ArrowLeft":
        moveLeft();
      break;
      case " ":
        shootCircle();
      break;
  }
}

document.addEventListener("keydown", keyDown);

update();
