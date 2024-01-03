function suspended(params) {
    let aproved=0, suspended=0;

    for (student of params) {
        if (student[1]>=11) {
            aproved++
        } else {
            suspended++
        }
    }

    return{
        "Aprobados":aproved,
        "Suspendidos":suspended
    }
}

console.log(suspended([
    ['Alejandro',20],
    ['Maria',15],
    ['Javier',11],
    ['Daniel',10],
    ['Jean',9],
]));