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

// ----------------------------------------------------

$(document).ready(function() {
  $("form#optimus-prime").submit(function(event) {
    var number = $("input#number").val();
    var primes = optimusPrime(number);

    primes.forEach(function(prime) {
      $("#primes").append(prime + ', ');
    });
    // $("#primes").text(primes);
    $("#result").show();

    event.preventDefault();
  });
});
// How to use the forEach function with nested function:
//
// var alertStuff = function(stuff) {
//   alert(stuff);
// }
//
// [1, 2, 3].forEach(alertStuff)
