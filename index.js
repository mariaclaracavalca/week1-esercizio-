
//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA

const number1  = parseInt(prompt('Inserisci il primo numero: '))
const number2 = parseInt(prompt('Inserisci il secondo numero: '))

if ( number1 > number2 ) {
  alert ('il numero 1 è maggiore che il numero 2')
} else if (number1 < number2 ) 
  alert('Il numero 2 è maggiore che il numero 1')
else {
  alert ('I numeri sono uguali')
}
*/

/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

/* SCRIVI QUI LA TUA RISPOSTA

const numero = parseInt(prompt('Inserisci un numero: '))

switch (true) {
  case numero < 5 :
    alert('Tiny')
    break
  case numero < 10: 
    alert('Small')
    break
  case numero < 15 :
    alert('Medium')
    break
  case numero < 20 :
    alert('Large')
    break
  case numero >= 20 :
    alert('Huge')
    break
}
*/

//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

/* SCRIVI QUI LA TUA RISPOSTA
  for (const i = 0; i < 11; i ++) {
  if (i === 3 || i === 8 ) {
    continue
  }
  console.log(i)
}
*/

/* ESERCIZIO 4
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare se il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA

for (let i = 0; i <= 15; i ++){
  if (i % 2 === 0) {
        console.log('Il numero', +i ,'è pari')
      } else  {
      console.log('Il numero',  +i , 'è dispari')
    }
}
*/

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA 

- Addizione -> 

const number1 = 3
const number2 = 5

if ( risultato = number1 + number2 === 8) {
  console.log(risultato)
} else {
  console.log(risultato)
}

- Sottrazione -> 

const number1 = 8
const number2 = 16

if ( risultato = number2 / 2 === 9) {
  console.log(risultato)
} else {
  console.log(risultato)
}


*/

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA
const totalShoppingCart = parseFloat(prompt('Quanto hai speso?')) 
const sconto = 10
const costoTotale = totalShoppingCart + sconto
 
if ( totalShoppingCart >= 50 ){
  alert ('Hai vinto la spedizione gratuita, il costo finale della tua spesa è di: ' + totalShoppingCart + '€')
} else {
  alert ('Mi spiace, non hai vinto la spedizione gratuita, il costo totale della spesa è di: ' + costoTotale  + '€')
}

*/

/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
const totalShoppingCart = parseFloat(prompt('Quanto hai speso?'))
const sconto = 10
const costoTotale = totalShoppingCart - (totalShoppingCart * 0.2)

if (totalShoppingCart >= 50) {
  alert('Hai vinto la spedizione gratuita, il costo finale della tua spesa è di: ' + costoTotale + '€')
} else {
  alert('Mi spiace, non hai vinto la spedizione gratuita, il costo totale della spesa è di: ' + (costoTotale + sconto) + '€')
}*/

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/