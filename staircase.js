// Problem: https://www.hackerrank.com/challenges/staircase/problem

function printStaircase(n){
    //print a line
    for(let i=1;i<=n;i++){
        //print spaces
        for(let j=n-i;j>0;j--){
            process.stdout.write(' ')
        }
        //print #
        for(let k=1;k<=i;k++){
            process.stdout.write('#')
        }
        process.stdout.write('\n')
    }
}

printStaircase(20)