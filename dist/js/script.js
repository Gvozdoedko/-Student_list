
let numOfStudent = +prompt("Сколько студентов учиться у Вас в группе?");

console.log(doListOfStudent(numOfStudent));

// const question = prompt(`Выберите операцию: 
//     1.получить самого преуспевающего студента
//     2.отсортировать студентов по успеваемости
//     3.посчитать среднюю оценку для каждого студента
//     4.получить студентов на отчисление
//     5.добавить новенького в группу
//     6.повтор операции`);

// Основная функция
// function AskAQuestion() {
//     console.log(doListOfStudent());
//     const question = prompt(`Выберите операцию: 
//     1.получить самого преуспевающего студента
//     2.отсортировать студентов по успеваемости
//     3.посчитать среднюю оценку для каждого студента
//     4.получить студентов на отчисление
//     5.добавить новенького в группу
//     6.повтор операции`);
//     switch (question) {
//         case 1:
//             console.log(bestStudent());
//             break;

//         default:
//             break;
//     }
// };



// function main() {
//     let students = generateStudents(+prompt('How many students in you group?'))
//     do {


//         //code
//     } while (confirm('Do you want to continue?'));
// }

// main();




function doListOfStudent(numofstudent) {
    const student = [];

    for (let i = 0; i < numofstudent; i++) {
        student[i] = {
            name: prompt(`Enter ${i} student name`),
            marks: getRandomIntInclusive(1, 12),
            avgMark: averageMark(student.marks)
        }
    }


    return student;

}

function averageMark(marks) {
    let sumMarks;

    for (let i = 0; i < marks.length; i++) {
        sumMarks += marks[i];
    }

    let average = sumMarks / marks.length;

    return Math.floor(average);
}







function getRandomIntInclusive(min, max) {
    let arrMarks = [];
    min = Math.ceil(min);
    max = Math.floor(max);
    for (let i = 0; i < 8; i++) {
        arrMarks[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return arrMarks;
}






//     function getBestStudent(student) {  //[{name: `fdsef`, marks: [10,12,6,7,8,3,9], avgMark: 8,7}, ...]
//         let bestStudent = student[0];

//         for (let i = 0; i < student.length; i++) {
//             if (bestStudent.avgMark < student[i].avgMark) {
//                 bestStudent = student[i];
//             }
//             return bestStudent;
//         }
//     }
// console.log(getBestStudent());





