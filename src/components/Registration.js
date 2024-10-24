import React, { useState } from 'react';
import './FormStyle.css'; 
const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    contact: '',
    city: '',
    dob: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const calculateAge = (dob) => {
    // Convert DOB into a Date object
    const birthDate = new Date(dob);

    // current date
    const today = new Date();

    //subtract birth year from current year
    let age = today.getFullYear() - birthDate.getFullYear();

    const isBirthdayPassed = today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

    if (!isBirthdayPassed) {
      age--;
    }
  
    return age;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const age = calculateAge(formData.dob);
    if (age < 18) {
      setError('You are not eligible to register.');
      return;
    }

    // Store the user's data in localStorage
    localStorage.setItem('user', JSON.stringify(formData));
    setError('');
    alert('Registration successful!');
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">Register</div>
        <div className="underline"></div>
      </div>
      {error && <p className="error">{error}</p>}
      <form className="inputs" onSubmit={handleSubmit}>
        <div className="input">
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            required
          />
        </div>
        <div className="input">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            required
          />
        </div>
        <div className="input">
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
        </div>
        <div className="input">
          <input
            type="text"
            name="contact"
            placeholder="Contact Number"
            onChange={handleChange}
            required
          />
        </div>
        <div className="input">
          <input
            type="text"
            name="city"
            placeholder="City"
            onChange={handleChange}
            required
          />
        </div>
        <div className="input">
          <input
            type="date"
            name="dob"
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Register</button>
      </form>
    </div>
  );
};

export default Registration;
