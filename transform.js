/* Muestrame una lista con los desarrolladores que tengan la habilidad de JS,  y otra lista donde se muestren los proyectos de estos */

const datos = [
    {
        id: 1, 
        nombre: 'Juan',
        habilidades: ['JavaScript', 'HTML', 'CSS'],
        proyectos: [
            {id: 1, nombre: 'Proyecto 1'},
            {id: 2, nombre: 'Proyecto 2'}
        ]
    },
    {
        id: 2, 
        nombre: 'María',
        habilidades: ['Python', 'SQL', 'Django'],
        proyectos: [
            {id: 3, nombre: 'Proyecto 3'},
            {id: 4, nombre: 'Proyecto 4'}
        ]
    },
    {
        id: 3, 
        nombre: 'Pedro',
        habilidades: ['Java', 'Spring', 'Hibernate'],
        proyectos: [
            {id: 5, nombre: 'Proyecto 5'},
            {id: 6, nombre: 'Proyecto 6'}
        ]
    }
];

const desarrolladoresJavascript = [];
const nombresProyectos = [];

Requisito = 'JavaScript'

for (const dato of datos) {
    if (dato.habilidades.includes(Requisito)) {
        desarrolladoresJavascript.push(dato)
    }
}

for (const dato2 of datos) {
    nombresProyectos.push(...dato2.proyectos.map((proyect)=> proyect.nombre))
}


console.log(desarrolladoresJavascript)
console.log(nombresProyectos)





