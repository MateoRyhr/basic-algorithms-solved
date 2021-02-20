// Problem: https://www.hackerrank.com/challenges/simple-array-sum/problem
let array = [2,2,2,4]

function arraySum(ar){
    return ar.reduce((acc,cur) => acc + cur)
}

console.log(arraySum(array)) // output 10