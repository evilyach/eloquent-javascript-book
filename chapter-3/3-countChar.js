// Solution #1
// with string forEach

function countBs(string) {
    let count = 0;

    [...string].forEach(element => {
        if (element === "B") {
            count++;
        }
    })

    return count;
}


// Solution #2
// with for loop

function countBs(string) {
    let count = 0;

    for (let i = 0; i < string.length; i++) {
        if (string[i] === "B") {
            count++;
        }
    }

    return count;
}


// Solution #3
// universal function

function countChar(string, char) {
    let count = 0;

    [...string].forEach(element => {
        if (element === char) {
            count++;
        }
    })

    return count;
}


// Solution #4
// now we are golfing

var c=(s,c)=>{var i=0;[...s].forEach(e=>{if(e==c){i++}});return i}
