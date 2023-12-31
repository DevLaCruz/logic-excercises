/*Make a multiplicate table where at set a integer value, throw it multiplicate table of 1 at 13
*/

function multiplicateTable(number) {
    let result = `The Multiplicate Table of ${number} \n`;
    for (let i = 1; i <= 13; i++) {
        let multiplication = (i * number);
        result += `${i} x ${number} = ${multiplication} \n`
    }
    return result;
}

for (let i=0; i <=13; i++) {
console.log(multiplicateTable(i));}
