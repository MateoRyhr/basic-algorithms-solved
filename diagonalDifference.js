// Problem: https://www.hackerrank.com/challenges/diagonal-difference/problem

let arrayB = [[9,2,1],[0,2,5],[9,6,2]] //con i me muevo en filas, con j de columna
console.table(arrayB)

function diagonalDifference(ar){
    let d1 = 0
    let d2 = 0
    for(let i=0;i<ar.length;i++){
        for(let j=0;j<ar.length;j++){
            if((i-j) === 0) d1 += ar[i][j]
            if((ar.length - 1 - i) === j) d2 += ar[i][j]
        }
    }
    return Math.abs((d1-d2))
}

console.log(diagonalDifference(arrayB))