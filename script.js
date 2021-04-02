const ball = document.querySelector("img");
const input =document.querySelector("input");
const answer = document.querySelector(".answer");
const error = document.querySelector(".error");
const answersArray = ['tak!', 'z pewnością!', 'wiadomo, że tak!', 'nie miej żadnych wątpliwości', 'Hell YES!'];
/*
// klikam w bilę
// losuje się odpowiedź
// wprowadza się do answer  ALBO nie ma znaku zapytania, więc error
*/
/* js od dołu się czyta, dlatego funkcje się pisze po kolei, ale licząc od dołu, czyli na końcu zostanie wykonana funkcja która jest na samej górze
*/
const shakeBall = () => {
    
    ball.classList.add('shake-animation');
    console.log("kliknięto");
    setTimeout(ifEmpty,1000); 
}
const ifEmpty = () => { 
         /*trzeba wyjść od warunku który mówi, że TAK,że jest spełniony\\  2. f.warunkowo wciska odpowiedź */

    if(input.value !=='' && input.value.slice(-1) == '?'){
        generateAnswer();
        error.textContent = '';
    }
   
    else if (input.value !=='' && input.value.slice(-1) !== '?'){
        answer.textContent = '';
        error.textContent = `Wprowadź znak "?" `;
    }
     
    else{
        answer.textContent = '';
        error.textContent = `Zadaj pytanie `;
    }
    ball.classList.remove('shake-animation');
}
const generateAnswer = () => {  
    /*1.f.generuje odpowiedź*/
    const numberOfAnswersInArray = answersArray.length;
    console.log(numberOfAnswersInArray);
    const number = Math.floor(Math.random()*numberOfAnswersInArray);
    console.log(answersArray[number]);
    answer.innerHTML = `<span>odpowiedź</span> ${answersArray[number]}`;  
    /*nie może być answer.texContent, bo nie odczyta <span.u poprawnie */
}
ball.addEventListener('click', shakeBall);