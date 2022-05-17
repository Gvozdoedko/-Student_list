
let numOfStudent = +prompt("Сколько студентов учиться у Вас в группе?");

let students = doListOfStudent(numOfStudent);
console.log(students);

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
        let arrMark = getRandomIntInclusive(1, 12);
        student[i] = {
            name: prompt(`Enter ${i} student name`),
            marks: arrMark,
            avgMark: averageMark(arrMark)
        }
    }



    return student;

}


function averageMark(arrMark) {
    let sumMarks = 0;

    for (let i = 0; i < arrMark.length - 1; i++) {
        sumMarks += arrMark[i];
    }

    let average = sumMarks / arrMark.length;

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






function getBestStudent(students) { // [{ name: 'John Doe', marks: [10, 12, 5, 7, 8, 10], avgMark: 8.7  }, ...]
    let bestStudent = students[0];
    for (let i = 1; i < students.length; i++) {
        if (bestStudent.avgMark < students[i].avgMark)
            bestStudent = students[i];
    }
    return bestStudent;
}
// console.log(getBestStudent(students));


const bubbleSort = arr => {
    for (let i = 0, endI = arr.length - 1; i < endI; i++) {
        let wasSwap = false;
        for (let j = 0, endJ = endI - i; j < endJ; j++) {
            if (arr[j].avgMark > arr[j + 1].avgMark) {
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
                wasSwap = true;
            }
        }
        if (!wasSwap) break;
    }
    let revArr = arr.reverse()
    return revArr;
};

console.log(bubbleSort(students));