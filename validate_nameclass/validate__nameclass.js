function validate_nameclass(str) {
    regexp = /^[CAP][^(\"\'\\)]+[\d\d\d\d]+[GHIKLM]$/g;
    if (regexp.test(str)) {
        return true;
    }
    return false;
}
let name_class = "P0323A";
console.log(validate_nameclass(name_class));