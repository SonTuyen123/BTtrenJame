class Rectangle{
    height;
    width;
    constructor(height, width) {
        this._height = height;
        this._width = width;
    }
    ChuVi(){
       return  2 *(this._height + this._width);
    }
    DienTich(){
        return (this._height * this._width);
    }

    getheight() {
        return this._height;
    }

    setheight(value) {
        this._height = value;
    }

    getwidth() {
        return this._width;
    }

    setwidth(value) {
        this._width = value;
    }
}