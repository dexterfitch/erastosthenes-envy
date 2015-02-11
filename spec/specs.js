describe("optimusPrime", function(number) {
  it("returns 2 as the first prime number when 'number' entered is 2", function() {
    expect(optimusPrime(2)).to.eql([2]);
  });

  it("returns all prime numbers up to a given number", function() {
    expect(optimusPrime(19)).to.eql([2,3,5,7,11,13,17,19]);
  });
});
