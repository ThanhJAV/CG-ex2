function validate_account(str) {
    regexp = /^[_a-z0-9]{6,}$/;
    if (regexp.test(str)) {
        return true;
    }
    return false;
}
let account = "12345";
console.log(validate_account(account));