


function palindrome() {
    let input = document.getElementById(palindrome());
    let len = input.length;
    for (let i = 0; i < Math.floor(len/2); i++) {
    if (input[i] !== input[len - 1 - i]) {
        return false;
    }
    else {
        return true;
    }
}
}
