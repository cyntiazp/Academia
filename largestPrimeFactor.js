exports.largestPrimeFactor = function(n){
  var primeNumber = 0;
  // do your work here

  var i=2;
  while (i<=n){
      if (n%i == 0){
          n/=i;    
      }else{
          i++;
      }
  }
  console.log(i);
  
return primeNumber;
};

var primeNumber = 600851475143
largestPrimeFactor(primeNumber)
