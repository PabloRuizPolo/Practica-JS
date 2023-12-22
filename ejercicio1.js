/* Crea un objeto usuario con los siguientes campos: Nombre, Apellidos, Lista con temas Bootcamp y su fecha, Búscqueda activa si o no.
Aademás, queremos mostras en la pantalla el inicio del mmódulo de React. */

const Usuario  = {
    Nombre: 'Pablo',
    Apellidos: 'Ruiz Polo',
    TemasBoot: [
        {
            Nombre: 'Node.js',
            Fecha: '2024-05-13'
        },
        {
            Nombre: 'Git',
            Fecha: '2023-11-28'
        },
        {
            Nombre: 'react',
            Fecha: '2024-04-15'
        }
    ],
    BúsquedaActiva: true 
};

console.log(`La fecha de inicio del módulo de React es: ${Usuario.TemasBoot[2].Fecha}`)


