let SwitchButton = function (status, lamp) {
    this.status = status;
    this.lamp = lamp;
    this.connectToLamp = (ElectricLamp) => {
        this.lamp = ElectricLamp;
    };
    this.switchOff = () => {
        this.status = this.lamp.turnOff();
    };
    this.switchOn = () => {
        this.status = this.lamp.turnOn();
    };
};
let ElectricLamp = function (status) {
    this.status = status;
    this.turnOff = () => {
        this.status = false;
    };
    this.turnOn = () => {
        this.status = true;
    };
    this.checkLamp = () => {
        if (this.status === true) {
            console.log('Den sang');
        } else {
            console.log('Den tat');
        }
    };
};
let lamp = new ElectricLamp(true);
let button = new SwitchButton(true, ElectricLamp);
button.connectToLamp(lamp);
for (let index = 0; index <= 10; index++) {
    button.switchOff();
    lamp.checkLamp();
    button.switchOn();
    lamp.checkLamp();
}