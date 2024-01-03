function countLetters(text) {
    let consonants=0, vocals=0, clean_text='';

    clean_text=text.split('')
                   .filter(letter=>/[áéíóú\w]/gi.test(letter) && isNaN(letter))
                    .join('');
    for (letter of clean_text) {
        if (/[áéíóúaeiou]/gi.test(letter)) {
            vocals++;
        }else{
            consonants++
        }
        
    }

    return[consonants, vocals];
}

let letters=countLetters('Esta es una frase pendejasa')

console.log('Consonantes: ', letters[0]);
console.log('Vocales: ', letters[1]);