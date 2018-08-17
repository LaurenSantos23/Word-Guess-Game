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

//DOM Stuff
let docUnderScore = document.getElementsByClassName('underscore');
let docRightGuess = document.getElementsByClassName('rightGuess');
let docWrongGuess = document.getElementsByClassName('wrongGuess');



// Main
// ==============================================
console.log(chosenWord);
// Create underscores based on length of word
let generateUnderscore =  () => {
    for(let i = 0; i < chosenWord.length; i++) {
        underScore.push('_');
        
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
        underScore[chosenWord.indexOf(keyword)] = keyword;
        docUnderScore[0].innerHTML = underScore.join('');
        docRightGuess[0].innerHTML = rightWord;
    // checks to see if user word matches guesses //may not need comma after chosenWord next line
         if(underScore.join('') == chosenWord) {
                    alert('You Win!');
         }
    }
    else {
        wrongWord.push(keyword);
        docWrongGuess[0].innerHTML = wrongWord;
    }    
});
docUnderScore[0].innerHTML = generateUnderscore().join('');
// Check if guess is right
// If right push to right array
// If wrong push to wrong array
