console.log("TASK 2");
function capatlizeWords(word) {
    let text = word.split(" ");
    let word1 = text[0][0].toUpperCase() + text[0].slice(1);
    let word2 = text[1][0].toUpperCase() + text[1].slice(1);
    let word3 = text[2][0].toUpperCase() + text[2].slice(1);
    let word4 = text[3][0].toUpperCase() + text[3].slice(1);
    let word5 = text[4][0].toUpperCase() + text[4].slice(1);
    let result = word1 + " " + word2 + " " + word3 + " " + word4 + " " + word5
    return result
}
console.log(capatlizeWords("hello my name is mirkamil"));