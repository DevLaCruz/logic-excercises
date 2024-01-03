//Return the more show

function moreRepeat(params) {
    let map={}, moreFrecuent='', valueMoreFrecuent=0;

    if (typeof params==='string') {
        params=params.split(' ');
    }

    for (let elemnt of params){
        if (map[elemnt]) {
            map[elemnt]++;
        }else{
            map[elemnt]=1;
        }
    }

    for (let elemnt in map) {
        if (map[elemnt]>valueMoreFrecuent) {
            valueMoreFrecuent = map[elemnt];
            moreFrecuent=elemnt;
        }
    }
    return {
        "moreFrecuent": moreFrecuent, 
        "valueMoreFrecuent": valueMoreFrecuent}
};

console.log(moreRepeat('Hola carajo pendejos carajo'));