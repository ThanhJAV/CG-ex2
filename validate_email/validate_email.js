function validateEmail() {
    regexp = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
    if(regexp.test()){
        return true;
    }else{
        return false;
    }
}
let email = "a@gmail.com";
console.log(validateEmail(email));