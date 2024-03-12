const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const roses = [];
const numRoses = 100;

// Tạo một hình ảnh hoa hồng
const roseImage = new Image();
roseImage.src = 'rose.png'; // Thay đổi đường dẫn đến tệp ảnh hoa hồng của bạn

class Rose {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.width = 50; // Chiều rộng của hoa hồng
        this.height = 50; // Chiều cao của hoa hồng
        this.speed = Math.random() * 2 + 1;
    }

    update() {
        this.y += this.speed;
        if (this.y > canvas.height + this.height) {
            this.y = -this.height;
            this.x = Math.random() * canvas.width;
        }
    }

    draw() {
        ctx.drawImage(roseImage, this.x, this.y, this.width, this.height);
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const rose of roses) {
        rose.update();
        rose.draw();
    }
    requestAnimationFrame(draw);
}

function init() {
    for (let i = 0; i < numRoses; i++) {
        roses.push(new Rose());
    }
    draw();
}

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
});

roseImage.onload = init; // Khởi tạo sau khi hình ảnh đã được tải
