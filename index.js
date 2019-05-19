const fs = require('fs');
const opciones = {
    idcurso: {
        demand: true,
        alias: 'i'
    },
    nombre: {
        demand: true,
        alias: 'n'
    },
    cedula: {
        demand: true,
        alias: 'c'
    }
};
const argv = require('yargs')
    .command('inscribir', 'Inscribir estudiante a curso.', opciones)
    .argv;

//Declare Cursos
let cursos = [
    programacion = {
        id: 1,
        nombre: 'Programación',
        duracion: 50,
        valor: 100000
    },
    matematicas = {
        id: 2,
        nombre: 'Matemáticas',
        duracion: 45,
        valor: 80000
    },
    algegra = {
        id: 3,
        nombre: 'Algebra',
        duracion: 40,
        valor: 110000
    }
];

let printcurso = function (curso) {
    var res = 'Id: ' + curso.id + '\n' +
        'Nombre: ' + curso.nombre + '\n' +
        'Duración(h): ' + curso.duracion + '\n' +
        'Valor: ' + curso.valor + '\n' +
        '------------------------------------';
    console.log(res);
}

let printcursos = function () {
    console.log('Lista de cursos existentes');
    console.log('------------------------------------');

    var count = 1;
    cursos.forEach(function (element) {
        setTimeout(() => {
            printcurso(element);
        }, count * 2000);
        count += 1;
    });
}

let crearfile = (estudiante, curso) => {
    let texto = 'El estudiante ' + estudiante.nombre + ' con cedula numero ' + estudiante.cedula +
        '\nse ha matriculado en el curso ' + curso.nombre + ' que tiene una duracion de \n' +
        curso.duracion + ' horas y un valor de ' + curso.valor + ' pesos M/Cte.';
    fs.writeFile('prom.txt', texto, (err) => {
        if (err) throw (err);
        console.log('archivo creado');
    });
}

//Start process
StartProcess();

function StartProcess() {
    if (argv.idcurso && argv.nombre && argv.cedula) {
        let cursosel = cursos.find(curso => curso.id == argv.idcurso);
        if (!cursosel) {
            console.log('El curso con id ' + argv.idcurso + ' no existe.');
            return;
        }
        let estudiante = {
            cedula: argv.cedula,
            nombre: argv.nombre
        }
        crearfile(estudiante, cursosel);

    } else {
        printcursos();
    }
}
