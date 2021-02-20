// Problem: https://www.hackerrank.com/challenges/a-very-big-sum/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
// In Javascript this exercise is the same that simpleArraySum
let array = [2,2,2,4]

function arraySum(ar){
    return ar.reduce((acc,cur) => acc + cur)
}

console.log(arraySum(array)) // output 10