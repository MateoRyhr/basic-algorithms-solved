// Problem: https://www.hackerrank.com/challenges/plus-minus/problem

function plusMinus(arr){
    let positive = 0,negative = 0,zero = 0
    arr.forEach(e => {
        if(e === 0){
            zero++
        } else if(e > 0){
            positive++
        } else{
            negative++
        }
    })
    positive = (positive/arr.length).toFixed(6)
    negative = (negative/arr.length).toFixed(6)
    zero = (zero/arr.length).toFixed(6)
    process.stdout.write(`${positive}\n${negative}\n${zero}`)
}

plusMinus([0,1,1,1,-1,-1])