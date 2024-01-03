function returnArr(params) {
    for (let i = 0; i < params.length; i++) {
        final=[params[0], params[params.length-1]]
    }
    return final
}

console.log(returnArr([23,435,12,44]));