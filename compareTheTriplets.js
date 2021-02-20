// Problem: https://www.hackerrank.com/challenges/compare-the-triplets/problem?h_r=next-challenge&h_v=zen

let alicePoints = [80,70,60]
let bobPoints = [90,60,50]

function compareTriplets(a,b){
    let points = [0,0]
    for(let i=0;i<a.length;i++){
        if(a[i] > b[i]) points[0]++
        if(a[i] < b[i]) points[1]++
    }
    return points
}

let result = compareTriplets(alicePoints,bobPoints)
console.log(result)

