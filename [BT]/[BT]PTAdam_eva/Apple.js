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
    name;
    _gender;
    _weight;

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
    eat(){
        if(Apple.getWeight() > 0){
            Apple.decrease();
            this._weight ++;
        }else{
            alert('táo đã ăn hết');
        }
    }
    say(string){
        console.log(string);
    }
}