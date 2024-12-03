//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
//Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Genera un numero casuale per il giocatore
const userNut = Math.floor(Math.random() * 6) + 1;

// Genera un numero casuale per la cpu
const computerNut = Math.floor(Math.random() * 6) + 1;

// Esito
console.log(`Giocatore ha tirato: ${userNut}`);
console.log(`Cpu ha tirato: ${computerNut}`);

// Ecco il vincitore
if (userNut > computerNut) {
    alert("giocatore win")
    console.log("giocatore win");
} else if (computerNut > userNut) {
    alert("cpu win")
    console.log("cpu win");
} else {
    alert("draw")
    console.log("pareggio!");
}