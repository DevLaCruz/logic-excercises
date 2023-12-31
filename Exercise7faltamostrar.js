// Find the odd numbers that exist beetween two numbers

function odders(number1, number2) {
    let counter = 0;
    let numbers=[];
    while (number1 < number2) {
        if (number1 % 2 !== 0) counter++; 
            number1++;
  
    }
    
    return counter;
    
}

console.log(odders(1, 90));


