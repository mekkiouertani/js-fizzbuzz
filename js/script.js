        // prendiamo la scatola della scacchiera
const cBoardEl = document.getElementById('chessboard');
        //dichiaro le variabili
let bgBox;
const fizz = 'fizz';
const buzz = 'buzz';
const fizzBuzz = 'fizzbuzz';
        //creo un ciclo FOR
for (let i = 1; i <= 99; i++){
                 //creo un div  
    const squareEl = document.createElement('div'); 
                //assegno delle classi al div
    squareEl.className = ` ${bgBox} my-aqua square d-flex justify-content-center align-items-center`;
                //stampo "i" dentro ai div
    squareEl.innerHTML = i ;
                //metto il div dentro il div padre 'chessboard'
    cBoardEl.append(squareEl);          
                //primo IF (buzz) multiplo di 3
    if (i % 3 === 0){
        squareEl.innerHTML = fizz;
        squareEl.classList.add('my-green');
    }   
               //secondo IF (fizz) multiplo di 5
    if (i % 5 === 0){
        squareEl.innerHTML = buzz;
        squareEl.classList.add('my-yellow');
    }           //terzo IF (buzzfizz) multiplo di 15
    if  (i % 3 === 0 && i % 5 === 0){
        squareEl.innerHTML = fizzBuzz;
        squareEl.classList.add('my-red');
    } 
  
    //console LOG 
    console.log(i);
    console.log(squareEl);
    console.dir(cBoardEl);
}



