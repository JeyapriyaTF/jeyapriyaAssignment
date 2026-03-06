function checkNumberType(number) {
    if (number > 0) {
        return "positive";
    } else if (number < 0) {
        return "negative";
    } else {
        return "zero";
    }
}
let myNumber = 13; 
let result = checkNumberType(myNumber);
console.log("The number is: " + result);