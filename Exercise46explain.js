function allSubstrings(word) {
    let substrings=[];

    for (letter in word) {
        let start = parseInt(letter);

        for (let i = 0; i < word.length - 1; i++) {
            let final=parseInt(i)+parseInt(start);
            console.log(word.substring(start, i));
            
        }
    }

    return substrings.filter(element=> element.length >=1);
}

allSubstrings('otorrinolaringólogo')