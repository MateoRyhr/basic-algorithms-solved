// Problem: https://www.hackerrank.com/challenges/grading/problem

const notas = [4,73,67,38,33]

function gradingStudents(grades){
    let gradesRounding = grades.map(g => {
        if(g < 38){
            return g
        }else if(g % 5 === 3){
            return g+2
        }else if(g % 5 === 4){
            return g+1
        }else{
            return g
        }
    })
    return gradesRounding
}

console.log(gradingStudents(notas))