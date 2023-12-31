/*Divide to array*/

function divideArray(marray,n) {

    let arrays=[];
    for (element of marray) {
        let ultimate=arrays[arrays.length-1];
        if (!ultimate || ultimate.length===n) {
            arrays.push([element]);
        }else{
            ultimate.push(element);
        }
    }
    return element;
}

console.log(divideArray([2,5,63,62,3],2))