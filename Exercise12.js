/* Since a number to zero jumping 8 in 8 */

function toZero(number) {
    result=`---Números del ${number} hasta el cero---\n`
    while (number>=0) {
        result+=`nº ${number}\n`
        number-=8
    }
    return result
}

console.log(toZero(352))