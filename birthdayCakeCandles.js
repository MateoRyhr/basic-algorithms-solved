// Problem: https://www.hackerrank.com/challenges/birthday-cake-candles/problem
let array = [3, 2, 1, 3]

function birthdayCakeCandles(candles){
    const higher = Math.max(...candles)
    let count = 0
    candles.forEach(e => {
        if(e === higher) count ++
    })
    return count
}

const response = birthdayCakeCandles(array)
console.log(response)