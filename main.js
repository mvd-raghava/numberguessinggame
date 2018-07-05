var rnum = Math.floor(Math.random() * 100) + 1;
var gussedNumber = document.querySelector('#guessnum');
var gusses =  document.querySelector("#guesses");
var result = document.querySelector('#result');
var suggestion = document.querySelector('#suggestion');
var guessSubmit = document.querySelector('#sub');
var main = document.querySelector('.main');
var resetButton;
var guesscount = 1;
function resetGame(){
    guesscount = 1;
    gusses.textContent = '';
    result.textContent = '';
    suggestion.textContent = '';
    gussedNumber.disabled = false;
    guessSubmit.disabled = false;
    rnum = Math.floor(Math.random() * 100)+1;
    main.removeChild(resetButton);
    result.style.backgroundColor='white';
}
function setGameOver(){
    gussedNumber.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = "Reset";
    main.appendChild(resetButton);
    resetButton.addEventListener('click',resetGame);
}
function checkGuess() {
    var userGuess = Number(gussedNumber.value);
    if (guesscount === 1) {
        gusses.textContent = "Previous Gusses: ";
    }
    gusses.textContent += userGuess + ' ';
    if(userGuess === rnum){
        result.textContent = "Congratulations ! Your Guess is correct !";
        result.style.backgroundColor = 'green';
        suggestion.textContent = '';
        setGameOver();
    }else if(guesscount === 10){
        result.textContent = "!!! GAME OVER !!!";
        setGameOver();
    }else{
        result.textContent = "Wrong Guess !";
        result.style.backgroundColor= 'red';
        if(userGuess>rnum){
            suggestion.textContent='Your Guess is too high';
        }else  if(userGuess<rnum){
            suggestion.textContent='Your Guess is too low';
        }
        guesscount++;
    }
    gussedNumber.value='';
}
guessSubmit.addEventListener('click', checkGuess);
gussedNumber.addEventListener('keypress',function(e){
	if(e.key === 'Enter'){
		checkGuess();
	}
})
