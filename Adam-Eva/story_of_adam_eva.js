let Apple = function (weight) {
    this.weight = weight;
    this.getWeight = () => {
        return this.weight;
    };
    this.setWeight = (value) => {
        this.weight = value;
    };
    this.decreaseWeight = () => {
        this.weight--;
    };
};
let Human = function (name , gender , weight , said) {
    this.name = name;
    this.gender = gender;
    this.weight = weight;
    this.said = said;
    this.setName = (value) => {
        this.name = value;
    };
    this.getName = () => {
        return this.name;
    };
    this.setGender = (value) => {
        this.gender =value;
    };
    this.getGender = () => {
        return this.gender;
    };
    this.setWeigth = (value) => {
        this.weight = value;
    };
    this.getWeight = () => {
        return this.weight;
    };
    this.setSaid = (value) => {
        this.said = value;
    };
    this.getSaid = () => {
        return this.said;
    };
    this.increaseWeight = () => {
        this.weight++;

    };
}

let adam = new Human("Adam" , "Male" , 70 , "Tôi là Adam");
let eva = new Human("Eva" , "female" , 55 , "Tôi là Eva");
let apple = new Apple(10);
display();
function eatAppleAdam() {
    adam.increaseWeight();
    apple.decreaseWeight();
    if (apple.getWeight() < 0) {
        alert("Hết táo rồi");
    }
    display();
}

function eatAppleEva() {
    eva.increaseWeight();
    apple.decreaseWeight();
    if (apple.getWeight() < 0) {
        alert("Hết táo rồi");
    }
    display();
}

function display() {
    document.getElementById("outputAdam").innerHTML = "Cân nặng của Adam là : " + adam.getWeight();
    document.getElementById("outputEva").innerHTML = "Cân nặng của Eva là : " + eva.getWeight();
    document.getElementById("outApple").innerHTML = "Số lượng táo là : " + apple.getWeight();
}
display();