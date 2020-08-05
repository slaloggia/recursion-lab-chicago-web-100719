// Code your solution here!
function printString(string) {
    console.log(string[0]);
    if (string.length > 1) {
        let subString = string.substring(1, string.length);
        printString(subString);
    } else {
        return true
    }
}

function reverseString(string) {
    if (string === "") {
        return ""
    } else {
        return reverseString(string.substring(1)) + string[0]
    }
}

function isPalindrome(string) {
    if (string.length > 1) {
        if (string[0] !== string[string.length -1]) {
            return false;
        } else {
           return isPalindrome(string.substring(1, string.length - 1));
        }
    } else {
        return true;
    }
}

function addUpTo(arr, ind) {
    if (ind > 0) {
        return addUpTo(arr.slice(0, ind), ind - 1) + arr[ind];
    } else {
        return arr[0];
    }
}

function maxOf(arr) {
    if (arr.length > 1) {        
        if (arr[0] > arr[1]) {
            arr.splice(1, 1);
        } else {
            arr.splice(0, 1);
        }
        return maxOf(arr)
    } else {
        return arr[0]
    }
}

function includesNumber(arr, num) {
    if (arr.length > 0) {
        if (arr[0] === num) return true;
        return includesNumber(arr.slice(1), num)
    } else {
        return false
    }
}
