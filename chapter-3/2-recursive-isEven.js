// Solution #1
// I don't think this needs any more memeing.

function isEvenMeme(a) {
    if (a === 0) {
        return true;
    } else if (a === 1) {
        return false;
    } else {
        return isEvenMeme(a > 0 ? (a - 2) : (a + 2));
    }
}


// Solution #2
// Though I can make it unreadable.. cough, I mean I can code golf.

const e=(a)=>{return a==0?true:(a==1?false:e(a>0?a-2:a+2))}
