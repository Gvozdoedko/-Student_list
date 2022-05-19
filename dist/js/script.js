let question = +prompt("Сколько студентов учиться у Вас в группе?");
let students = doListOfStudent(question);
console.log(students);

function main() {
    do {
        let question = +prompt(`Выберите операцию: 
        1.получить самого преуспевающего студента
        2.отсортировать студентов по успеваемости
        3.посчитать среднюю оценку для каждого студента
        4.получить студентов на отчисление
        5.добавить новенького в группу`);
        switch (question) {
            case 1:
                console.log(getBestStudent(students));
                break;
            case 2:
                console.log(bubbleSort(students));
                break;
            case 3:
                console.log(addAvgMark(students));
                break;
            case 4:
                console.log(listOfDeb(students));
                break;
            case 5:
                console.log(newStudent(students));
                break;
        
            default:
                break;
        }
        
    } while (confirm('Do you want to continue?'));
}

main();




function doListOfStudent(numofstudent) {
    const student = [];

    for (let i = 0; i < numofstudent; i++) {
        let arrMark = getRandomIntInclusive(1, 12);
        student[i] = {
            name: prompt(`Enter ${i + 1} student name`),
            marks: arrMark
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

function addAvgMark(student) {
    for (let i = 0; i < question; i++) {
        let avgArrMark = student[i].marks
        student[i].avgMark = averageMark(avgArrMark);
    }
    return student;
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






function getBestStudent(students) { 
    let bestStudent = students[0];
    for (let i = 1; i < students.length; i++) {
        if (bestStudent.avgMark < students[i].avgMark)
            bestStudent = students[i];
    }
    return bestStudent;
}



function bubbleSort(arr) {
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



function listOfDeb(students) {
    let listOfDeb = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].avgMark <= 5) {
            listOfDeb[listOfDeb.length] = students[i]
        }
        
    }
    return listOfDeb;
}




function newStudent(students) {
    let oldListOfStudent = {};
    if (question = 5) {
            arrMark = getRandomIntInclusive(1, 12);
            oldListOfStudent = {
                name: prompt(`Enter new student name`),
                marks: arrMark
        }
    }
    students[students.length] = oldListOfStudent;

    return students
}
