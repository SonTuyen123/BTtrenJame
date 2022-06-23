class SwitchButton {
    status;
    lamp;

    constructor(status, lamp) {
        this._status = status;
        this._lamp = lamp;
    }

    connectToLamp(ElectricLamp) {
        return this._lamp = ElectricLamp;

    }

    get status() {
        return this._status;
    }

    set status(value) {
        this._status = value;
    }

    get lamp() {
        return this._lamp;
    }

    set lamp(value) {
        this._lamp = value;
    }

    SwitchOn() {
        this.status = true;
        return this._status = true;
    }

    SwitchOff() {

        this.status = false;
        return this._status = false;
    }
}

class ElectricLamp {
    status;

    constructor(status) {
        this.status = status;
    }

    getStatus() {
        return this.status;
    }

}

let lamp = new ElectricLamp(false);
let BtnSwitch = new SwitchButton(false);
BtnSwitch.connectToLamp();
for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        BtnSwitch.SwitchOn()
        console.log('Công tác bật');
        lamp.getStatus(true);
        console.log('Đèn sáng')
    } else {
        BtnSwitch.SwitchOff()
        console.log('Công tác đóng');
        lamp.getStatus(false);
        console.log('Đèn tắt')
    }
}