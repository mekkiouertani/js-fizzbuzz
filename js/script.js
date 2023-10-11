    // prendiamo la scatola della scacchiera
const cBoardEl = document.getElementById('chessboard');
    //creo un ciclo FOR
for (let i = 1; i <= 100; i++){
        //creo un div 
    const squareEl = document.createElement('div'); 
        //assegno delle classi al div
    squareEl.className = `my-aqua square d-flex justify-content-center align-items-center`;
        //stampo "i" dentro ai div
    squareEl.innerHTML = i ;
        //metto il div dentro il div padre 'chessboard'
    cBoardEl.append(squareEl);          
    
  



    //console LOG dentro for
    console.log(i);
    console.log(squareEl);
}
 



//console LOG
console.dir(cBoardEl);
