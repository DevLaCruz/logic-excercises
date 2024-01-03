function twoWords(elements) {
    let news_elements=[];
    for(word of elements){
        if (word.split(' ').length>=2) {
            news_elements.push(word);
        }
    }

    return news_elements
}

console.log(twoWords(['holas','pedro ruiz', 'Alejandro','node jotaese']));