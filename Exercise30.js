//Array of number, with no duplicate elements

function deleteDuplicats(elements) {
    elements=elements.filter(element=>{
        return typeof element ==='number';
    });

    let set_no_duplicates=new Set(elements);

    return Array.from(set_no_duplicates)
}

console.log(deleteDuplicats(['uno', 'dos',12,4,5,23,5,3,4,4]));