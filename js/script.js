const cBoardEl = document.getElementById('chessboard'); // prendiamo la scatola della scacchiera

for (let i = 1; i <= 100; i++){
    const squareEl = document.createElement('div');
    squareEl.className = `square d-flex justify-content-center align-items-center`;
    squareEl.innerHTML = i ;
    cBoardEl.append(squareEl);          
    
  



    //console LOG dentro for
    console.log(i);
    console.log(squareEl);
}
 



//console LOG
console.dir(cBoardEl);
