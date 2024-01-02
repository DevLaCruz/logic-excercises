function majorLess(n1,n2) {
    let result='';
    if (n1===n2) {
        result='The number is equals';
    }else if(n1<n2){
        result=n2
    }else{
        result=n1
    }
    return result;
}

console.log(majorLess(123,45))