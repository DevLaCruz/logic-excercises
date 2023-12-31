//Comun elements
function common(array1,array2) {
    const filter=array1.filter(element=>{return array2.includes(element)});
    return filter;
}
console.log(common([3,42,63,56,2],[3,56,1,5,21,2,3]));
