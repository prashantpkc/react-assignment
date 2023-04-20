import React, { useState, useEffect } from 'react'

export function Student() {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [age, setAge] = useState("")
    const [qualification, setQualification] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()
        setName("")
        setPhone("")
        setAge("")
        setQualification("")
    }



    return (
        <div>
            <h1>Student Details</h1>
            <form onSubmit={handleSubmit} >
                <div>
                    <label>Name:</label>
                    <input
                        type='text'
                        name='name'
                        placeholder='Enter Name'
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                    />
                </div>

                <div>
                    <label >Phone:</label>
                    <input
                        type='text'
                        name='phone'
                        placeholder='Enter Phone Number'
                        value={phone}
                        onChange={(e)=>setPhone(e.target.value)}

                    />
                </div>

                <div>
                    <label htmlFor="age">Age:</label>
                    <input
                        type='number'
                        name='age'
                        placeholder='Enter age'
                        value={age}
                        onChange={(e)=>setAge(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="qualification">Qualification:</label>
                    <input
                        type='text'
                        name='qualification'
                        placeholder='Enter Qualification'
                        value={qualification}
                        onChange={(e)=>setQualification(e.target.value)}
                    />
                </div>

                <button type='submit'>Submit</button>

            </form>
        </div>
    )

}
