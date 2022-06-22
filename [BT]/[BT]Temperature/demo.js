class Temperature{
    value;
    constructor(value) {
        this.value = value;
    }
    chuyenCsangF(){
       return this.value * 1.8 + 32;
    }
    chuyenCsangK(){
        return this.value + 273.15;
    }
}