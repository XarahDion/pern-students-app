import { useEffect, useState } from 'react'
import EditStudent from './EditStudent';
import moment from 'moment';

const ListStudents = () => {
    const [students, setStudents] = useState([]);

    const deleteStudent = async (id)=> {
        try {
            await fetch(`http://localhost:8000/api/v1/students/${id}`, {
            method: "DELETE"
            }
            );
            setStudents(students.filter(student => student.id !== id));
        } catch (err) {
            console.error(err.message);
        }
    };

    const getStudents = async () => {
        try {
            const response = await fetch("http://localhost:8000/api/v1/students/");
            const jsonData = await response.json();
            setStudents(jsonData.data);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getStudents();
    }, []);

    return (
        <>
        <table className="table mt-5 text-center">
            <thead>
                <tr>
                    <th>Firstname</th>
                    <th>Email</th>
                    <th>Date of birth</th>
                    <th>Age</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
            {students? 
                students.map((student, index) => {
                    return (
                        <tr key={index}>
                        <td>{student.name}</td>
                        <td>{student.email}</td>
                        <td>{moment.utc(student.dob).format('YYYY-MM-DD')}</td>
                        <td>{student.age}</td>
                        <td>
                            <EditStudent student={student} key={student.id} />
                        </td>
                        <td>
                            <button 
                            className="btn btn-danger"
                            onClick={() => deleteStudent(student.id)}
                            >
                            Delete
                            </button>
                        </td>
                        </tr>
                    )
                })
            : <></>}
            </tbody>
        </table>
        </>
    )
};

export default ListStudents;