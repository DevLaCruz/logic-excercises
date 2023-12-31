function escalera(n) {
    complete_scal='';
    for (let i = 1; i <= n;i ++) {
        
       let scalons='';
        for (let scalon = 1; scalon < i; scalon++) {
        scalons +='[-]';
        }
        complete_scal+=scalons+'\n';
        console.log('Nivel: ',i);
    }
    
    return complete_scal;
}

console.log(escalera(7));