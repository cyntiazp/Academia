/*  function(digits)
 *
 *  @param {Number} digits the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
module.exports = function (digits){
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;

  // do your work here
  var arr = [];

  for(var factor_0 =999; factor_0>100; factor_0--){
      for(var factor_1 = 999; factor_1>100; factor_1--){
         var product = factor_1*factor_0;
          if(isPalin(product)){
              arr.push(factor_1 * factor_0);
          }
      }
  }

  return Math.max.apply(Math, arr);
}

function isPalin(factor_0){
    this.palindromeNumber = parseInt(factor_0.toString().split('').reverse().join(''));
return factor_0.toString() == factor_0.toString().split("").reverse().join("");
} 

console.log(largestPalindrome());