//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
//Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Genera un numero casuale per il giocatore
const userNum = Math.floor(Math.random() * 6) + 1;

// Genera un numero casuale per la cpu
const computerNum = Math.floor(Math.random() * 6) + 1;

// Esito
console.log(`Giocatore ha tirato: ${userNum}`);
console.log(`Cpu ha tirato: ${computerNum}`);

// Ecco il vincitore
if (userNum > computerNum) {
    alert("giocatore win")
    console.log("giocatore win");
} else if (computerNum > userNum) {
    alert("cpu win")
    console.log("cpu win");
} else {
    alert("draw")
    console.log("pareggio!");
}