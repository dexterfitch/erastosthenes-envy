var optimusPrime = function(decepticon) {
  var decepticons = [];
  var primes = [];
  var spliceThese = [];
  for(var index = 2; index <= decepticon; index += 1) {
    decepticons.push(index);
  };

  var decepticopy = decepticons;

  for(var prime = 2; prime <= decepticon; prime += 1) {
    // debugger;

    for(index = 0 + prime - 2; index <= decepticons.length; index += 1) {

      if (decepticons[index + 1] % prime === 0) {
        decepticopy.splice((index + 1), 1);
      };
    };

  };

  return decepticopy;

};


// for(var prime = 2; prime <= decepticon; prime += 1) {
//   var primed = false;
//
//   for(index = 0; index < decepticons.length; index += 1) {
//     // debugger;
//     if ((decepticons[index] % prime === 0) && (primed === false)) {
//       primes.push(prime);
//       primed = true;
//       for(var i = 0; i < decepticons.length; i += 1) {
//         if (decepticons[i] % decepticons[index] === 0) {
//           spliceThese.push(i);
//         };
//       };
//     };
//   };
//   // debugger;
//   spliceThese = spliceThese.sort();
//
//   for(var j = ((spliceThese.length)-1); j > 0; j -= 1) {
//     if(spliceThese[j] !== spliceThese[j-1]) {
//       decepticons.splice(spliceThese[j], 1);
//     };
//   };
// };
// return primes;



// decepticons.forEach(function(each) {
//   if ((each % prime === 0) && (primed === false)) {
//     primed = true;
//   };
// });



// How to use the forEach function with nested function:
//
// var alertStuff = function(stuff) {
//   alert(stuff);
// }
//
// [1, 2, 3].forEach(alertStuff)
