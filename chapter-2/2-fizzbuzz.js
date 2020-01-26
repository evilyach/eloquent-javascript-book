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
// if it was not an interview and I wanted to do something stupid
[...Array(100).keys()].forEach(i=>{console.log(!(++i%15)?"FizzBuzz":(!(i%3)?"Fizz":(!(i%5)?"Buzz":i)))})

// Solution #3
// For-loops are actually somehow the shortest
for(let i=1;i<101;i++){{console.log(!(i%15)?"FizzBuzz":(!(i%3)?"Fizz":(!(i%5)?"Buzz":i)))}}

// Solution #4
// While-loops are a little bit larger than for-loops
let i=1;while(i<101){{console.log(!(i%15)?"FizzBuzz":(!(i%3)?"Fizz":(!(i%5)?"Buzz":i)))};i++}
