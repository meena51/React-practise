import React, { useState } from 'react'

function ControlledForm() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [submitted, setSubmitted] = useState(null)
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted({name,email})
        
    }
    return (
        <div>
            <form  onSubmit={handleSubmit}>
                <label htmlFor="name">Name :
                    <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} />
                    <br />
                    <label htmlFor="email">
                        <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                </label>
                <br />
                <button type='submit'>Submit</button>
            </form>

            {submitted &&  (
                <div>
                    <h1>Submitted Data</h1>
                    <p>Name : {submitted.name}</p>
                    <p>Email : {submitted.email}</p>
                </div>
            )}
        </div>
        
    )
}

export default ControlledForm
