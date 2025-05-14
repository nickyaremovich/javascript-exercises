const reverseString = function(str) {
    if (str === "") return "";
    let arr = str.split("");
    let reverse = arr.reverse();
    let reverseString = reverse.join("");
    return reverseString;
};
// Do not edit below this line
module.exports = reverseString;
