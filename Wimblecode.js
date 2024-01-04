//Comenzamos creando los jugaores
const jugador = {
    1: 'Alberto C',
    2: 'David J',
    3: 'Javier M',
    4: 'Edu Aguilar'
}

//Creamos la lista de los jugadores que juegan el partido
const gamePlayers = []

//Elegimos jugadores
function chosePlayer() {
    console.log(jugador);
    let choose1 = parseInt(prompt(`De los siguiente jugadores, elige un jugador: ${jugador}`));
    let choose2 = parseInt(prompt(`Ahora elija el otro jugador: ${jugador}`));

    //Lo añadimos a la lista de  partido
    gamePlayers.push(jugador[choose1])
    gamePlayers.push(jugador[choose2])
    
    //Mostramos quien juega el partido
    return `LISTOS PARA EL PARTIDO:
    JUGADOR Número 1: ${jugador[choose1]}
    JUGADOR Número 2: ${jugador[choose2]}`
}


//Creamos el marcador
const marcador = [
    ['Jugador', 'P','R','G'],
    ['Jugador1', 0  , 0  , 0],
    ['Jugador2', 0  , 0  , 0]
]

//Creamos el código necesariopara controlar los puntos

function winPointBy() {
    let winnerPoint = parseInt(prompt('Who won the point? Type de number'))
    
    if (winnerPoint === 1) {
        marcador[1][1]++
    } else if (winnerPoint === 2) {
        marcador[2][1]++
    } else {
        console.log('Introduce un valor correcto por favor. O bien "1", o bien "2"')
    }  
};

//Pasamos el resultado en puntos al punteo de Wimblecode
const toBoxScore = (player) => {
    let result = 0
    if (marcador[player][1] === 1) {
        result = 15
    } else if (marcador[player][1] === 2) {
        result = 30
    } else if (marcador[player][1] === 3) {
        result = 40
    } else if (marcador[player][1] >= 4) {
        result = 'advantage'
    } ;

    return result
}
//Enseñamos el resultado actual. 
const showActualResult = () => `${gamePlayers[0]}  ${toBoxScore(1)} - ${toBoxScore(2)} ${gamePlayers[1]}`


console.log(chosePlayer())
console.log(winPointBy())
console.log(showActualResult())

