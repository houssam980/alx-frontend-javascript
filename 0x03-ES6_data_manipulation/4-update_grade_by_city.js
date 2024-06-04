export default function updateStudentGradeByCity(array, city, grad) {
    return array
        
        .filter((item) => item.location === city)
        .map((student) => {
            
            const gradeItems = grad
                .filter((item) => item.studentId === student.id)
                .map((n) => n.grade)[0];
            const grd = gradeItems || 'N/A';
            return { ...student, grd };
        });
}
