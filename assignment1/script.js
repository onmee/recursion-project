// 1. Write a function that returns a fibonacci sequence of a given fibonacci number
// So, F7, or fib(7) = [0, 1, 1, 2, 3, 5, 8, 13]

let fibArr = [0,1];

function fibSequence(num) {
    if (num < 0) {
        return 'Please enter 0 or a postive integer'
    } else if (num == 0) {
        return fibArr.slice(0,1);
    } else if (num == 1) {
        return fibArr;
    }
    for(let i = 1; i < num; i++){
        fibArr.push(fibArr[i-1] + fibArr[i]);
    }
    return fibArr;
}
console.log(fibSequence(-1))
console.log(fibSequence(0))
console.log(fibSequence(1))
console.log(fibSequence(7))


let fibArr2 = [0,1]
// 2. Write 1 recursively
function fibRecursive(num) {
    //Base conditions: num equals 0 or 1
    if (num < 0) {
        return 'Please enter 0 or a postive integer'
    } else if (num == 0) {
       return fibArr2.slice(0,1);
    } else if (num == 1) {
        return fibArr2;
    } else if (num >= 2) {
        // All other fibonacci numbers are computed by adding the last two array values
        fibArr2.push(fibArr2[(fibArr2.length)-2] + fibArr2[(fibArr2.length)-1])
        // And we call the fuction until it hits the base conditions
        fibRecursive(num-1)
    }
    return fibArr2
}
console.log(fibRecursive(-1))
console.log(fibRecursive(0))
console.log(fibRecursive(1))
console.log(fibRecursive(7))
