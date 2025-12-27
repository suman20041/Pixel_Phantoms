// protocol.js
const canvas = document.getElementById('signalCanvas');
const ctx = canvas.getContext('2d');

let particles = [];
const particleCount = 1000; // Action Plan Item 2

function initCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    particles = [];
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Signal());
    }
}

class Signal {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.speed = Math.random() * 2 + 1;
        this.length = Math.random() * 100 + 50;
        this.opacity = Math.random() * 0.5;
        this.color = Math.random() > 0.5 ? '#00aaff' : '#bc13fe';
    }

    draw() {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.y + this.length);
        ctx.strokeStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.lineWidth = 1;
        ctx.stroke();

        this.y += this.speed;
        if (this.y > canvas.height) {
            this.y = -this.length;
            this.x = Math.random() * canvas.width;
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Add grid lines for "circuit" feel
    ctx.strokeStyle = 'rgba(0, 170, 255, 0.03)';
    for(let i=0; i<canvas.width; i+=50) {
        ctx.beginPath(); ctx.moveTo(i,0); ctx.lineTo(i, canvas.height); ctx.stroke();
    }
    
    particles.forEach(p => p.draw());
    requestAnimationFrame(animate);
}

window.addEventListener('resize', initCanvas);
initCanvas();
animate();

console.log("System Protocol V2: Visual Matrix Synchronized");