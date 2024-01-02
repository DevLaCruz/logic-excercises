// Definición de la función fibonacciConRecursionConLog
function recursedFibonacci(n, resultados = {}) {
    // Caso base: si n es 0 o 1, devuelve n
    if (n <= 1) {
        return n;
    }

    // Verificar si ya se calculó el valor para n
    if (!resultados[n]) {
        // Calcular el valor y almacenarlo en el objeto resultados
        resultados[n] = recursedFibonacci(n - 1, resultados) + recursedFibonacci(n - 2, resultados);
        // Imprimir el valor calculado
        console.log(`${resultados[n]}`);
    }

    // Devolver el valor calculado
    return resultados[n];
}

// Ejemplo de uso: obtener el término en la posición 10 e imprimirlo
console.log(recursedFibonacci(10));

