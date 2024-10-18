const name = 'Klaus'
console.log(name)
//Ex.2 Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
//Stabilire il vincitore, in base a chi fa il punteggio più alto.
const numeroUser = Math.floor(Math.random() * 6) + 1
const numeroComp = Math.floor(Math.random() *6 ) + 1
console.log(numeroComp,numeroUser)
let message = 'pareggio'

if(numeroComp>numeroUser){
    message= 'hai perso'
}
else if(numeroComp<numeroUser){
    message= 'hai vinto'
}
console.log(message)