function cut(text, limit) {
    let result='';
    if (typeof text==='string' && typeof limit==='number') {
        result=text.substring(0,limit)
    }else{
        result='Introduce good the dates'
    }
    return result;
}

console.log(
    cut('Cursos de mierda', 7)
)
