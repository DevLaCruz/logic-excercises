//Caculate that angule whith equivale a number

function angule(grades) {
    if (angule<90) {
        console.log('Es un agudo');
    }else if (angule===90) {
        console.log('Es recto');
    }else if (90>angule && angule<180) {
        console.log('Is obtuse');
    }else if (angule===180) {
        console.log('Es llano');
    }else if (180>angule && angule<360) {
        console.log('Es concavo');
    }else{
        console.log('numero no valido');
    };
}

angule(40)