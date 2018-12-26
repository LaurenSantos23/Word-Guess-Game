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
let guessesLeft = 0;
let totalGuesses = 0;
var score = 0;

//DOM Stuff
let docUnderScore = document.getElementsByClassName('underscore');
let docRightGuess = document.getElementsByClassName('rightGuess');
let docWrongGuess = document.getElementsByClassName('wrongGuess');
 
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
        docRightGuess[0].textContent = rightWord;
    // checks to see if user word matches guesses //may not need comma after chosenWord next line
         if(underScore.join('') == chosenWord) {
                    alert('You Win!');
                    score++;
                    document.getElementById('wins').innerHTML = score;
         }
    }
    else {
        wrongWord.push(keyword);
        docWrongGuess[0].textContent = wrongWord;
    }    
});
docUnderScore[0].textContent = generateUnderscore().join('');

