// Problem: https://www.hackerrank.com/challenges/time-conversion/problem

const time = '12:52:02PM'

function timeConversion(str){
    const AMPM = str.slice(-2)
    const hh = str.slice(0,2)
    const mmYss = str.slice(2,-2)
    if(AMPM === 'AM'){
        if(hh === '12'){
            return `00${mmYss}`
        } else{
            return `${hh}${mmYss}`
        }       
    }
    else{
        if(hh !== '12'){
            return `${parseInt(hh) + 12}${mmYss}`
        }
        else{
            return `${hh}${mmYss}`
        }
    }
}

let time24 = timeConversion(time)
console.log(time24)