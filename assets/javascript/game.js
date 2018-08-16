// Create an array of words
const word = ["blue","yellow","red","chartreuse","violet","pink","orange"];
// Choose word randomly
let randNum = Math.floor(Math.random()* word.length);
let chosenWord = word[randNum];
let underScore = [];
console.log(chosenWord);
// Create underscores based on length of word
let generateUnderscore =  () => {
    for(let i = 0; i < chosenWord.length; i++) {
        underScore.push('_');
    }
    return underScore;
}

console.log(generateUnderscore()); 
// Get users guess
document.addEventListener("keypress", (event) => {
    let keycode = event.keyCode;
    let keyword = String.fromCharCode(keycode);
    console.log(keyword);
});
// Check if guess is right
// If right push to right array
// If wrong push to wrong array
