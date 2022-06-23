let battery = new Battery();
battery.setenergy(10);

let flashLamp = new FlashLamp();
flashLamp.setbattery(battery);
document.write("Battery info:" + flashLamp.getbattery() + "<br/>");


document.write("Turn on<br/>")
flashLamp.turnOnn();
flashLamp.light();
document.write("Battery info:" + flashLamp.getbattery() + "<br/>");

document.write("Turn off<br/>")
flashLamp.turnOff();
flashLamp.light();

document.write("Turn on<br/>")
flashLamp.turnOnn();
flashLamp.light();
document.write("Battery info:" + flashLamp.getbattery() + "<br/>");
