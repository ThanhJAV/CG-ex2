function validate__phoneNumber(str) {
    regexp = /^\([0-9]{2}\)\-\([0][0-9]{9}\)$/g;
    if (regexp.test(str)) {
        return true;
    }
    return false;
}
let phone_number = "(84)-(0978489648)";
console.log(validate__phoneNumber(phone_number));
