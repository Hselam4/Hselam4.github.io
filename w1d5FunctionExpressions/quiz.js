// Create 3 objects, student1, student2, student3
// ➢ property studentId : s101, s102, s103 respectively
// ➢ property quiz answers: [1, 1, 2,4], [2, 1, 2,2], [3, 1, 3,4] respectively
// ➢push the students into an array, quiz
// ➢ write a function, gradeQuiz, that takes the quiz array and an array of correct answers, e.g., 
// [3,1,2,4] and returns an object that has properties with the names of each studentId and the value 
// of the property will be their score on the quiz (one point for each correct answer)
// ➢ expect { s101: 3, s102: 2, s103: 3 }


let student1 = {studentId:"s101","quiz answers":[1,1,2,4]};
let student2 = {studentId:"s102","quiz answers":[2,1,2,2]};
let student3 = {studentId:"s103","quiz answers":[3,1,3,4]};

let quiz = [student1,student2,student3];
let correctAnswers = [3,1,2,4];

function gradeQuiz(quiz,correctAnswers){
    let result = {};
    for(let student of quiz){
        let score = 0;
        for(let i=0;i<correctAnswers.length ;i++){
            if(student["quiz answers"][i]==correctAnswers[i])
                score++;
        }
        result[student.studentId]=score;
    }
    return result

}

function caluculateAverage(gradeReport){
    let sum = 0, count = 0;
    for(let studentId in gradeReport){
        sum+=gradeReport[studentId];
        count++;
    }
    return sum/count
}

let gradeReport = gradeQuiz(quiz,correctAnswers);
console.log("expect { s101: 3, s102: 2, s103: 3 }",gradeReport);
console.log(caluculateAverage(gradeReport))
