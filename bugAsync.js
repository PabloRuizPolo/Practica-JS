/*
function obtenerUsuario(id) {
    let usuario; 

    setTimeout () => {
        if (id === 1) {
            usuario = {id: 1, nombre: 'John Doe'};
        }
    }, 2000;

    return usuario
}*/

const userList = [
    {id: 1, nombre: 'John Doe'},
    {id: 2, nombre: 'Peter Pan'},
    {id: 3, nombre: 'Rober Deniro'},
    {id: 4, nombre: 'Ronaldinho'},
    {id: 5, nombre: 'Messi'},
]

const obtenerUsuario = (id) => {
    return new Promise((getUserInfo) => {
        console.log('Downloading Info del Usuario ' + userNumber);
        setTimeout(() => {  
            getUserInfo()
        }, 2000);
    })}
 
let userNumber = prompt('Elige un usuario del 1 al 5')
const getUserInfo = () => {
    return userList[IDuser]
}

obtenerUsuario()
    .then(() => {
        console.log('Contenido descargado');
        const info = getUserInfo(IDuser = userNumber - 1)
        console.log(info);
    })
