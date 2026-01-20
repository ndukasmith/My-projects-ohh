function findLongestWord(sentence) {
    var words = sentence.split(' ');
    var maxLength = 0;
    
    for (var word of words) {
    if (word.length > maxLength) {
    maxLength = word.length;
    }
    }
    
    return maxLength;
    }