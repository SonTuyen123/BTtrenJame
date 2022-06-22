draw(){
    let canvas = document.createElement('myCanvas');
    let ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.arc(100, 100, 0,Math.PI * 2);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
}
moveTop(){
    this.y -= 2;
}