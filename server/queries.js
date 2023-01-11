const getStudents = 'SELECT * FROM students';
const getStudentById = 'SELECT * FROM students WHERE id::text = $1'; // $1 variable name
const checkEmail = 'SELECT * FROM students WHERE email = $1';
const addStudent = 'INSERT INTO students (id, name, email, dob, age) VALUES (uuid_generate_v4(), $1, $2, CAST($3 as DATE), EXTRACT(year FROM AGE(NOW()::DATE, $3)))';
const removeStudentById = 'DELETE FROM students WHERE id = $1';
const updateStudent = 'UPDATE students SET name = $1 WHERE id = $2';

module.exports = {
    getStudents,
    getStudentById,
    checkEmail,
    addStudent,
    updateStudent,
    removeStudentById
}