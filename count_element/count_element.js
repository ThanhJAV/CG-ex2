function count(arr,data) {
    let count = 0;
    let position = binSearch(arr,data);
    if(position > -1){
        ++count;
        for(let i = position-1 ; i >0 ; --i){
            if(arr[i] == data){
                ++count;
            }else{
                break;
            }
        }
        for(let i = position+1 ; i<arr.length ; ++i){
            if(arr[i] == data){
                ++count;
            }else{
                break;
            }
        }
    }
    return count;
}
let nums = [];
for(let i =0 ; i<100 ; i++){
    nums[i] = Math.floor((Math.random() * 101));
}

function insertionSort() {
    for(let i=0; i<nums-1 ; i++){
        for(let j=i+1 ; j<nums ; j++){
            if(a[i]<a[j]){
                let temp = a[i];
                a[i] = a[j];
                a[j] = temp;
            }
        }
    }
    return nums;

}

insertionSort(nums);
document.getElementById("displayArray").innerHTML = nums;