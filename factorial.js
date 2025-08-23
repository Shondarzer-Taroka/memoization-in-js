function memoizedFactorial() {
    let cache = {}; // ক্যাশ সংরক্ষণ

    return function factorial(n) {
        if (n in cache) {
            console.log("Cache থেকে রেজাল্ট:", n);
            return cache[n]; // আগের রেজাল্ট ফেরত
        }

        if (n <= 1) return 1;

        let result = n * factorial(n - 1);
        cache[n] = result; // নতুন রেজাল্ট ক্যাশে রাখা
        return result;
    };
}

const fact = memoizedFactorial();

// console.log(fact(5)); // হিসাব করবে
// console.log(fact(6)); // আবার 5 এর রেজাল্ট ক্যাশ থেকে নেবে
// console.log(fact(5)); // সরাসরি ক্যাশ থেকে নেবে



function computing() {

    let cache = {}
    return function (value) {
        if (value in cache) {
            console.log('showing result form cache');
            console.log(cache);
            
            return cache[value]
        } else {
            console.log('computing');

            let result = value + 20
            cache[value]=result
            return result
        }
    }
}

let addingnum=computing()

console.log(addingnum(50));
console.log(addingnum(50));
