const pool = require('./db');
const queries = require('./queries');

const getStudents = async (req, res) => {
    try {
        pool.query(queries.getStudents, (error, results) => {
            if (error) throw error;
            res.status(200).json({ status: 200, data: results.rows })
        })
    } catch (err) {
        res.status(500).json({ status: 500, message: "Not found." });
    } 
};

const getStudentById = async(req, res) => {
    const id = req.params.id;
    try {
        pool.query(queries.getStudentById, [id], (error, results) => {
            if (error) throw error;
            if (!results.rows.length) {
                res.status(404).json({ status: 404, data: id, message: "Student does not exist." });
            }
            res.status(200).json({ status: 200, data: results.rows })
        })
    } catch (err) {
        res.status(500).json({ status: 500, data: id, message: "Not found." });
    } 
};

const addStudent = async (req, res) => {
    const { name, email, dob } = req.body;
    try {
        pool.query(queries.checkEmail, [email], (error, results) => {
            if (results.rows.length) {
                res.status(404).json({ status: 404, data: id, message: "Email already taken." });
            }
            pool.query(queries.addStudent, [name, email, dob], (error, results) => {
                if (error) throw error;
                res.status(201).json({ status: 201, data: req.body, message: "Success." })
            })
        });
    } catch (err) {
        res.status(500).json({ status: 500, data: req.body, message: "Cannot add student." });
    }
};

const removeStudent = async (req, res) => {
    const id = req.params.id;
    try {
        pool.query(queries.getStudentById, [id], (error, results) => {
            if (error) throw error;
            if (!results.rows.length) {
                res.status(404).json({ status: 404, data: id, message: "Student does not exist." });
            }
            pool.query(queries.removeStudentById, [id], (error, results) => {
                if (error) throw error;
                res.status(201).json({ status: 201, data: id, message: "Successfully deleted." })
            })
            
        })
    } catch (err) {
        res.status(500).json({ status: 500, data: id, message: "Cannot remove student." });
    }
};

const updateStudent = async (req, res) => {
    const id = req.params.id;
    const { name } = req.body;
    try {
        pool.query(queries.getStudentById, [id], (error, results) => {
            if (error) throw error;
            if (!results.rows.length) {
                res.status(404).json({ status: 404, data: id, message: "Student does not exist." });
                }
            pool.query(queries.updateStudent, [name, id], (error, results) => {
                if (error) throw error;
                res.status(201).json({ status: 200, data: name, id, message: "Successfully updated." })
            })
        })
    } catch (err) {
        res.status(500).json({ status: 500, data: id, message: "Cannot update student." });
    }
};

module.exports = {
    getStudents,
    getStudentById,
    addStudent,
    removeStudent,
    updateStudent
};