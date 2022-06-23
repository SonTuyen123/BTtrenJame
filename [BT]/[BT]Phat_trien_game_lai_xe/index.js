class Car {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.flag = 'TOP';
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
    }

    draw() {
        this.ctx.beginPath();
        //hình chữ nhật
        this.ctx.rect(this.x, this.y, this.width, this.height);
        this.ctx.fill();
        this.ctx.closePath();
        const image = new Image(this.width, this.height);
        image.src = 'IMG/img.png';
        this.ctx.drawImage(image, this.x, this.y);
    }

    move() {
        if (this.y <= this.canvas) {
            this.flag = 'DOWN';
        } else if (this.y >= this.canvas) {
            this.flag = 'TOP';

        }
        switch (this.flag) {
            case 'TOP':
                this.moveTop();
                break;
            case 'DOWN':
                this.moveDown();
                break;
            case 'RIGHT':
                this.moveRight();
                break;
            case 'LEFT':
                this.moveLeft();
                break;
            default:
                this.moveTop();
        }
    }
    moveTop()
    {
        this.y -= 5;
    }
    moveDown()
    {
        this.y += 5;
    }
    moveRight(){
        this.x += 5;
    }
    moveLeft(){
        this.x -= 5;
    }
}



