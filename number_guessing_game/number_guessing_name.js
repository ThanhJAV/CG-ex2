let inputNumber = +prompt(" Enter number : ");
let arr = [];

randomNumber();
compare();

function randomNumber() {
    for(let i=0 ; i<100 ; i++){
        arr[i]= Math.round(Math.random()*101);
    }
}

function compare() {
    console.time("concatenation");
    for(let i=0 ; i<arr.length ; i++){
        if(arr[i] == inputNumber){
           alert("You win");
           return true;
        }
    }
    alert("You lose");
    return false;
    console.timeEnd("concatenation");
}
//document.getElementById("display_number").innerHTML = compare();
document.getElementById("display").innerHTML = arr.join(", ");

let mid = (arr.length-1)/2;

