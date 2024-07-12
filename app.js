console.log("TASK 1");
function phoneNumber(number) {
    if (number.startsWith("+7") && number.length === 12) {
        return true
    } else {
        return false
    }
}

console.log(phoneNumber("+78999204090"));
