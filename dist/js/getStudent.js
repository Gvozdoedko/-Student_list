const studentsMock = (() => {
    const generateMarksArray = (qtt, min, max) => new Array(qtt).fill(min).map(() => faker.datatype.number({ min, max }));

    const getStudent = () => ({
        name: faker.name.findName(),
        marks: generateMarksArray(8, 1, 12),
    });

    const getStudentList = qtt => new Array(qtt).fill(null).map(getStudent);

    return {
        getStudent,
        getStudentList
    };
})();