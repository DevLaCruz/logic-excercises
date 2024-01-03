function aleat(n1,n2) {
    for (let i = n1; i < n2; i++) {
        return Math.round(Math.random()*(n2));
    }
}

console.log(aleat(23,54));