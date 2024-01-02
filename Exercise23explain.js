function firstLetterMayus(text) {
    let result=text[0].toUpperCase();

    for (letter in text) {
        let result='';
        if (text[letter-1]==='' || parseInt(letter)===0) {
            result+=text[letter].toUpperCase();
        }else{
            result+=text[letter];
        }
    }

    return result;
}


console.log(firstLetterMayus('estao es una pincha frasde'))