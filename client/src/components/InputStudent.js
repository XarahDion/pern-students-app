import { useState } from 'react'

const InputStudent = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const body = {name, email, dob};
            await fetch("http://localhost:8000/api/v1/students/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
            });
            window.location = "/";
        } catch (err) {
            console.log(err.message)
        }
    };

    return (
        <>
            <h1 className='text-center mt-5'>Student List</h1>
            <form className='d-flex mt-5 justify-content-center' onSubmit={onSubmit}>
                <input 
                    type='text'
                    className='form-control'
                    value={name}
                    placeholder='First name'
                    onChange={(e)=> setName(e.target.value)}
                    />
                <input 
                    type='text'
                    className='form-control'
                    value={email}
                    placeholder='Email'
                    onChange={(e)=> setEmail(e.target.value)}
                />
                <input 
                    type='text'
                    className='form-control'
                    value={dob}
                    placeholder='yyyy-mm-dd'
                    onChange={(e)=> setDob(e.target.value)}
                />
                <button className='btn btn-success'>Add</button>
            </form>
        </>
    )
};

export default InputStudent;
