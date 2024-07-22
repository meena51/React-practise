import React, { useRef, useState } from 'react'

function Formvalidation() {
    const nameref = useRef()
    const emailref =useRef()
    const [errors,setErrors] = useState({})
    const [submitted,setSubmitted] = useState(null)
    const validate = ()=>{
        const errors ={};
        const name = nameref.current.value;
        const email = emailref.current.value;
        if(!name){
            errors.name = 'Name is required'
        }
        if(!email){
            errors.email = 'Email is required'
        }
        return errors;
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const validationerrors = validate()
        if(Object.keys(validationerrors).length === 0){
            const name = nameref.current.value;
            const email = emailref.current.value;
            setSubmitted({ name, email });
            setErrors({})
        }
        else{
            setErrors(validationerrors)
        }
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:
        <input type="text" ref={nameref} />
        {errors && <p>{errors.name}</p>}
        </label>
        <br />
        <label htmlFor="">Email:
        <input type="email" ref={emailref} />
        {errors && <p>{errors.email}</p>}
        </label>
        <br />
        <button type='submit'>Submit</button>
      </form>
      {submitted && (
        <div>
            <h1>Submitted Data</h1>
            <p>Name : {submitted.name}</p>
            <p>Email : {submitted.email}</p>
        </div>
      )}
    </div>
  )
}

export default Formvalidation
