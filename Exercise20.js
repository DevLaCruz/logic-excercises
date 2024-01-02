function cleanText(text) {
    return text
        .replace(/[^\w]/gi,'')
        .toLowerCase()
        .split('')
        .sort()
        .join('');
}

function isAnagram(t1,t2) {
    return cleanText(t1)===cleanText(t2);
}

console.log(isAnagram('una Webada','Anubfa dawe'))
