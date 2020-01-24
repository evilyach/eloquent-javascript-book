// Solution #1
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
        console.log(i)
    } else if (i % 3 === 0) {
        console.log("Fizz")
    } else if (i % 5 === 0) {
        console.log("Buzz")
    } else {
        console.log(i)
    }
}

// Solution #2
for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0 && i % 3 !== 0) {
        console.log("Buzz")
        continue
    }

    if (i % 3 === 0 && i % 5 !== 0) {
        console.log("Fizz")
        continue
    }

    console.log(i)
}
