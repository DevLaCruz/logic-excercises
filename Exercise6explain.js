// Draw a square with '*'

function printSquare(number) {
    let side = '';
    for (let i = 0; i < number; i++) {
        side += '*';
    }
    return side;
}

function drawing(number) {
    let draw = printSquare(number) + '\n';
    let content = '';
    for (let i = 2; i < number; i++) {
        content = '*';

       for (let x = 2; x < number; x++) {
        content+=' ';
        
       }

       content+='*';
        draw += content + '\n';

    }
    draw += printSquare(number);
    return draw;
}


console.log(drawing(4));