// Problem: https://www.hackerrank.com/challenges/grading/problem

const notas = [84,39,20,82,71,93]

function gradingStudents(grades){
    let gradesRounding = grades.map(g => {
        if(g < 40){
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