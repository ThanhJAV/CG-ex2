let Mobile = function (name) {
    this.battery = 95;
    this.name = name;
    this.inbox = [];
    this.outbox = [];
    this.msg = "";
    this.writeMsg = (value) => {
        this.msg = value;
    };
    this.sendMsg = (mobile) => {
        this.outbox.push(this.msg);
        mobile.receiveMsg(this.msg, this.name);

    };
    this.receiveMsg = (msg, name) => {
        this.inbox.push(msg);
        alert(`${name} sent!`);
    };
    this.get_battery = () => {
        return this.battery;
    };
    this.decrease_battery = () => {
        this.battery--;
    };
    this.setIncreaceBattery = () => {
        return this.battery++;
    };
};
let iphone = new Mobile('iphone');
let nokia = new Mobile('nokia');




function charging(name) {
    for (let i = 0; i <= 100; i++) {
        name.setIncreaceBattery();
        if (name.get_battery() >= 100) {
            alert("pin đầy!");
            display();
            break;
        }
    }
}

display();

function sendMsg(mobile1, mobile2) {
    mobile1.sendMsg(mobile2);
    mobile1.decrease_battery();
    display();
}

function display() {
    document.getElementById("battery").innerHTML = " Battery : " + nokia.get_battery();
    document.getElementById("battery2").innerHTML = " Battery : " + iphone.get_battery();

    document.getElementById("inboxNokia").innerText = nokia.inbox;
    document.getElementById("inboxIphone").innerText = iphone.inbox;
    document.getElementById("outboxNokia").innerText = nokia.outbox;
    document.getElementById("outboxIphone").innerText = iphone.outbox;
    document.getElementById("inputNokia").value = "";
    document.getElementById("inputIphone").value = "";
}