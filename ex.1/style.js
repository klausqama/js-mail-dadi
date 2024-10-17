const name = 'klaus'
console.log(name)
//EX.1  Mail: Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
const mails = ['Pippo@gmail.com','Mimmo@gmail.com', 'Tappo@gmail.com','Sasha@gmail.com']
console.log(mails)
const validMails = prompt('Qual è la tua mail?')
if (mails.includes (validMails)){
  console.log('Benvenuto',(validMails))
  alert('Benvenuto')
} else {
  console.log(" mi dispiace " + " la tua mail non è valida ")
  alert('mi dispiace la tua mail non è valida')
}