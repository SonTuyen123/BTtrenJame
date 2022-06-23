class Battery {
    _energy;

    getenergy() {
        return this._energy;
    }

    setenergy(value) {
        this._energy = value;
    }

    decreaseEnergy() {
        if (this._energy > 0) {
            this._energy--;
        }
    }
};

class FlashLamp {
    _battery;
    _status;

    getbattery() {
        return this._battery.getenergy();
    }

    setbattery(value) {
        this._battery = value;
    }

    light() {
        if (this._status) {
            alert("Lighting");
            this._battery.decreaseEnergy();

        } else {
            alert("Not lighting");
        }
    }

    turnOnn() {
        this._status = true;
    }

    turnOff() {
        this._status = false;
    }
};
