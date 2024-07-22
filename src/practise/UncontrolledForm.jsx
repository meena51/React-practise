import React, { useRef, useState } from 'react'

function UncontrolledForm() {
    const nameref = useRef();
    const emailref = useRef();
    const [submitted, setSubmitted] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:
                    <input type="text" ref={nameref} /></label>
                <br />
                <label htmlFor="email">Email:
                    <input type="email" ref={emailref} /></label>
                <button type='submit'>Submit</button>
            </form>
            {submitted && (
                <div>
                    <h1>Submitted Data</h1>
                    <p>Name:{nameref.current.value}</p>
                    <p>Email: {emailref.current.value}</p>
                </div>
            )}
        </div>
    )
}

export default UncontrolledForm
