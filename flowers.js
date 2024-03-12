const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const flowers = [];
const numFlowers = 100;

class Flower {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 5;
        this.speed = Math.random() * 2 + 1;
        this.color = `hsl(${Math.random() * 360}, 50%, 50%)`;
    }

    update() {
        this.y += this.speed;
        if (this.y > canvas.height + this.size) {
            this.y = -this.size;
            this.x = Math.random() * canvas.width;
        }
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const flower of flowers) {
        flower.update();
        flower.draw();
    }
    requestAnimationFrame(draw);
}

function init() {
    for (let i = 0; i < numFlowers; i++) {
        flowers.push(new Flower());
    }
    draw();
}

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
});

init();
