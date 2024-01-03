function elevateSquare(list) {
    let nums=list.filter(num=>typeof num==='number')
                 .map(num=>Math.pow(num,2));
    return nums;
}

console.log(elevateSquare([35,'dsf',53,56]));