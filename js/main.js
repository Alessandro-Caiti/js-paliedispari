//  Palindromo

// function palindromo(parola) {
//     var len = parola.length;
//     var half = Math.floor(len / 2); //ok divisione per difetto, tanto la lettere centrale non cambia
//
//     for (var i = 0; i < half; i++) {
//         if (parola[i] !== parola[len - 1 - i]) { //questo punto non mi è chiarissimo
//             return false; //ok se non c'è il check diventa false e quindi mi dice di no
//         }
//     }
//
//     return true; //se tutto a posto mi dice di si
// }

/* giusto per testare
var parola = prompt("Inserisci una parola")
console.log(parola);
console.log(palindromo(parola));
*/

// Palindromo opzione 2


// var input = prompt('Inserisci una parola');
// var check = palindrome(input);
//
// if (check) {
//     console.log(input +  " è una parola palindroma!");
// } else {
//     console.log(input + " non è una parola palindroma");
// }
//
// function palindrome(str) {
//   var strLower = str.toLowerCase();
//   var isPalindrome = strLower.split('').reverse().join('');
//   return (strLower === isPalindrome);
// }

//  palindromo opzione 3

var parola = prompt("Inserisci una parola");
var parolaRibaltata = palindromo(parola);

function palindromo(parola) {
    var parolaReverse = "";
    for (var i = parola.length - 1; i >= 0; i--) {
        parolaReverse += parola[i];
    }
    return parolaReverse
}


// Pari o dispari

// faccio scegliere pari o dispari
// faccio scegliere un numero da 1 a 5
// faccio estrarre casualmente un numero da 1 a 5 al computer
// faccio la somma dei 2 numeri
// controllo se pari o dispari e dico chi ha vinto

var pariODispari = prompt("Secgli pari o dispari");
var numeroUtente = parseInt(prompt("Scegli un numero da 1 a 5"));

var numeroPc = Math.floor(Math.random() * 5) + 1;
console.log("Hai scelto il numero: " + numeroUtente);
console.log("Il computer ha scelto il numero: " + numeroPc);

var sommaNumeri = numeroUtente + numeroPc;
console.log("La somma è: " + sommaNumeri);

var sceltaUtente = 1

if (pariODispari.toLowerCase() == "pari") {
    sceltaUtente = 0;
    // console.log(sceltaUtente);
}

var totalePariODispari = 1

if (sommaNumeri % 2 === 0) {
    totalePariODispari = 0;
    console.log("Il totale è pari");
} else {
    console.log("Il totale è dispari");
}

if (sceltaUtente == totalePariODispari) {
    console.log("Bravo hai vinto!");
} else {
    console.log("Mi dispiace hai perso!");
}
