let car = document.getElementById('car');
let direction = 0;

function main()
{
    switch (direction) {
        case 1:
            car.style.left = parseInt(car.style.left) + 1 + 'px';
            break;
            case 2:
                car.style.left = parseInt(car.style.left) - 1 + 'px';
                break;
        default:
            break;
    }

    window.addEventListener('keydown', moveObject);

    requestAnimationFrame(main);
}

function moveObject(event)
{
    console.log("event", event.keyCode);
    switch (event.keyCode) {
        case 39:
            moveLeft();
            break;
    case 37 :
        moveRight();
        default:
            break;
    }
}

function moveLeft() {
    direction = 1;
}

function moveRight() {
    direction = 2;
}

requestAnimationFrame(main);
