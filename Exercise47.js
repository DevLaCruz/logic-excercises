function hobbiesFunc(arrObj) {
    let map={};

    for (object of arrObj) {
        for (afition of object.hobbies) {
            if (!map[afition]) {
                map[afition]=1;
            }else{
                map[afition]++;
            }
        }
    }
    return map
}

const users=[
    {name: "Alejandro", hobbies:["mezclar música","programar","motociclismo"]},
    {name: "Dennis", hobbies:["música","programar","piano"]},
    {name: "Saul", hobbies:["salir","jugar","motociclismo"]},
    {name: "Janet", hobbies:["Tomar","musica","nadar"]},
]


console.log(hobbiesFunc(users));