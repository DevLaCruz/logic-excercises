function mayusMinus(text) {
    let mayus=0;
    let minus=0;

    for (letter of text) {
         if (/[A-Z]/g.test(letter)) {
            mayus++
         }else{
            minus++
         }
    }
    console.log(mayus, minus)

    if (mayus<minus) {
        result=text.toLowerCase()
    }else{
        result=text.toUpperCase()
    }
    return result
}

console.log(mayusMinus('HOlsah ibpAD'));