/* Search a word in a phrase and return the number of times is there */

function concincideWords(phrase, search) {
    let clean_text = phrase.toLowerCase().replace(/[¡!.,-]/gi, '')
    let result = 0;

    if (clean_text.includes(search)) {
        let words = clean_text.split(' ');
        let map = {};
        for (let word of words) {
            if (map[word]) {
                map[word]++;
            } else {
                map[word] = 1;
            }
        }
        result = map[search];
    } else {
        result = 0;
    }
    return result;
}

console.log(
    'Number of coincidences in the phrase: ',
    concincideWords('Hola soy alejandro de la cruz cruz ', 'cruz'),
)