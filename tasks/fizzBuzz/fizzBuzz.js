//jeżeli podzielna przez 3 - "Fizz" zamiast liczby, jeżeli podzielna przez 5 - "Buzz", a jeżeli podzeilna i przez 3 i przez 5 to "FizzBuzz"
function fizzBuzz(word1, word2) {
  const results = [];
 for (let i = 0; i <= 100; i++) {
   if(i % 3 == 0 && i % 5 == 0){
     results.push("FizzBuzz")
   }
   else if (i%3 == 0){
     results.push("Fizz")
   }
   else if (i%5 == 0){

   results.push("Buzz")
   }
   else results.push(i)
 }
 return results
}

module.exports = fizzBuzz;
