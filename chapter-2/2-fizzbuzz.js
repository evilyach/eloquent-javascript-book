// Solution #1
// if it was an interview
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) { // Can also be (i % 5 === 0 && i % 3 === 0), but this is much nicer
        console.log("FizzBuzz")
    } else if (i % 3 === 0) {
        console.log("Fizz")
    } else if (i % 5 === 0) {
        console.log("Buzz")
    } else {
        console.log(i)
    }
}

// Solution #2
// if it was not an interview
[...Array(100).keys()].forEach(i=>{console.log(!(i%15)?"FizzBuzz":(!(i%3)?"Fizz":(!(i%5)?"Buzz":i)))})
