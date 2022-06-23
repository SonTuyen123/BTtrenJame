let car = new Car(200,400,30,60);
// car.draw();


function clearCanvas(){
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function Play(){
    clearCanvas();
    // car.move();
    car.draw();

}
setInterval(Play,50);
window.addEventListener('keydown', function(event) {
    switch (event.keyCode) {
        case 37:
            car.moveLeft();
            break;
        case 39:
            car.moveRight();
            break;
        case 38:
            car.moveTop();
            break;
        case 40:
            car.moveDown();
            break;
    }
})