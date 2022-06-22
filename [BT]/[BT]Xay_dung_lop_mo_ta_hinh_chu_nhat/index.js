class Rectangle{
    height;
    width;
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    ChuVi(){
       return  2 *(this.height + this.width);
    }
    DienTich(){
        return (this.height * this.width);
    }

    getheight() {
        return this.height;
    }

    setheight(value) {
        this.height = value;
    }

    getwidth() {
        return this.width;
    }

    setwidth(value) {
        this.width = value;
    }
}