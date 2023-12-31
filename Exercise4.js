/*Use control structures*/

function inverted(text) {
    let chain = "";
    for (let letter of text) {
        chain = letter + chain;
    }
    console.log(chain);
}

inverted('alejandro'); 