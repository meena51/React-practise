import React, { useState } from 'react';

function Age() {
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [age, setAge] = useState('');
    const [data, setData] = useState(null);
    const [errors, setErrors] = useState({});

    const validate = () => {
        const validationErrors = {};
        const parsedAge = parseInt(age);

        if (parsedAge < 1 || parsedAge > 120) {
            validationErrors.age = 'Age must be between 1 and 120';
        }

        return validationErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();

        if (Object.keys(validationErrors).length === 0) {
            setData({ fName, lName, age });
            setErrors({});
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="fname">
                    First Name:
                    <input type="text" value={fName} onChange={(e) => setFName(e.target.value)} />
                </label>
                <br />
                <label htmlFor="lname">
                    Last Name:
                    <input type="text" value={lName} onChange={(e) => setLName(e.target.value)} />
                </label>
                <br />
                <label htmlFor="age">
                    Age:
                    <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
            {Object.keys(errors).length !== 0 ? (
                <h1 style={{ color: 'red' }}>{errors.age}</h1>
            ) : (
                data && (
                    <div>
                        <h1>Submitted Data</h1>
                        <p>Name: {data.fName} {data.lName}</p>
                        <p>Age: {data.age}</p>
                    </div>
                )
            )}
        </div>
    );
}

export default Age;
