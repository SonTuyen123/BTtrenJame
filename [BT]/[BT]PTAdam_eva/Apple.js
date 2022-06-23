class Apple {
    weight;

    constructor(weight) {
        this._weight = weight;
    }

    getWeight() {
        return this._weight;
    }

    setWeight(value) {
        this._weight = value;
    }

    isEmpty() {
        if (this._weight <= 0) {
            return true;
        } else {
            return false;
        }
    }

    decrease() {
        if (this.isEmpty()) {
            console.log('đã hết táo')
        } else {
            this._weight--;
        }
    }
}
class Human {
    constructor(name, gender, weight) {
        this._name = name;
        this._gender = gender;
        this._weight = weight;
    }

    getName() {
        return this._name;
    }

    setName(value) {
        this._name = value;
    }

    getGender() {
        return this._gender;
    }

    setGender(value) {
        this._gender = value;
    }

    getWeight() {
        return this._weight;
    }

    setWeight(value) {
        this._weight = value;
    }

    isMale() {
        if (this._gender === 'male') {
            return true;
        } else if (this._gender === 'female') {
            return false;
        }
        }
    checkApple(){
        return Apple.isEmpty;
    }
    eat(apple){
        if(apple.getWeight() > 0){
            apple.decrease(); //1
            this._weight++; //66
        }else {
            alert("Táo đã hết");
        }
    }
    say(string){
        console.log(string);
    }
    getInfo(human){
        alert(human.name + " " +human.weight + " " +human.getGender());
    }
}