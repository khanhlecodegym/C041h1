const { body } = document;
const HEARTS_COUNT = 20;
const COLORS = ["#0388fc", "#ffef14", "#24ff86"]

for(let i = 0; i < HEARTS_COUNT; i++) {
    const heartEl = document.createElement("div");
    heartEl.classList.add("heart");

    heartEl.style.left = Math.random() * 100 + "%";
    heartEl.style.animationDelay = Math.random()*2 + "s";
    heartEl.style.background = randomColor();

    body.appendChild(heartEl);
}

function randomColor() {
    return COLORS[Math.floor(Math.random() * COLORS.length)];
}