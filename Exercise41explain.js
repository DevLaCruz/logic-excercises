function triangle(n) {
    let half=Math.floor(n-1);
    let result='';
   
    for (let row = 0; row < n; row++) {
        let level=''

        for (let column=0; column<(2*n-1); column++) {
           //console.log(half-row, half+row); 
            if (half-row <=column && half+row>=column) {
                level+='*';
            } else {
                level+=' ';
            }
            
        }
        result+=level+'\n';
    }
    return result
}

console.log(triangle(4));