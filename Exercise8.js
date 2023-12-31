// With a integer number, return it reverse

function inverseNumber(number) {
    let inversed=number.toString();
    let chain = "";
    for (let letter of inversed) {
        chain = letter + chain;
    }
    console.log(parseInt(chain)*Math.sign(number));
    }

inverseNumber(325);