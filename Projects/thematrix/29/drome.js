function isPalindrome(str) {
    var cleanStr = str.replace(/\W/g, '').toLowerCase();
    for(var i = 0; i < cleanStr.length / 2; i++) {
    if(cleanStr[i] !== cleanStr[cleanStr.length - i - 1]) {
    return false;
    }
    }
    return true;
    }
    