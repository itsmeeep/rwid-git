function fizzbuzz(number) {
    if (Number((number/7)) === (number/7) && (number/7) % 1 === 0) {
        console.log("FizzBuzz")
    }
    else if (number % 2 == 0) {
        console.log("Fizz")
    } else {
        console.log("Buzz")
    }
}

(() => {
    fizzbuzz(25)
})();