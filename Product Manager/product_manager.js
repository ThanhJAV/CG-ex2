let arr = [];

function view() {
    for (let i = 0; i < arr.length; i++) {
        document.getElementById("viewElement").innerHTML = arr;
    }
}

function addElement() {
    let inputElement = document.getElementById("inputElement");
    arr.push(inputElement.value);
    document.getElementById("viewAddElement").innerHTML = arr;
}

function deleteElement() {
    let del = document.getElementById("inputElement").value;
    for (i=0 ; i<arr.length ; i++){
        if (del === arr[i]){
            arr.splice(i,1);
        }
    }
    document.getElementById("viewDeleteElement").innerHTML = arr;
}

function editElement() {
    let edit = document.getElementById("inputElement").value;
    // let edit = prompt('Nhập dữ liệu muốn xóa');
    for (let i=0 ; i<arr.length ; i++){
        if (edit === arr[i]){
            edit = prompt("nhập dữ liệu sửa");
            arr[i] = edit;
        }
    }
    document.getElementById("viewEditElement").innerHTML = arr;
}