// Solution #1
// the simplest
const min = (a, b) => {return a < b ? a : b};

console.log(min(1, 3));

// Solution #2
// PrOdUcTiOn MeMe
class FancyCompanyNameGetMin {
    getMin(a, b) {
        try {
            if (isNaN(a)) {
                console.log(`[!] ERROR: First parameter a=${a} is not a number!`);
                return undefined;
            }
    
            if (isNaN(b)) {
                console.log(`[!] ERROR: Second parameter b=${b} is not a number!`);
                return undefined;
            }
    
            try {
                if (a < b) {
                    return a;
                } else if (a > b) {
                    return b;
                } else {
                    console.log(`[!] ERROR: Could not find min out of a = ${a} and b = ${b}`)
                    return undefined;
                }
            } catch (e) {
                console.log(`[!] ERROR: Could not find min out of a = ${a} and b = ${b}: ${e}`)
                return undefined;
            }
        } catch (e) {
            console.log(`[!] ERROR: Could not find min out of a = ${a} and b = ${b}: ${e}`)
            return undefined;
        }
    }
}

console.log(new FancyCompanyNameGetMin().getMin(1, 3));