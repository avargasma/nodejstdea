let estudiante = {
    nombre: 'Arlington',
    edad: 27,
    notas: {
        matematicas:3,
        ingles: 4,
        programacion: 5
    }
}

let promedio = (pNota1, pNota2, pNota3) => {
    return (pNota1 + pNota2 + pNota3) / 3;
}

module.exports = {
    estudiante,
    promedio
}

//console.log(promedio(estudiante.notas.ingles, estudiante.notas.matematicas, estudiante.notas.programacion));