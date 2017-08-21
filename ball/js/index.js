
const box = document.querySelector('#box');
var balls = [];
var timer = null;
var getRandomColor = () => {
  return '#'+('00000'+(Math.random()*0x1000000<<0).toString(16)).substr(-6); 
}
function randomNum(m, n) {  
    return Math.floor(Math.random() * (n - m + 1) + m);  
}

function creatBall() {
	for (var i = 0; i < 20; i++) {
		var ball = document.createElement("p");
		ball.top = randomNum(0, document.documentElement.clientHeight);
		ball.left = randomNum(0, document.documentElement.clientWidth);
		ball.speed = randomNum(1, 10);
		ball.style.height = ball.style.width = randomNum(10, 99) + 'px';
		ball.style.backgroundColor = getRandomColor();
		if (Math.random() - 0.5 > 0) {
			ball.down = true;
		} else {
			ball.down = false;
		}
		if (Math.random() - 0.5 > 0) {
			ball.lll = true;
		} else {
			ball.lll = false;
		}
		box.appendChild(ball);
		balls.push(ball);


	}
}
creatBall();

function move(obj) {
	timer = setInterval(() => {

	box.width = document.documentElement.clientWidth;
	box.heitht = document.documentElement.clientHeight;
	obj.style.left = obj.left + 'px';
	obj.style.top = obj.top + 'px';
	if (obj.down) {
		//向下
		obj.top += obj.speed;

		if (obj.top >= box.heitht - obj.offsetHeight) {
			obj.style.backgroundColor = getRandomColor();
			obj.down = false;

		} 
	} else {
			//向上
			obj.top -= obj.speed;
			if (obj.top <= 0) {
				obj.style.backgroundColor = getRandomColor();
				obj.top = 0;
				obj.down = true;
			}
		}	
	if (obj.lll) {
		//向右
		obj.left += obj.speed;
		if (obj.left >= box.width - obj.offsetWidth) {
			obj.style.backgroundColor = getRandomColor();
			obj.left = box.width - obj.offsetWidth;
			obj.lll = false;
		}
	} else {
		//向左
		obj.left -= obj.speed;
		if (obj.left <= 0) {
			obj.style.backgroundColor = getRandomColor();
			obj.left = 0;
			obj.lll = true;
		}
		
	}

	}, 15)

}


for (let i = 0; i < balls.length; i++) {
	move(balls[i]);
}