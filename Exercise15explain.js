function moreUse(text){
    let map_letters={}
    let maximum_repeat=0;
    let letter_more_repeat='';

    for (let letter of text) {
        if (!map_letters[letter]) {
            map_letters[letter]=1;
        }else{
            map_letters[letter]++;
        }
    }

    for (let letter in map_letters) {
        if (map_letters[letter].toString().trim().length ===1 && map_letters[letter]>maximum_repeat) {
            maximum_repeat=map_letters[letter];
            letter_more_repeat=letter;
        }
        
    }
    console.log(map_letters)
    return letter_more_repeat;
}

console.log('La letra más repetida es: ', moreUse('Ala Mierdaa'))