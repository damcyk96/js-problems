function largestPalindrome(word) {
  const arrayWithWords = [];
  const splittedArray = word.split(" ");
  splittedArray.forEach((element) => {
    const arrayWithLetters = element.split("");
    arrayWithWords.push(arrayWithLetters);
  });

  const palindromes = [];
  arrayWithWords.forEach((element) => {
    let flag = 0;
    for (let i = 0; i < element.length / 2; i++) {
      if (element[i] != element[element.length - i - 1]) {
        flag = 1;
      }
    }
    if (flag != 1) {
      palindromes.push(element);
    }
  });

  const largestPalindromes = [];
  let longestPalindromeLength = 0;

  palindromes.forEach(element => {
    if(element.length > longestPalindromeLength){
      largestPalindromes.length = 0;
      longestPalindromeLength = element.length;
      largestPalindromes.push(element.join(""))
    }
  });
  console.log(largestPalindromes)
return largestPalindromes
}
largestPalindrome("dupa test kot kajak madam tteesseett");
module.exports = largestPalindrome;
