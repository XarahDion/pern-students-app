const { Router } = require('express');
const {
    getStudents,
    getStudentById,
    addStudent,
    updateStudent,
    removeStudent
} = require('./handlers');

const router = Router();

router.get('/', getStudents);
router.post('/', addStudent);
router.get('/:id', getStudentById);
router.put('/:id', updateStudent)
router.delete('/:id', removeStudent)

module.exports = router;