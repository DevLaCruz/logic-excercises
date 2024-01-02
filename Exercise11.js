/* With a text and search */

function censurate(text=false, search=false) {
    result='';
    if (!text&&!search) {
        result='No puedes leer el texto y la búsqueda';
    }
    else if(text&&!search){
        result='No pudes leer el la búsqueda';
    }
    else if(!text&&search){
        result='No puedes leer el texto';
    }
        
    else if(text&&search){
        result=text.replace(new RegExp(search, 'gi'), '[CESURATE]');
    }
    return result;    
}

console.log(censurate('frase de frase fraseada', 'frase'))
