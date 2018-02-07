function isPalindrome(palindrome) {
    let answer = true;
    for(let i = 0; i < Math.floor(palindrome.length) / 2; i++) {
    if(palindrome[i] !== palindrome[palindrome.length - (i + 1)]) {
        answer = false;
        break;
    }
    }
    document.getElementById("outputArea").innerHTML = answer;
}