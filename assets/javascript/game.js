// Global Variables
// ==============================================
// Create an array of words
const word = ["blue","yellow","red","chartreuse","violet","pink","orange"];
// Choose word randomly
let randNum = Math.floor(Math.random()* word.length);
let chosenWord = word[randNum];
let rightWord = [];
let wrongWord = [];
let underScore = [];
// need to write code for guessesLeft and totalGuesses
let guessesLeft = chosenWord.length *2;
let totalGuesses = 0;
let win = 0;
let loss = 0;

//DOM Stuff
let docUnderScore = document.getElementsByClassName('underscore');
let docRightGuess = document.getElementById('rightGuess');
let docWrongGuess = document.getElementById('wrongGuess');
 
let wins = document.getElementById("winCounter");

//Add score keeper
 
// var losses= document.getElementById('losses'.innerHTML);
//var letterGuessed = [];
//var guessesRemaining = document.getElementsByClassName('guessesRemaining').innerHTML;

//Add sounds for win and loss



//How do you make the game reset??????????????????????????????????


// Main
// ==============================================
console.log(chosenWord);
// Create underscores based on length of word
let generateUnderscore =  () => {
    for(let i = 0; i < chosenWord.length; i++) {
        underScore.push(' _ ');
        
    }
    return underScore;
}

 
// Get users guess
document.addEventListener('keypress', (event) => {
    let keyword = String.fromCharCode(event.keyCode);
    guessesLeft--;
// If user guesses right 
    if(chosenWord.indexOf(keyword) > -1) {
    //  add to right words array
        rightWord.push(keyword);
    // replace underscore with right letter
    //    underScore[chosenWord.indexOf(keyword)] = keyword;
        for(let i=0; i < chosenWord.length; i++){
            if(chosenWord[i] === keyword) {
                underScore[i] = keyword;
            }


        }
        docUnderScore[0].textContent = underScore.join('');
        docRightGuess.textContent = rightWord;
    // checks to see if user word matches guesses //may not need comma after chosenWord next line
         if(underScore.join('') == chosenWord) {
                    alert('You Win!');
                    win++;
                    document.getElementById('wins').innerHTML = win;  
                    resetGame();   
         }
    }
    else {
        wrongWord.push(keyword);
        docWrongGuess.textContent = wrongWord;
        if (guessesLeft < 1) {
            loss++;
            document.getElementById('losses').innerHTML = loss;  
            resetGame();
        }
        // console.log(guessesLeft);
    }   
});

function resetGame () {
    // we want to reset the underscore div, rightGuesses div, wrongGuesses
     randNum = Math.floor(Math.random()* word.length);
     chosenWord = word[randNum];
     underScore = [];
     rightWord = [];
     wrongWord = [];
    document.getElementsByClassName('underscore')[0].textContent = generateUnderscore().join('');
    document.getElementById('rightGuess').textContent = "";
    document.getElementById('wrongGuess').textContent = "";
    console.log(chosenWord);
}
docUnderScore[0].textContent = generateUnderscore().join('');

