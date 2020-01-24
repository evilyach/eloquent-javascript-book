// Most stupid
// we have an empty array filled with 8 byte pointers and we have 2 loops
[...Array(7).keys()].forEach(e=>console.log("#".repeat(e+1)))

// As stupid, but shorter
// we still have an empty array filled with 8 byte pointers with 2 loops
Array.from({length:7},(_,i)=>console.log("#".repeat(i+1)))

// Most memory efficient
// we still have double loop, but don't waste so much memory
for(let i=1;i<8;i++){console.log("#".repeat(i))}

// Most time efficient
// even though we keep string instead of number, we only have one loop for speed
for(let t="#";t.length<8;t+="#"){console.log(t)}
