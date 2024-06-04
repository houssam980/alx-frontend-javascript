const getListStudentsIds = (listStudents) => {
    let listStudentIdss = [];
    if (!(listStudents instanceof Array)) {
        return listStudentIdss;
    }
    listStudentIdss = listStudents.map((student) => student.id);
    return listStudentIdss;
};

export default getListStudentIds;
