const helpers = {};
let fs = require('fs');
const readline = require('readline');


helpers.leerFichero = (req, res, fichero) => {

    //Leemos de forma asíncrona el fichero
    const contents = fs.readFileSync(fichero, 'utf-8');
    var data = [];
    const arr = contents.split(/\r?\n/);

    // Recorremos le array y lo introducimos en una auxiliar que nos permitirá recorrer el código de manera sencilla
    for (let i = 0; i < arr.length; i++) {
        var aux_arr = {};
        const element = arr[i];
        var el_split = element.split(',');
        for (let j = 0; j < el_split.length; j++) {
            var aux = {
                id: el_split[0],
                name: el_split[1],
                surname: el_split[2],
                street: el_split[3],
                tlf: el_split[4],
                mail: el_split[5],
                date: el_split[6]
            }

        }

        //Lo metemos en la variable global data
        data.push(aux);

    }

    console.log(data)

    //Returneamos el resultado final para ser obtenido desde el apartado links.js
    return data;



}



helpers.writeFichero = (fichero,line) => {
    var fs = require('fs')
    var logger = fs.createWriteStream(fichero, {
        flags: 'a' // 'a' means appending (old data will be preserved)
    })
    logger.write(line)
    
}

helpers.obtainLastIndex = (data) =>{
return data.length
}














module.exports = helpers;