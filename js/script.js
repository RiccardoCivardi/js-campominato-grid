/* **Consegna**
L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
**Bonus**
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe; */


// scorciatoia per usare querySelector
const el = document.querySelector.bind(document);

// prendo la select della difficoltà
const difficultSelectedUser = el('select')
// prendo il bottone dall'html
const playButton = el('button');
//prendo il container in cui generare la griglia
const container = el('.container-custom');


// al click sul bottone play inizia il gioco
playButton.addEventListener('click', function(){
  startGame();
});

/**
 * Questa funzione racchiude tutte le operazioni per iniziare a giocare
 */
function startGame() {
  // faccio il reset della griglia
  resetAll(container);

  //prendo il value della select (difficoltà selezionata)
  const difficultSelected = difficultSelectedUser.value;

  //dichiaro cellsNumber a cui in base alla difficoltà selezionata assegno il numero di celle da stampare attraverso la funzione difficultGame
  const cellsNumber = difficultGame(difficultSelected);
  
  // sapendo il numero totali di celle date dalla selezione della difficoltà uso la funzione squareRoot (radice quadrata) per capire quante celle vanno su una sola riga e assegno questo dato ad una variabile
  const cellsInline = squareRoot(cellsNumber);

  //faccio un for per ogni cella che devo generare e le stampo con la funzione generateCells
  for(let i = 1; i <= cellsNumber; i++) {
    generateCells(cellsInline, i);
  }
}


/** Arrow function che fa il reset html dell'elemento
 * 
 * @param {element} element 
 * @returns svuota l'html
 */
const resetAll = (element) => element.innerHTML = '';


/** Funzione che dato il value della select della difficoltà di gioco mi restituisce il numero di celle da stampare
 * 
 * @param {string} difficultSelectedUserValue 
 * @returns easy = 49, medium = 81, hard = 100  
 */
function difficultGame(difficultSelectedUserValue) {
  if (difficultSelectedUserValue === "easy") return cellsNumber = 49;
  else if (difficultSelectedUserValue === "medium") return cellsNumber = 81;
  else return cellsNumber = 100;
}


/** Arrow function che dato un numero mi restituisce la radice quadrata
 * 
 * @param {number} number 
 * @returns radice quadrata
 */
const squareRoot = (number) => Math.sqrt(number);


/** Funzione che crea la cella con le varie classi e il calc della width e la appende nel container
 * 
 * @param {number} squareInline 
 * @param {number} index 
 */
function generateCells(squareInline, index) {
  // creo div.square
  const square = document.createElement('div');
  // assegno classi Bootsrap flex alla cella per centrare la scritta e classe .square
  square.classList.add('square', 'd-flex', 'justify-content-center', 'align-items-center');
  //scrivo lo stile inline del calc sulla width
  square.style.width = `calc(100% / ${squareInline})`;
  //scrivo il numero nel quadratino
  square.innerText = index;
  // appendo il quadratino al container
  container.append(square);
  // questo accadrà quando cliccherò su quella cella
  square.addEventListener('click', clickSquare);
}


/** 
 * Funzione che riconosce la cella cliccata grazie a this, stampa in console il numero della della e assegna la classe .click
 */
function clickSquare() {
  console.log(this.innerText);
  this.classList.add('click');
}


