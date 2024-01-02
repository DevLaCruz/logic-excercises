//Permutation

function permutation(secuence, n) {
    for (let i = 0; i < n; i++) {
        if (secuence.indexOf(i+1)<0) {
            return false;
        }
    }
    return true;
}

console.log(permutation([1,2,3,5],5))