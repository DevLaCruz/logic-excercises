/* Detect if a word is a palindrome*/

function palindromedWord(text) {
    let inverted=text.split('').reverse().join('');
    return(inverted===text);
}

console.log('¿Is a palindrome? '+palindromedWord('otto'))