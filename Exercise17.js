

function multiplatesTreeFive(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(`${i} equivale a buzzligthyear`);
        } else if (i % 3 === 0) {
            console.log(`${i} equivale a buzz`);
        } else if (i % 5 === 0) {
            console.log(`${i} equivale a ligthyear`);
        } else {
            console.log(`${i}`);
        }
    }
}

multiplatesTreeFive(17);
