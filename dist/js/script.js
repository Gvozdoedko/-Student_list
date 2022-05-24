function main() {
    do {
        let question = +prompt(`Выберите операцию: 
        1.получить самого преуспевающего студента
        2.отсортировать студентов по успеваемости
        3.посчитать среднюю оценку для каждого студента
        4.получить студентов на отчисление
        5.добавить новенького в группу
        6.ввести оценку самостоятельно
        7.Добавить случайного студента`);
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
            case 6:
                questionMark = +prompt(`Какому студенту ввести оценку?`);
                console.log(urMark(students));
                break;
            case 7:
                console.log(addRandomStudent(students));
                break;

            default:
                break;
        }

    } while (confirm('Do you want to continue?'));
}

main();