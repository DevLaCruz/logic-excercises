function showDivisors(n) {
    for (let i = 0; i < n; i++) {
        if (n%i===0) {
            console.log(i)
        }
        // else{
        //     console.log('no es divisor')
        // }
    }
}

showDivisors(14)