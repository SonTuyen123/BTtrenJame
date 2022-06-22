class Mobile{
    battery;
    draft;
    inbox;
    sent;
    constructor(battery, draft, inbox, sent) {
        this.battery = battery;
        this.draft = draft;
        this.inbox = inbox;
        this.sent = sent;
    }
    changeBattery() {
        if(this.battery < 100){
            console.log('Xạc Pin' + this.battery++);
        }else {
            console.log(this.battery--)
        }
    }
    massagergo() {
        console.log('massager đã gửi !');
    }
    writemessager(){
        console.log("This is a messenger");
    }
    tunrnOn(){
        console.log('dien thoai dang bat');
    }
    tunrnOff(){
        console.log('dien thoai dang tat')
    }

}