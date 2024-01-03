function comprobateEmail(params) {
    return /^\w+@\w+\.\w+$/gi.test(params);
}
console.log(comprobateEmail('hola@hola'));