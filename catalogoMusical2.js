//Creamos el catálogo
const catalogoMusical = [];

//Agregar Cacnción
function agregarCancion()  {
    //Creamos un nuevo objeto (cancion)
    const addSong = {
        nombreCancion: '',
        genero: '',
        duracion: 0,
    }
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

//Mostrar Catalogo. Si esta vacío mostrar mensaje de que el catálogo está vacio.
function mostrarCanciones() {
    if (catalogoMusical.length === 0) {
        throw new Error('No hay canciones agregadas por el momento')
    }

    return console.log(catalogoMusical)
}

function mostrarCatalogo() {
    try {
        mostrarCanciones()
    } catch (error) {
        console.log(error)
    }
}

//Mostrar las canciones del genero que nos pida
function mostrarGenero() {
    // Le pedimos que tipo de genero quiere que le mostremos
    let genero = prompt('¿De qué genero deseas visualizar las cancinoes?')
    //Lo normalizamos
    const generoChoose = genero.toLowerCase();
    //Vemos si hay algunas de las canciones con ese genero, y las mostramos.
    const cancionesGenero = catalogoMusical.filter(song => song.genero === generoChoose)
    
    if (cancionesGenero.length != 0) {
        const listaNombres = []
        cancionesGenero.forEach((song) => listaNombres.push(song.nombreCancion))
        console.log(`Estos son los nombres de las canciones con dicho genero: ${listaNombres}`)
    } else {
        console.log('No hemos podido encontrar cancionees con ese genero.')
    }
}

//Calcular promedio de duración de todas las canciones
    //Metemos en una lsita todos los valores de los tiempos que hay
    const duraciones = []
    
    //Recorremos el catalogo añadiendo los tiempos ala lista
    function calcularPromedio() {
        catalogoMusical.forEach((song) => {duraciones.push(song.duracion)})
        const sumaTotal = duraciones.reduce((acumulador, numero) => acumulador + numero, 0) 
        return console.log(`El tiempo total del Catálogo es de: ${parseInt(sumaTotal)}`)
    }


//Código para controlar el uso de del Catálogo
function accionUser() {
    let preguntaUser = parseInt(prompt(`Que acción desea hacer:
    1 = Agregar una canción
    2 = Mostrar las canciones del Catálogo
    3 = Buscar canciones por género
    4 = Calcular el promedio de la duración de las canciones
    5 = Nada`))

    return preguntaUser
}


function menu() {
    while (true) {
        switch (accionUser()) {
            case 1:
                agregarCancion()
                break
            case 2:
                mostrarCatalogo()
                break
            case 3:
                mostrarGenero()
                break
            case 4:
                calcularPromedio()
                break
            case 5:
                console.log('Escribe menu() para ver las opciones.')
                return
            default:
                console.log('Por favor, introduce un valor válido')
                menu()
        }
    }
}

console.log(menu())

