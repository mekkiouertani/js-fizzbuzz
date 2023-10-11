             // prendiamo la scatola della scacchiera
const cBoardEl = document.getElementById('chessboard');
             //dichiaro la variabile bgBox
let bgBox, bgBox2;
             //creo un ciclo FOR
for (let i = 1; i <= 100; i++){
                 //creo un div 
    const squareEl = document.createElement('div'); 
                //assegno delle classi al div
    squareEl.className = ` my-aqua ${bgBox} ${bgBox2} square d-flex justify-content-center align-items-center`;
                //stampo "i" dentro ai div
    squareEl.innerHTML = i ;
                //metto il div dentro il div padre 'chessboard'
    cBoardEl.append(squareEl);          
                //primo IF (buzz) multiplo di 3
    if (i % 3 > 1){
        bgBox = 'my-green';
    }   else{
        bgBox = 'my-aqua';
    }           //secondo IF (fizz) multiplo di 5
    if (i % 5 > 3){
        bgBox = 'my-yellow';
    }           //terzo IF (buzzfizz) multiplo di 15
   /*  if  (i % 15 > 14){
        bgBox2 = 'my-red';
    } */
  



    //console LOG dentro for
    console.log(i);
    console.log(squareEl);
}
 



//console LOG
console.dir(cBoardEl);
