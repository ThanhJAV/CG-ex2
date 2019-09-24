function findMin(arr) {
    let min = arr[0];
    for(let i = 1 ; i < arr.length ; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}
function findMax(arr){
    let max = arr[0];
    for(let i = 1 ; i < arr.length ; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
let num = [];
for(let i = 0 ; i< 100 ; i++){
    num[i] = Math.floor(Math.random()*101);

}
let minValue = findMin(num);
let maxValue = findMax(num);
//dispArr(num);
document.getElementById("display").innerHTML = num.join(", ");
document.getElementById("minimum").innerHTML = " Min : "+ minValue;
document.getElementById("maximum").innerHTML = " Max : "+ maxValue;

