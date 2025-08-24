function memoizedFactorial() {
    let cache={}
 return function factorial(n) {
    if (n in cache) {
        console.log('from cache');
        return cache[n]
    }

    if(n<=1) return 1
    console.log('new value');
    
    let result=n*factorial(n-1)
    cache[n]=result
    return result
 }
}

let memoFactorial=memoizedFactorial()
console.log(memoFactorial(5));
console.log(memoFactorial(5));

console.log(memoFactorial(6));
