function factorial(n) {
    // Caso base: si n es 0 o 1, el factorial es 1
    if (n === 0 || n === 1) {
        return 1;
    } else {
        // Llamada recursiva: n! = n * (n-1)!
        return n * factorial(n - 1);
    }
}

// Ejemplo de uso
console.log(factorial(5));  // Resultado: 120
