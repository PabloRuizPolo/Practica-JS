//Creamos el catálogo
const catalogoMusical = []

/*
//Función que vamos a usar durante todo el código. Para normalizar la escritura
const normalizacionWords = (word) => {
    return word.toLowerCase().//quitar espacios
}*/

//Código para saber que quiere hacer el usuario
let preguntaUser = parseInt(prompt(`Que acción desea hacer:
    1 = Agregar una canción
    2 = Mostrar las canciones del Catálogo
    3 = Buscar canciones por género
    4 = Calcular el promedio de la duración de las canciones
    5 = Nada`))

const accionUser = () => {
    while (preguntaUser != 5) {
        switch (preguntaUser) {
            case 1:
                agregarCancion()
                break
            case 2:
                mostrarCanciones()
                break
            case 3:
                mostrarGenero()
                break
            case 4:
                calcularPromedio()
                break
            case 5:
                break
            default:
                console.log('Por favor, introduce un valor válido')
    }   
    
        preguntaUser = parseInt(prompt(`Que acción desea hacer:
        1 = Agregar una canción
        2 = Mostrar las canciones del Catálogo
        3 = Buscar canciones por género
        4 = Calcular el promedio de la duración de las canciones
        5 = Nada`)) 
        }
    }

console.log(accionUser())


//Creamos la funcion necesaria para concretar la info de las canciones
function agregarCancion()  {
    //Creamos un nuevo objeto (cancion)
    const addSong = {}
    //Pêdimos que nos diga el nombre de la canción, y la introducimos en el objeto
    const nombre = prompt('¿Cómo se llama la canción que quieres agregar?')
    addSong.nombreCancion = nombre.toLowerCase()
    //pedimos el genero. Y lo introducimos
    const genero = prompt('Indica el género de tu nueva canción')
    addSong.genero = genero.toLowerCase()
    //Que nos diga el tiempo, primero minutos, y luego segundos
    const minutos = parseInt(prompt('Indica la duración en minutos de la canción. Solo el número de minutos'))
    const segundos = parseInt(prompt('Ahora indica la duración de los segundos, a mayores de los minutos'))
    const tiempo = minutos + (segundos / 60)
    addSong.duracion = tiempo

    catalogoMusical.push(addSong)
}

//Mostrar Canciones. Si esta vacío mostrar mensaje de que el catálogo está vacio.
function mostrarCanciones() {
    if (catalogoMusical.length === 0) {
        throw 'No hay canciones agregadas por el momento'
    } 
    return console.log(catalogoMusical); 
}
try {
    mostrarCanciones()
} catch (error) {
    console.log(error)
}

//Creamos la función de mostrar las canciones del genero que nos pida
function mostrarGenero() {
    //Creamos la lista que le vamos a mostrar con las canciones del genero seleccionado
    const generoSongs = [];
    // Le pedimos que tipo de genero quiere que le mostremos
    const genero = prompt('¿De qué genero deseas visualizar las cancinoes?');
    //Lo normalizamos
    const generoChoose = genero.toLowerCase();
    //Creo una funcion que recorre el catalogo y saca el nombre de la cancion que tenga dicho genero.
    for (let song of catalogoMusical.values()) {
        if (song.genero === generoChoose) {
            generoSongs.push(song)
        }
    }

    if (generoSongs.length === 0) {
        throw `Por favor, eliga un género presente en el catálogo.`;
    }

    return generoSongs
}