
//Listra de artistas
const userList = [
    {id: 1, nombre: 'John Doe'},
    {id: 2, nombre: 'Peter Pan'},
    {id: 3, nombre: 'Rober Deniro'},
    {id: 4, nombre: 'Ronaldinho'},
    {id: 5, nombre: 'Messi'},
]
//Pedimos que artista quiere visualizar
let userNumber = prompt('Elige un usuario del 1 al 5')

//Creamos una pausa de 2" antes para dar tiempo a descargar la info. Mostramos un mensaje de que la info se está descargando.
const obtenerUsuario = (id) => {
    return new Promise((getUserInfo) => {
        console.log('Downloading Info del Usuario ' + userNumber);
        setTimeout(() => {  
            getUserInfo()
        }, 2000);
    })}
 
//Decimos que hacmeos durante ese tiempo muerto
    obtenerUsuario()
    .then(() => {
        console.log('Contenido descargado');
        const info = getUserInfo(IDuser = userNumber - 1)
        console.log(info);
    })
 
//Obtenemos la info del artista
    const getUserInfo = () => {
        return userList[IDuser]
    }