/* console.log('#1: Tallest Mountain');

let height = [20, 50, 100, 30, 75, 24, 99];
tallestMtn = 0;
for (i = 0; i < height.length; i++) {
  console.log([i]);

// if hegiht of current item is bigger than height of tallest seen
if (tallestMtn < height[i]) {
    tallestMtn = height[i];
}

}
    console.log(tallestMtn);
//console.log('tallestMtn')  */


// console.log('Hangman Lite');

console.log('#5: Palindromes');

let word = 'amma';
let end = word.length -1;
let palindrome = true; //whether the word is a palindrome
for (let index = 0; index < word.length; index++) {
    if (word[index] !== word[end - index]) {
    console.log('not palindromic');
    palindrome = false; 
}

/*
//compare letter '0' against letter '3'
if (word[0] === word[word.length - 1]) {
    //Palindrones
} else {

    if (word[1] === word[word.length - 2])

} */


// 1. Start from the beginning and look ta easch letter.
// 2. compare the first letter to the last letter.
// 3. Compare the second to the second to last.
// 4. etc (loop)
// 5. If any of them don't match, not a palindrome.


/* index is set to 0. As long s index is less than the length of word, keep going. Increase index by 1. 

*/

console.log("basic")