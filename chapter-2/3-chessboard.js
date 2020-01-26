// Some prerequisites:
// - even though it does not imlicitly say that, size can be any, even or odd,
//   it makes logic far more complicated
// - size is declared as size and can't be shortened, unfortunatelly

const size = 8;


// Variant #1
// this is the one I came up with first
// unfortunatelly, it cannot handle odd sizes

let chessboard = "";

for (let i = 0; i < Math.pow(size, 2); i++) {
    if (i > 0 && i % size === 0) {
        chessboard += "\n";
    }

    const round = Math.floor(i / size) % 2 === 0;

    if (i % 2 === 0) {
        chessboard += round ? " " : "#";
    } else {
        chessboard += round ? "#" : " ";
    }
}


// Variant #2
// this is shorter version of variant #1

let chessboard = ""

for (let i = 0; i < size; i++) {
    for (let j = 0; j < size / 2; j++) {
        chessboard += (i % 2) ? "# " : " #";
    }
    chessboard += "\n";
}


// Variant #3
// Simple and straight-forward solution, can handle any size
// I looked the solution up though.

let chessboard = "";

for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        if ((i + j) % 2 === 0) {
            chessboard += " ";
        } else {
            chessboard += "#";
        }
    }
    chessboard += "\n";
}


// Variant #4
// Let's make variant #3 worse

let b="";for(let i=0;i<size;i++){for(let j=0;j<size;j++){b+=!((i+j)%2)?" ":"#"};b+="\n"}
