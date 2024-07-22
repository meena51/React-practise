import React, { useState } from 'react';

function ValidatedForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};

    if (!name) errors.name = 'Name is required';
    if (!email) errors.email = 'Email is required';
    if (!phone) errors.phone = 'Phone number is required';
    else if (!/^\d{10}$/i.test(phone)) errors.phone = 'Phone number must be 10 digits';
    if (!address) errors.address = 'Address is required';

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      // Submit the form or perform any other action
      console.log('Form submitted successfully!');
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          {errors.name && <p>{errors.name}</p>}
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          {errors.email && <p>{errors.email}</p>}
        </label>
        <br />
        <label>
          Phone:
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
          {errors.phone && <p>{errors.phone}</p>}
        </label>
        <br />
        <label>
          Address:
          <textarea value={address} onChange={(e) => setAddress(e.target.value)} />
          {errors.address && <p>{errors.address}</p>}
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ValidatedForm;
