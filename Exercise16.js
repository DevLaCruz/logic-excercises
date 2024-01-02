function vocals(text) {
    let matches=text.match(/[aeiou]/gi);
    console.log(matches);

    return matches ? matches.length: 0;
}

console.log('Número de vocales', vocals('vrryr'))