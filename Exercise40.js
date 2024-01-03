function lessHigh(list) {
    let ordened=list.sort((a,b)=>a-b)
    for (let i = 0; i < ordened.length; i++) {
        return `El menor es ${ordened[0]} y el mayor ${ordened[ordened.length-1]}`;
    }
}

console.log(lessHigh([23,5,73,57,34]));