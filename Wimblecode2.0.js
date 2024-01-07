//Comenzamos creando los jugaores
const jugador = {
    1: 'Alberto C',
    2: 'David J',
    3: 'Javier M',
    4: 'Edu Aguilar'
}

//Creamos la lista de los jugadores que juegan el partido
let gamePlayers = []

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
let marcador = [
    ['Player', 'P','R','G'],
    ['Player 1', 0  , 0, 0],
    ['Player 2', 0  , 0, 0]
]

//Creamos el código necesario para controlar los puntos


const winnerPointBy = () => {
    let winnerPoint = parseInt(prompt('Who won the point? Type de number'))
    return winnerPoint
}

function winPoint() {
    let winnerPoint = winnerPointBy()

    if (winnerPoint === 1) {
        marcador[1][1]++
    } else if (winnerPoint === 2) {
        marcador[2][1]++
    } else {
        console.log('Introduce un valor correcto por favor. O bien "1", o bien "2"')
    } 

    return showActualResult()
}


//Pasamos el resultado en puntos al punteo de Wimblecode, para poder mostrarlo. 
const toBoxScore = (player) => {
    let result = 0
    if (marcador[player][1] === 1) {
        result = 15
    } else if (marcador[player][1] === 2) {
        result = 30
    } else if (marcador[player][1] === 3) {
        result = 40
    }

    return result
}

//Enseñamos el resultado actual. 
let winnerRound = []

const showActualResult = () => {
    let result = ''
    //Si ningún equipo ha llegado a +40pts se imprime el resultado de cada uno. Así con cada caso
    if (marcador[1][1] < 4 && marcador[2][1] < 4) {
        //Menor de 45 los dos, mostramos puntos de cada uno
        result = `${gamePlayers[0]}  ${toBoxScore(1)} - ${toBoxScore(2)} ${gamePlayers[1]}`
        winnerRound.pop()
    } else if (marcador[1][1] > 3 && marcador[1][1] - marcador[2][1] >= 2) {
        //J1 más de 40pts, y diferencia de puntos con J2 > o = que 2, J1 gana la partida
        result = `${gamePlayers[0]} ha ganado la Ronda`
        winnerRound.push(gamePlayers[0])
    } else if (marcador[2][1] > 3 && marcador[2][1] - marcador[1][1] >= 2) {
        //J2 más de 40pts, y diferencia de puntos con J1 > o = que 2, J2 gana la partida
        result = `${gamePlayers[1]} ha ganado la Ronda`
        winnerRound.push(gamePlayers[1])
    } else if (marcador[1][1] >= 3 && marcador[2][1] >= 3 && marcador[1][1] - marcador[2][1] === 0) {
        //Si ambos Js más de 40pts, y la diferencia entre sus puntos es = 0. Deuce
        result = `Deuce`
    } else if (marcador[1][1] > 3 && marcador[2][1] >= 3 && marcador[1][1] - marcador[2][1] === 1) {
        //Si ambos J más de 40pts, y la diferencia entre sus puntos es = 1. Ventaja
        result = `Advantadge ${gamePlayers[0]}`
    } else if (marcador[1][1] > 3 && marcador[2][1] >= 3 && marcador[2][1] - marcador[1][1] === 1) {
        //Si ambos J más de 40pts, y la diferencia entre sus puntos es = 1. Ventaja
        result = `Advantadge ${gamePlayers[1]}`
    }; 

    return console.log(result);
}

//Definimos el códgio para saber a quien le sumamos la ronda, y restablecer el marcador de los puntos
const sumRound = () => {
    if (winnerRound[0] === gamePlayers[0]) {
        marcador[1][2]++
        marcador[1][1] = 0
        marcador[2][1] = 0
    
    } else if(winnerRound[0] === gamePlayers[1]) {
        marcador[2][2]++
        marcador[2][1] = 0
        marcador[1][1] = 0
    }
}

//Definimos el cógido para controlar las rondas, y saber quien y cuando gana el juego
const winnerGame = []

function knowWinnerGame() {

    if (marcador[1][2] + marcador[2][2] < 7) {
        //Si hay menos de 7 rondas entramos en las posibilidades
        if (marcador[1][2] >= 4 && marcador[1][2] - marcador[2][2] >= 2) {
            //4 o más rondas, y una diferencia de 2, juego para el J1
            marcador[1][3]++
            winnerGame.push(gamePlayers[0])
            marcador[1][2] = 0
            marcador[2][2] = 0
        } else if (marcador[2][2] >= 4 && marcador[2][2] - marcador[1][2] >= 2) {
            //4 o más rondas, y una diferencia de 2, juego para el J2
            marcador[2][3]++
            winnerGame.push(gamePlayers[1])
            marcador[1][2] = 0
            marcador[2][2] = 0
        } else {
            //Si no pasa nada de esto, se quita al antiguo ganador de la lista para no despistar al código
            winnerGame.pop()
        }
    } else {
        //Si es el 7º ronda, quien gana, gana el juego.
        if (marcador[1][2] > marcador[2][2]) {
            winnerGame.push(gamePlayers[0])
            marcador[1][3]++
        } else if (marcador[2][2] > marcador[1][2]) {
            winnerGame.push(gamePlayers[1])
            marcador[1][3]++
            marcador[1][2] = 0
            marcador[2][2] = 0
        }
    }
    
    return winnerGame[0]
}

//Código para anunciar el ganador del Juego y mostrar el marcador
const showGameWinner = () => {
    let result = (`The winner of de this game is ${winnerGame}. The box score is: 
    ${marcador[0]}
    ${marcador[1]}
    ${marcador[2]}`)

    return console.log(result)
};

//Código para controlar el ganador del partido. Saber cuando y quien.
const matchWinner = []
const winnerMatch = () => {
    if (marcador[1][3] === 2) {
        matchWinner.push(gamePlayers[0])
    } else if (marcador[2][3] === 2) {
        matchWinner.push(gamePlayers[1])
    }
    return matchWinner[0]
}

/*Controlamos el uso de las funciones del código, para crear un 
flujo de preguntas de quien ha ganado el punto, y realizar los calculos necesarios hasta 
la victoria de un jugador*/
let gameOn = true

function flow() {

    while (gameOn === true) {
        winPoint()
            if (winnerRound.length != 0) {
                sumRound()
                knowWinnerGame()
                if (winnerGame.length != 0) {
                    showGameWinner()
                    winnerMatch()
                    if (matchWinner.length != 0) {
                        console.log(`Congratulations to ${matchWinner[0]} for winning this match`)
                        gameOn = false
                    } else {
                        console.log(`The box score is: 
                        ${marcador[0]}
                        ${marcador[1]}
                        ${marcador[2]}`)
                    }
                } else {
                    console.log(`The box score is: 
                        ${marcador[0]}
                        ${marcador[1]}
                        ${marcador[2]}`)
                }
            } else {
                gameOn = true
            }        
    }
}


console.log(chosePlayer())
console.log(flow())
/*
console.log(winPoint())
console.log(sumRound())
console.log(knowWinnerGame())
console.log(showGameWinner())
console.log(winnerMatch())
*/