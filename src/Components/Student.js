
import React, { useState } from 'react'

export function Student() {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [age, setAge] = useState("")
    const [qualification, setQualification] = useState("")

    const [students, setStudents] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()

        const newStudents = {
            name: name,
            phone: phone,
            age: age,
            qualification: qualification
        }

        setStudents([...students, newStudents])

        setName("")
        setPhone("")
        setAge("")
        setQualification("")
    }

    // function handleName(e) {
    //     setName(e.target.value)
    // }

    // function handlePhone(e) {
    //     setPhone(e.target.value)
    // }

    // function handleAge(e) {
    //     setAge(e.target.value)
    // }

    // function handleQualification(e) {
    //     setQualification(e.target.value)
    // }

    return (
        <div className='container'>
            <h1>Student Details</h1>

            <div className='form-content'>
                <form onSubmit={handleSubmit} className='fc' >
                    <div className='ip'>
                        <label>Name:</label>
                        <input
                            type='text'
                            name='name'
                            placeholder='Enter Name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className='ip'>
                        <label>Phone:</label>
                        <input
                            type='text'
                            name='phone'
                            placeholder='Enter Phone Number'
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>

                    <div className='ip'>
                        <label htmlFor="age">Age:</label>
                        <input
                            type='number'
                            name='age'
                            placeholder='Enter age'
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </div>

                    <div className='ip'>
                        <label htmlFor="qualification">Qualification:</label>
                        <input
                            type='text'
                            name='qualification'
                            placeholder='Enter Qualification'
                            value={qualification}
                            onChange={(e) => setQualification(e.target.value)}
                        />
                    </div>

                    <button type='submit'>Submit</button>
                </form>

            </div>

            {students.length > 0 && (
                <div className='table-content'>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Age</th>
                                <th>Qualification</th>
                            </tr>
                        </thead>

                        <tbody>
                            {students.map((student, index) => (
                                <tr key={index}>
                                    <td>{student.name}</td>
                                    <td>{student.phone}</td>
                                    <td>{student.age}</td>
                                    <td>{student.qualification}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )

}