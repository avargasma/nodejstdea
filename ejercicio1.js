const Estudiante =  require('./ejercicio2');
const {estudiante, promedio} = require('./ejercicio2');
const fs = require('fs');
const argv = require('yargs').argv;



function promedioC(pNota1, pNota2, pNota3){
    let res = (pNota1 + pNota2 + pNota3) / 3;
    console.log(res);
}



function promedio1(pNota1, pNota2, pNota3){
    let res = (pNota1 + pNota2 + pNota3) / 3;
    console.log('prom 1 ' + res);
}

let promedio2 = (pNota1, pNota2, pNota3) => {
    setTimeout(()=>{
        let res = (pNota1 + pNota2 + pNota3) / 3;
        console.log('prom 2 ' + res);
    }, 2000);    
}

let promedio3 = (pNota1, pNota2, pNota3) =>  console.log('prom 3 ' + (pNota1 + pNota2 + pNota3) / 3)


let promedio4 = (pNota1, pNota2, pNota3, callback) => {
    setTimeout(()=>{
        let res = (pNota1 + pNota2 + pNota3) / 3;
        callback(res);
    }, 2000);    
}


let {nombre, edad, notas: {ingles, matematicas, programacion}} = estudiante;

let crearfile = (estudiante) =>{
    let texto = 'El estudiante ... : ' + estudiante.nombre + ' ha obtenido un promedio de ' +  
                promedio(estudiante.notas.matematicas, estudiante.notas.ingles, estudiante.notas.programacion);
    fs.writeFile('prom.txt', texto, (err) =>{
        if(err) throw (err);
        console.log('archivo creado');
    });
}

promedioC(2, 3 ,4);
promedio1(2, 2 ,4);
promedio2(2, 1 ,4);
promedio3(2, 2 ,4);
promedio4(2,2,2, function(res){
    console.log('res es igual a '+ res);
});

//console.log('El prom 2 es igual a ' + promedio4(2,2,2));


console.log(Estudiante.estudiante);
console.log('prom est ' + Estudiante.promedio(
        Estudiante.estudiante.notas.ingles,
        Estudiante.estudiante.notas.matematicas,
        Estudiante.estudiante.notas.programacion
        ));

console.log('prom est ' + promedio(
    estudiante.notas.ingles,
    estudiante.notas.matematicas,
    estudiante.notas.programacion
    ));

console.log('Nombre = '+ nombre);
console.log('prom est ' + promedio(ingles, matematicas, programacion));

crearfile(estudiante);

console.log(argv.matematicas);