// Problem: https://www.hackerrank.com/challenges/mini-max-sum/problem

let array = [1,3,5,7,9]

function miniMaxSum(arr){
    const total = arr.reduce((acc,cur) => acc + cur)
    const min = total - Math.max(...arr)
    const max = total - Math.min(...arr)
    process.stdout.write(`${min} ${max}\n`)
}

miniMaxSum(array)
